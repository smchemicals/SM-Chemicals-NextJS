// Import necessary dependencies and components
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsArrowDown } from "react-icons/bs";
import SectionHeading from "./section-heading";
import { Lexend_Giga, Lexend_Zetta } from "next/font/google";
import productsIntro from "@/public/products-intro.jpg";

// Define font styles
const lexendZetta = Lexend_Zetta({
  weight: "400",
  subsets: ["latin"],
});

const lexendGiga = Lexend_Giga({
	weight: "400",
	subsets: ["latin"],
});

// Products component
export default function Products() {
  return (
    <section className="bg-emerald-950 mb-20 sm:mb-0 sm:scroll-m-[10rem]">
      <div className="sm:container mx-auto p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-center">
        {/* Image on the left */}
        <div className="sm:w-1/2 sm:pr-2 mt-8 sm:mt-16 text-white text-center hidden sm:block">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Image
              src={productsIntro}
              alt="Product Image"
              className="w-auto h-auto sm:w-1/1 sm:h-1/1 object-cover rounded-lg"
              width={420}
              height={660}
            />
          </motion.div>
        </div>

        {/* Text and Buttons on the right */}
        <div className="sm:w-full mt-8 sm:mt-0 sm:p-14">
          <motion.div
            className="p-4 text-center sm:text-left" // Added padding and adjusted text alignment
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 200,
            }}
          >
            {/* Product Description */}
            <h1 className= {`${lexendGiga.className} text-3xl font-medium capitalize mb-8 text-center text-white`}>Our Products</h1>
            <div className="mt-6 sm:mt-12 mb-6 sm:mb-11">
              <h3 className="text-3xl font-bold sm:text-2xl text-white mb-10">
                we understand the unique requirements of each industry and provide tailored solutions
              </h3>
              <p className="text-xl sm:text-2xl font-light text-white">
                We are specialized in manufacturing chemicals for Aqua Culture, Cooling Towers, Water Treatment, Effluent Treatment, Construction, and Polymers.
              </p>
            </div>

            {/* Buttons */}
            <motion.div
              className="flex gap-4 mt-6"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <a
                className="group bg-lime-200 text-black px-7 py-3 flex items-center gap-4 rounded-xl outline-none focus:scale-[1.02] hover:scale-[1.05] active:scale-[1.02] transition cursor-pointer"
                href="#"
                target="_self"
                rel="noopener noreferrer"
              >
                Explore Products List <BsArrowUpRight className="opacity-70 group-hover:-translate-y-1 transition" />
              </a>
              <a
                className="group bg-lime-200 text-black px-7 py-3 flex items-center gap-4 rounded-xl outline-none focus:scale-[1.02] hover:scale-[1.05] active:scale-[1.02] transition cursor-pointer"
                href="#"
              >
                Contact Us <BsArrowDown className="opacity-70 group-hover:translate-y-1 transition" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
