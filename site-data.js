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
  skills: [
    ['ai', 'AI Agents', 'RAG', 'Prompt Engineering', 'Workflow Orchestration', 'LLM Evaluation'],
    ['ml', 'Python', 'Scikit-learn', 'PyTorch', 'Predictive Modeling', 'Neural Networks', 'Model Evaluation'],
    ['analytics', 'SQL', 'Exploratory Data Analysis', 'Statistical Analysis', 'Funnel Analysis', 'ECharts', 'Excel', 'Business Insights'],
    ['governance', 'Data Integration', 'ETL', 'Data Quality', 'Data Cleaning', 'Data Standardization', 'Data Validation'],
    ['engineering', 'Java', 'Spring Boot', 'MySQL', 'React', 'Git', 'MVC', 'System Architecture'],
    ['product', 'Product Requirements', 'Experimental Design', 'User Research', 'Error Analysis', 'Product Analytics']
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
  // English: Set pdf only for a reviewed, public role-specific file in assets/.
  // 中文：仅为放在 assets/ 且确认可公开、与方向一致的简历填写 pdf。
  resumes: [
    { title: 'Data Science & Applied AI', pdf: null },
    { title: 'Data Analytics & Business Intelligence', pdf: null },
    { title: 'AI Product Management', pdf: null },
    { title: 'Data Governance', pdf: null }
  ]
};
