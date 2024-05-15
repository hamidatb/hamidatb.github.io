import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python1,
  rehab,
  uber,
  athenacodes,
  signspell,
  studycirle,
  announceace,
  spss,
  c,
  matlab,
  r,
  sql,
  microsoft,
  quicknotes
} from "../assets";

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
    name: "MatLab",
    icon: matlab,
  },
  {
    name: "IBM SPSS",
    icon: spss,
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
];

const experiences = [
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
  {
    title: "Undergraduate Research Assistant",
    company_name: "Rehabilitation Robotics Laboratory, University of Alberta",
    icon: rehab,
    iconBg: "#E6DEDD",
    date: "May 2023 – August 2023",
    points: [
      "Developed a generalized additive model in MATLAB to analyze over 40,000 data points for validating wheelchair activity monitors.",
      "Designed Python programs to preprocess data for statistical validation with IBM SPSS.",
    ],
  },
  {
    title: "Software Engineering Fellow",
    company_name: "Uber",
    icon: uber,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Actively engaging in workshops focused on enhancing technical knowledge and professional skills.",
      "Collaborating with industry mentors, tailored to achieving professional milestones and enhancing technical competencies.",
      "Selected for the 2024 Uber Career Prep cohort, with a less than 4% acceptance rate.",  
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
      ],
      image: signspell,
      source_code_link: "https://github.com/hamidatb/SignSpell-AI",
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

  ];
  
  export { services, technologies, experiences, testimonials, projects };