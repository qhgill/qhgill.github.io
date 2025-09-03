"use client";
import Title from "@/components/title";
import { CONTACTS } from "@/data/contacts";
import Link from "next/link";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white text-black">
      <Title title="Contact" />
      <div className="grid grid-cols-2 gap-4 md:flex justify-evenly my-10 w-full">
        {CONTACTS.map(({ title, link, icon }, index) => (
          <motion.div
            key={index}
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          >
            <Link
              className="flex flex-col items-center text-2xl"
              href={link}
              target="_blank"
            >
              <div className="text-4xl"> {icon}</div>
              <p>{title}</p>
            </Link>
          </motion.div>
        ))}
      </div>
      <p className="">© Quin Gill</p>
      <p className="pb-16">Last Updated: September 2025</p>
    </div>
  );
};

export default Contact;
