"use client";

import { links, smcText } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Lexend_Zetta } from "next/font/google";
import { Squash as Hamburger } from "hamburger-react";

const lexendZetta = Lexend_Zetta({
	weight: "400",
	subsets: ["latin"],
});

const lexendZettaLight = Lexend_Zetta({
	weight: "200",
	subsets: ["latin"],
});

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const [isAtTop, setIsAtTop] = useState(true);

	const handleToggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		setIsButtonDisabled(true);

		setTimeout(() => {
			setIsButtonDisabled(false);
		}, 200);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		const isTop = scrollTop > 10; // Adjust this threshold as needed

		setIsAtTop(isTop);
	};

	useEffect(() => {
		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Check initial scroll position
		handleScroll();

		// Remove event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className="z-[999] relative">
			{/* Circular Animated Button */}
			<motion.button
				className="lg:hidden flex justify-center items-center fixed z-[9999] h-[3rem] w-[3rem] top-5 right-5 rounded-2xl shadow-md bg-lime-200"
				onClick={handleToggleMenu}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}>
				<Hamburger
					toggled={isMenuOpen}
					toggle={handleToggleMenu}
					size={18}
					color="black"
					duration={0.4}
					easing="ease-in"
					label="Show menu"
					hideOutline={false}
					rounded
				/>
			</motion.button>

			{/* Responsive Menu */}
			<motion.nav
				className="hidden fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] lg:flex ms:h-[initial] ms:py-0 !rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.75rem]"
				initial={{ y: -100, x: "-50%", opacity: 0 }}
				animate={{ y: 0, x: "-50%", opacity: 1 }}>
				<ul
					className={`${lexendZetta.className} flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-semibold text-emerald-950 sm:w-[initial] sm:flex-nowrap sm:gap-4 mr-80`}>
					{smcText.map((text) => (
						<motion.li
							className="h-3/4 flex items-center justify-center relative"
							key={text.hash}
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}>
							<Link
								className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition font-bold"
								href={text.hash}>
								{text.name}
							</Link>
						</motion.li>
					))}
				</ul>

				<ul className="truncate flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-3">
					{links.map((link) => (
						<motion.li
							className="h-3/4 flex items-center justify-center relative"
							key={link.hash}
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}>
							<Link
								className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
								href={link.hash}>
								{link.name}
							</Link>
						</motion.li>
					))}
				</ul>
			</motion.nav>

			{/* Responsive Menu for smaller screens*/}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.nav
						key="menu"
						className="lg:hidden fixed top-0 left-0 h-full w-1/2 bg-emerald-950 p-4 border-r border-white border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-r-xl z-[999]">
						<ul
							className={`${lexendZetta.className} flex w-[22rem] flex-wrap items-start justify-start mb-10 text-[0.9rem] font-bold text-white !text-3xl`}>
							{smcText.map((text) => (
								<motion.li
									className=""
									key={text.hash}
									initial={{ y: -100, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}>
									<Link
										className="flex w-full items-center justify-center px-3 py-3 transition"
										href={text.hash}>
										{text.name}
									</Link>
								</motion.li>
							))}
						</ul>

						<ul className="flex flex-col items-start gap-y-6">
							{links.map((link) => (
								<motion.li
									className={`${lexendZettaLight.className} text-2l h-3/4 flex items-center justify-start relative`}
									key={link.hash}
									initial={{ x: -100, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}>
									<Link
										className="text-white hover:text-gray-950 transition flex items-center gap-4"
										href={link.hash}
										onClick={closeMenu}>
										{link.icon}
										{link.name}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.nav>
				)}

				{/* SMC Text for Smaller Screens */}
				{!isAtTop && (
					<motion.div
						className="lg:hidden fixed top-5 left-5"
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -100, opacity: 0 }}>
						<ul
							className={`${lexendZetta.className} flex flex-col items-start gap-y-1 font-medium text-2xl text-emerald-950 hover:text-white`}>
							{smcText.map((text) => (
								<motion.li
									className="h-3/4 flex items-center justify-center relative"
									key={text.hash}
									initial={{ y: -100, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}>
									<Link
										className="flex items-center justify-center px-3 py-3 transition font-bold"
										href={text.hash}>
										{text.name}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
