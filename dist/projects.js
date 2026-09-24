// 中文备注：项目内容集中维护，首页卡片与详情页共用同一份数据，避免内容口径漂移。
window.PROJECTS = [
  {
    id:'shopping-copilot', title:'Shopping Copilot', subtitle:'Multi-turn AI shopping agent for a 50K-product catalog', featured:true, flagship:true, depth:'full', accent:'blue',
    categories:['AI Product','Data & Analytics'], tags:['AI Agent','Dialogue State','Search & Recommendation','Evaluation'],
    role:'Conversation State Management / AI Agent Design · Team project', type:'TikTok TechJam 2026',
    summary:'A multi-turn agent that converts evolving natural-language needs into structured constraints and dynamically chooses whether to clarify, retrieve, rerank, explore, or recommend.',
    context:'E-commerce search breaks when a user is vague, changes priorities, or rejects a previous preference. The challenge required an agent to find a hidden target product within ten turns across Buying, Browsing, Intent Override, and Boundary scenarios.',
    problem:'The system needed to preserve useful context without letting stale constraints poison later recommendations. It also had to expose evaluator-valid output and remain useful when semantic resolution was unavailable.',
    built:['Designed the session-scoped dialogue state for hard constraints, soft preferences, rejected values, no-preference boundaries, and intent transitions.','Created rule-first intent and attribute handling with an optional validated semantic fallback.','Defined adaptive policy signals using confidence, constraint coverage, prior questions, and recommendation stagnation.','Contributed shared contracts connecting state, retrieval, reranking, dialogue, and the final Agent interface.'],
    process:['User message','Intent + constraint extraction','Dialogue state update','Hybrid retrieval','Constraint-aware reranking','Clarify or recommend'],
    tech:['Python','LLM','BM25','Embeddings','Information Retrieval','State Management','Reranking','Evaluation'],
    results:['Built against a frozen 50,000-product catalog and 200 public development sessions.','The team evaluation framework tracks HitRate@K, MRR, and MTTC plus robustness and ablation tests.','Public-set evaluation was used to compare the team pipeline by scenario; team outcomes are kept separate from my documented Conversation State Management contribution.'],
    learned:'The hardest agent problem was not generating fluent text; it was managing state transitions safely. A rule that read “up to 30mm” as a price ceiling exposed why typed attributes, failure analysis, and regression tests matter.',
    links:[{label:'Team repository',url:'https://github.com/TikTok-Techjam-0x00/shopping-copilot'}]
  },
  {
    id:'enterprise-ai-auditing', title:'Enterprise AI Smart Auditing', subtitle:'RAG + rules + Human-in-the-Loop for report pre-review', featured:true, flagship:true, depth:'full', accent:'cyan',
    categories:['AI Product'], tags:['Multi-Agent','RAG','Rule Engine','Enterprise AI'], role:'AI Agent Development & Data Governance Intern', type:'PetroChina Planning & Engineering Institute',
    summary:'A three-stage enterprise review workflow that combines specialized agents, domain retrieval, deterministic rules, and human checkpoints.',
    context:'Enterprise reports must be reviewed against regulations, industry standards, historical reports, and internal business logic. Manual review is repetitive, slow, and difficult to keep consistent.',
    problem:'A pure LLM solution would be difficult to audit and prone to unsupported conclusions. The product needed a visible evidence chain, task decomposition, and clear escalation to expert reviewers.',
    built:['Mapped manual review work into element extraction, logic validation, and review-comment generation stages.','Designed modular agent responsibilities and Human-in-the-Loop confirmation points.','Structured a RAG knowledge base spanning policies, regulations, standards, historical reports, and technical catalogs.','Combined retrieval-grounded generation with rule-based validation for policy, energy-efficiency, and carbon-emission checks.'],
    process:['Source documents','Element extraction agent','Evidence retrieval','Logic + rule validation','Opinion generation','Human review'],
    tech:['Multi-Agent','RAG','LLM','Vector Retrieval','Rule Engine','Knowledge Base','Human-in-the-Loop'],
    results:['Converted a long manual workflow into explicit stages, evidence sources, and review checkpoints.','Internship records report a 60%+ improvement in internal review efficiency.','Established a product pattern for balancing generative flexibility with deterministic controls.'],
    learned:'Enterprise AI succeeds when workflow design, domain knowledge, traceable evidence, and human accountability are treated as first-class product requirements—not as cleanup after an LLM demo.', links:[]
  },
  {
    id:'carbon-data-platform', title:'Carbon Data Governance & BI', subtitle:'Structured data infrastructure for carbon-reduction projects', featured:true, depth:'standard', accent:'green', categories:['Data & Analytics','AI Product'], tags:['Data Governance','NLP','BI','Data Product'], role:'Data Governance Intern', type:'PetroChina Planning & Engineering Institute',
    summary:'A governance workflow and analytics prototype for fragmented CCER, VCS, and Gold Standard project data.', context:'Carbon-project records combine inconsistent fields, market data, methodologies, policies, and unstructured project descriptions across multiple mechanisms.', problem:'Without common definitions and quality checks, analytics cannot reliably support project monitoring or market decisions.', built:['Defined a collection, cleaning, standardization, validation, and analytics workflow.','Used administrative-division dictionaries and NLP extraction to infer province and city from unstructured project names.','Designed a web product prototype and interactive SugarBI dashboard for project, policy, methodology, and market queries.'], process:['Collect','Standardize','Validate','Enrich','Analyze','Monitor'], tech:['Python','Pandas','SQL','Excel','NLP','SugarBI','Data Governance'], results:['Created reusable field standards and quality checks across carbon mechanisms.','Reduced manual location completion through automated geographic extraction.'], learned:'A dashboard is only as trustworthy as the definitions, lineage, and exception handling beneath it.', links:[]
  },
  {
    id:'linguaplay', title:'LinguaPlay', subtitle:'Local-first, real-time vocabulary game', featured:true, depth:'full', accent:'purple', categories:['UX & Engineering','AI Product'], tags:['React','Socket.IO','Offline-first','Real-time Systems'], role:'Product design and full-stack implementation', type:'Independent full-stack project',
    summary:'A vocabulary learning product with offline practice and optional real-time rooms, designed around fast entry, visible game state, and resilient local use.', context:'Vocabulary practice tools often separate solo study from live classroom play and can become unusable when authentication or network services fail.', problem:'The product needed a no-login learning path while also supporting synchronized rooms, host controls, answer validation, and score updates.', built:['Built offline practice with custom and built-in vocabulary sets.','Implemented room creation and six-digit join codes with a solo-ready start path.','Designed synchronized lobby, question, answer, score, and end-game states.','Kept the core learning loop available locally while isolating optional authenticated multiplayer services.'], process:['Choose a set','Practice or create room','Join lobby','Synchronize questions','Validate answers','Review scores'], tech:['React','Vite','Tailwind CSS','Node.js','Express','Socket.IO','MongoDB','Redis','PWA'], results:['Delivered a complete offline practice path and tested real-time room lifecycle.','Supported one-player room start for demos and solo validation while retaining multiplayer behavior.'], learned:'Real-time products are state machines with interfaces attached. Clear ownership, idempotent events, and offline fallbacks matter more than animation polish.', links:[]
  },
  {
    id:'honkai-nlp', title:'Honkai: Star Rail NLP Analysis', subtitle:'Understanding fictional worlds through dialogue data', featured:true, depth:'full', accent:'orange', categories:['Data & Analytics','Research'], tags:['NLP','TF-IDF','Topic Modeling','Data Visualization'], role:'Data analysis, modeling, and narrative interpretation', type:'UCLA Digital Humanities / Data project', cover:'assets/images/dialogue-distribution.png',
    summary:'A chapter-level language analysis comparing vocabulary, themes, and linguistic signals across the game’s fictional worlds.', context:'Game dialogue is both narrative content and behavioral data. The project asked whether chapter settings could be distinguished by their vocabulary and thematic structure.', problem:'Chapters contained very different amounts of dialogue, so raw frequency could make the largest chapter look the most distinctive even when it was only more verbose.', built:['Cleaned and structured 25,664 dialogue rows across five chapters and retained 79 speakers.','Compared unigram, normalized bigram, distinctive-vocabulary, and topic-modeling signals.','Built a class-balanced TF-IDF + Linear SVM classifier and inspected minority-class performance rather than relying only on aggregate accuracy.','Translated quantitative patterns into a readable narrative-analysis report.'], process:['Clean corpus','Tokenize','Explore frequency','Normalize bigrams','Model topics','Build TF-IDF + SVM'], tech:['Python','Pandas','NLP','TF-IDF','Bigrams','LDA','Linear SVM','Visualization'], results:['Produced a structured corpus and repeatable chapter-comparison pipeline.','The executed classifier reached 0.744 accuracy, 0.694 macro F1, and 0.745 weighted F1.','Identified class imbalance and chapter-volume bias as material limits on interpretation.'], learned:'Method choice changes the story. Normalized bigrams, TF-IDF, and class-level evaluation helped separate distinctive language from language that was merely frequent.', links:[]
  },
  {
    id:'ai-image-memory', title:'AI-Generated Images & Memorability', subtitle:'Experimental research on image origin, labels, and recognition memory', featured:true, depth:'full', accent:'pink', categories:['Research','AI Product'], tags:['HCI','Experiment Design','Generative AI','ANOVA'], role:'Experimental design, analysis, and interpretation · Group research', type:'UCLA Cognitive Science research', cover:'assets/images/experiment-results.png',
    summary:'A 2 × 2 within-subjects experiment testing whether AI-generated imagery and source labels shape immediate and delayed recognition.', context:'As synthetic images become common, product teams need to understand not only whether users can identify them, but how image origin and labeling affect memory and trust.', problem:'A compelling descriptive pattern can easily be overclaimed. The study needed separate variables, immediate and delayed outcomes, and disciplined interpretation of main and interaction effects.', built:['Operationalized image origin, labeling condition, and recognition accuracy.','Built a controlled set of AI-generated and real-image stimuli.','Used PsychoPy to run recognition tasks with 21 UCLA participants.','Separated robust findings from exploratory or non-significant effects.'], process:['Define variables','Prepare stimuli','Run 2 × 2 study','Collect recognition data','Test effects','Bound the claim'], tech:['PsychoPy','Experimental Design','Repeated Measures','Statistical Testing','Data Visualization'], results:['The recorded study included 21 participants in a 2 × 2 within-subjects design.','Project materials report a delayed image-type effect (p = .002); label and interaction effects were not treated as equally robust claims.'], learned:'Good AI product research includes knowing what not to claim. Evidence strength should shape both product decisions and public language.', links:[]
  },
  {id:'image-authenticity',title:'Image Tampering & AI Recognition',subtitle:'Product framing for visual-content authenticity',categories:['AI Product','Research'],tags:['Computer Vision','Trust & Safety','AI Detection'],role:'Research and product exploration',type:'Computer vision / AI product study',summary:'Explores how AI systems can help people assess whether visual content is authentic, edited, or generated.',context:'Modern editing and generation tools make visual provenance hard to judge.',problem:'A detector score alone does not tell users what evidence to trust or what action to take.',built:['Reframed model detection as an explainable user decision.','Mapped confidence, provenance cues, and review states.'],process:['Inspect','Detect','Explain','Escalate'],tech:['Computer Vision','Classification','Trust UX'],results:['Produced a product concept connecting model output to user-facing evidence and uncertainty.'],learned:'Detection products need calibrated uncertainty and clear next actions.',links:[]},
  {id:'chinese-dialect',title:'Chinese Dialect Computational Analysis',subtitle:'Mapping Dalian dialect similarity with lexical distance',categories:['Research','Data & Analytics'],tags:['Computational Linguistics','MDS','Clustering'],role:'Computational analysis and visualization',type:'Linguistics research',summary:'A data-driven comparison of Dalian with other Chinese dialect regions.',context:'Dialect relationships are often explained historically; computational measures offer a complementary empirical view.',problem:'Lexical distance must be summarized without erasing regional nuance.',built:['Computed ASJP-LDND lexical distance.','Built a heatmap, multidimensional scaling view, and dendrogram.'],process:['Normalize lexicon','Compute distance','Project dimensions','Cluster','Interpret'],tech:['Python','ASJP-LDND','MDS','Hierarchical Clustering'],results:['The analysis indicated strong similarity between Dalian and Jiaodong regions including Yantai and Weihai.'],learned:'Multiple visual encodings are essential when one projection can distort distance.',links:[]},
  {id:'interpersonal-dynamics',title:'Interpersonal Dynamics Research',subtitle:'Measuring synchrony in cooperative and argumentative interaction',categories:['Research','Data & Analytics'],tags:['Behavioral Data','Statistics','Human Interaction'],role:'Behavioral coding and statistical analysis',type:'Cognitive Science research',summary:'Compares behavioral synchrony under cooperative and argumentative conditions.',context:'Interaction quality is visible in timing and coordination, but those behaviors need consistent coding before comparison.',problem:'The challenge was connecting observed behavior to a measurable construct without overgeneralizing from a small study.',built:['Defined synchrony measures and coded interaction behavior.','Compared cooperative and argumentative conditions statistically.'],process:['Observe','Code','Aggregate','Compare','Interpret'],tech:['Behavioral Coding','Statistical Testing','Research Design'],results:['Recorded synchrony was 67.65% in cooperative interaction and 23.21% in argumentative interaction, with p = .030 in the project analysis.'],learned:'A significant difference still needs context, sample limits, and a defensible operational definition.',links:[]},
  {id:'airline-ux',title:'Airline Booking UX Redesign',subtitle:'Reducing friction in the trip-search journey',categories:['UX & Engineering'],tags:['UX','Information Architecture','Responsive Design'],role:'UX research and interaction design',type:'Product redesign',summary:'A responsive booking-flow redesign focused on trip entry, passenger selection, class, and search clarity.',context:'The existing interface dispersed high-frequency booking inputs and weakened action hierarchy.',problem:'Users needed one coherent search task rather than a series of unrelated form decisions.',built:['Reorganized navigation around Book Trip.','Unified origin, destination, dates, passengers, and class around a single Search Now action.'],process:['Audit','Prioritize','Wireframe','Prototype','Refine'],tech:['Figma','Information Architecture','Interaction Design'],results:['Produced a clearer responsive flow and before/after rationale.'],learned:'Reducing cognitive switching can matter more than reducing the raw number of fields.',links:[]},
  {id:'deportation-data',title:'Deportation Data Storytelling',subtitle:'Historical data, power, and public interpretation',categories:['Data & Analytics','Research','UX & Engineering'],tags:['Data Storytelling','Tableau','Digital Humanities'],role:'Data Visualization Specialist and Web Manager · Team project',type:'UCLA DH101',summary:'An evidence-led data story examining U.S. deportation patterns across time and demographic categories.',context:'Historical administrative data carries gaps, bias, and harmful categories that require explanation alongside visualization.',problem:'The site had to make patterns legible without presenting archival labels as neutral truth.',built:['Cleaned and selected data for public-facing charts.','Designed and developed the project website and embedded visualizations.'],process:['Audit data','Clean','Visualize','Contextualize','Publish'],tech:['HTML','CSS','JavaScript','Tableau','Data Cleaning'],results:['Delivered a collaborative data website with interactive visual analysis and explicit data limitations.'],learned:'Data storytelling is an editorial responsibility, not only a charting task.',links:[]},
  {id:'spotify-api',title:'Spotify / API Data Project',subtitle:'From nested responses to usable music data',categories:['Data & Analytics','UX & Engineering'],tags:['API','JSON','Data Processing'],role:'API integration and data processing',type:'Mini project',summary:'Retrieves, cleans, and transforms music metadata into an analysis-ready structure.',context:'Public APIs return nested objects optimized for transport, not necessarily for comparison or product display.',problem:'The task was to normalize useful fields while handling missing values and request limits.',built:['Integrated music search and metadata endpoints.','Flattened nested JSON into reusable records.'],process:['Query','Validate','Transform','Analyze'],tech:['Spotify API','Python','JSON','Data Cleaning'],results:['Created a repeatable API-to-table workflow.'],learned:'API contracts and failure states are part of the product experience.',links:[]},
  {id:'cs144-web',title:'CS144 Full-stack / WebAssembly',subtitle:'Performance-minded web systems',categories:['UX & Engineering'],tags:['Full-stack','WebAssembly','Web APIs'],role:'Full-stack engineering',type:'Course engineering project',summary:'A web engineering project exploring client-server architecture and browser-native performance tools.',context:'Interactive applications need clear boundaries between presentation, computation, and persistence.',problem:'The project focused on translating system concepts into reliable browser behavior.',built:['Implemented end-to-end web flows.','Integrated WebAssembly for targeted client-side computation.'],process:['Design interface','Build API','Connect state','Optimize','Test'],tech:['JavaScript','WebAssembly','Web APIs','Full-stack'],results:['Delivered a working system and documented the architecture.'],learned:'Optimization should follow measured bottlenecks and preserve debuggability.',links:[]},
  {id:'kze-marketing',title:'KZE Marketing Analytics',subtitle:'Creator selection and campaign performance',categories:['Data & Analytics'],tags:['Marketing Analytics','ROI','Audience Insights'],role:'Data Analyst Intern',type:'KZE Group',summary:'Analysis of creator profiles, engagement behavior, and campaign performance to support influencer selection.',context:'Creator decisions combined inconsistent audience, content, and campaign metrics.',problem:'The team needed comparable features and a decision framework rather than a spreadsheet of raw counts.',built:['Cleaned and analyzed 500+ creator profiles.','Identified eight engagement patterns and supported creator matching.'],process:['Clean','Define metrics','Segment','Compare','Recommend'],tech:['Python','Pandas','NumPy','Excel'],results:['Internship records report improved ROI and lower cost per engagement after optimization.'],learned:'Marketing metrics become useful only when tied to a concrete selection or allocation decision.',links:[]},
  {id:'soul-mate-bridal',title:'Soul Mate Bridal UX & Web Growth',subtitle:'A clearer path from discovery to enquiry',categories:['UX & Engineering','Data & Analytics'],tags:['UX','SEO','Conversion'],role:'Marketing & Web Design Intern',type:'Astral Culture Media',summary:'A conversion-focused redesign of the discovery and contact journey for a bridal service.',context:'Potential clients arrived through search and social channels but encountered friction before submitting an enquiry.',problem:'Content, form structure, and CTA hierarchy needed to work as one funnel.',built:['Reviewed 50+ competitors and user behavior.','Redesigned contact flows and supported SEO and landing-page experiments.'],process:['Research','Map funnel','Redesign','Experiment','Monitor'],tech:['UX Research','SEO','A/B Testing','Web Design'],results:['Internship records report a 15% lead-conversion increase and 25% organic-search growth.'],learned:'Growth work is strongest when acquisition, interface, and measurement share the same journey model.',links:[]}
];

// 中文备注：每个项目的 Case Study 都补充数据分析问题、数据输入、分析步骤与决策输出。
const CASE_ANALYSIS = {
  'shopping-copilot': {
    analysisQuestion:'How can conversation data reveal when the agent should clarify, retrieve, rerank, or recommend?',
    dataInputs:['50,000-product frozen catalog','200 labeled public sessions','Turn-level user messages and agent outputs','Scenario labels: Buying, Browsing, Intent Override, Boundary'],
    analysisProcess:[
      {title:'Structure each turn',body:'Converted free-text requests into intent, hard constraints, soft preferences, exclusions, no-preference signals, and state transitions.'},
      {title:'Segment behavior',body:'Compared sessions by scenario so an average score could not hide failures in override, boundary, or exploratory browsing cases.'},
      {title:'Measure retrieval quality',body:'Tracked HitRate@K and MRR to test whether the hidden target appeared and how highly it ranked; MTTC captured how many turns the agent needed.'},
      {title:'Diagnose failures',body:'Reviewed paraphrases, typos, vague replies, negation, and stale constraints. One audit found “up to 30mm” being misread as a price ceiling.'},
      {title:'Turn findings into policy',body:'Used confidence, constraint coverage, repeated questions, and recommendation stagnation to decide the next action.'}
    ],
    analysisOutcome:'The analysis connected evaluation metrics to dialogue policy: low coverage triggers clarification, strong evidence triggers ranking, and detected overrides remove stale context before retrieval.',
    productOutcome:'Delivered the Conversation State Management layer for a multi-turn shopping copilot that can preserve preferences, resolve intent changes, and support recommendation over a frozen 50,000-product catalog.',
    limitations:'Public development sessions are useful for iteration but do not represent every real shopping behavior. Team-level evaluation results are kept separate from my documented Conversation State Management contribution.'
  },
  'enterprise-ai-auditing': {
    analysisQuestion:'Which parts of enterprise report review can be checked consistently by rules, and which require retrieved evidence or expert judgment?',
    dataInputs:['Enterprise reports','Policies and regulations','Industry standards and technical catalogs','Historical reports and review comments'],
    analysisProcess:[
      {title:'Map the review workflow',body:'Decomposed manual review into element extraction, logic validation, and review-opinion generation, then identified the evidence required at each stage.'},
      {title:'Structure review elements',body:'Converted report content into checkable fields such as policy references, technical parameters, energy-efficiency indicators, and carbon-emission values.'},
      {title:'Separate rule and retrieval checks',body:'Assigned deterministic thresholds and required-field checks to the Rule Engine, while contextual questions retrieved supporting passages through RAG.'},
      {title:'Compare claims with evidence',body:'Linked generated findings to regulations, standards, historical cases, and technical catalogs so reviewers could inspect the basis of each issue.'},
      {title:'Review exceptions',body:'Routed ambiguous, conflicting, or high-impact cases to Human-in-the-Loop checkpoints instead of forcing an automated conclusion.'}
    ],
    analysisOutcome:'The data analysis produced a traceable review path: extracted element → applicable evidence → rule or logic check → review suggestion → human confirmation.',
    productOutcome:'Produced the product architecture for an auditable review workspace combining structured extraction, a Rule Engine, RAG evidence retrieval, review suggestions, and Human-in-the-Loop approval.',
    limitations:'The 60%+ efficiency improvement comes from internship records. Review accuracy depends on document quality, knowledge-base freshness, and expert validation of edge cases.'
  },
  'carbon-data-platform': {
    analysisQuestion:'How can fragmented carbon-project records become consistent enough for lifecycle monitoring and market analysis?',
    dataInputs:['CCER, VCS, and Gold Standard project records','Project names and unstructured descriptions','Policies, methodologies, energy-use and emission-reduction fields','Carbon-market transaction data'],
    analysisProcess:[
      {title:'Profile source quality',body:'Compared field names, formats, missing values, units, and duplicate patterns across mechanisms before defining a common schema.'},
      {title:'Clean and standardize',body:'Normalized project identifiers, dates, reduction units, mechanism names, and lifecycle statuses so records could be compared consistently.'},
      {title:'Enrich location data',body:'Used an administrative-division dictionary and NLP matching to extract province and city from unstructured project names and descriptions.'},
      {title:'Validate records',body:'Applied completeness, format, range, and cross-field consistency checks; exceptions remained visible for manual review.'},
      {title:'Build decision views',body:'Organized governed fields into SugarBI views for project tracking, policy and methodology queries, regional comparison, and market analysis.'}
    ],
    analysisOutcome:'The analysis moved the product from scattered records to a governed data layer that supports consistent filtering, comparison, monitoring, and BI reporting.',
    productOutcome:'Built a governed carbon-data foundation and SugarBI decision views for lifecycle tracking, policy and methodology lookup, regional comparison, and market monitoring.',
    limitations:'Automated geographic extraction still needs exception handling for ambiguous place names. Reported accuracy improvement and record counts are based on internship materials rather than an independently rerun audit.'
  },
  'linguaplay': {
    analysisQuestion:'How can product-state and test data verify that offline practice and real-time rooms behave consistently?',
    dataInputs:['Vocabulary sets and term-definition pairs','Room, player, question, answer, and score states','Socket.IO event sequences','Integration, browser, and offline test outcomes'],
    analysisProcess:[
      {title:'Model the learning flow',body:'Defined the states for choosing a set, joining or creating a room, waiting, playing, scoring, and ending a session.'},
      {title:'Validate content data',body:'Checked custom and built-in sets for usable pair counts, unique entries, and stable term-definition matching before play.'},
      {title:'Trace event sequences',body:'Observed room creation, six-digit joins, host start, question broadcast, answer submission, score update, and game completion as one lifecycle.'},
      {title:'Test failure paths',body:'Compared online and offline behavior, duplicate answers, disconnects, and one-player start to find state transitions that could stall the game.'},
      {title:'Refine product rules',body:'Changed the start rule and interface together so a host could validate a live room alone while multiplayer remained available.'}
    ],
    analysisOutcome:'The analysis treated the game as observable state transitions, making it possible to verify the complete learning loop instead of checking isolated screens.',
    productOutcome:'Delivered a playable local-first vocabulary product with built-in and custom sets, offline practice, six-digit real-time rooms, scoring, progress history, leaderboards, and a host flow that can start with one player.',
    limitations:'This process validates functional behavior and state integrity; it does not yet measure long-term vocabulary retention or classroom learning outcomes.'
  },
  'honkai-nlp': {
    analysisQuestion:'Which linguistic signals distinguish the five narrative worlds in Honkai: Star Rail, and how reliable are those differences?',
    dataInputs:['25,664 cleaned dialogue rows','79 retained speakers','Five chapter/world labels','Speaker, chapter, and dialogue-text fields'],
    analysisProcess:[
      {title:'Clean the corpus',body:'Removed unusable rows, normalized text and labels, and preserved utterance boundaries so bigrams would not cross unrelated dialogue lines.'},
      {title:'Explore composition',body:'Compared dialogue volume, speaker coverage, frequent terms, and normalized bigram rates across chapters to identify imbalance before modeling.'},
      {title:'Extract narrative signals',body:'Used distinctive vocabulary, within-utterance bigrams, POS patterns, and chunk-based LDA to compare themes and language styles.'},
      {title:'Build the classifier',body:'Created class-balanced TF-IDF features and trained a Linear SVM to predict chapter labels from dialogue text.'},
      {title:'Evaluate by class',body:'Reviewed accuracy, macro F1, weighted F1, and the confusion matrix so smaller chapters were not hidden by the overall score.'}
    ],
    analysisOutcome:'The executed notebook reached 0.744 accuracy, 0.694 macro F1, and 0.745 weighted F1. The gap between overall and macro performance showed that chapter imbalance remained an important interpretation limit.',
    productOutcome:'Delivered a fully executed, reproducible narrative-analytics notebook and visual report that lets readers compare vocabulary, topics, and classification behavior across five fictional worlds.',
    limitations:'Dialogue volume and speaker distribution differ by chapter. The model identifies linguistic association, not authorial intent or causal narrative influence.'
  },
  'ai-image-memory': {
    analysisQuestion:'Do image origin and AI-source labels change immediate or delayed recognition memory?',
    dataInputs:['21 UCLA participants','AI-generated and real-image stimuli','Labeled and unlabeled conditions','Immediate and delayed recognition responses'],
    analysisProcess:[
      {title:'Operationalize variables',body:'Defined image origin and label condition as within-subject factors, with recognition accuracy measured at immediate and delayed time points.'},
      {title:'Prepare comparable stimuli',body:'Built controlled AI-generated and real-image sets and balanced presentation conditions to reduce ordering and exposure effects.'},
      {title:'Collect behavioral data',body:'Used PsychoPy to record participant responses under the four 2 × 2 conditions.'},
      {title:'Compare effects',body:'Calculated descriptive differences and tested image-type, label, and interaction effects separately for immediate and delayed recognition.'},
      {title:'Bound the conclusion',body:'Distinguished the supported delayed image-type effect from weaker label and interaction patterns that require more evidence.'}
    ],
    analysisOutcome:'Project materials report a delayed image-type effect at p = .002. The analysis supports a difference in delayed recognition, while avoiding a broader claim that labels or AI images always improve memory.',
    productOutcome:'Produced an experimental research package and evidence-based design guidance for teams deciding when AI-origin labels or image-source cues should appear in visual experiences.',
    limitations:'The sample was small and drawn from UCLA students. Stimulus style may partly explain memorability, so broader image categories and preregistered replication would strengthen the conclusion.'
  },
  'image-authenticity': {
    analysisQuestion:'How should model confidence and visual evidence be combined so users can judge image authenticity?',
    dataInputs:['Authentic, edited, and AI-generated image examples','Model confidence outputs','Visual provenance and manipulation cues'],
    analysisProcess:[
      {title:'Define the decision',body:'Separated “classify an image” from the user decision of whether to trust, review, or escalate the content.'},
      {title:'Compare evidence',body:'Organized model confidence, provenance metadata, and visible manipulation cues into complementary evidence types.'},
      {title:'Map uncertainty',body:'Designed states for high-confidence findings, conflicting signals, and insufficient evidence.'},
      {title:'Translate to action',body:'Connected each state to an explanation and next step rather than displaying a binary detector score.'}
    ],
    analysisOutcome:'The analysis produced a Trust & Safety decision framework for presenting detection evidence and uncertainty.',
    productOutcome:'Created a Trust & Safety product concept that turns detector outputs into explainable evidence states, calibrated uncertainty, and clear review or escalation actions.',
    limitations:'This is a product and research exploration; model performance has not been validated on a production-scale benchmark.'
  },
  'chinese-dialect': {
    analysisQuestion:'Which Chinese dialect groups are lexically closest to Dalian, and does that relationship stay visible across methods?',
    dataInputs:['Standardized dialect word lists','ASJP phonetic representations','Regional dialect labels'],
    analysisProcess:[
      {title:'Normalize the lexicon',body:'Aligned comparable meanings and cleaned phonetic entries before distance calculation.'},
      {title:'Calculate distance',body:'Applied ASJP-LDND to quantify pairwise lexical distance between dialect samples.'},
      {title:'Visualize structure',body:'Used a heatmap for pairwise comparison, MDS for spatial similarity, and a dendrogram for hierarchical grouping.'},
      {title:'Cross-check interpretation',body:'Compared patterns across all three views to avoid relying on distortions from a single projection.'}
    ],
    analysisOutcome:'Dalian consistently appeared close to Jiaodong regions, particularly Yantai and Weihai, across the project visualizations.',
    productOutcome:'Delivered a comparative linguistic analysis with a distance matrix, heatmap, MDS projection, and dendrogram that make regional similarity inspectable from multiple views.',
    limitations:'Lexical distance captures one dimension of dialect similarity and does not fully represent syntax, tone, migration history, or within-region variation.'
  },
  'interpersonal-dynamics': {
    analysisQuestion:'Does behavioral synchrony differ between cooperative and argumentative interactions?',
    dataInputs:['Recorded interaction sessions','Condition labels','Behavioral synchrony coding'],
    analysisProcess:[
      {title:'Define synchrony',body:'Translated observable timing and coordination into a consistent coding rule.'},
      {title:'Code interactions',body:'Applied the same behavioral criteria to cooperative and argumentative sessions.'},
      {title:'Aggregate by condition',body:'Calculated synchrony rates within each interaction type before comparing groups.'},
      {title:'Test the difference',body:'Used statistical comparison to evaluate whether the observed condition gap was unlikely under the null hypothesis.'}
    ],
    analysisOutcome:'The project recorded 67.65% synchrony for cooperative interaction and 23.21% for argumentative interaction, with p = .030.',
    productOutcome:'Produced a coded behavioral dataset and statistical research report that operationalize interaction synchrony for repeatable comparison between social conditions.',
    limitations:'The operational definition, sample size, and interaction context limit generalization beyond the recorded study.'
  },
  'airline-ux': {
    analysisQuestion:'Where does the booking interface create unnecessary decision effort before a user can search for a trip?',
    dataInputs:['Existing booking interface','Task-flow observations','Competitor booking patterns','Form and navigation structure'],
    analysisProcess:[
      {title:'Audit the flow',body:'Mapped the steps and controls required to enter trip details, passengers, class, and search criteria.'},
      {title:'Identify friction',body:'Flagged dispersed inputs, weak action hierarchy, and context switching between navigation and form decisions.'},
      {title:'Compare patterns',body:'Reviewed how competing booking tools group high-frequency decisions and signal the primary CTA.'},
      {title:'Redesign and inspect',body:'Reorganized the flow around Book Trip and reviewed the before/after path for clarity and responsive use.'}
    ],
    analysisOutcome:'The redesign grouped the full search task around one information hierarchy and a single Search Now action.',
    productOutcome:'Delivered a responsive booking-flow prototype that unifies route, date, passenger, and cabin decisions around one clear primary action.',
    limitations:'The project demonstrates an interaction rationale; production conversion impact would require instrumented usability or funnel testing.'
  },
  'deportation-data': {
    analysisQuestion:'What patterns in historical U.S. deportation records can be communicated without treating archival categories as neutral facts?',
    dataInputs:['Historical deportation records, 1893–1921','Year, demographic, and categorical fields','Archival source documentation'],
    analysisProcess:[
      {title:'Audit the archive',body:'Reviewed missing values, historical terminology, category definitions, and the limits of administrative records.'},
      {title:'Clean for comparison',body:'Standardized selected fields and prepared time and distribution measures for public visualization.'},
      {title:'Explore patterns',body:'Compared changes over time and demographic distributions to identify patterns worth contextualizing.'},
      {title:'Design the story',body:'Connected interactive Tableau views with explanatory copy and data limitations on the website.'}
    ],
    analysisOutcome:'The final team site paired interactive trends with historical context, while my verified role covered data visualization and web management.',
    productOutcome:'Published a collaborative data-storytelling website with embedded Tableau analysis, historical interpretation, and visible documentation of archival limitations.',
    limitations:'Archival categories reflect the institutions that produced the records. Missingness and historical labels limit modern interpretation.'
  },
  'spotify-api': {
    analysisQuestion:'How can nested music API responses be transformed into a reliable table for search and comparison?',
    dataInputs:['Spotify API search responses','Track, artist, album, and popularity metadata','Nested JSON objects and missing fields'],
    analysisProcess:[
      {title:'Inspect the API contract',body:'Identified stable identifiers, nested relationships, pagination, and optional fields.'},
      {title:'Flatten records',body:'Converted nested track, album, and artist objects into analysis-ready rows.'},
      {title:'Validate quality',body:'Checked missing values, duplicates, data types, and response errors before comparison.'},
      {title:'Prepare analysis',body:'Selected reusable fields for search results, descriptive summaries, and downstream visualization.'}
    ],
    analysisOutcome:'The project created a repeatable path from API response to usable music dataset.',
    productOutcome:'Built a reusable API-to-table workflow that converts nested music metadata into validated records ready for search, comparison, and visualization.',
    limitations:'API availability, authorization, request limits, and platform-defined popularity measures constrain the analysis.'
  },
  'cs144-web': {
    analysisQuestion:'Which parts of an interactive web flow benefit from client-side computation, and how can their behavior be verified?',
    dataInputs:['Client-server request and response states','Browser runtime behavior','WebAssembly integration outcomes'],
    analysisProcess:[
      {title:'Map system boundaries',body:'Separated interface state, server responsibilities, and candidate client-side computation.'},
      {title:'Trace data flow',body:'Followed inputs through requests, processing, responses, and rendered output.'},
      {title:'Inspect runtime behavior',body:'Compared correctness and integration behavior before and after the WebAssembly path.'},
      {title:'Verify end to end',body:'Tested the complete browser flow rather than treating the optimized function in isolation.'}
    ],
    analysisOutcome:'The analysis connected architecture choices to observable application behavior and documented the integration boundary.',
    productOutcome:'Delivered a working full-stack browser system with a documented client-server boundary and a targeted WebAssembly computation path.',
    limitations:'The project demonstrates engineering analysis; production-scale performance claims would require controlled benchmarks.'
  },
  'kze-marketing': {
    analysisQuestion:'Which creator and engagement patterns best support influencer selection and campaign allocation?',
    dataInputs:['500+ TikTok creator profiles','Audience and engagement metrics','Campaign cost and conversion records'],
    analysisProcess:[
      {title:'Clean creator data',body:'Standardized account, audience, engagement, and campaign fields and checked inconsistent or missing values.'},
      {title:'Define comparable metrics',body:'Calculated engagement, reach, ROI, and cost-per-engagement measures instead of ranking creators by follower count alone.'},
      {title:'Segment performance',body:'Compared creator profiles and identified eight recurring engagement patterns.'},
      {title:'Support selection',body:'Translated the analysis into creator matching and campaign-allocation recommendations.'}
    ],
    analysisOutcome:'Internship materials report higher ROI, lower cost per engagement, and improved reach after the optimization work.',
    productOutcome:'Created a creator-selection and campaign-allocation framework from 500+ profiles and eight engagement patterns, supporting more comparable influencer decisions.',
    limitations:'Reported business outcomes were not independently rerun for this portfolio, and campaign results may also reflect creative, timing, and budget changes.'
  },
  'soul-mate-bridal': {
    analysisQuestion:'Where do prospective clients leave the journey between discovery and submitting an enquiry?',
    dataInputs:['Website funnel and user-behavior observations','Contact-form structure','50+ competitor examples','SEO and landing-page experiment results'],
    analysisProcess:[
      {title:'Map the funnel',body:'Connected traffic sources, landing pages, service content, contact actions, and form completion into one journey.'},
      {title:'Locate friction',body:'Reviewed drop-off points, content gaps, form effort, and weak CTA hierarchy.'},
      {title:'Benchmark competitors',body:'Compared acquisition, information structure, content strategy, and enquiry flows across more than 50 examples.'},
      {title:'Test changes',body:'Supported landing-page, SEO, and contact-flow changes and monitored conversion-related outcomes.'}
    ],
    analysisOutcome:'Internship records report 15% higher lead conversion and 25% organic-search growth following the combined optimization work.',
    productOutcome:'Delivered an integrated growth improvement across landing-page structure, contact flow, CTA hierarchy, and SEO content, with the recorded program outcomes shown separately from any single design change.',
    limitations:'The recorded outcomes reflect a combined program of UX, content, and SEO changes, so they should not be attributed to one interface change alone.'
  }
};

// 中文备注：把分析内容合并到原项目记录，首页和详情页继续共用一个数据源。
window.PROJECTS = window.PROJECTS.map((project) => ({
  ...project,
  ...(CASE_ANALYSIS[project.id] || {})
}));
