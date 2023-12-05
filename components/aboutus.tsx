"use client";

import React from "react";
import { Lexend_Giga } from "next/font/google";
import { aboutCards } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function AboutUs() {
  return (
    <section
      id="aboutus"
      className="bg-emerald-950 mb-20 sm:mb-0 sm:scroll-m-[10rem]"
    >
      <div className="sm:container mx-auto p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="sm:w-full sm:pr-4 mt-8 sm:mt-16 text-white">
            <SectionHeading>About Us</SectionHeading>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <div className="mt-6 sm:mt-12 mb-6 sm:mb-11">
                <p className="text-xl sm:text-2xl font-light text-white text-left">
                  Established in 2000, S M Chemicals has been a leading
                  manufacturer and marketer of chemicals in Hyderabad for over 23
                  years. With a strong focus on quality and customer satisfaction.
                </p>
              </div>
              <div className="mt-6 sm:mt-12 mb-6 sm:mb-11">
                <p className="text-xl sm:text-2xl font-light text-white text-left">
                  Led by our esteemed CEO, Mr. Partha Sarathi, who brings
                  extensive technical and commercial expertise in total water
                  management, including effluent water treatment.
                </p>
              </div>
              <div className="mt-6 sm:mt-12 mb-6 sm:mb-11">
                <p className="text-xl sm:text-2xl font-light text-white text-left">
                  We pride ourselves on our commitment to innovation and
                  sustainability, ensuring that our clients receive top-notch,
                  eco-friendly chemical solutions.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="sm:w-full mt-8 sm:mt-0">
            <motion.div
              className=""
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 200,
              }}
            >
              <div className="sm:grid sm:grid-cols-2 sm:gap-8 justify-center items-center">
                {aboutCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-lime-200 p-6 rounded-lg shadow-2xl h-48 w-full flex flex-col justify-center items-center mb-6 sm:mb-0"
                  >
                    <div className="text-5xl">
                      <div className="flex justify-center">{card.icon}</div>
                      <h3 className="text-xs flex justify-center font-semibold mt-4 text-center">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
