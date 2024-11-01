import type {
  TNavLink,
  TService,
  TTechnology,
  TProject,
} from "../types";

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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import farmos from "../assets/farmos.png";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id:"work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
];



const projects: TProject[] = [
  {
    name: "E-Commerce",
    description:
      "Developed a full-stack e-commerce platform using React.js for the frontend and Node.js with MongoDB for the backend. Implemented features include user authentication, product browsing, cart management, and checkout functionality. Utilized modern UI/UX principles to enhance user experience and increase engagement. Employed RESTful API architecture for seamless communication between frontend and backend components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/codvi/Ecommerce-Website",
  },
  {
    name: "NFT MarketPlace",
    description:
      "Developed an NFT (Non-Fungible Token) marketplace using React.js for the frontend and Ethereum blockchain for smart contract development. Designed to facilitate the buying, selling, and trading of digital assets such as art, collectibles, and virtual real estate. Implemented features include wallet integration for cryptocurrency payments, decentralized storage for storing digital assets, and smart contract functionality for managing ownership and transactions securely on the blockchain. Employed IPFS (InterPlanetary File System) for decentralized file storage, ensuring censorship resistance and data immutability.",
    tags: [
      {
        name: "Smart Contract",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/codvi/nft-marketplace",
  },
  {
    name: "ERC-20 Token",
    description:
      "Our ERC-20 Token Platform allows users to mint new tokens, increasing the total supply, and burn tokens to reduce the total supply. The platform provides real-time tracking of the total token supply, ensuring transparent and efficient token management. Built on the ERC-20 standard, our tokens are compatible with a wide range of Ethereum-based applications and wallets, offering flexibility and interoperability in the decentralized ecosystem.",
    tags: [
      {
        name: "TS",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "ERC-20 Standard Token",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/codvi/erc20",
  },
  {
    "name": "Farmos - Dairy Management System",
    "description": "Developed during my internship, Farmos is a Dairy Management System that streamlines stock, production, and sales tracking for farmers. Built with React, MongoDB, and Tailwind CSS, it enhances operational efficiency and provides real-time insights into daily dairy activities.",
    "tags": [
        {
            "name": "React",
            "color": "blue-text-gradient"
        },
        {
            "name": "MongoDB",
            "color": "green-text-gradient"
        },
        {
            "name": "Express",
            "color": "pink-text-gradient"
        }
    ],
    "image": farmos,
    "sourceCodeLink": "https://github.com/codvi/dairy-project-final"
}

];

export { services, technologies, projects };