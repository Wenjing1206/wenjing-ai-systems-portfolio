// English: Public contact, experience, resume availability, and category definitions.
// 中文：集中维护公开联系方式、实习经历、简历状态和项目分类。
window.PORTFOLIO = {
  contact: {
    email: 'tiantianbinggan@126.com',
    github: 'https://github.com/Wenjing1206',
    linkedin: 'https://www.linkedin.com/in/wenjing-tian-72b837225'
  },
  categories: {
    all: 'All Projects',
    featured: 'Featured',
    ai: 'Applied AI & LLM',
    ml: 'Data Science & Machine Learning',
    analytics: 'Data Analytics & BI',
    governance: 'Data Governance',
    engineering: 'Software Engineering',
    product: 'Product & HCI',
    research: 'Research'
  },
  tracks: [
    {
      "id": "all",
      "title": "All highlights",
      "description": "",
      "projects": [
        "tabular-classification",
        "shopping-copilot",
        "enterprise-ai-auditing",
        "carbon-data-platform",
        "kze-marketing"
      ]
    },
    {
      "id": "data-science",
      "title": "Data Scientist",
      "description": "Model selection, leakage controls, and held-out evaluation.",
      "projects": [
        "tabular-classification",
        "breast-tumor-classification",
        "classification-workflow"
      ]
    },
    {
      "id": "applied-ai",
      "title": "Applied AI",
      "description": "Multi-turn recommendation, retrieval-grounded review, and failure analysis.",
      "projects": [
        "shopping-copilot",
        "enterprise-ai-auditing",
        "tabular-classification"
      ]
    },
    {
      "id": "analytics-bi",
      "title": "Data Analyst / BI",
      "description": "Creator prioritization, carbon-data reporting, and SQL analysis.",
      "projects": [
        "kze-marketing",
        "carbon-data-platform",
        "deportation-data"
      ]
    },
    {
      "id": "data-governance",
      "title": "Data Governance",
      "description": "Registry reconciliation, record grain, and downstream validation.",
      "projects": [
        "carbon-data-platform",
        "tabular-classification"
      ]
    },
    {
      "id": "ai-product",
      "title": "AI Product Manager",
      "description": "Conversation rules, escalation paths, and usability evidence.",
      "projects": [
        "shopping-copilot",
        "enterprise-ai-auditing",
        "ntu-omnibus"
      ]
    }
  ],
  skills: [
    {
      "title": "Python & model evaluation",
      "methods": "Scikit-learn, cross-validation, average precision, paired bootstrap",
      "project": "tabular-classification"
    },
    {
      "title": "PyTorch & experiment design",
      "methods": "Validation-based selection, regularization, held-out testing",
      "project": "breast-tumor-classification"
    },
    {
      "title": "Agents & retrieval",
      "methods": "Workflow orchestration, RAG configuration, node-level debugging",
      "project": "enterprise-ai-auditing"
    },
    {
      "title": "Conversational recommendation",
      "methods": "Dialogue state, constraint overrides, regression scenarios",
      "project": "shopping-copilot"
    },
    {
      "title": "SQL & analytics",
      "methods": "SQLite, CTEs, window functions, annual and year-over-year aggregation",
      "project": "deportation-data"
    },
    {
      "title": "Data quality & BI",
      "methods": "Registry reconciliation, standardization, ECharts prototyping",
      "project": "carbon-data-platform"
    }
  ],
  experience: [
    {
      company: 'PetroChina Planning & Engineering Institute',
      role: 'AI Agent Development & Data Governance Intern',
      date: 'Sep 2025 – Jun 2026',
      place: 'Beijing, China',
      description: 'Worked with the Energy Conservation Center on report pre-review and carbon-market data. Configured review stages and retrieval sources, inspected workflow traces, aligned registry fields, and prepared governed records for dashboard analysis.',
      projects: ['enterprise-ai-auditing', 'carbon-data-platform']
    },
    {
      company: 'Astral Culture Media',
      role: 'Marketing & Web Design Intern',
      date: 'Oct 2024 – Jan 2025',
      place: 'Seattle, WA, USA',
      description: 'Mapped the lead-generation journey and redesigned the enquiry flow. Used competitor research and user-behavior observations to support landing-page and search experiments.',
      projects: ['soul-mate-bridal']
    },
    {
      company: 'KZE Group LLC',
      role: 'Data Analyst Intern',
      date: 'Jun 2024 – Sep 2024',
      place: 'Houston, TX, USA',
      description: 'Compared TikTok creators within follower segments and designed a weighted framework for choosing whom to contact first. Used the partnership funnel to examine where prospects stopped progressing.',
      projects: ['kze-marketing']
    }
  ],
  resumeSubject: 'Résumé request for Wenjing Tian'
};
