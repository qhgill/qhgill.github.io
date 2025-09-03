"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "motion/react";

export interface ProjectProps {
  title: string;
  role: string;
  techstack: React.ReactNode[];
  thumbnail: StaticImageData;
  description: string;
  github: string;
  deployment?: string;
}

const Card = ({
  title,
  role,
  techstack,
  thumbnail,
  description,
  github,
  deployment,
}: ProjectProps) => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-stone-900 bg-gradient-to-br from-stone-400 to-stone-200 flex flex-col items-center rounded-4xl p-8 space-y-3 w-full h-full"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="object-cover aspect-video rounded-3xl mb-6"
      />
      <div className="flex font-bold text-2xl justify-between w-full">
        <p className="font-bold text-2xl">{title}</p>{" "}
        <div className="flex space-x-2">
          <Link href={github} target="_blank">
            <FaGithub />
          </Link>
          {deployment && (
            <Link href={deployment} target="_blank">
              <FaLink />
            </Link>
          )}
        </div>
      </div>

      <p className="font-semibold text-xl w-full">Role: {role}</p>
      <div className="flex justify-start w-full space-x-3 text-xl text-stone-800">
        {techstack.map((icon, index) => (
          <div key={index} className="text-xl">
            {icon}
          </div>
        ))}
      </div>

      <p>{description}</p>
    </motion.div>
  );
};

export default Card;
