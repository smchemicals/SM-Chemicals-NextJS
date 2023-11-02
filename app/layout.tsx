import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "SM Chemicals | Chemical Excellence, Delivered!",
	description:
		"A chemical manufacture company where Chemical Excellence is Delivered!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth">
			<head>
				<script async src="https://tally.so/widgets/embed.js"></script>
			</head>
			<body
				className={`${inter.className} background text-gray-950 relative pt-28 sm:pt-36`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
