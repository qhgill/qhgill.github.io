import {
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiPrettier,
  SiFlask,
  SiCplusplus,
  SiCmake,
} from "react-icons/si";
import { FaReact, FaFigma } from "react-icons/fa";
import { ProjectProps } from "@/components/projects/card";
import ACM from "@/public/acmucr.webp";
import starlight from "@/public/projects/starlight.png";
import chaosify from "@/public/projects/chaosify.png";
import textadventure from "@/public/projects/textadventure.png";

export const PROJECTS: ProjectProps[] = [
  {
    title: "ACM Starlight",
    role: "Director",
    techstack: [
      <FaReact key="react" />,
      <SiNextdotjs key="nextjs" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <FaFigma key="figma" />,
      <SiFirebase key="firebase" />,
      <SiPrettier key="prettier" />,
    ],
    thumbnail: starlight,
    github: "https://github.com/acm-ucr/starlight",
    description:
      "Developing a full-stack project application and management portal for ACM@UCR.",
    deployment: "https://starlight-nine-sigma.vercel.app/",
  },
  {
    title: "Chaosify",
    role: "Developer",
    techstack: [
      <FaReact key="react" />,
      <SiNextdotjs key="nextjs" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiFlask key="flask" />,
    ],
    thumbnail: chaosify,
    github: "https://github.com/qhgill/chaosify",
    description:
      "Utilized Flask and PIL to create an image distortion web tool to help ML developers test model resilence against attack.",
    deployment: "https://chaosify.vercel.app/",
  },
  {
    title: "Text Adventure",
    role: "Developer",
    techstack: [<SiCplusplus key="cplusplus" />, <SiCmake key="cmake" />],
    thumbnail: textadventure,
    github: "https://github.com/qhgill/text-adventure",
    description:
      "Led development of a text based adventure game written in C++, compiled with CMake, and tested with GoogleTest and Valgrind",
  },
  {
    title: "Teh Tarik Compiler",
    role: "Developer",
    techstack: [<SiTypescript key="ts" />],
    thumbnail: ACM,
    github: "/",
    description: "I'm the goat",
    deployment: "/",
  },
  {
    title: "AISC Website",
    role: "Lead",
    techstack: [<SiTypescript key="ts" />],
    thumbnail: ACM,
    github: "/",
    description: "I'm the goat",
    deployment: "/",
  },
  {
    title: "Final Take",
    role: "Developer",
    techstack: [<SiTypescript key="ts" />],
    thumbnail: ACM,
    github: "/",
    description: "I'm the goat",
    deployment: "/",
  },
  {
    title: "RSD Website",
    role: "Lead",
    techstack: [<SiTypescript key="ts" />],
    thumbnail: ACM,
    github: "/",
    description: "I'm the goat",
    deployment: "/",
  },
  {
    title: "LEAP! Website",
    role: "Lead",
    techstack: [<SiTypescript key="ts" />],
    thumbnail: ACM,
    github: "/",
    description: "I'm the goat",
    deployment: "/",
  },
  {
    title: "UCR Hearts Website",
    role: "Lead",
    techstack: [<SiTypescript key="ts" />],
    thumbnail: ACM,
    github: "/",
    description: "I'm the goat",
    deployment: "/",
  },
  {
    title: "Hungry 4 Biscuits Website",
    role: "Lead",
    techstack: [<SiTypescript key="ts" />],
    thumbnail: ACM,
    github: "/",
    description: "I'm the goat",
    deployment: "/",
  },
  {
    title: "UCR Swim Club Website",
    role: "Developer",
    techstack: [<SiTypescript key="ts" />],
    thumbnail: ACM,
    github: "/",
    description: "I'm the goat",
    deployment: "/",
  },
  {
    title: "RoboSub Website",
    role: "Developer",
    techstack: [<SiTypescript key="ts" />],
    thumbnail: ACM,
    github: "/",
    description: "I'm the goat",
    deployment: "/",
  },
];
