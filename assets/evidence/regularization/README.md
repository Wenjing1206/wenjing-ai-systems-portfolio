# IN6242 Part C — Neural Network Regularization

`run-summary.json` transcribes aggregate validation and test results from the original experiment. The source run used NumPy 2.5.4, scikit-learn 1.9.1, and PyTorch 2.14.1 on CPU. The portfolio’s standalone `part_c_selection.py` preserves the selection and test procedure, with plotting and weight export omitted.

From a clean directory with Python, NumPy, scikit-learn, and PyTorch installed:

```sh
# English: Run the selection procedure from a clean directory.
# 中文：在空目录中运行独立的选型程序。
python path/to/part_c_selection.py
```

Run results may vary with the software environment. Each clean run saves the validation selection before testing and reports the held-out confusion matrix.
