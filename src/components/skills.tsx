import Title from "@/components/title";

const Skills = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Title title="Skills" />
      <div className="flex justify-evenly items-start w-full py-4">
        <div className="flex flex-col items-start">
          <p className="text-xl font-semibold pb-2">Languages</p>
          <ul className="list-disc ml-5">
            <li>TypeScript</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
            <li>Rust</li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-xl font-semibold pb-2">
            Technologies & Developer Tools
          </p>
          <ul className="list-disc ml-5">
            <li>Next.js</li>
            <li>TailwindCSS</li>
            <li>Git</li>
            <li>Flask</li>
            <li>GitHub</li>
            <li>GitHub Actions</li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-xl font-semibold pb-2">Project Management</p>
          <ul className="list-disc ml-5">
            <li>Scrum</li>
            <li>GitHub Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
