"use client";

import React from "react";
import Image from "next/image";
import testImg from "@/public/undraw_Science_re_mnnr.png";
import { Lexend_Giga } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDown, BsArrowUpRight } from "react-icons/bs";

const lexendGiga = Lexend_Giga({
	weight: "400",
	subsets: ["latin"],
});

export default function Intro() {
	return (
		<section
			id="home"
			className="sm:mb-28 scroll-m-[100rem]  sm:container mx-auto sm:p-8">
			<div className="flex flex-col md:flex-row items-center justify-between p-4">
				{/* Show the image on top for smaller screens and on the right for larger screens */}
				<div className="w-full md:w-2/3 pr-4 md:order-1">
					<motion.h1
						className={`${lexendGiga.className} text-4xl !font-semibold`}
						initial={{ opacity: 0, x: -150 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							delay: 0.1,
						}}>
						SM Chemicals {" "} <br/>
						<span className="text-sm text-gray-500">
							- Chemical Excellence, Delivered!
						</span>
					</motion.h1>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.1,
						}}>
						<div className="mt-16 mb-11">
							<p className="text-4xl font-medium intro-text-color text-left">
								We take pride in offering comprehensive chemical solutions for a
								wide range of{" "}
								<span className="underline decoration-wavy">industries</span>.
							</p>
						</div>
						<div className="mt-16 mb-11">
							<p className="text-4xl font-medium">
								<span className="text-zinc-950">Aqua Culture</span>, Water
								Treatment, Construction, Pharmaceuticals, Polymers, etc.
							</p>
						</div>
					</motion.div>
					<motion.div
						className="flex flex-col md:flex-row items-center justify-start gap-3 text-lg font-medium !mt-16"
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							delay: 0.1,
						}}>
						<a
							className="group bg-emerald-950 text-white px-7 py-3 flex items-center gap-4 rounded-3xl outline-none focus:scale-[1.02] hover:scale-[1.05] hover:bg-gray-950 active:scale-[1.02] transition cursor-pointer"
							href="products"
							target="_self"
							rel="noopener noreferrer">
							Browse Products list{" "}
							<BsArrowUpRight className="opacity-70 group-hover:-translate-y-1 transition" />
						</a>
						<Link
							href="#contact"
							className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-4 rounded-3xl outline-none focus:scale-[1.02] hover:scale-[1.05] hover:bg-gray-950 active:scale-[1.02] transition">
							Contact Us{" "}
							<BsArrowDown className="opacity-70 group-hover:translate-y-1 transition" />{" "}
						</Link>
					</motion.div>
				</div>

				{/* Hide the image on smaller screens */}
				<div className="w-1/2 md:w-1/4 md:order-2 hidden md:block sm:hidden">
					{/* ... (no content inside, so it won't take up space) */}
					<motion.div
						className="h-80 mix-blend-multiply"
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.1,
							type: "spring",
							stiffness: 200,
						}}>
						<Image
							src={testImg}
							alt="Chemical Image"
							className="w-full h-full object-cover"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
