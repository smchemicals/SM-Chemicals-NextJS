import AboutUs from "@/components/aboutus";
import Career from "@/components/career";
import Intro from "@/components/intro";

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<Intro />
			<AboutUs />
			<Career />
		</main>
	);
}
