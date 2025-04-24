import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  meta,
  shopify,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  python1,
  uber,
  rehab,
  athenacodes,
  signspell,
  studycirle,
  announceace,
  c,
  matlab,
  r,
  sql,
  microsoft,
  quicknotes,
  azure,
  dotnet,
  csharp,
  aitictactoe,
  portfolio,
  spectrumsync,
  neurotune,
  auriel,
  vim,
  ualberta,
  chromeStore
} from "../assets";

// If updating, update index.js first and then simply copy that exact file into constants.js.
// Make sure any new images are exported by src/assets/index.js before updating src/constants/index.js and src/constants/constants.js
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Creative Innovator",
    icon: web,
  },
  {
    title: "Tech Enthusiast",
    icon: mobile,
  },
  {
    title: "Strategic Thinker",
    icon: backend,
  },
  {
    title: "Agile Learner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python1,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name:"C#",
    icon: csharp
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "docker",
    icon: docker
  },
  {
    name: "MatLab",
    icon: matlab,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "vim",
    icon: vim,
  }
];

const experiences = [
  {
    title: "Machine Learning Undergraduate Student Researcher",
    company_name: "University of Alberta, FORT Lab",
    icon: ualberta,
    iconBg: "#383E56",
    date: "Sep 2024 - April 2025",
    points: [
      "Conducted research on missing data handling in machine learning to enhance algorithmic robustness and reliability.",
      "Developed scalable solutions to optimize model performance on incomplete datasets using cutting-edge methodologies."
    ],
  },
  {
    title: "Software Engineer & Product Management Intern (Explore)",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#383E56", 
    date: "May 2024 - Aug 2024",
    points: [
      "Collaborating on a project to integrate Microsoft Azure Logic Apps and Azure Static Web Apps, enhancing cloud-based solutions and user experience.",
      "Contributing to the development of scalable serverless applications that empower global businesses.",
    ],
  },
  {
    title: "Software Engineering Fellow",
    company_name: "Uber",
    icon: uber,
    iconBg: "#383E56",
    date: "March 2024 - August 2024",
    points: [
      "Actively engaging in workshops focused on enhancing technical knowledge and professional skills.",
      "Collaborating with industry mentors, tailored to achieving professional milestones and enhancing technical competencies.",
      "Selected for the 2024 Uber Career Prep cohort, with a less than 4% acceptance rate.",  
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    company_name: "Rehabilitation Robotics Laboratory, University of Alberta",
    icon: rehab,
    iconBg: "#383E56",
    date: "May 2023 – August 2023",
    points: [
      "Developed a generalized additive model in MATLAB to analyze over 40,000 data points for validating wheelchair activity monitors.",
      "Designed Python programs to preprocess data for statistical validation with IBM SPSS.",
    ],
  },
  {
    title: "Founder",
    company_name: "AthenaCodes",
    icon: athenacodes,
    iconBg: "#383E56",
    date: "March 2023 – Present",
    points: [
      "Established a platform dedicated to amplifying female representation in the tech industry.",
      "Curated resources including coding classes, internship opportunities, and scholarships.",
    ],
  },
];
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "SpectrumSync",
      description:
        "A mobile app designed to support individuals on the autism spectrum by streamlining communication and organization for families and caregivers. Stay connected, manage schedules, and enhance collaboration effortlessly. 💙",
      tags: [
        {
          name: "iOS",
          color: "blue-text-gradient",
        },
        {
          name: "Swift",
          color: "green-text-gradient",
        },
        {
          name: "Azure Web Apps",
          color: "pink-text-gradient",
        },
        {
          name: "SQL",
          color: "yellow-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
      ],
      image: spectrumsync,
      source_code_link: "https://github.com/hamidatb/SpectrumSync",
    },
    {
      name: "NeuroTune",
      description:
        "A web app leveraging SVM-based eye-tracking and a KAN neural network for EEG mood detection using the Muse S headband. NeuroTune delivers hands-free, personalized music experiences for individuals with motor and speech impairments, empowering them with an accessible and enjoyable way to experience music.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Support Vector Machines (SVM)",
          color: "pink-text-gradient",
        },
        {
          name: "Web App",
          color: "blue-text-gradient",
        },
      ],
      image: neurotune,
      source_code_link: "https://github.com/hamidatb/NeuroTune",
    },

    {
      name: "SignSpell AI",
      description:
        "An interactive web-based platform for learning sign language, using real-time gesture recognition and machine learning.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
        {
          name: "Full-stack web development",
          color: "yellow-text-gradient",  // Adding a new color for clarity
        },
      ],
      image: signspell,
      source_code_link: "https://github.com/hamidatb/SignSpell-AI",
    },
    {
      name: "QuickNotes",
      description:
        "Developed Quick Notes, a Chrome extension that enables seamless note-taking and management linked to specific web pages, enhancing productivity for users engaging in extensive online research.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: quicknotes,
      source_code_link: "https://github.com/hamidatb/QuickNotes",
      direct_app_link: "https://chromewebstore.google.com/detail/quicknotes/kbiajefahoihmligpokjjlmapknnonlc",
    },
    {
      name: "AnnounceAce",
      description:
        "A Discord bot designed to automate the scheduling and announcement process, enhancing server management and user engagement.",
      tags: [
        {
          name: "Discord API",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "GPT-3.5 Turbo",
          color: "pink-text-gradient",
        },
      ],
      image: announceace,
      source_code_link: "https://github.com/hamidatb/AnnounceAce",
    },
    {
      name: "StudyCircle",
      description:
      "A web application dedicated to connecting University of Alberta students with compatible study groups. Our app is designed to facilitate seamless collaboration, enhance academic success, and cater to the unique needs of the UAlberta community.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: studycirle,
      source_code_link: "https://github.com/StudyCircleorg/StudyCircle",
    },
    {
      name: "AI Tic Tac Toe Player",
      description:
        "I created this AI-driven Tic Tac Toe project to highlight the application of the Minimax algorithm, providing an unbeatable opponent that showcases the integration of classic game theory and artificial intelligence.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Artifical Intelligence",
          color: "green-text-gradient",
        },
        {
          name: "Game Theory & Algorithms",
          color: "pink-text-gradient",
        },
      ],
      image: aitictactoe,
      source_code_link: "https://github.com/hamidatb/MinMax-TicTacToe-Player",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };