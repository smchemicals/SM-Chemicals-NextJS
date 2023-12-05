// Import necessary dependencies and components
"use client";
import React from "react";
import SectionHeading from "./section-heading";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

// List of clientele
const clienteleList = [
	"DR Reddy's",
	"GTN",
	"Vijay Textiles",
	"Mylan",
	"Gland Pharma Limited",
	"Hetro",
];

// Clientele component
export default function Clientele() {
	return (
		<section className="mb-20 sm:mb-0 sm:scroll-m-[10rem] mt-20">
			<div className="sm:container mx-auto p-4 sm:p-8 text-black text-center">
				{/* Heading */}
				<SectionHeading>Our Clientele</SectionHeading>

				{/* Description */}
				<p className="text-xl sm:text-2xl font-light mt-6 mb-12">
					We are proud to have supplied our chemical products to numerous
					reputable companies across industries.
				</p>

				{/* Clientele List with Marquee */}
				<Marquee
					direction="left"
					speed={40}
					pauseOnHover
					gradient
					gradientColor="#c5dbe2">
					{clienteleList.map((client, index) => (
						<span
							key={index}
							className="text-base sm:text-xl font-semibold mr-4 sm:mr-8">
							{client}
						</span>
					))}
				</Marquee>
			</div>
		</section>
	);
}
