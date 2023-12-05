import React from 'react';
import { Lexend_Giga } from 'next/font/google';

type SectionHeadingProps = {
    children: React.ReactNode;
};

const lexendGiga = Lexend_Giga({
	weight: "400",
	subsets: ["latin"],
});

export default function SectionHeading({children}: SectionHeadingProps) {
  return (
    <h2 className= {`${lexendGiga.className} text-3xl font-medium capitalize mb-8 text-center`}>{children}</h2>
  );
}
