import {
  mobile,
  backend,
  // creator,
  web,
  javascript,
  typescript,
  reactjs,
  // redux,
  vue,
  nodejs,
  mongodb,
  git,
  postgres,
  mssql,
  mysql,
  dynamoDB,
  // dart,
  nextjs,
  nestjs,
  express,
  // flutter,
  redis,
  socket,
  imgGlobalInfotech,
  // youngminds,
  wyw,
  wtf,
  erpwise
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "Vue Js",
    icon: vue,
  },
  {
    name: "socket.io",
    icon: socket,
  },
  // {
  //   name: "Flutter",
  //   icon: flutter,
  // },
  // {
  //   name: "Dart",
  //   icon: dart,
  // },
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "DynamoDB",
    icon: dynamoDB,
  },
  {
    name: "Redis",
    icon: redis,
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
    title: "MERN Stack Developer",
    company_name: "IMG Global Infotech Private Limited",
    icon: imgGlobalInfotech,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Till now",
    points: [
      "Developing and maintaining web applications using MERN Stack and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "IMG Global Infotech Private Limited",
    icon: imgGlobalInfotech,
    iconBg: "#383E56",
    date: "Feb 2021 - Sept 2022",
    points: [
      "Developing backend applications using Node.js and it's related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing both REST Api, GraphQl Api and ensuring cross-browser compatibility.",
      "Integrating multiple databases according to client requirment.",
      "Participating in code reviews, unit testing and providing constructive feedback to other developers.",
    ],
  }
  // ,
  // {
  //   title: "Flutter Developer",
  //   company_name: "IMG Global Infotech Private Limited",
  //   icon: imgGlobalInfotech,
  //   iconBg: "#383E56",
  //   date: "Jan 2023 - Till now",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // }
];

const testimonials = [
  {
    testimonial:
      " I want to acknowledge the incredible work you have done in ERPWISE. Your mastery of mongodb and backend development truly shines through and the logic you have crafted is nothing short of impressive. Your commitment to maintaining a clean and structured codebase aligns perfectly with coding standards. Your dedication to excellence is truly valued and I am confident that you will achieve great things in your life with this dedication.",
    name: "Anjali Vaishnav",
    designation: "SDE",
    company: "IMG",
    image: "https://avatars.githubusercontent.com/u/42146367?v=4",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  // {
  //   name: "Youngmindsgroup",
  //   description:
  //     "Web-based platform that allows users to purchase courses, book themself's for master classes, purchase notes, also user can ulpoad courses, events and sells. Only the verified content will we visible on site.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "node",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "postgresql",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "AWS",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: youngminds,
  //   source_code_link: "https://github.com/devanshugautam",
  //   siteLink: "https://youngmindsgroup.com/home/landing-page"
  // },
  {
    name: "ErpWise",
    description:
      "ErpWise provides intuitive distribution software tailored for small to medium-sized businesses in the UK, optimizing inventory management, sales, and logistics with smart tools for efficiency and growth.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: erpwise,
    source_code_link: "https://github.com/devanshugautam",
    siteLink: "http://159.65.80.24/auth/login"
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
    source_code_link: "https://github.com/devanshugautam",
    siteLink: "https://marcel.ai/public/article/2021/december/publicis-launches-work-your-world-on-marcel-as-part-of-its-commitment-to-future-of-work"
  },
  {
    name: "Witness The Fitness",
    description:
      `"Witness The Fitness" is a holistic fitness program that empowers individuals on their journey to a healthier lifestyle. It inspires, educates, and supports participants in achieving their fitness goals.`,
    tags: [
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "dynamodb",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
    ],
    image: wtf,
    source_code_link: "https://github.com/devanshugautam",
    siteLink: "https://wtfup.me/"
  },
];

const myProfile = {
  Fname: "Devanshu",
  Lname: "Gautam",
  myTechStack: "FullStack Developer",
  myDescLine1: "As a fullStack developer, I have worked on various project using tech like React.Js, Node.Js and Dart, also i have experience on multiple databases like mySql, MsSQL, PostgreSQL, MongoDB, DynamoDB etc.",
  myDescLine2: "This portfolio contains approximately all information about me.",
  myDesc: "I'm an experienced software developer with proficiency in JavaScript, TypeScript, and Dart. I specialize in React, Node.js, Next.js, and Flutter and have a proven track record of creating efficient, scalable, and user-friendly solutions that solve real-world problems. As a quick learner, I work closely with clients to bring their ideas to life. Let's collaborate to turn your vision into a reality!",
  myProjectDesc: "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
  gitHub: "https://github.com/devanshugautam",
  linkedIn: "https://www.linkedin.com/in/devanshu-gautam-1a385415b/",
  insta: "https://www.instagram.com/devanshugautam87/"
}

export { services, technologies, experiences, testimonials, projects, myProfile };
