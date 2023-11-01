import React from "react";
import { FiDollarSign, FiPackage, FiTool, FiUsers } from "react-icons/fi";

export const smcText = [
	{
		name: "SMC",
		hash: "#home",
	},
] as const;

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About Us",
		hash: "#aboutus",
	},
	{
		name: "Products List",
		hash: "#productslist",
	},
	{
		name: "Contact Us",
		hash: "#contactus",
	},
	{
		name: "Career",
		hash: "#career",
	},
] as const;

export const aboutCards = [
	{
		title: "50+ Products",
		icon: React.createElement(FiPackage),
	},
	{
		title: "6+ Clients",
		icon: React.createElement(FiUsers),
	},
	{
		title: "Manufacturer",
		icon: React.createElement(FiTool),
	},
	{
		title: "Annual Turnover Rs. 1-2 Crore",
		icon: React.createElement(FiDollarSign),
	},
] as const;

export const aboutText = {};
