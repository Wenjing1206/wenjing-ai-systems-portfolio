# English: Standalone adaptation of the IN6242 Part C selection experiment. Plotting and checkpoint export are omitted.
# 中文：IN6242 Part C 原实验的独立运行版本，保留选型与测试步骤，省去画图及模型权重导出。
from copy import deepcopy
from itertools import product
import json
from pathlib import Path
import random

import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
import torch
from torch import nn

SEED = 42


def fit(config, x_train, y_train, x_val, y_val):
    # English: Start each candidate from the same random state.
    # 中文：所有配置使用相同随机种子和初始权重。
    random.seed(SEED)
    np.random.seed(SEED)
    torch.manual_seed(SEED)
    model = nn.Sequential(
        nn.Linear(30, 256), nn.ReLU(), nn.Dropout(config["dropout"]),
        nn.Linear(256, 256), nn.ReLU(), nn.Dropout(config["dropout"]),
        nn.Linear(256, 1),
    )
    optimizer = torch.optim.Adam(model.parameters(), lr=.001, weight_decay=config["weight_decay"])
    criterion = nn.BCEWithLogitsLoss()
    best_loss, best_state, best_epoch, waiting = float("inf"), None, 0, 0
    for epoch in range(1, 301):
        model.train()
        optimizer.zero_grad()
        loss = criterion(model(x_train), y_train)
        loss.backward()
        optimizer.step()
        model.eval()
        with torch.no_grad():
            validation_loss = criterion(model(x_val), y_val).item()
        if not np.isfinite(validation_loss):
            raise RuntimeError("Non-finite validation loss")
        if validation_loss < best_loss:
            best_loss = validation_loss
            best_state = deepcopy(model.state_dict())
            best_epoch = epoch
            waiting = 0
        else:
            waiting += 1
        if config["early_stopping"] and waiting >= 20:
            break
    # English: Return the validation-best checkpoint only for early-stopping runs.
    # 中文：只有早停组恢复验证集最优权重，其他实验保留末轮权重。
    if config["early_stopping"]:
        model.load_state_dict(best_state)
        validation_loss = best_loss
    return model, {
        "config": config,
        "best_epoch": best_epoch,
        "epochs_run": epoch,
        "returned_epoch": best_epoch if config["early_stopping"] else epoch,
        "validation_bce": validation_loss,
    }


def tensor(values):
    return torch.tensor(values, dtype=torch.float32)


def main():
    selection_file = Path("selection_before_test.json")
    if selection_file.exists():
        raise FileExistsError("Run in a clean directory to avoid overwriting the selection record.")
    torch.set_num_threads(1)
    torch.use_deterministic_algorithms(True)
    data = load_breast_cancer()
    x_pool, x_test, y_pool, y_test = train_test_split(
        data.data, data.target, test_size=.2, random_state=SEED, stratify=data.target,
    )
    x_train, x_val, y_train, y_val = train_test_split(
        x_pool, y_pool, test_size=.25, random_state=SEED, stratify=y_pool,
    )
    # English: Compute scaling on 341 training rows and use the first 60 for updates.
    # 中文：用全部 341 条训练数据拟合标准化参数，前 60 条用于更新权重。
    mean, std = x_train.mean(0), x_train.std(0)
    assert (len(x_train), len(x_val), len(x_test)) == (341, 114, 114)
    fit_inputs = (
        tensor(((x_train - mean) / std)[:60]),
        tensor(y_train[:60]).reshape(-1, 1),
        tensor((x_val - mean) / std),
        tensor(y_val).reshape(-1, 1),
    )
    runs = []
    for l2, dropout, early in product([False, True], repeat=3):
        config = {
            "weight_decay": .01 if l2 else 0.,
            "dropout": .5 if dropout else 0.,
            "early_stopping": early,
        }
        _, result = fit(config, *fit_inputs)
        runs.append(result)
    chosen = min(runs, key=lambda result: result["validation_bce"])
    selection_file.write_text(json.dumps({"chosen": chosen, "runs": runs}, indent=2), encoding="utf-8")
    model, retrained = fit(chosen["config"], *fit_inputs)
    assert abs(retrained["validation_bce"] - chosen["validation_bce"]) < 1e-8
    model.eval()
    with torch.no_grad():
        predictions = model(tensor((x_test - mean) / std)).squeeze(1).numpy() >= 0
    confusion = [
        [int(np.sum((y_test == actual) & (predictions == predicted))) for predicted in [0, 1]]
        for actual in [0, 1]
    ]
    print(json.dumps({
        "n": int(len(y_test)),
        "correct": int(np.sum(predictions == y_test)),
        "label_order": ["malignant", "benign"],
        "confusion_matrix_rows_actual_columns_predicted": confusion,
    }, indent=2))


if __name__ == "__main__":
    main()
