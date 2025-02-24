import { AiFillMediumCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const contactData = [
  {
    platform: "github",
    url: "https://github.com/chatinunk97",
    icon: <FaGithub size={40} />,
  },
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/chatinun-komuthanon-449a051a9/",
    icon: <FaLinkedin size={40} />,
  },
  {
    platform: "mediuam",
    url: "https://medium.com/@chatinun.dev",
    icon: <AiFillMediumCircle size={43} />,
  },
];

export const workData = [
  {
    name: "FPT Japan holdings",
    period: "November 2024 - Present",
    position: "Software Engineer",
    icon: "fpt.jpg",
    details: [
      "Worked directly with customers in Japanese to gather requirements and document specifications.",
      "Participated in project reviews, ensuring alignment with business needs and technical feasibility.",
      "Engaged in an ETL project, processing and transforming large datasets for improved data management.",
    ],
  },
  {
    name: "Axross Road Japan",
    period: "April 2024 - November 2024",
    position: "Software Engineer",
    icon: "axross.jpg",
    details: [
      "Created, fixed, and enhanced APIs using Spring Boot based on project requirements.",
      "Utilized JDBC for database interactions and MyBatis for ORM functionalities.",
      "Updated documentation to reflect API changes and new features.",
    ],
  },

  {
    name: "Körber Pharma",
    period: "April 2022 - March 2021",
    position: "Software Engineer",
    icon: "koerber.svg",
    details: [
      "Handle MES, ERP related problem cases sent from customer.",
      "Analyze log files and system behavior for possible solutions.",
      "Translate Japanese dialogs and meetings if required.",
    ],
  },
  {
    name: "Akagane Thailand",
    period: "March 2021 - April 2022",
    position: "Production Support",
    icon: "akagane.png",
    details: [
      "Developed and customized automation tools using Python and VBA.",
      "Managed tool development projects and provided IT solutions.",
      "Coordinated with Japan HQ and facilitated communication between Thai and Japanese teams.",
    ],
  },
];
export const educationData = [
  {
    name: "Software Park CodeCamp",
    period: "July 2023 - November 2023",
    position: "Full Stack Developer",
    icon: "codecamp.png",
    details: [
      "React JS -  Express JS",
      "Javascript - HTML - CSS",
      "SQL - Prisma - Tailwind - JSON Web Token",
      "System and Database design",
      "Led a team of 5 in the development",
    ],
  },
  {
    name: "Waseda University",
    period: "August 2019 - August 2020",
    position: "Center for Japanese Language Scholarship Exchange student",
    icon: "waseda.png",
    details: ["JASSO Scholarship", "SILS Scholarship", "SMC, Sils Music club"],
  },
  {
    name: "Thammasat University",
    period: "August 2016 - December 2020",
    position: "Japanese Major",
    icon: "tu.png",
    details: [
      "First Class Honors",
      "President of Japanese Major 2016 Cohort",
      "Organizing cohort activities such as fresmen welcoming party and camps",
      "MC for events at East Asian Studies",
      "Roommate , Partner program with Japanese Exchange students",
      "Thammasat Judo ",
    ],
  },
];
