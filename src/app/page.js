import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollSection from "@/components/ScrollSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Hero/>
            <ScrollSection/>
            <Footer />
        </>
    );
}
