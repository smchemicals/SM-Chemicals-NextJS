import AboutUs from "@/components/aboutus";
import Career from "@/components/career";
import Clientele from "@/components/clientele";
import IndustriesIntro from "@/components/industries-intro";
import Intro from "@/components/intro";
import Products from "@/components/products";

export default function Home() {
	return (
		<main className="">
			<Intro />
			<AboutUs />
			<IndustriesIntro />
			<Products />
			<Clientele />
			<Career />
		</main>
	);
}
