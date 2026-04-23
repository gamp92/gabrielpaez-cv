// =====================================================================
// SITE DATA — single source of truth for all CV content.
// Edit values here and they propagate across the site, sitemap, SEO meta,
// and Schema.org JSON-LD.
// =====================================================================

export const SITE = {
  // Personal
  name: 'Gabriel Paez',
  initials: 'GP',
  title: 'Software Quality Engineer',
  tagline: 'Test Automation · CI/CD · AI Testing',
  location: 'Mexico City, MX',
  available: true,
  availableFor: 'Senior QA, QA Lead & Engineering Manager roles · Remote-first',

  // Contact
  email: 'gabrielpaezm@gmail.com',
  phone: '+52 5581067702',
  linkedin: 'https://www.linkedin.com/in/gabrielpaez92',
  github: 'https://github.com/gamp92',

  // Domain (update when purchased)
  domain: 'https://gabrielpaez.dev',

  // SEO
  seoTitle: 'Gabriel Paez — Software Quality Engineer | Test Automation & AI Testing',
  seoDescription:
    'Software Quality Engineer with 5+ years at Qualtrics and Aspen Technology. M.Sc. Chemical Engineer specialized in Python test automation, CI/CD pipelines, and AI-powered testing tools. ISTQB certified, available for senior QA and QA Lead roles, remote-first across UK, EU, and US.',
  seoKeywords: [
    'Software Quality Engineer',
    'QA Engineer',
    'QA Lead',
    'Test Automation',
    'AI Testing',
    'Python Testing',
    'Selenium',
    'Pytest',
    'CI/CD',
    'Jenkins',
    'ISTQB',
    'SDET',
    'Remote QA',
    'Gabriel Paez',
  ],

  // Cloudflare Web Analytics token — paste yours after deploying.
  // Get it from: https://dash.cloudflare.com → Analytics & Logs → Web Analytics → Add a site
  cfAnalyticsToken: '', // e.g. 'a1b2c3d4e5f6...'
};

// =====================================================================
// HEADLINE METRICS — KPI cards at top of page
// =====================================================================
export const METRICS = [
  { value: '92%', label: 'Test Pass Rate', detail: 'Improved from 70% via automation' },
  { value: '$16.8K', label: 'Monthly Savings', detail: 'Contact History Archive testing' },
  { value: '15+', label: 'Features Shipped', detail: 'EAs / GAs incl. AI capabilities' },
  { value: '5+', label: 'Years in QE', detail: 'Qualtrics · Aspen Technology' },
];

// =====================================================================
// EXPERIENCE — chronological reverse
// =====================================================================
export const EXPERIENCE = [
  {
    company: 'Qualtrics',
    role: 'Software Test Engineer II',
    period: 'May 2024 — Present',
    location: 'Mexico City',
    bullets: [
      'Own end-to-end quality engineering for 6 product areas; only team member with comprehensive expertise across all XMD products. Delivered 15+ complex features (EAs/GAs) including AI-powered capabilities.',
      'Improved test pass rates from 70% to 90–92% through automation. Advanced CI/CD pipelines for 4 microservices with automated testing in Spinnaker.',
      'Took ownership of Test Plan AI tool and AI Test Run Analyzer, leading the Kaizen initiative that achieved org-wide adoption and accelerated test failure analysis.',
      'Led Contact History Archive testing initiative resulting in $16,829/month cost savings. Conducted quarterly Second-Level Analysis on 61+ customer incidents.',
      'Completed QE AI Upscale program; certified interviewer mentoring new team members through onboarding and feature delivery.',
    ],
    stack: ['Python', 'KIT (Selenium/Pytest)', 'Jenkins', 'GitLab', 'Qase', 'Cursor AI', 'BrowserStack', 'Spinnaker'],
  },
  {
    company: 'Aspen Technology',
    role: 'Software QE II & Scrum Master',
    period: 'Jul 2023 — May 2024',
    location: 'Mexico City',
    bullets: [
      'Quality lead for the first release of a new web application in the Aspen Unified Sustainability platform — zero issues across milestones.',
      'Developed and executed 90+ comprehensive test cases covering features, performance, and AI assistant functionality. Orchestrated Alpha and Beta release cycles with customer environment validation.',
      'Selected as Scrum Master: PI planning, feature grooming, daily stand-ups, coordinating cross-functional teams across multiple locations.',
      'Implemented Behavior-Driven Development; created 20 automated test scripts using SpecFlow and C#. Mentored a team of two QEs across Shanghai and Mexico offices.',
      'Only QE from Mexico to present at the AspenTech Tech Summit 2023 in Houston — won the People\'s Choice Award.',
    ],
    stack: ['SpecFlow', 'C#', 'Azure DevOps', 'BDD'],
  },
  {
    company: 'Aspen Technology',
    role: 'Software Quality Engineer',
    period: 'Jan 2023 — Jul 2023',
    location: 'Mexico City',
    bullets: [
      'Manual and automated testing of software applications, identifying and reporting defects.',
      'Developed automated test scripts using SpecFlow and C#.',
      'Ensured quality and reliability of software installations in cloud environments.',
      'Collaborated with cross-functional teams under SAFe framework.',
    ],
    stack: ['SpecFlow', 'C#', 'SAFe'],
  },
  {
    company: 'Aspen Technology',
    role: 'Technical Support Engineer',
    period: 'Jan 2021 — Jan 2023',
    location: 'Mexico City',
    bullets: [
      'Technical consulting, sales engineering, and support for global clients across NALA and EURA regions.',
      'Direct collaboration with R&D, QA, and Product Managers on defect triages and product enhancements.',
      'Recognized as top performer for driving adoption of Aspen Basic Engineering with key accounts.',
      'Product Champion for Aspen HYSYS, Petroleum Refining, and Aspen Basic Engineering — supporting Aspen Plus and Flare System Analyzer.',
      'Resolved customer issues through direct collaboration with Tier-1 petrochemical companies.',
    ],
    stack: ['HYSYS', 'Aspen Plus', 'Refining', 'ABE'],
  },
];

// =====================================================================
// SKILLS — grouped for scannability
// =====================================================================
export const SKILLS = [
  {
    category: 'Test Automation',
    items: ['Python', 'Selenium', 'Pytest', 'KIT Framework', 'SpecFlow', 'C#'],
  },
  {
    category: 'CI/CD & DevOps',
    items: ['Jenkins', 'GitLab CI', 'Azure DevOps', 'Spinnaker'],
  },
  {
    category: 'AI & Tooling',
    items: ['AI Testing', 'Prompt Engineering', 'Cursor AI', 'Claude'],
  },
  {
    category: 'Testing Methodologies',
    items: ['Manual', 'Automated', 'API', 'Accessibility', 'Configuration', 'Globalization'],
  },
  {
    category: 'Platforms & Tools',
    items: ['BrowserStack', 'Qase', 'TestRail', 'JIRA', 'AspenTech Suite'],
  },
  {
    category: 'Methodologies & Leadership',
    items: ['ISTQB Foundations', 'Agile / Scrum', 'SAFe', 'BDD', 'Mentoring'],
  },
];

// =====================================================================
// FEATURED WORK — public GitHub repos only.
// Add cheme-calc here when ready.
// =====================================================================
export const PROJECTS = [
  {
    name: 'weather-dashboard',
    description: 'Angular 19 weather dashboard — real-time conditions and forecast using the Open-Meteo API.',
    stack: ['Angular 19', 'TypeScript', 'Open-Meteo API'],
    url: 'https://github.com/gamp92/weather-dashboard',
    type: 'frontend',
  },
  {
    name: 'Pokemon-Group',
    description: 'JavaScript group project — Pokémon-themed application built collaboratively.',
    stack: ['JavaScript'],
    url: 'https://github.com/gamp92/Pokemon-Group',
    type: 'web',
  },
  {
    name: 'angular_test',
    description: 'Angular sandbox — exploration of framework patterns and component architecture.',
    stack: ['Angular', 'TypeScript'],
    url: 'https://github.com/gamp92/angular_test',
    type: 'sandbox',
  },
];

// =====================================================================
// EDUCATION & CERTIFICATIONS
// =====================================================================
export const EDUCATION = [
  {
    institution: 'Universidad Nacional Autónoma de México',
    degree: 'M.Sc. Chemical and Process Engineering',
    period: '2017 — 2019',
    detail:
      'Research on economic evaluation of hydrotreating and coking processes for heavy crudes. Developed a MATLAB model achieving $12.5 USD/barrel economic benefit. Co-authored a paper published in the Chinese Journal of Chemical Engineering (June 2023).',
  },
  {
    institution: 'Universidad de Carabobo',
    degree: 'B.S. Chemical Engineering',
    period: '2009 — 2015',
    detail:
      'Developed free software for solving thermodynamics problems in Java. Undergraduate Teaching Assistant for Computer Programming I & II (Visual Basic).',
  },
];

export const CERTIFICATIONS = [
  { name: 'ISTQB Foundations', issuer: 'ISTQB' },
  { name: 'QE AI Upscale Program', issuer: 'Qualtrics' },
];

export const LANGUAGES = [
  { name: 'English', level: 'Full professional proficiency' },
  { name: 'Spanish', level: 'Native' },
];
