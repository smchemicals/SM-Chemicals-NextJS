import React from "react";
import { FiBriefcase, FiDollarSign, FiHome, FiInfo, FiList, FiMail, FiPackage, FiTool, FiUsers } from "react-icons/fi";

export const smcText = [
	{
		name: "SMC",
		hash: "#home",
	},
] as const;

export const links = [
	{
		name: "Home",
		icon: React.createElement(FiHome ),
		hash: "#home",
	},
	{
		name: "About Us",
		icon: React.createElement(FiInfo),
		hash: "#aboutus",
	},
	{
		name: "Products List",
		icon: React.createElement(FiList),
		hash: "#productslist",
	},
	{
		name: "Contact Us",
		icon: React.createElement(FiMail),
		hash: "#contactus",
	},
	{
		name: "Career",
		icon: React.createElement(FiBriefcase),
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

export const industriesData = [
	"Aqua Culture",
	"Biomass Power Plants",
	"Cement",
	"Ceramic",
	"Construction",
	"Detergent",
	"Distillery",
	"ETP/STP Treatment",
	"Food and Beverages",
	"Meat Industries",
	"Oil Industries",
	"Paints",
	"Paper and Pulp Industries",
	"Pharmaceuticals",
	"Polymers",
	"Polyelectrolytes",
	"Poultry",
	"Sanitation",
	"Steel",
	"Water Treatment",
] as const;