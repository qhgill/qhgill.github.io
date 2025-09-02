import Title from "@/components/title";
import { PROJECTS } from "@/data/projects";
import Card from "@/components/projects/card";

const Projects = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Title title="Projects" />
      <p>WORK IN PROGRESS</p>
      <div className="grid grid-cols-3 items-center justify-center gap-20 mx-20 my-10">
        {PROJECTS.map(
          (
            {
              title,
              role,
              techstack,
              thumbnail,
              description,
              github,
              deployment,
            },
            index,
          ) => (
            <Card
              key={index}
              title={title}
              role={role}
              techstack={techstack}
              thumbnail={thumbnail}
              description={description}
              github={github}
              deployment={deployment}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Projects;
