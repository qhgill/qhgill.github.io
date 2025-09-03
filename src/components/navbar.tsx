"use client";
import { NAV } from "@/data/nav";
import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [open, handleOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-evenly w-full py-3 bg-white">
      <div className="flex justify-between w-full px-8">
        <Link href="/" className="text-2xl font-bold text-stone-900">
          QUIN GILL
        </Link>
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <IoMenuOutline
                className="lg:hidden text-stone-900 text-4xl"
                onClick={() => handleOpen(true)}
              />
            </motion.div>
          )}
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoClose
                className="lg:hidden text-stone-900 text-4xl"
                onClick={() => handleOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="hidden lg:flex justify-end space-x-20 text-stone-700 text-2xl font-semibold w-2/3 pr-8">
        {NAV.map(({ title, ref }, index) => (
          <Link key={index} href={ref}>
            {title}
          </Link>
        ))}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            exit={{ height: 0, transition: { delay: 0.3, duration: 0.3 } }}
            className="w-full"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.3, delay: 0.3 },
              }}
              exit={{ opacity: 0, x: -10, transition: { duration: 0.3 } }}
              className="flex flex-col justify-start text-stone-700 text-2xl font-semibold w-full px-8"
            >
              {NAV.map(({ title, ref }, index) => (
                <Link key={index} href={ref} onClick={() => handleOpen(false)}>
                  {title}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
