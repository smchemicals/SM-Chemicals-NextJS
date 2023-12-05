"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { industriesData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function IndustriesIntro() {
  return (
    <section
      id="productslist"
      className="sm:mb-0 sm:scroll-m-[10rem] !mb-20"
    >
      <div className="sm:container mx-auto p-4 sm:p-8">
        <SectionHeading>Industries we serve</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-zinc-950">
          {industriesData.map((industries, index) => (
            <motion.li
              className="bg-lime-200 borderBlack rounded-2xl px-5 py-3 mb-6 sm:mb-0"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {industries}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
