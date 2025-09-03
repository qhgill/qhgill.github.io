import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiCplusplus,
  SiRust,
  SiJavascript,
  SiReact,
  SiPython,
  SiGithub,
  SiGithubactions,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import Title from "@/components/title";
import { VscGithubProject } from "react-icons/vsc";

const Skills = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white text-stone-900">
      <Title title="Skills" />
      <div className="grid grid-cols-3 justify-evenly items-start w-11/12 py-4 gap-5">
        <div className="flex flex-col items-start bg-gradient-to-br from-red-200 to-red-100 rounded-2xl w-full h-full p-4">
          <p className="text-2xl font-semibold pb-2">Languages</p>
          <ul className="ml-2 text-lg">
            <li className="flex items-center">
              <SiTypescript /> <p className="pl-1">TypeScript</p>
            </li>
            <li className="flex items-center">
              <SiCplusplus /> <p className="pl-1">C++</p>
            </li>
            <li className="flex items-center">
              <SiJavascript /> <p className="pl-1">JavaScript</p>
            </li>
            <li className="flex items-center">
              <SiReact /> <p className="pl-1">React</p>
            </li>
            <li className="flex items-center">
              <SiPython /> <p className="pl-1">Python</p>
            </li>
            <li className="flex items-center">
              <SiRust /> <p className="pl-1">Rust</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start bg-gradient-to-br from-red-200 to-red-100 rounded-2xl w-full h-full p-4">
          <p className="text-2xl font-semibold pb-2">
            Technologies & Developer Tools
          </p>
          <ul className="ml-2 text-lg">
            <li className="flex items-center">
              <SiNextdotjs /> <p className="pl-1">NextJs</p>
            </li>
            <li className="flex items-center">
              <SiTailwindcss /> <p className="pl-1">Tailwind</p>
            </li>
            <li className="flex items-center">
              <FaGitAlt /> <p className="pl-1">Git</p>
            </li>
            <li className="flex items-center">
              <SiGithub /> <p className="pl-1">GitHub</p>
            </li>
            <li className="flex items-center">
              <SiGithubactions /> <p className="pl-1">GitHub Actions</p>
            </li>
            <li className="flex items-center">
              <SiFlask /> <p className="pl-1">Flask</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start bg-gradient-to-br from-red-200 to-red-100 rounded-2xl w-full h-full p-4">
          <p className="text-2xl font-semibold pb-2">Project Management</p>
          <ul className="ml-2 text-lg">
            <li className="flex items-center">
              <DiScrum /> <p className="pl-1">Scrum</p>
            </li>
            <li className="flex items-center">
              <VscGithubProject /> <p className="pl-1">GitHub Projects</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
