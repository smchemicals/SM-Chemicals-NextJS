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
		<section id="home" className="mb28 max-w-[60rem] sm:mb-0 scroll-m-[100rem]">
			<div className="flex items-center justify-between p-4">
				<div className="w-2/3 pr-4">
					<motion.div
						className={lexendGiga.className}
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							delay: 0.1,
						}}>
						<h1 className="text-3xl font-bold">SM Chemicals</h1>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: 0.1,
						}}>
						<div className="mt-12 mb-11">
							<p className="text-4xl font-medium intro-text-color text-left">
								We take pride in offering comprehensive chemical solutions for a
								wide range of{" "}
								<span className="underline decoration-wavy">industries</span>.
							</p>
						</div>
						<div className="mt-6 mb-10">
							<p className="text-4xl text-black font-medium">
								Aqua Culture, Water Treatment, Construction, Pharmaceuticals,
								Polymers, etc.
							</p>
						</div>
					</motion.div>
					<motion.div
						className="flex flex-col sm:flex-row items-center justify-start gap-3 text-lg font-medium mt-10"
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							delay: 0.1,
						}}>
						<a
							className="group bg-emerald-950 text-white px-7 py-3 flex items-center gap-4 rounded-3xl outline-none focus:scale-[1.02] hover:scale-[1.05] hover:bg-gray-950 active:scale-[1.02] transition cursor-pointer"
							href="/CV.pdf"
							target="_bank"
							rel="noopener noreferrer"
							download={true}>
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

				<div className="w-1/3">
					<motion.div
						className="h-64 mix-blend-multiply"
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
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
