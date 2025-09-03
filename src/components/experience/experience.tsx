import Title from "@/components/title";
import { EXPERIENCES } from "@/data/experiences";
import Section from "@/components/experience/section";

const Experience = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      <Title title="Experience" />
      <div className="flex flex-col items-center w-10/12">
        {EXPERIENCES.map(
          ({ organization, role, start, end, icon, description }, index) => (
            <Section
              key={index}
              organization={organization}
              role={role}
              start={start}
              end={end}
              icon={icon}
              description={description}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Experience;
