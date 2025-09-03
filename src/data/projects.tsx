import {
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiPrettier,
  SiFlask,
  SiCplusplus,
  SiCmake,
  SiRust,
  SiJavascript,
} from "react-icons/si";
import { FaReact, FaFigma } from "react-icons/fa";
import { ProjectProps } from "@/components/projects/card";
import starlight from "@/public/projects/starlight.png";
import chaosify from "@/public/projects/chaosify.png";
import textadventure from "@/public/projects/textadventure.png";
import compilerproj from "@/public/projects/compilerproj.png";
import aisc from "@/public/projects/aiscsite.png";
import finaltake from "@/public/projects/finaltake.png";
import rsd from "@/public/projects/rsdwebsite.png";
import leap from "@/public/projects/leapwebsite.png";
import hearts from "@/public/projects/heartswebsite.png";
import h4b from "@/public/projects/h4bwebsite.png";
import swim from "@/public/projects/swimwebsite.png";
import robosub from "@/public/projects/robosubwebsite.png";

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
      "Led development of a text based adventure game written in C++, compiled with CMake, and tested with GoogleTest and Valgrind.",
  },
  {
    title: "Teh Tarik Compiler",
    role: "Developer",
    techstack: [<SiRust key="ts" />],
    thumbnail: compilerproj,
    github: "https://github.com/qhgill/compiler-project",
    description:
      "Co-developed a rust based compiler including a lexer, parser, and IR code generator.",
  },
  {
    title: "AISC Website",
    role: "Lead",
    techstack: [
      <FaReact key="react" />,
      <SiNextdotjs key="nextjs" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiPrettier key="prettier" />,
    ],
    thumbnail: aisc,
    github: "https://github.com/acm-ucr/aisc-website",
    description:
      "Led a group of 10+ developers to create the official website for AISC's UCR Chapter.",
    deployment: "https://aisc.ucrhighlanders.org/",
  },
  {
    title: "Final Take",
    role: "Developer",
    techstack: [
      <FaReact key="react" />,
      <SiNextdotjs key="nextjs" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
    ],
    thumbnail: finaltake,
    github: "https://github.com/qhgill/final-take",
    description:
      "Co-developed a choice based web game focused on sustainability, including Openrouter API and Mistral AI integration for CitrusHack 2025.",
    deployment: "https://qhgill.github.io/final-take/",
  },
  {
    title: "RSD Website",
    role: "Lead",
    techstack: [
      <FaReact key="react" />,
      <SiNextdotjs key="nextjs" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiPrettier key="prettier" />,
    ],
    thumbnail: rsd,
    github: "https://github.com/acm-ucr/rsd-website",
    description:
      "Led a group of 10+ developers to create the official website for Riverside Surging Dragons, UCR's dragon boat racing team.",
    deployment: "https://rsd.ucrhighlanders.org/",
  },
  {
    title: "LEAP! Website",
    role: "Lead",
    techstack: [
      <FaReact key="react" />,
      <SiNextdotjs key="nextjs" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiPrettier key="prettier" />,
    ],
    thumbnail: leap,
    github: "https://github.com/acm-ucr/leap-website",
    description:
      "Led a group of 10+ developers to create the official website for UCR LEAP!, an AAPI mental health focused student organization.",
    deployment: "https://leap.ucrhighlanders.org/",
  },
  {
    title: "UCR Hearts Website",
    role: "Lead",
    techstack: [
      <FaReact key="react" />,
      <SiNextdotjs key="nextjs" />,
      <SiTypescript key="ts" />,
      <SiTailwindcss key="tailwind" />,
      <SiPrettier key="prettier" />,
    ],
    thumbnail: hearts,
    github: "https://github.com/acm-ucr/ucr-hearts-website",
    description:
      "Led a group of 10+ developers to create the official website for UCR HEARTS, a pre-med focused student organization.",
    deployment: "https://hearts.ucrhighlanders.org/",
  },
  {
    title: "Hungry 4 Biscuits Website",
    role: "Lead",
    techstack: [
      <FaReact key="react" />,
      <SiNextdotjs key="nextjs" />,
      <SiJavascript key="js" />,
      <SiTailwindcss key="tailwind" />,
      <SiPrettier key="prettier" />,
    ],
    thumbnail: h4b,
    github: "https://github.com/acm-ucr/h4b-website",
    description:
      "Led a group of 10+ developers to create the official website for Hungry 4 Biscuits, a student organization combatting food insecurity in the inland empire.",
    deployment: "https://h4b.ucrhighlanders.org/",
  },
  {
    title: "UCR Swim Club Website",
    role: "Developer",
    techstack: [
      <FaReact key="react" />,
      <SiNextdotjs key="nextjs" />,
      <SiJavascript key="js" />,
      <SiTailwindcss key="tailwind" />,
      <SiPrettier key="prettier" />,
    ],
    thumbnail: swim,
    github: "https://github.com/acm-ucr/ucr-swim-website",
    description:
      "Developed Google Calendar integration and frontend components for UCR Swim Club's official website.",
    deployment: "https://swim.ucrhighlanders.org/",
  },
  {
    title: "RoboSub Website",
    role: "Developer",
    techstack: [
      <FaReact key="react" />,
      <SiNextdotjs key="nextjs" />,
      <SiJavascript key="js" />,
      <SiTailwindcss key="tailwind" />,
      <SiPrettier key="prettier" />,
    ],
    thumbnail: robosub,
    github: "https://github.com/acm-ucr/robosub-website",
    description:
      "Developed frontend components for UCR RoboSub's official website.",
    deployment: "https://robosub.ucrhighlanders.org/",
  },
];
