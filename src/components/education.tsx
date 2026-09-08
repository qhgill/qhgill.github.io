"use client";
import Title from "@/components/title";
import Image from "next/image";
import ucrbcoe from "@/public/ucreng2.jpg";
import { motion } from "motion/react";

const Education = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      <Title title="Education" />
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center text-stone-800 w-10/12 my-5"
      >
        <Image
          src={ucrbcoe}
          alt="UCR"
          className="aspect-square object-cover w-1/7 mr-10 md:flex hidden"
        />
        <div className="flex flex-col items-center w-full md:w-10/12">
          <div className="flex flex-col items-center md:items-start space-y-5">
            <p className="text-xl md:text-3xl font-bold">
              University of California, Riverside
            </p>
            <div className="text-lg md:text-2xl">
              <p className="font-semibold">
                BS in Computer Science - Summa Cum Laude - 4.0 Overall GPA
              </p>
              <p className="italic">Fall 2022 - Spring 2026</p>
            </div>
            <p className="text-base md:text-lg">
              Data Structures and Algorithms, Discrete Structures, Formal Languages and Automata Theory, Machine Organization and Assembly Language Programming, Design and Architecture of Computer Systems, Design of Operating Systems, Compiler Design, Artificial Intelligence, Computer Graphics, Virtual Reality, Software Engineering, Edge Computing, Database Management Systems, Senior Design Projects in AI and Game Development
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
