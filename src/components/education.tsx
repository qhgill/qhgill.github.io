import Title from "@/components/title";
import Section from "@/components/experience/section";
import ucrbcoe from "@/public/ucreng2.jpg";

const Education = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      <Title title="Education" />
      <div className="flex flex-col items-center w-10/12">
        <Section
          organization="University of California, Riverside"
          role="BS in Computer Science"
          start="Fall 2022"
          end="Expected Spring 2026"
          icon={ucrbcoe}
          description="4.0 Overall GPA | Relevant Coursework: Machine Organization and Assembly, Upper Division Data Structures and Algorithms, Software Construction, Discrete Structures, Logic Design, Theory of Automata and Formal Languages, Compiler Design, Design of Operating Systems, Design and Architecture of Computer Systems, Artificial Intelligence."
        />
      </div>
    </div>
  );
};

export default Education;
