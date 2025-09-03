"use client";
import Image from "next/image";
import headshot from "@/public/headshot.jpg";
import { CONTACTS } from "@/data/contacts";
import Link from "next/link";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center bg-stone-800 items-center md:h-[60vh] py-10">
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-10/12 md:w-1/6 mx-10"
      >
        <Image
          src={headshot}
          alt="headshot"
          className="object-cover rounded-full w-full aspect-square"
        />
      </motion.div>
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center md:items-start w-10/12 md:w-1/2"
      >
        <p className="text-6xl md:text-8xl my-3 md:my-0 text-white font-bold">
          Quin Gill
        </p>

        <p className="my-5 text-lg md:text-xl text-white text-center md:text-start">
          Quin is currently a 4th year Computer Science major at the University
          of California, Riverside. Quin leads web based projects for ACM Spark
          and is working towards being a Software and Game Developer.
        </p>
        <div className="flex justify-center md:justify-start space-x-10 text-white text-3xl w-full">
          {CONTACTS.map(({ title, link, icon }, index) => (
            <div
              key={index}
              className="hover:scale-110 hover:text-green-400 transition-all duration-300"
            >
              <Link href={link} target="_blank">
                {icon}
              </Link>
              <p className="hidden">{title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
