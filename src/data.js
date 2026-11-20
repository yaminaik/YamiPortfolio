// All the text on the site lives here, so you can edit content without touching the layout.

export const profile = {
  name: 'Yami Naik',
  fullName: 'Yami Parjanya Naik',
  email: 'yn2224@nyu.edu', // swap for hello@yaminaik.com once you set it up
  linkedin: 'https://www.linkedin.com/in/yaminaik/',
  github: 'https://github.com/yaminaik',
    resume: '/YamiP_Naik_Resume.pdf',
}

export const studies = [
  {
    id: 'rtes',
    title: 'Real-Time Embedded Systems',
    text: 'Programming microcontrollers that read sensors and react within fixed time limits.',
    project: 'JustBreathe',
    href: '#justbreathe',
  },
  {
    id: 'dl',
    title: 'Deep Learning',
    text: 'ResNet-18 under 5M parameters, trained on CIFAR-10. Same network, a third of the size.',
    project: 'ResNet-18',
    href: '#resnet',
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    text: 'Classical models, recommendation systems and sentiment analysis, from data cleaning to evaluation.',
    project: 'BookEasy and cancer classifier',
    href: '#more',
  },
  {
    id: 'se',
    title: 'Software Engineering',
    text: 'Building production software in a team: user stories, code review, testing and continuous deployment.',
    project: 'FurBaby',
    href: '#furbaby',
  },
]

export const projects = [
  {
    id: 'justbreathe',
    art: 'breath',
    area: 'Real-Time Embedded Systems',
    context: 'NYU, Fall 2022, team of 4',
    title: 'JustBreathe',
    tagline: 'A breathing monitor for infants',
    summary:
      'A small device that watches a baby\'s breathing and raises an alarm if it slows down or stops. It counts breaths from the humidity in each exhale.',
    points: [
      'Read a Sensirion SHT40 humidity sensor over I2C on an STM32F429 Discovery board',
      'Sampled every 0.5 seconds and kept a rolling 20-second window in memory',
      'Counted a breath each time humidity crossed 79%, then checked the rate every 10 and 20 seconds',
      'Showed a yellow alert for slow breathing and a red alert for no breathing on the on-board LCD',
    ],
    stack: ['C++', 'Mbed OS', 'I2C', 'STM32', 'PlatformIO'],
    links: [{ label: 'View code on GitHub', href: 'https://github.com/yaminaik/JustBreathe' }],
  },
  {
    id: 'resnet',
    art: 'resnet',
    area: 'Deep Learning',
    context: 'NYU, team project',
    title: 'ResNet-18 under 5M parameters',
    tagline: 'Same network, a third of the size',
    summary:
      'ResNet-18 normally has about 11 million parameters. The challenge was to get the best accuracy on CIFAR-10 while staying under 5 million.',
    points: [
      'Tried different residual block layouts, channel widths, dropout and optimizers',
      'Best model used a [2, 1, 1, 1] block layout with 4.98M parameters',
      'Reached about 88% validation accuracy on CIFAR-10',
      'Tracked loss, accuracy and confusion matrices for every experiment',
    ],
    stack: ['Python', 'PyTorch', 'CNNs', 'Google Colab'],
    links: [{ label: 'View code on GitHub', href: 'https://github.com/yaminaik/OptimizedResNet18' }],
  },
   {
    id: 'pace',
    art: 'pace',
    area: 'Healthcare software',
    context: 'Parker Dewey, 2025, solo build',
    title: 'Pace the Case',
    tagline: 'Care management platform for hospitals',
    summary:
      'Hospitals lose time and money when patient discharges get delayed. A case manager brought me the problem and the workflow. I built the product from scratch: database, backend and every screen.',
    points: [
      'Built an algorithm-driven task engine that creates each patient\'s care tasks automatically and tracks dependencies between them',
      'Built length-of-stay dashboards and reports for care teams',
      'Added real-time notifications and approvals between staff',
      'Designed role-based access across multiple hospitals',
    ],
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Socket.IO'],
    note: 'Confidential project, now being evaluated with hospital partners. Happy to walk through the design on a call.',
    links: [],
  },
  {
    id: 'furbaby',
    art: 'furbaby',
    area: 'Software Engineering',
    context: 'NYU, Fall 2023, team project',
    title: 'FurBaby',
    tagline: 'A pet-sitting marketplace',
    summary:
      'A full web app where pet owners post sitting and walking jobs, sitters apply, and owners choose who they trust.',
    points: [
      'Profiles for users and pets, job posts, applications and in-app notifications',
      'Django REST API on PostgreSQL with a React and TypeScript frontend',
      'Deployed on AWS with automated tests, coverage reports and CI on every pull request',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Django REST', 'PostgreSQL', 'AWS', 'CI/CD'],
    links: [
      // { label: 'Try the live app', href: 'https://YOUR-LIVE-LINK' },
      { label: 'View code on GitHub', href: 'https://github.com/yaminaik/Furbaby' },
    ],
  },
]

export const moreWork = [
  {
    title: 'BookEasy',
    text: 'A bookstore that recommends books with content-based filtering and labels reviews with sentiment analysis.',
    stack: 'Python, Django',
    href: 'https://github.com/yaminaik/BookEasy',
  },
  {
    title: 'Breast cancer classifier',
    text: 'Compared several classifiers on a clinical dataset to predict whether a tumor is malignant or benign.',
    stack: 'Python, scikit-learn',
    href: 'https://github.com/yaminaik/BreastCancer',
  },
]

export const experience = [
  {
    when: 'Aug 2025 – now',
    role: 'Software Engineer',
    company: 'Gainfront',
    where: 'Remote, India',
    text: 'Leading the frontend rebuild of a core supplier module in Vue.js and Quasar for Fortune 500 clients including Target, Truist and Ameren. Building procurement workflows in Python and Django that support thousands of suppliers.',
    current: true,
  },
  {
    when: 'Mar – May 2025',
    role: 'Micro-Intern',
    company: 'Parker Dewey',
    where: 'Remote',
    text: 'Built PACE THE CASE end to end as product manager and engineer.',
  },
  {
    when: 'Sept 2024 – May 2025',
    role: 'Software Engineer',
    company: 'BizInc',
    where: 'Remote',
    text: 'Built responsive React screens for a job discovery platform and set up reusable TypeScript component patterns.',
  },
  {
    when: 'Aug 2022 – May 2024',
    role: 'MS in Computer Engineering',
    company: 'New York University',
    where: 'New York, GPA 3.9/4.0',
    text: 'Machine learning, deep learning, software engineering and real-time embedded systems.',
    school: true,
  },
  {
    when: 'Aug 2021 – July 2022',
    role: 'Programmer Analyst',
    company: 'Cognizant',
    where: 'Pune, India',
    text: 'Kept 100+ AWS EC2 instances healthy through monitoring, patching and incident response, and worked on production Airflow workflows.',
  },
  {
    when: 'May – Aug 2021',
    role: 'Software Engineer',
    company: 'Pixeta App Lab',
    where: 'Navsari, India',
    text: 'Built an Angular ERP for banking and retail that cut operational overhead by 30%, with English and Gujarati support.',
  },
]

export const skills = [
  { group: 'Machine learning', items: ['PyTorch', 'fastai', 'scikit-learn', 'CNNs', 'Computer vision'] },
  { group: 'Web', items: ['React', 'Vue.js', 'TypeScript', 'Node.js', 'Django', 'REST APIs'] },
  { group: 'Data and cloud', items: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
]
export const about = {
  photo: '/yami.jpg',
  paragraphs: [
    "I'm a software engineer who likes owning a problem from start to finish: understanding what people need, designing the system, and shipping something that works.",
    "My master's at NYU took me across the whole stack, from microcontrollers that read sensors in real time to neural networks and full-stack web apps. Today I build enterprise software at Gainfront.",
    "I'm most excited about healthcare technology: software that saves care teams time and helps patients get better care.",
  ],
}