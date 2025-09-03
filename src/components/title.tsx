"use client";
import { motion } from "motion/react";

interface props {
  title: string;
}
const Title = ({ title }: props) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      id={title.toLowerCase()}
      className=" text-4xl md:text-6xl text-stone-900 font-bold p-6 md:p-10 w-auto"
    >
      <p>{title}</p>
      <span className="bg-stone-900 block h-1 mt-1" />
    </motion.div>
  );
};

export default Title;
