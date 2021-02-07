import {
  FaReact,
  FaNodeJs,
  FaApple,
  FaDesktop,
  FaBootstrap,
  FaSass,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiNextDotJs,
  SiFirebase,
} from "react-icons/si";
import { MdAndroid } from "react-icons//md";

export default [
  {
    private_project: true,
    title: "Bistrô Menu",
    company: "Softcom Informática",
    company_url: "http://www.softcom.pro.br/",
    description:
      "Bistrô Menu is a digital menu, it replaces the traditional printed menu reducing long-term costs. I was responsible for developing the application’s frontend making sure it was responsible and could show and update its food items when requested. It makes API requests on the restaurants Firebase database. This project was developed using React Native and JavaScript focusing on android tablets, it also features a lock task mode which requires Java modules to work. This project is in production.",

    technologies: [
      { icon: FaReact, color: "skyblue" },
      { icon: SiJavascript, color: "orange" },
    ],
    platforms: [{ icon: MdAndroid, color: "green" }],
    imgurl: "https://i.imgur.com/glKQHch_d.webp?maxwidth=760&fidelity=grand",
    live_url: "",
    github_url: "",
  },
  {
    private_project: true,
    title: "Bistrô Delivery App",
    company: "Softcom Informática",
    company_url: "http://www.softcom.pro.br/",
    description:
      "Bistrô Delivery App is an android and iOS app that orders food from a single restaurant. I was responsible for developing the application’s frontend making sure it was responsible and could render its food items,  create and account, save favorites, addresses etc. It makes API requests on the restaurants Firebase database and the company’s own API in order to make user authentication and food orders. This project was developed using React-Native, Expo and JavaScript.",

    technologies: [
      { icon: FaReact, color: "skyblue" },
      { icon: SiJavascript, color: "orange" },
    ],
    platforms: [
      { icon: MdAndroid, color: "green" },
      { icon: FaApple, color: "black" },
    ],
    imgurl: "https://i.imgur.com/qDowm1a_d.webp?maxwidth=760&fidelity=grand",
    live_url: "",
    github_url: "",
  },
  {
    private_project: true,
    title: "Gestão Web",
    company: "Softcom Informática",
    company_url: "http://www.softcom.pro.br/",
    description:
      "Gestão Web is a company/restaurant management web system. It features custom roles that can be changed to give or take access to other users. Since it is a restaurant focused web system, it is responsible for making CRUD operations to save company specific products information for management purposes. I am developing this project using NextJS 10 with TypeScript to handle frontend and backend, Prisma ORM is being used as query builder and PostgreSQL as database. ",
    technologies: [
      { icon: FaReact, color: "skyblue" },
      { icon: FaNodeJs, color: "green" },
      { icon: SiNextDotJs, color: "black" },
      { icon: SiTypescript, color: "DodgerBlue" },
      { icon: SiPostgresql, color: "DodgerBlue" },
    ],
    platforms: [{ icon: FaDesktop, color: "black" }],
    imgurl: "https://i.imgur.com/bum8B81.gif",
    live_url: "",
    github_url: "",
  },
  {
    private_project: false,
    title: "SUSHI STORE",
    company: "",
    company_url: "",
    description:
      "I developed this project in order to improve my react skills back when I was starting. It features a simple japanese sushi theme, a product catalog, filters, shopping cart and a checkout page. This was one of my first 'big' projects I did when I had just started out!",
    technologies: [
      { icon: SiJavascript, color: "orange" },
      { icon: FaReact, color: "skyblue" },
      { icon: SiFirebase, color: "orange" },
      { icon: FaBootstrap, color: "indigo" },
    ],
    platforms: [{ icon: FaDesktop, color: "black" }],
    imgurl: "https://media0.giphy.com/media/W6LUMXo3EuU01OWJBo/giphy.gif",
    live_url: "https://sushi-store.onrender.com/",
    github_url: "https://github.com/adrianoyuji/sushi-store-website",
  },
  {
    private_project: false,
    title: "SATO REAL ESTATE",
    company: "",
    company_url: "",
    description:
      "I did this project in order to learn how to work with Google Map and try SASS. I tried to make a responsive Real Estate Website and got inspired by other systems like Zillow. It's been a while since I last played with this project so most of the images have been taken out by their owners and are broken.",
    technologies: [
      { icon: SiJavascript, color: "orange" },
      { icon: FaReact, color: "skyblue" },
      { icon: FaSass, color: "MediumVioletRed" },
    ],
    platforms: [{ icon: FaDesktop, color: "black" }],
    imgurl: "https://media2.giphy.com/media/XftZSLhso9dDUt5Rtw/giphy.gif",
    live_url: "https://sato-real-estate.onrender.com/",
    github_url: "https://github.com/adrianoyuji/sato-real-estate",
  },
  {
    private_project: false,
    title: "ROCK PAPER SCISSORS",
    company: "",
    company_url: "",
    description:
      "This project was fun! It is a simple Rock, Paper, Scissors game that you can play with an IA. I took this challenge idea from Frontend Mentor. I developed it using good n' old JavaScript, HTML and CSS, it was really fun making the IA. Give it a shot and tell me how many points did you score!",
    technologies: [
      { icon: SiJavascript, color: "orange" },

      { icon: FaCss3, color: "RoyalBlue" },
      { icon: FaHtml5, color: "OrangeRed" },
    ],
    platforms: [{ icon: FaDesktop, color: "black" }],
    imgurl: "https://media0.giphy.com/media/PmSNCIkpqq6FyHfahi/giphy.gif",
    live_url: "https://rock-paper-scissors-master-navy.vercel.app/",
    github_url: "https://github.com/adrianoyuji/rock-paper-scissors-master",
  },
];
