"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { motion } from "motion/react";
interface SectionProps {
  organization: string;
  role: string;
  start: string;
  end: string;
  icon: StaticImageData;
  description: string[];
}

const Section = ({
  organization,
  role,
  start,
  end,
  icon,
  description,
}: SectionProps) => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center text-stone-800 w-full my-8"
    >
      <Image
        src={icon}
        alt={organization}
        className="aspect-square object-cover w-1/7 mr-10 hidden lg:flex"
      />
      <div className="flex flex-col items-start space-y-5">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex"
        >
          <div className="flex flex-col">
            <p className="text-xl md:text-3xl font-bold">{organization}</p>
            <div className="text-lg md:text-2xl">
              <p className="font-semibold">{role}</p>
              <p className="italic">
                {start} - {end}
              </p>
            </div>
          </div>
          <Image
            src={icon}
            alt={organization}
            className="aspect-square object-cover w-5/12 sm:w-1/6 ml-5 lg:hidden"
          />
        </motion.div>

        <motion.ul
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="text-base md:text-lg list-disc pl-6"
        >
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default Section;
