// English: Project content shared by home cards and case-study pages.
// 中文：集中维护所有首页卡片和详情页的项目内容。
window.PROJECTS = [
  {
    "id": "enterprise-ai-auditing",
    "title": "Enterprise AI Agent & Intelligent Auditing System",
    "subtitle": "Structuring report pre-review with agents, retrieval and logic checks",
    "featured": true,
    "categories": [
      "ai"
    ],
    "role": "AI Agent Development & Data Governance Intern",
    "type": "PetroChina Planning & Engineering Institute",
    "summary": "Configured a three-stage report pre-review workflow during my PetroChina internship: identify report elements, check logic, and generate review suggestions grounded in a domain knowledge base.",
    "context": "Enterprise reports must be reviewed against regulations, industry standards, historical reports, and internal business logic. Manual review is repetitive, slow, and difficult to keep consistent.",
    "problem": "A pure LLM solution would be difficult to audit and prone to unsupported conclusions. The product needed a visible evidence chain, task decomposition, and clear escalation to expert reviewers.",
    "built": [
      "Translated the review task into element identification, logic checking and review-suggestion generation stages.",
      "Configured agent prompts, workflow inputs and outputs, model settings and knowledge retrieval in the enterprise AI platform.",
      "Organized regulations, standards and historical reports as knowledge sources for retrieval-grounded review.",
      "Inspected intermediate node outputs and bad cases to locate extraction, retrieval and generation errors."
    ],
    "process": [
      "Source documents",
      "Element extraction agent",
      "Evidence retrieval",
      "Logic + rule validation",
      "Opinion generation",
      "Human review"
    ],
    "tech": [
      "AI Agents",
      "RAG",
      "Prompt Engineering",
      "Workflow Orchestration",
      "Knowledge Base",
      "Error Analysis"
    ],
    "results": [
      "Configured a staged AI workflow with inspectable intermediate outputs.",
      "Connected report review to domain knowledge retrieval and iterative bad-case review."
    ],
    "learned": "A useful review assistant needs clear intermediate outputs: without them, a wrong suggestion is difficult to trace back to its source.",
    "links": [],
    "analysisQuestion": "Which parts of enterprise report review can be checked consistently by rules, and which require retrieved evidence or expert judgment?",
    "dataInputs": [
      "Reports for pre-review",
      "Regulations and industry standards",
      "Historical reports",
      "Workflow node inputs and outputs"
    ],
    "analysisProcess": [
      {
        "title": "Element identification",
        "body": "Configured agent prompts and input/output fields to surface report elements needed for downstream checks."
      },
      {
        "title": "Logic checking with retrieved evidence",
        "body": "Organized regulations, industry standards and historical reports as retrieval sources. Configured model settings and connected retrieved context to logic checks."
      },
      {
        "title": "Draft comments for human review",
        "body": "Passed the structured findings to the comment-generation stage. Reviewers could inspect the intermediate node outputs and review the draft suggestions."
      }
    ],
    "analysisOutcome": "Inspect the stage that introduced the error before changing prompts or retrieval configuration.",
    "productOutcome": "A report pre-review workflow designed to support reviewers with structured elements, checks and draft suggestions.",
    "limitations": "The implementation ran in an enterprise AI platform. Internal workflow exports, reports, and aggregate evaluation logs are private.",
    "period": "Sep 2025 – Jun 2026",
    "keyContribution": "Configured a three-stage, retrieval-grounded report pre-review workflow.",
    "objective": "Give reviewers draft checks and comments with enough intermediate evidence to trace a finding back to the report or knowledge source.",
    "architectureLabel": "Conceptual workflow based on the configured pre-review stages",
    "challenge": "When a draft comment looked wrong, I inspected the upstream output before editing prompts. A missing report element, a weak retrieval result, and an unsupported conclusion called for different fixes.",
    "example": {
      "language": "Text",
      "title": "Bad-case review checklist",
      "note": "Illustrative checklist. The internal inputs, outputs and prompts are private.",
      "code": "INPUT       Report section and check under review\nEXTRACTION  Is the required field present and correctly mapped?\nRETRIEVAL   Does the source passage support the check?\nGENERATION  Does the draft cite the relevant evidence?\nREVIEW      Flag the first stage that introduced the issue."
    },
    "nextSteps": "Create reviewer-labeled regression cases for missing fields, weak retrieval and unsupported draft comments."
  },
  {
    "id": "shopping-copilot",
    "title": "Conversational Shopping Copilot & Recommendation Optimization",
    "subtitle": "Keeping shopping preferences consistent across a changing conversation",
    "featured": true,
    "categories": [
      "ai",
      "product"
    ],
    "role": "Conversation State Management / AI Agent Design · Team project",
    "type": "TikTok TechJam 2026",
    "summary": "Owned conversation state management in a team shopping copilot: structured user constraints, resolved preference changes, and supplied state signals for clarification and reranking.",
    "context": "E-commerce search breaks when a user is vague, changes priorities, or rejects a previous preference. The challenge required an agent to find a hidden target product within ten turns across Buying, Browsing, Intent Override, and Boundary scenarios.",
    "problem": "The system needed to preserve useful context without letting stale constraints poison later recommendations. It also had to expose evaluator-valid output and remain useful when semantic resolution was unavailable.",
    "built": [
      "Represented budget, size, brand and usage needs as structured conversation constraints rather than repeatedly interpreting the entire chat.",
      "Handled preference overrides, exclusions and no-preference replies so outdated requirements would not continue filtering recommendations.",
      "Used confidence and conversation stagnation signals to support clarification and next-action decisions.",
      "Reviewed paraphrases, short replies, misspellings and vague requests to diagnose state and constraint failures."
    ],
    "process": [
      "User message",
      "Intent + constraint extraction",
      "Dialogue state update",
      "Hybrid retrieval",
      "Constraint-aware reranking",
      "Clarify or recommend"
    ],
    "tech": [
      "Python",
      "LLM",
      "BM25",
      "Embeddings",
      "Information Retrieval",
      "State Management",
      "Reranking",
      "Evaluation"
    ],
    "results": [
      "Delivered the conversation-state module and its structured handoff to retrieval and ranking.",
      "Used HitRate@K to measure target coverage, MRR to measure rank, and MTTC to track turns to completion in the team evaluation.",
      "Reviewed override and ambiguous-input cases as regression scenarios. Evaluation metrics are described at the team level."
    ],
    "learned": "Recommendation failures often start before ranking: a stale budget or misread size changes which products can be considered.",
    "links": [],
    "analysisQuestion": "How can conversation data reveal when the agent should clarify, retrieve, rerank, or recommend?",
    "dataInputs": [
      "50,000-product frozen catalog",
      "200 labeled public sessions",
      "Turn-level user messages and agent outputs",
      "Scenario labels: Buying, Browsing, Intent Override, Boundary"
    ],
    "analysisProcess": [
      {
        "title": "Track constraints across turns",
        "body": "Represent hard constraints, preferences, exclusions and no-preference replies as state. Budget, size, brand and intended use can update independently."
      },
      {
        "title": "Resolve overrides and decide what to ask",
        "body": "Replace the affected constraint when the user changes it while carrying forward unrelated requirements. Confidence, missing constraints and repeated recommendations informed clarification."
      },
      {
        "title": "Supply state to retrieval and ranking",
        "body": "The team combined lexical and embedding retrieval. The state module supplied structured constraints for local reranking and candidate-level diagnostics. I examined the reranking behavior on the top 100 candidates."
      },
      {
        "title": "Test difficult dialogs",
        "body": "Reviewed paraphrases, short replies, misspellings and vague requests. Inspected low-ranked examples and separated state errors from retrieval and tie-breaking problems."
      }
    ],
    "analysisOutcome": "When a user changes a requirement, update the affected state before retrieval. When the request remains ambiguous, clarify the missing constraint.",
    "productOutcome": "Contributed the Conversation State Management module and its interfaces to the team shopping copilot.",
    "limitations": "The team repository is private. Retrieval, ranking and end-to-end evaluation were shared team work. The benchmark used a fixed catalog and challenge scenarios.",
    "period": "Aug 2026",
    "keyContribution": "Owned conversation state and preference overrides for a team recommendation system.",
    "objective": "Carry valid preferences across a multi-turn conversation, apply explicit updates, and decide when missing information warrants clarification.",
    "architectureLabel": "Team pipeline with the conversation-state handoff",
    "challenge": "A size phrase such as “up to 30mm” was misread as a price ceiling in one audit. Checking the parsed field first showed where the error entered before it affected the candidate ranking.",
    "example": {
      "language": "JSON",
      "title": "Preference override in a two-turn conversation",
      "note": "Illustrative state snapshot written for this case study.",
      "code": "{\n  \"before\": { \"budget_max\": 120, \"brand\": \"Brand A\" },\n  \"message\": \"Actually, up to 150 is fine.\",\n  \"after\":  { \"budget_max\": 150, \"brand\": \"Brand A\" }\n}"
    },
    "nextSteps": "Add per-scenario regression thresholds and compare rank movement before and after individual state-policy changes."
  },
  {
    "id": "carbon-data-platform",
    "title": "Carbon Data Governance & Analytics Platform",
    "subtitle": "From fragmented registry exports to 378 governed project records",
    "featured": true,
    "categories": [
      "governance",
      "analytics"
    ],
    "role": "Data Governance Intern",
    "type": "PetroChina Planning & Engineering Institute",
    "summary": "Consolidated carbon-project data from CCER, VCS and Gold Standard using registry downloads, manual collection and project documents; cleaned the material into 378 project records.",
    "context": "Carbon-project records combine inconsistent fields, market data, methodologies, policies, and unstructured project descriptions across multiple mechanisms.",
    "problem": "Without common definitions and quality checks, analytics cannot reliably support project monitoring or market decisions.",
    "built": [
      "Collected project information through Excel/CSV downloads, website review, project-detail pages and PDF reports.",
      "Aligned inconsistent source fields and organized project, policy and methodology information for comparison.",
      "Cleaned and checked the consolidated records, resolving discrepancies through source review.",
      "Prepared governed project information for database queries and BI exploration."
    ],
    "process": [
      "Registry exports and documents",
      "Field mapping",
      "Standardization and source checks",
      "Project and methodology table",
      "ECharts exploration"
    ],
    "tech": [
      "Excel",
      "ETL",
      "Data Standardization",
      "Data Quality",
      "ECharts"
    ],
    "results": [
      "Consolidated the available source material into 378 governed project records.",
      "Organized cross-registry information into a more consistent basis for project lookup and comparison."
    ],
    "learned": "Cross-source governance starts with agreeing what a field means. Matching column names alone does not make records comparable.",
    "links": [
      {
        "label": "Verra VCS Registry",
        "url": "https://registry.verra.org/app/search/VCS/All%20Projects"
      },
      {
        "label": "Gold Standard Registry",
        "url": "https://www.goldstandard.org/impact-registry"
      },
      {
        "label": "CCER Registry",
        "url": "https://ccer.cets.org.cn/projectPublicity/projectPublicityList"
      }
    ],
    "analysisQuestion": "How can fragmented carbon-project records become consistent enough for lifecycle monitoring and market analysis?",
    "dataInputs": [
      "CCER project information",
      "VCS registry records filtered to China",
      "Gold Standard issuance records filtered to China",
      "Downloaded spreadsheets, project pages and PDF reports"
    ],
    "analysisProcess": [
      {
        "title": "Collect registry material",
        "body": "Used Verra VCS, Gold Standard and CCER. Combined downloadable Excel/CSV exports with manual review of registry pages, project-detail pages and PDFs."
      },
      {
        "title": "Map fields and harmonize values",
        "body": "Aligned source-specific labels in a shared schema. Organized project details and methodology references so each record could be reviewed in context."
      },
      {
        "title": "Check completeness and consistency",
        "body": "Reviewed missing, duplicate and unusual values against registry listings or underlying documents. Kept source context available during reconciliation."
      },
      {
        "title": "Make the records usable in analysis",
        "body": "Prepared the consolidated project information for lookup and carbon-asset BI exploration. Used ECharts to prototype views for carbon-asset benefits and trading potential."
      }
    ],
    "analysisOutcome": "Resolve source inconsistencies before aggregating projects or interpreting regional and mechanism-level patterns.",
    "productOutcome": "A consolidated project-data foundation supporting carbon-project lookup and analysis.",
    "limitations": "The governed table and internal BI assets are private. Collection combined exports and manual extraction; the public evidence consists of the method and final record count.",
    "period": "Sep 2025 – Jun 2026",
    "keyContribution": "Standardized, checked, and consolidated 378 project records across three registry sources.",
    "objective": "Create a consistent project table that supports comparison across registries and makes it possible to trace discrepancies back to the source.",
    "architectureLabel": "Registry-to-analysis data flow",
    "challenge": "The Gold Standard starting view is an issuance list. Treating every issuance as a project can inflate project counts. Review registry grain and project identity before joining or aggregating records.",
    "example": {
      "language": "Text",
      "title": "Example mapping fields",
      "note": "Illustrative field map. Labels and values are examples for the public case study.",
      "code": "registry_name    VCS | Gold Standard | CCER\nproject_id       Identifier in the source registry\nmethodology      Source methodology reference\nsource_ref       Registry listing or supporting document"
    },
    "nextSteps": "Document source snapshots, unique-key rules, and row-level validation outcomes for repeatable refreshes."
  },
  {
    "id": "kze-marketing",
    "title": "Creator Analytics & Partnership Decision Framework",
    "subtitle": "Comparing creators beyond follower count",
    "categories": [
      "analytics"
    ],
    "role": "Data Analyst Intern",
    "type": "KZE Group LLC",
    "summary": "Analyzed TikTok creator reach, engagement and posting activity across follower segments, and built a weighted prioritization framework to support partnership outreach.",
    "context": "Creator decisions combined inconsistent audience, content, and campaign metrics.",
    "problem": "The team needed comparable features and a decision framework rather than a spreadsheet of raw counts.",
    "built": [
      "Compared video reach, engagement rates and posting activity across follower segments to identify potential partnership candidates.",
      "Developed a weighted scoring framework combining content performance and partnership accessibility.",
      "Structured partnership analysis around outreach, response, qualification and collaboration stages to locate potential conversion bottlenecks."
    ],
    "process": [
      "Segment by follower count",
      "Compare reach and engagement",
      "Score performance and accessibility",
      "Review outreach funnel"
    ],
    "tech": [
      "Creator Analytics",
      "Segmentation",
      "Weighted Scoring",
      "Funnel Analysis"
    ],
    "results": [
      "Produced a creator-prioritization framework to support outreach decisions.",
      "Connected creator performance measures with partnership accessibility and funnel stages."
    ],
    "learned": "A strong creator profile is only one input to a partnership decision; reachability and progression through outreach also matter.",
    "links": [],
    "analysisQuestion": "Which creator and engagement patterns best support influencer selection and campaign allocation?",
    "dataInputs": [
      "Creator profiles and follower segments",
      "Video reach, engagement and posting activity",
      "Partnership accessibility and outreach-stage information"
    ],
    "analysisProcess": [
      {
        "title": "Compare performance",
        "body": "Examine reach, engagement and activity within follower segments."
      },
      {
        "title": "Prioritize candidates",
        "body": "Combine performance and accessibility criteria in an explicit weighted framework."
      },
      {
        "title": "Examine the partnership journey",
        "body": "Use outreach, response, qualification and collaboration stages to frame where candidates stop progressing."
      }
    ],
    "analysisOutcome": "Use comparable creator metrics and accessibility criteria to decide whom to contact first.",
    "productOutcome": "A structured approach to creator selection and partnership analysis.",
    "limitations": "Creator-level data, scoring weights, and conversion totals are private. Funnel interpretation depends on complete outreach history.",
    "featured": true,
    "period": "Jun 2024 – Sep 2024",
    "keyContribution": "Developed a weighted creator score and mapped the four-stage partnership funnel.",
    "objective": "Compare creators within meaningful follower groups and give the outreach team a consistent way to prioritize prospects.",
    "architectureLabel": "Conceptual scoring and partnership funnel",
    "challenge": "Raw follower count favors larger accounts. Comparing within follower segments and including partnership accessibility made the outreach order better reflect the decision the team needed to make.",
    "example": {
      "language": "Text",
      "title": "Partnership funnel stages",
      "note": "Stage sequence only. Internship conversion counts and weights are private.",
      "code": "Outreach → Response → Qualification → Collaboration\nStage conversion = progressed creators / eligible creators at prior stage"
    },
    "nextSteps": "Record stage timestamps and review score calibration once enough prospects have reached collaboration."
  },
  {
    "id": "tabular-classification",
    "title": "Applied Machine Learning & Predictive Analytics",
    "subtitle": "When a higher ranking score does not mean a better fixed-threshold decision",
    "featured": false,
    "categories": [
      "ml"
    ],
    "role": "Experiment implementation and analysis · Individual coursework",
    "type": "NTU IN6227 · Data Mining",
    "summary": "Compared Logistic Regression and Random Forest on 31,109 labelled training rows and 13,333 held-out test rows, using fold-specific preprocessing and Average Precision for model selection.",
    "context": "The binary classification dataset contains approximately 24% positive labels, making accuracy alone an incomplete measure of model usefulness.",
    "problem": "Model selection had to preserve the held-out test set and distinguish ranking performance from precision and recall at a fixed threshold.",
    "built": [
      "Fit imputation, categorical encoding and scaling inside cross-validation pipelines to avoid preprocessing leakage.",
      "Compared both models using identical stratified three-fold splits and selected hyperparameters by validation Average Precision.",
      "Recorded the model-selection decision before loading test data, then evaluated fixed models at threshold 0.5.",
      "Recomputed reported metrics from saved predictions with an independent verification script."
    ],
    "process": [
      "Inspect training data",
      "Fit CV pipelines",
      "Select by AP",
      "Evaluate held-out data",
      "Verify metrics"
    ],
    "tech": [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Logistic Regression",
      "Random Forest",
      "Stratified Cross-validation"
    ],
    "dataInputs": [
      "31,109 labelled training rows",
      "13,333 labelled test rows",
      "15 numerical and categorical features"
    ],
    "analysisQuestion": "Does a validation-selected Random Forest offer a meaningful advantage over Logistic Regression on the held-out data?",
    "analysisProcess": [
      {
        "title": "Protect validation",
        "body": "Keep the supplied test set separate and fit preprocessing inside each training fold."
      },
      {
        "title": "Select consistently",
        "body": "Use the same stratified folds and validation Average Precision for both model families."
      },
      {
        "title": "Compare ranking and decisions",
        "body": "Evaluate AP and ROC-AUC alongside precision, recall and F1 at the predefined 0.5 threshold."
      },
      {
        "title": "Quantify the gap",
        "body": "Use a paired stratified bootstrap to examine uncertainty in the test AP difference."
      }
    ],
    "results": [
      "Random Forest test AP: 0.7084; Logistic Regression test AP: 0.7023.",
      "The AP difference was 0.0061 with a 95% bootstrap interval of [-0.0015, 0.0128], which does not establish a clear ranking advantage.",
      "Logistic Regression had higher F1 at threshold 0.5: 0.6295 versus 0.6242."
    ],
    "analysisOutcome": "The CV criterion selected Random Forest, but the test results support a cautious comparison rather than declaring it uniformly better.",
    "productOutcome": "A reproducible experiment with saved selection records, metrics, plots and independent metric verification.",
    "limitations": "Feature timing and entity identifiers are unavailable. The results do not establish deployment validity; the bootstrap interval is conditional on the fitted models.",
    "learned": "Choosing the primary metric determines what 'best model' means. Ranking quality and fixed-threshold decisions can favor different models.",
    "links": [
      {
        "label": "Code, results and methodology",
        "url": "https://github.com/Wenjing1206/in6227-assignment-1"
      }
    ],
    "period": "2026 · NTU coursework",
    "keyContribution": "Reproduced held-out metrics from saved predictions and quantified uncertainty in the AP difference.",
    "objective": "Compare ranking quality and fixed-threshold decisions with the same splits, metric definitions and held-out evaluation.",
    "architectureLabel": "Model selection and held-out evaluation flow",
    "challenge": "A higher ranking metric can coexist with lower F1 at a chosen decision threshold. Evaluate intended use before interpreting a small AP difference.",
    "evidenceTable": {
      "caption": "Held-out results for both fitted models",
      "headings": [
        "Model",
        "Average precision",
        "F1 at 0.5"
      ],
      "rows": [
        [
          "Logistic Regression",
          "0.7023",
          "0.6295"
        ],
        [
          "Random Forest",
          "0.7084",
          "0.6242"
        ]
      ]
    },
    "nextSteps": "Review the choice of operating threshold against a documented operational cost or error budget.",
    "example": {
      "language": "Python",
      "title": "Shared cross-validation splits and model selection",
      "note": "Excerpt from the public experiment source. Both model families use the same fold list.",
      "code": "cv = StratifiedKFold(n_splits=3, shuffle=True, random_state=SEED)\nfolds = list(cv.split(x_train, y_train))\n\nsearch = GridSearchCV(\n    make_pipeline(numeric, categorical, name), grid,\n    scoring={\"ap\": \"average_precision\", \"roc_auc\": \"roc_auc\", \"f1\": \"f1\"},\n    refit=\"ap\", cv=folds, n_jobs=args.jobs, error_score=\"raise\", return_train_score=True,\n)"
    }
  },
  {
    "id": "breast-tumor-classification",
    "title": "Breast Tumor Classification & Neural Network Optimization",
    "type": "NTU IN6242 · Deep Learning Foundations",
    "period": "Oct 2026",
    "categories": [
      "ml",
      "research"
    ],
    "role": "Model implementation and experimental comparison · Coursework",
    "summary": "Compared a PyTorch binary-classification baseline with L2 regularization, Dropout, and Early Stopping on 569 samples with 30 diagnostic features.",
    "keyContribution": "Built a leakage-aware experiment to compare regularization and generalization.",
    "context": "The Wisconsin Diagnostic Breast Cancer dataset is a small tabular classification dataset. A network can improve on the training set while losing performance on held-out samples.",
    "problem": "Separate improvements in generalization from effects caused by preprocessing or a favorable split.",
    "objective": "Compare baseline, L2, Dropout, and Early Stopping with consistent data partitions and evaluation rules.",
    "dataInputs": [
      "569 samples",
      "30 diagnostic features",
      "Binary benign and malignant labels"
    ],
    "built": [
      "Implemented a multilayer binary classifier in PyTorch using ReLU, binary cross-entropy and Adam.",
      "Applied stratified splitting and fit the feature scaler on the training partition.",
      "Designed controlled comparisons for L2 regularization, Dropout, and Early Stopping."
    ],
    "process": [
      "Stratified splits",
      "Training-only scaling",
      "Baseline and variants",
      "Validation trajectories",
      "Held-out comparison"
    ],
    "tech": [
      "Python",
      "PyTorch",
      "Scikit-learn",
      "NumPy",
      "Matplotlib"
    ],
    "analysisProcess": [
      {
        "title": "Prevent preprocessing leakage",
        "body": "Split the data before fitting the standardization transform and carry the training-derived transform to the held-out partitions."
      },
      {
        "title": "Change one regularization strategy at a time",
        "body": "Train a common baseline and compare it with L2, Dropout, and validation-based Early Stopping."
      },
      {
        "title": "Examine generalization",
        "body": "Compare training and validation loss behavior alongside held-out classification performance to identify overfitting."
      }
    ],
    "challenge": "A small dataset makes results sensitive to split composition. Stratification helps preserve the class balance, and controlled variants make the source of a change easier to interpret.",
    "results": [
      "Completed the baseline and three regularization comparisons on the same diagnostic dataset."
    ],
    "productOutcome": "An academic comparison of regularization strategies with a reproducible evaluation design.",
    "limitations": "Exact scores and training curves are not included in the public materials. The benchmark study does not evaluate clinical use.",
    "nextSteps": "Publish experiment logs and compare performance across multiple seeds when the original materials are available.",
    "links": [],
    "example": {
      "language": "Text",
      "title": "Regularization experiment design",
      "note": "Conceptual experiment matrix based on the four coursework conditions.",
      "code": "Baseline        Shared model and fixed training budget\nL2              Add a weight penalty\nDropout         Apply dropout during training\nEarly Stopping  Monitor validation loss for stopping"
    }
  },
  {
    "id": "internship-application-management",
    "title": "Internship Application Management System",
    "type": "NTU · Enterprise Application Development",
    "period": "Nov 2026",
    "categories": [
      "engineering"
    ],
    "role": "Full-stack implementation · Individual coursework",
    "summary": "Built an account-scoped internship tracker with Spring Boot, MySQL and Thymeleaf, covering registration, seven application statuses, filtering, and a dashboard.",
    "keyContribution": "Implemented account isolation at the service and repository boundary and verified it through integration tests.",
    "context": "Internship applications span companies, deadlines and changing stages. Users need persistent, searchable records tied to their accounts.",
    "problem": "Support the application lifecycle while making sure one user cannot read or modify another user’s records.",
    "objective": "Deliver registration, login, application CRUD, seven statuses, search, filtering, dashboard, persistence, and logout with account isolation.",
    "dataInputs": [
      "User accounts and unique email",
      "Application records with owner, company and status",
      "Dashboard counts derived from an account’s records"
    ],
    "built": [
      "Designed the Spring MVC flow with controllers, services, repositories and Thymeleaf templates.",
      "Configured Spring Security and implemented owner-scoped application access.",
      "Defined the MySQL schema with Flyway and wrote service and integration tests."
    ],
    "process": [
      "Thymeleaf and Bootstrap",
      "Spring MVC controllers",
      "Services and security",
      "JPA repositories",
      "MySQL and Flyway"
    ],
    "tech": [
      "Java 21",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "MySQL",
      "Thymeleaf",
      "Bootstrap",
      "Flyway"
    ],
    "analysisProcess": [
      {
        "title": "Model the relationship",
        "body": "A user can own multiple internship applications. Each application row refers to one user, and the dashboard derives counts from the signed-in user’s records."
      },
      {
        "title": "Enforce ownership during access",
        "body": "The service resolves the signed-in user and retrieves application records by ID and owner. List, search, and dashboard operations are also scoped to the owner."
      },
      {
        "title": "Verify across the request lifecycle",
        "body": "Integration tests exercise registration, authentication, account isolation and application flows. Unit tests exercise the service behavior used by controllers."
      }
    ],
    "example": {
      "language": "Text",
      "title": "Ownership lookup and database relationship",
      "note": "Repository method from the project, followed by a simplified ERD.",
      "code": "Optional<InternshipApplication> findByIdAndUserId(Long id, Long userId);\n\napp_users (id PK)   1 ─────── *   internship_applications (id PK, user_id FK)"
    },
    "challenge": "Checking authentication alone cannot establish ownership of a requested application. Scoping lookup by both application ID and owner keeps that decision on the backend.",
    "results": [
      "Delivered the personal tracker with seven statuses, account isolation, persistent records and a dashboard.",
      "50 tests passed in the documented project test run, including 35 integration tests."
    ],
    "productOutcome": "A single place to update application status, retrieve past records and see the current pipeline.",
    "limitations": "The original source and live demo are not linked publicly. The project was scoped to a personal application tracker.",
    "nextSteps": "Document the tested request flows and add a shareable demo dataset if the project is published.",
    "links": []
  },
  {
    "id": "association-rule-benchmark",
    "title": "Association Rule Mining & Algorithm Benchmarking",
    "type": "NTU IN6227 · Data Mining",
    "period": "2026 · NTU coursework",
    "categories": [
      "ml"
    ],
    "role": "Experiment design and analysis · Coursework",
    "summary": "Benchmarked brute-force frequent-itemset enumeration against Apriori while varying the number of distinct items and transactions.",
    "context": "Association-rule mining first needs frequent itemsets. Candidate enumeration can dominate runtime as the number of distinct items grows.",
    "problem": "Separate the effect of increasing item dimensionality from the effect of adding more transactions.",
    "dataInputs": [
      "Transaction datasets with controlled item and transaction counts",
      "Algorithm runtimes across the two sweeps"
    ],
    "built": [
      "Implemented the benchmark for brute-force and Apriori methods.",
      "Varied distinct items and transaction counts separately and compared four runtime series."
    ],
    "process": [
      "Set benchmark dimensions",
      "Generate transactions",
      "Run both methods",
      "Compare runtime curves"
    ],
    "tech": [
      "Python",
      "Apriori",
      "Frequent Itemsets",
      "Benchmarking"
    ],
    "results": [
      "Produced four comparison curves covering two algorithms and two workload sweeps."
    ],
    "learned": "The number of items controls the candidate space. The number of transactions changes support-counting work.",
    "limitations": "Original timing curves are unavailable on this site. Performance depends on support threshold and the transaction distribution.",
    "links": []
  },
  {
    "id": "linguaplay",
    "title": "LinguaPlay — Full-stack Interactive Learning Platform",
    "subtitle": "A full-stack language-learning application",
    "featured": false,
    "categories": [
      "engineering"
    ],
    "role": "Product design and full-stack implementation",
    "type": "UCLA CS144 · Full-stack course project",
    "summary": "Built a language-learning web application connecting practice games, user accounts and score tracking, with a React frontend and an Express/MongoDB backend.",
    "context": "A language-learning application needs to connect the practice experience with user identity and stored progress.",
    "problem": "The game interface, authentication and score submission must work together so users can complete a session and see their results.",
    "built": [
      "Developed the React/Vite interface for vocabulary practice and game flows.",
      "Implemented Express APIs and MongoDB persistence for application data.",
      "Added JWT-based authentication and score submission to connect users with their results.",
      "Integrated games and leaderboard views into a complete learning flow."
    ],
    "process": [
      "Sign in",
      "Choose a game",
      "Practice",
      "Submit score",
      "View leaderboard"
    ],
    "tech": [
      "React",
      "Vite",
      "JavaScript",
      "Express",
      "MongoDB",
      "JWT"
    ],
    "results": [
      "Delivered a full-stack application combining game interaction, authentication and score tracking."
    ],
    "learned": "Completing the user journey means connecting the game interface to identity, persistence and visible results.",
    "links": [
      {
        "label": "View source code",
        "url": "https://github.com/Wenjing1206/linguaplay"
      }
    ],
    "analysisQuestion": "How should game interaction, authentication and score persistence connect across the full stack?",
    "dataInputs": [
      "User accounts",
      "Vocabulary and game inputs",
      "Submitted scores",
      "Leaderboard records"
    ],
    "analysisProcess": [
      {
        "title": "Map the user flow",
        "body": "Connect authentication, game selection, play and results."
      },
      {
        "title": "Define API boundaries",
        "body": "Separate frontend interaction from authentication and score persistence."
      },
      {
        "title": "Persist results",
        "body": "Connect score submission with stored user and leaderboard data."
      }
    ],
    "analysisOutcome": "Keep identity and score persistence explicit across the frontend and backend.",
    "productOutcome": "A language-learning application with games and leaderboard functionality.",
    "limitations": "An academic software project; no learning-retention or production-scale performance claim is made."
  },
  {
    "id": "ntu-omnibus",
    "title": "NTU Omnibus — Human-Centered Transportation Redesign",
    "type": "NTU IN6240 · Human–Computer Interaction",
    "period": "2026 · NTU coursework",
    "categories": [
      "product",
      "research"
    ],
    "role": "Diagnosis and synthesis · Team project",
    "summary": "Diagnosed how students recognize a destination, match it to a stop and route, and identify the correct boarding direction in the NTU campus shuttle experience.",
    "context": "A student can know the building they want to reach while being unfamiliar with stop names, routes and boarding direction.",
    "problem": "Find which parts of the destination-to-boarding process create uncertainty for riders.",
    "dataInputs": [
      "Heuristic evaluation by six evaluators",
      "One cognitive walkthrough",
      "Task-based field evaluation with six participants"
    ],
    "built": [
      "Wrote the diagnostic sections on destination recognition, destination–stop–route matching, and boarding stop and direction.",
      "Synthesized evidence across the evaluation methods to inform the team redesign."
    ],
    "process": [
      "Name a destination",
      "Match a stop and route",
      "Choose the boarding direction"
    ],
    "tech": [
      "Heuristic Evaluation",
      "Cognitive Walkthrough",
      "Task-based Field Evaluation",
      "HCI"
    ],
    "results": [
      "Identified three distinct breakdowns in the navigation flow and provided recommendations to the team redesign."
    ],
    "learned": "A route label is useful only after a rider has linked their destination to the correct stop and direction.",
    "limitations": "The field evaluation was small and campus-specific. The case does not report a post-launch ridership or usability lift.",
    "links": []
  },
  {
    "id": "ai-image-memory",
    "title": "Human Cognition & AI Research — Image Recognition Memory",
    "subtitle": "Experimental research on image origin, labels, and recognition memory",
    "featured": false,
    "categories": [
      "research",
      "product"
    ],
    "role": "Experiment design and analysis · Individual coursework",
    "type": "UCLA · Cognitive Science coursework",
    "cover": "assets/images/experiment-results.png",
    "summary": "A 2 × 2 within-subjects experiment testing whether AI-generated imagery and source labels shape immediate and delayed recognition.",
    "context": "As synthetic images become common, product teams need to understand not only whether users can identify them, but how image origin and labeling affect memory and trust.",
    "problem": "A compelling descriptive pattern can easily be overclaimed. The study needed separate variables, immediate and delayed outcomes, and disciplined interpretation of main and interaction effects.",
    "built": [
      "Operationalized image origin, labeling condition, and recognition accuracy.",
      "Built a controlled set of AI-generated and real-image stimuli.",
      "Used PsychoPy to run recognition tasks with 21 UCLA participants.",
      "Separated robust findings from exploratory or non-significant effects."
    ],
    "process": [
      "Define variables",
      "Prepare stimuli",
      "Run 2 × 2 study",
      "Collect recognition data",
      "Test effects",
      "Bound the claim"
    ],
    "tech": [
      "PsychoPy",
      "Experimental Design",
      "Repeated Measures",
      "Statistical Testing",
      "Data Visualization"
    ],
    "results": [
      "The recorded study included 21 participants in a 2 × 2 within-subjects design.",
      "Project materials report a delayed image-type effect (p = .002); label and interaction effects were not treated as equally robust claims."
    ],
    "learned": "Good AI product research includes knowing what not to claim. Evidence strength should shape both product decisions and public language.",
    "links": [],
    "analysisQuestion": "Do image origin and AI-source labels change immediate or delayed recognition memory?",
    "dataInputs": [
      "21 UCLA participants",
      "AI-generated and real-image stimuli",
      "Labeled and unlabeled conditions",
      "Immediate and delayed recognition responses"
    ],
    "analysisProcess": [
      {
        "title": "Operationalize variables",
        "body": "Defined image origin and label condition as within-subject factors, with recognition accuracy measured at immediate and delayed time points."
      },
      {
        "title": "Prepare comparable stimuli",
        "body": "Built controlled AI-generated and real-image sets and balanced presentation conditions to reduce ordering and exposure effects."
      },
      {
        "title": "Collect behavioral data",
        "body": "Used PsychoPy to record participant responses under the four 2 × 2 conditions."
      },
      {
        "title": "Compare effects",
        "body": "Calculated descriptive differences and tested image-type, label, and interaction effects separately for immediate and delayed recognition."
      },
      {
        "title": "Bound the conclusion",
        "body": "Distinguished the supported delayed image-type effect from weaker label and interaction patterns that require more evidence."
      }
    ],
    "analysisOutcome": "Project materials report a delayed image-type effect at p = .002. The analysis supports a difference in delayed recognition, while avoiding a broader claim that labels or AI images always improve memory.",
    "productOutcome": "A course study reporting recognition accuracy across the four conditions and two test timings.",
    "limitations": "The sample was small and drawn from UCLA students. Stimulus style may partly explain memorability, so broader image categories and preregistered replication would strengthen the conclusion.",
    "coverAlt": "Original course figure reporting results by image origin and label condition"
  },
  {
    "id": "classification-workflow",
    "title": "Reusable Classification Workflow Skill",
    "subtitle": "Turning a dataset into an inspectable ML experiment",
    "featured": false,
    "categories": [
      "ai",
      "ml",
      "engineering"
    ],
    "role": "Workflow specification and supporting implementation",
    "type": "Reusable agent workflow",
    "summary": "Created a reusable agent skill that guides dataset inspection, validation design, preprocessing, model comparison and evidence-based report generation, supported by Python scripts.",
    "context": "Repeating a classification notebook for a new dataset can silently carry over the wrong target, validation split or evaluation metric.",
    "problem": "The workflow needs dataset-specific decisions and clear execution boundaries instead of assuming every table can use the same experiment.",
    "built": [
      "Specified how the agent should inspect a dataset and justify the target, validation strategy, model families and primary metric.",
      "Provided bounded Python helpers for experiment execution and report rendering.",
      "Documented IID, group-disjoint and time-ordered validation paths and explicit helper limitations.",
      "Added behavior checks for missing categories, group separation, temporal validation and train/test overlap rejection."
    ],
    "process": [
      "Inspect dataset",
      "Record design",
      "Run experiment",
      "Check evidence",
      "Render report"
    ],
    "tech": [
      "Python",
      "Agent Skills",
      "Scikit-learn",
      "Validation Design",
      "ReportLab"
    ],
    "dataInputs": [
      "Tabular datasets",
      "Recorded experiment-design decisions",
      "Saved model and validation evidence"
    ],
    "analysisQuestion": "Which decisions must adapt to a new dataset before a classification workflow can be reused safely?",
    "analysisProcess": [
      {
        "title": "Inspect before selecting",
        "body": "Establish target meaning, feature types and row dependencies before choosing models."
      },
      {
        "title": "Record the design",
        "body": "Make validation and metric choices explicit before running the experiment."
      },
      {
        "title": "Run within boundaries",
        "body": "Use the helper for supported tables and route unsupported cases through the documented workflow."
      },
      {
        "title": "Review the artifact",
        "body": "Build the report from saved evidence and inspect the rendered pages."
      }
    ],
    "results": [
      "Published a reusable SKILL specification with experiment and report-rendering helpers.",
      "Included behavioral checks for validation boundaries and overlap rejection."
    ],
    "analysisOutcome": "Reuse the decision process while adapting validation, preprocessing and metrics to the dataset.",
    "productOutcome": "An installable agent workflow with executable helpers and documented boundaries.",
    "limitations": "The helper is deliberately bounded. Smoke tests do not demonstrate universal dataset coverage, and generated reports still require evidence and visual review.",
    "learned": "Automation becomes easier to inspect when design decisions and evidence are saved alongside the final report.",
    "links": [
      {
        "label": "View workflow and scripts",
        "url": "https://github.com/Wenjing1206/in6227-tabular-classification-skill"
      }
    ]
  },
  {
    "id": "honkai-nlp",
    "title": "Honkai: Star Rail NLP Analysis",
    "subtitle": "Understanding fictional worlds through dialogue data",
    "featured": false,
    "categories": [
      "ml",
      "analytics",
      "research"
    ],
    "role": "Data analysis, modeling, and narrative interpretation",
    "type": "UCLA Digital Humanities / Data project",
    "cover": "assets/images/dialogue-distribution.png",
    "summary": "A chapter-level language analysis comparing vocabulary, themes, and linguistic signals across the game’s fictional worlds.",
    "context": "Game dialogue is both narrative content and behavioral data. The project asked whether chapter settings could be distinguished by their vocabulary and thematic structure.",
    "problem": "Chapters contained very different amounts of dialogue, so raw frequency could make the largest chapter look the most distinctive even when it was only more verbose.",
    "built": [
      "Cleaned and structured 25,664 dialogue rows across five chapters and retained 79 speakers.",
      "Compared unigram, normalized bigram, distinctive-vocabulary, and topic-modeling signals.",
      "Built a class-balanced TF-IDF + Linear SVM classifier and inspected minority-class performance rather than relying only on aggregate accuracy.",
      "Translated quantitative patterns into a readable narrative-analysis report."
    ],
    "process": [
      "Clean corpus",
      "Tokenize",
      "Explore frequency",
      "Normalize bigrams",
      "Model topics",
      "Build TF-IDF + SVM"
    ],
    "tech": [
      "Python",
      "Pandas",
      "NLP",
      "TF-IDF",
      "Bigrams",
      "LDA",
      "Linear SVM",
      "Visualization"
    ],
    "results": [
      "Produced a structured corpus and repeatable chapter-comparison pipeline.",
      "The executed classifier reached 0.744 accuracy, 0.694 macro F1, and 0.745 weighted F1.",
      "Identified class imbalance and chapter-volume bias as material limits on interpretation."
    ],
    "learned": "Method choice changes the story. Normalized bigrams, TF-IDF, and class-level evaluation helped separate distinctive language from language that was merely frequent.",
    "links": [],
    "analysisQuestion": "Which linguistic signals distinguish the five narrative worlds in Honkai: Star Rail, and how reliable are those differences?",
    "dataInputs": [
      "25,664 cleaned dialogue rows",
      "79 retained speakers",
      "Five chapter/world labels",
      "Speaker, chapter, and dialogue-text fields"
    ],
    "analysisProcess": [
      {
        "title": "Clean the corpus",
        "body": "Removed unusable rows, normalized text and labels, and preserved utterance boundaries so bigrams would not cross unrelated dialogue lines."
      },
      {
        "title": "Explore composition",
        "body": "Compared dialogue volume, speaker coverage, frequent terms, and normalized bigram rates across chapters to identify imbalance before modeling."
      },
      {
        "title": "Extract narrative signals",
        "body": "Used distinctive vocabulary, within-utterance bigrams, POS patterns, and chunk-based LDA to compare themes and language styles."
      },
      {
        "title": "Build the classifier",
        "body": "Created class-balanced TF-IDF features and trained a Linear SVM to predict chapter labels from dialogue text."
      },
      {
        "title": "Evaluate by class",
        "body": "Reviewed accuracy, macro F1, weighted F1, and the confusion matrix so smaller chapters were not hidden by the overall score."
      }
    ],
    "analysisOutcome": "The executed notebook reached 0.744 accuracy, 0.694 macro F1, and 0.745 weighted F1. The gap between overall and macro performance showed that chapter imbalance remained an important interpretation limit.",
    "productOutcome": "Delivered a fully executed, reproducible narrative-analytics notebook and visual report that lets readers compare vocabulary, topics, and classification behavior across five fictional worlds.",
    "limitations": "Dialogue volume and speaker distribution differ by chapter. The model identifies linguistic association, not authorial intent or causal narrative influence.",
    "coverAlt": "Original project figure comparing dialogue distribution across chapters"
  },
  {
    "id": "image-authenticity",
    "title": "Image Tampering & AI Recognition",
    "subtitle": "Product framing for visual-content authenticity",
    "categories": [
      "product",
      "research"
    ],
    "role": "Research and product exploration",
    "type": "Computer vision / AI product study",
    "summary": "Explores how AI systems can help people assess whether visual content is authentic, edited, or generated.",
    "context": "Modern editing and generation tools make visual provenance hard to judge.",
    "problem": "A detector score alone does not tell users what evidence to trust or what action to take.",
    "built": [
      "Reframed model detection as an explainable user decision.",
      "Mapped confidence, provenance cues, and review states."
    ],
    "process": [
      "Inspect",
      "Detect",
      "Explain",
      "Escalate"
    ],
    "tech": [
      "Computer Vision",
      "Classification",
      "Trust UX"
    ],
    "results": [
      "Produced a product concept connecting model output to user-facing evidence and uncertainty."
    ],
    "learned": "Detection products need calibrated uncertainty and clear next actions.",
    "links": [],
    "analysisQuestion": "How should model confidence and visual evidence be combined so users can judge image authenticity?",
    "dataInputs": [
      "Authentic, edited, and AI-generated image examples",
      "Model confidence outputs",
      "Visual provenance and manipulation cues"
    ],
    "analysisProcess": [
      {
        "title": "Define the decision",
        "body": "Separated “classify an image” from the user decision of whether to trust, review, or escalate the content."
      },
      {
        "title": "Compare evidence",
        "body": "Organized model confidence, provenance metadata, and visible manipulation cues into complementary evidence types."
      },
      {
        "title": "Map uncertainty",
        "body": "Designed states for high-confidence findings, conflicting signals, and insufficient evidence."
      },
      {
        "title": "Translate to action",
        "body": "Connected each state to an explanation and next step rather than displaying a binary detector score."
      }
    ],
    "analysisOutcome": "The analysis produced a Trust & Safety decision framework for presenting detection evidence and uncertainty.",
    "productOutcome": "Created a Trust & Safety product concept that turns detector outputs into explainable evidence states, calibrated uncertainty, and clear review or escalation actions.",
    "limitations": "This is a product and research exploration; model performance has not been validated on a production-scale benchmark.",
    "featured": false
  },
  {
    "id": "chinese-dialect",
    "title": "Chinese Dialect Computational Analysis",
    "subtitle": "Mapping Dalian dialect similarity with lexical distance",
    "categories": [
      "research",
      "analytics"
    ],
    "role": "Computational analysis and visualization",
    "type": "Linguistics research",
    "summary": "A data-driven comparison of Dalian with other Chinese dialect regions.",
    "context": "Dialect relationships are often explained historically; computational measures offer a complementary empirical view.",
    "problem": "Lexical distance must be summarized without erasing regional nuance.",
    "built": [
      "Computed ASJP-LDND lexical distance.",
      "Built a heatmap, multidimensional scaling view, and dendrogram."
    ],
    "process": [
      "Normalize lexicon",
      "Compute distance",
      "Project dimensions",
      "Cluster",
      "Interpret"
    ],
    "tech": [
      "Python",
      "ASJP-LDND",
      "MDS",
      "Hierarchical Clustering"
    ],
    "results": [
      "The analysis indicated strong similarity between Dalian and Jiaodong regions including Yantai and Weihai."
    ],
    "learned": "Multiple visual encodings are essential when one projection can distort distance.",
    "links": [],
    "analysisQuestion": "Which Chinese dialect groups are lexically closest to Dalian, and does that relationship stay visible across methods?",
    "dataInputs": [
      "Standardized dialect word lists",
      "ASJP phonetic representations",
      "Regional dialect labels"
    ],
    "analysisProcess": [
      {
        "title": "Normalize the lexicon",
        "body": "Aligned comparable meanings and cleaned phonetic entries before distance calculation."
      },
      {
        "title": "Calculate distance",
        "body": "Applied ASJP-LDND to quantify pairwise lexical distance between dialect samples."
      },
      {
        "title": "Visualize structure",
        "body": "Used a heatmap for pairwise comparison, MDS for spatial similarity, and a dendrogram for hierarchical grouping."
      },
      {
        "title": "Cross-check interpretation",
        "body": "Compared patterns across all three views to avoid relying on distortions from a single projection."
      }
    ],
    "analysisOutcome": "Dalian consistently appeared close to Jiaodong regions, particularly Yantai and Weihai, across the project visualizations.",
    "productOutcome": "Delivered a comparative linguistic analysis with a distance matrix, heatmap, MDS projection, and dendrogram that make regional similarity inspectable from multiple views.",
    "limitations": "Lexical distance captures one dimension of dialect similarity and does not fully represent syntax, tone, migration history, or within-region variation.",
    "featured": false
  },
  {
    "id": "interpersonal-dynamics",
    "title": "Interpersonal Dynamics Research",
    "subtitle": "Measuring synchrony in cooperative and argumentative interaction",
    "categories": [
      "research",
      "analytics"
    ],
    "role": "Behavioral coding and statistical analysis",
    "type": "Cognitive Science research",
    "summary": "Compares behavioral synchrony under cooperative and argumentative conditions.",
    "context": "Interaction quality is visible in timing and coordination, but those behaviors need consistent coding before comparison.",
    "problem": "The challenge was connecting observed behavior to a measurable construct without overgeneralizing from a small study.",
    "built": [
      "Defined synchrony measures and coded interaction behavior.",
      "Compared cooperative and argumentative conditions statistically."
    ],
    "process": [
      "Observe",
      "Code",
      "Aggregate",
      "Compare",
      "Interpret"
    ],
    "tech": [
      "Behavioral Coding",
      "Statistical Testing",
      "Research Design"
    ],
    "results": [
      "Recorded synchrony was 67.65% in cooperative interaction and 23.21% in argumentative interaction, with p = .030 in the project analysis."
    ],
    "learned": "A significant difference still needs context, sample limits, and a defensible operational definition.",
    "links": [],
    "analysisQuestion": "Does behavioral synchrony differ between cooperative and argumentative interactions?",
    "dataInputs": [
      "Recorded interaction sessions",
      "Condition labels",
      "Behavioral synchrony coding"
    ],
    "analysisProcess": [
      {
        "title": "Define synchrony",
        "body": "Translated observable timing and coordination into a consistent coding rule."
      },
      {
        "title": "Code interactions",
        "body": "Applied the same behavioral criteria to cooperative and argumentative sessions."
      },
      {
        "title": "Aggregate by condition",
        "body": "Calculated synchrony rates within each interaction type before comparing groups."
      },
      {
        "title": "Test the difference",
        "body": "Used statistical comparison to evaluate whether the observed condition gap was unlikely under the null hypothesis."
      }
    ],
    "analysisOutcome": "The project recorded 67.65% synchrony for cooperative interaction and 23.21% for argumentative interaction, with p = .030.",
    "productOutcome": "Produced a coded behavioral dataset and statistical research report that operationalize interaction synchrony for repeatable comparison between social conditions.",
    "limitations": "The operational definition, sample size, and interaction context limit generalization beyond the recorded study.",
    "featured": false
  },
  {
    "id": "airline-ux",
    "title": "Airline Booking UX Redesign",
    "subtitle": "Reducing friction in the trip-search journey",
    "categories": [
      "product"
    ],
    "role": "UX research and interaction design",
    "type": "Product redesign",
    "summary": "A responsive booking-flow redesign focused on trip entry, passenger selection, class, and search clarity.",
    "context": "The existing interface dispersed high-frequency booking inputs and weakened action hierarchy.",
    "problem": "Users needed one coherent search task rather than a series of unrelated form decisions.",
    "built": [
      "Reorganized navigation around Book Trip.",
      "Unified origin, destination, dates, passengers, and class around a single Search Now action."
    ],
    "process": [
      "Audit",
      "Prioritize",
      "Wireframe",
      "Prototype",
      "Refine"
    ],
    "tech": [
      "Figma",
      "Information Architecture",
      "Interaction Design"
    ],
    "results": [
      "Produced a clearer responsive flow and before/after rationale."
    ],
    "learned": "Reducing cognitive switching can matter more than reducing the raw number of fields.",
    "links": [],
    "analysisQuestion": "Where does the booking interface create unnecessary decision effort before a user can search for a trip?",
    "dataInputs": [
      "Existing booking interface",
      "Task-flow observations",
      "Competitor booking patterns",
      "Form and navigation structure"
    ],
    "analysisProcess": [
      {
        "title": "Audit the flow",
        "body": "Mapped the steps and controls required to enter trip details, passengers, class, and search criteria."
      },
      {
        "title": "Identify friction",
        "body": "Flagged dispersed inputs, weak action hierarchy, and context switching between navigation and form decisions."
      },
      {
        "title": "Compare patterns",
        "body": "Reviewed how competing booking tools group high-frequency decisions and signal the primary CTA."
      },
      {
        "title": "Redesign and inspect",
        "body": "Reorganized the flow around Book Trip and reviewed the before/after path for clarity and responsive use."
      }
    ],
    "analysisOutcome": "The redesign grouped the full search task around one information hierarchy and a single Search Now action.",
    "productOutcome": "Delivered a responsive booking-flow prototype that unifies route, date, passenger, and cabin decisions around one clear primary action.",
    "limitations": "The project demonstrates an interaction rationale; production conversion impact would require instrumented usability or funnel testing.",
    "featured": false
  },
  {
    "id": "deportation-data",
    "title": "Deportation Data Storytelling",
    "subtitle": "Historical data, power, and public interpretation",
    "categories": [
      "analytics",
      "research"
    ],
    "role": "Data Visualization Specialist and Web Manager · Team project",
    "type": "UCLA DH101",
    "summary": "An evidence-led data story examining U.S. deportation patterns across time and demographic categories.",
    "context": "Historical administrative data carries gaps, bias, and harmful categories that require explanation alongside visualization.",
    "problem": "The site had to make patterns legible without presenting archival labels as neutral truth.",
    "built": [
      "Cleaned and selected data for public-facing charts.",
      "Designed and developed the project website and embedded visualizations."
    ],
    "process": [
      "Audit data",
      "Clean",
      "Visualize",
      "Contextualize",
      "Publish"
    ],
    "tech": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tableau",
      "Data Cleaning"
    ],
    "results": [
      "Delivered a collaborative data website with interactive visual analysis and explicit data limitations."
    ],
    "learned": "Data storytelling is an editorial responsibility, not only a charting task.",
    "links": [],
    "analysisQuestion": "What patterns in historical U.S. deportation records can be communicated without treating archival categories as neutral facts?",
    "dataInputs": [
      "Historical deportation records, 1893–1921",
      "Year, demographic, and categorical fields",
      "Archival source documentation"
    ],
    "analysisProcess": [
      {
        "title": "Audit the archive",
        "body": "Reviewed missing values, historical terminology, category definitions, and the limits of administrative records."
      },
      {
        "title": "Clean for comparison",
        "body": "Standardized selected fields and prepared time and distribution measures for public visualization."
      },
      {
        "title": "Explore patterns",
        "body": "Compared changes over time and demographic distributions to identify patterns worth contextualizing."
      },
      {
        "title": "Design the story",
        "body": "Connected interactive Tableau views with explanatory copy and data limitations on the website."
      }
    ],
    "analysisOutcome": "The final team site paired interactive trends with historical context, while my verified role covered data visualization and web management.",
    "productOutcome": "Published a collaborative data-storytelling website with embedded Tableau analysis, historical interpretation, and visible documentation of archival limitations.",
    "limitations": "Archival categories reflect the institutions that produced the records. Missingness and historical labels limit modern interpretation.",
    "featured": false
  },
  {
    "id": "spotify-api",
    "title": "Spotify / API Data Project",
    "subtitle": "From nested responses to usable music data",
    "categories": [
      "engineering",
      "analytics"
    ],
    "role": "API integration and data processing",
    "type": "Mini project",
    "summary": "Retrieves, cleans, and transforms music metadata into an analysis-ready structure.",
    "context": "Public APIs return nested objects optimized for transport, not necessarily for comparison or product display.",
    "problem": "The task was to normalize useful fields while handling missing values and request limits.",
    "built": [
      "Integrated music search and metadata endpoints.",
      "Flattened nested JSON into reusable records."
    ],
    "process": [
      "Query",
      "Validate",
      "Transform",
      "Analyze"
    ],
    "tech": [
      "Spotify API",
      "Python",
      "JSON",
      "Data Cleaning"
    ],
    "results": [
      "Created a repeatable API-to-table workflow."
    ],
    "learned": "API contracts and failure states are part of the product experience.",
    "links": [],
    "analysisQuestion": "How can nested music API responses be transformed into a reliable table for search and comparison?",
    "dataInputs": [
      "Spotify API search responses",
      "Track, artist, album, and popularity metadata",
      "Nested JSON objects and missing fields"
    ],
    "analysisProcess": [
      {
        "title": "Inspect the API contract",
        "body": "Identified stable identifiers, nested relationships, pagination, and optional fields."
      },
      {
        "title": "Flatten records",
        "body": "Converted nested track, album, and artist objects into analysis-ready rows."
      },
      {
        "title": "Validate quality",
        "body": "Checked missing values, duplicates, data types, and response errors before comparison."
      },
      {
        "title": "Prepare analysis",
        "body": "Selected reusable fields for search results, descriptive summaries, and downstream visualization."
      }
    ],
    "analysisOutcome": "The project created a repeatable path from API response to usable music dataset.",
    "productOutcome": "Built a reusable API-to-table workflow that converts nested music metadata into validated records ready for search, comparison, and visualization.",
    "limitations": "API availability, authorization, request limits, and platform-defined popularity measures constrain the analysis.",
    "featured": false
  },
  {
    "id": "cs144-web",
    "title": "CS144 Full-stack / WebAssembly",
    "subtitle": "Performance-minded web systems",
    "categories": [
      "engineering"
    ],
    "role": "Full-stack engineering",
    "type": "Course engineering project",
    "summary": "A web engineering project exploring client-server architecture and browser-native performance tools.",
    "context": "Interactive applications need clear boundaries between presentation, computation, and persistence.",
    "problem": "The project focused on translating system concepts into reliable browser behavior.",
    "built": [
      "Implemented end-to-end web flows.",
      "Integrated WebAssembly for targeted client-side computation."
    ],
    "process": [
      "Design interface",
      "Build API",
      "Connect state",
      "Optimize",
      "Test"
    ],
    "tech": [
      "JavaScript",
      "WebAssembly",
      "Web APIs",
      "Full-stack"
    ],
    "results": [
      "Delivered a working system and documented the architecture."
    ],
    "learned": "Optimization should follow measured bottlenecks and preserve debuggability.",
    "links": [],
    "analysisQuestion": "Which parts of an interactive web flow benefit from client-side computation, and how can their behavior be verified?",
    "dataInputs": [
      "Client-server request and response states",
      "Browser runtime behavior",
      "WebAssembly integration outcomes"
    ],
    "analysisProcess": [
      {
        "title": "Map system boundaries",
        "body": "Separated interface state, server responsibilities, and candidate client-side computation."
      },
      {
        "title": "Trace data flow",
        "body": "Followed inputs through requests, processing, responses, and rendered output."
      },
      {
        "title": "Inspect runtime behavior",
        "body": "Compared correctness and integration behavior before and after the WebAssembly path."
      },
      {
        "title": "Verify end to end",
        "body": "Tested the complete browser flow rather than treating the optimized function in isolation."
      }
    ],
    "analysisOutcome": "The analysis connected architecture choices to observable application behavior and documented the integration boundary.",
    "productOutcome": "Delivered a working full-stack browser system with a documented client-server boundary and a targeted WebAssembly computation path.",
    "limitations": "The project demonstrates engineering analysis; production-scale performance claims would require controlled benchmarks.",
    "featured": false
  },
  {
    "id": "soul-mate-bridal",
    "title": "Soul Mate Bridal UX & Web Growth",
    "subtitle": "A clearer path from discovery to enquiry",
    "categories": [
      "product",
      "analytics"
    ],
    "role": "Marketing & Web Design Intern",
    "type": "Astral Culture Media",
    "summary": "A conversion-focused redesign of the discovery and contact journey for a bridal service.",
    "context": "Potential clients arrived through search and social channels but encountered friction before submitting an enquiry.",
    "problem": "Content, form structure, and CTA hierarchy needed to work as one funnel.",
    "built": [
      "Reviewed 50+ competitors and user behavior.",
      "Redesigned contact flows and supported SEO and landing-page experiments."
    ],
    "process": [
      "Research",
      "Map funnel",
      "Redesign",
      "Experiment",
      "Monitor"
    ],
    "tech": [
      "UX Research",
      "SEO",
      "A/B Testing",
      "Web Design"
    ],
    "results": [
      "Delivered a redesigned enquiry flow and landing-page updates to support lead generation and organic discovery."
    ],
    "learned": "Growth work is strongest when acquisition, interface, and measurement share the same journey model.",
    "links": [],
    "analysisQuestion": "Where do prospective clients leave the journey between discovery and submitting an enquiry?",
    "dataInputs": [
      "Website funnel and user-behavior observations",
      "Contact-form structure",
      "50+ competitor examples",
      "SEO and landing-page experiment results"
    ],
    "analysisProcess": [
      {
        "title": "Map the funnel",
        "body": "Connected traffic sources, landing pages, service content, contact actions, and form completion into one journey."
      },
      {
        "title": "Locate friction",
        "body": "Reviewed drop-off points, content gaps, form effort, and weak CTA hierarchy."
      },
      {
        "title": "Benchmark competitors",
        "body": "Compared acquisition, information structure, content strategy, and enquiry flows across more than 50 examples."
      },
      {
        "title": "Test changes",
        "body": "Supported landing-page, SEO, and contact-flow changes and monitored conversion-related outcomes."
      }
    ],
    "analysisOutcome": "Use the journey from acquisition to form submission to decide where contact and landing-page changes could reduce friction.",
    "productOutcome": "Combined contact-flow, landing-page, and SEO improvements as part of the same website update.",
    "limitations": "The recorded outcomes reflect a combined program of UX, content, and SEO changes, so they should not be attributed to one interface change alone.",
    "featured": false,
    "period": "Oct 2024 – Jan 2025"
  }
];
