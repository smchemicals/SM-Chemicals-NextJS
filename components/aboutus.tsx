"use client";

import React from "react";
import { Lexend_Giga } from "next/font/google";
import { aboutCards } from "@/lib/data";
import { motion } from "framer-motion";

const lexendGiga = Lexend_Giga({
	weight: "400",
	subsets: ["latin"],
});

export default function AboutUs() {
	return (
		<section
			id="aboutus"
			className="bg-emerald-950 mb28 sm:mb-0 scroll-m-[10rem] !mb-20">
			<div className="px-96">
				<div className="flex items-center justify-between p-4 !mb-20 !mt-20">
					<div className="w-2/3 pr-4 mt-16 text-white">
						<motion.h1
							className={`${lexendGiga.className} flex text-4xl font-bold`}
							initial={{ opacity: 0, x: -150 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								delay: 0.1,
							}}>
							About Us
						</motion.h1>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								delay: 0.1,
							}}>
							<div className="mt-12 mb-11">
								<p className="text-xl font-light text-white text-left">
									Established in 2000, S M Chemicals has been a leading
									manufacturer and marketer of chemicals in Hyderabad for over
									23 years. With a strong focus on quality and customer
									satisfaction.
								</p>
							</div>
							<div className="mt-6 mb-11">
								<p className="text-xl font-light text-white text-left">
									Led by our esteemed CEO, Mr. Partha Sarathi, who brings
									extensive technical and commercial expertise in total water
									management, including effluent water treatment.
								</p>
							</div>
							<div className="mt-6 mb-11">
								<p className="text-xl font-light text-white text-left">
									We pride ourselves on our commitment to innovation and
									sustainability, ensuring that our clients receive top-notch,
									eco-friendly chemical solutions.
								</p>
							</div>
						</motion.div>
					</div>

					<div className="w-1/3">
						<motion.div
							className=""
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								delay: 0.1,
								type: "spring",
								stiffness: 200,
							}}>
							<div className="grid grid-cols-2 gap-8 justify-center items-center">
								{aboutCards.map((card, index) => (
									<div
										key={index}
										className="bg-lime-100 p-6 rounded-lg shadow-2xl h-48 w-48 flex flex-col justify-center items-center">
										{" "}
										{/* Added flex flex-col justify-center items-center */}
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
