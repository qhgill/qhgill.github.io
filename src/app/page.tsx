import Experience from "@/components/experience/experience";
import Header from "@/components/header";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <Header />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
