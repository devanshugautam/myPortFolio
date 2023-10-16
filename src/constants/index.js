import {
  mobile,
  backend,
  // creator,
  web,
  javascript,
  typescript,
  // html,
  // css,
  reactjs,
  redux,
  // tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  postgres,
  mssql,
  dart,
  nextjs,
  flutter,
  // meta,
  imgGlobalInfotech,
  // tesla,
  // shopify,
  youngminds,
  wyw,
  // jobit,
  tripguide,
  // threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "React.Js Developer",
    icon: web,
  },
  {
    title: "Backend Node.Js Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Next.Js",
    icon: nextjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgresSQL",
    icon: postgres,
  },
  
  {
    name: "MSSQL Server",
    icon: mssql,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Node.js Developer",
    company_name: "IMG Global Infotech Private Limited",
    icon: imgGlobalInfotech,
    iconBg: "#383E56",
    date: "Feb 2021 - Till now",
    // date: "Feb 2021 - Sept 2022",
    points: [
      "Developing backend applications using Node.js and it's related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing both REST Api, GraphQl Api and ensuring cross-browser compatibility.",
      "Integrating multiple databases according to client requirment.",
      "Participating in code reviews, unit testing and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "IMG Global Infotech Private Limited",
    icon: imgGlobalInfotech,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Till now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "IMG Global Infotech Private Limited",
    icon: imgGlobalInfotech,
    iconBg: "#383E56",
    date: "Jan 2023 - Till now",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
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
    name: "Youngmindsgroup",
    description:
      "Web-based platform that allows users to purchase courses, book themself's for master classes, purchase notes, also user can ulpoad courses, events and sells. Only the verified content will we visible on site.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: youngminds,
    source_code_link: "https://github.com/",
  },
  {
    name: "WYW",
    description:
      "Publicis Groupe announced ‘Work Your World’, which combines flexibility, opportunity and growth for all talent. Now every employee can work anywhere on the planet there's a Publicis office.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mssql",
        color: "pink-text-gradient",
      },
      {
        name: "azure",
        color: "green-text-gradient",
      },
    ],
    image: wyw,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const myProfile = {
  Fname: "Devanshu",
  Lname: "Gautam",
  myTechStack: "FullStack Developer",
  myDescLine1: "As a fullStack developer, I have worked on verious project using tech like React.Js, Node.Js and Dart, also i have experience on multiple databases like mySql, MsSQL, PostgreSQL, MongoDB, DynamoDB etc.",
  myDescLine2: "This portfolio contains approximately all information about me.",
  myDesc: "I'm an experienced software developer with proficiency in JavaScript, TypeScript, and Dart. I specialize in React, Node.js, Next.js, and Flutter and have a proven track record of creating efficient, scalable, and user-friendly solutions that solve real-world problems. As a quick learner, I work closely with clients to bring their ideas to life. Let's collaborate to turn your vision into a reality!",
  myProjectDesc: "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."
}

export { services, technologies, experiences, testimonials, projects, myProfile };
