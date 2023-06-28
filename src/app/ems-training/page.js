"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutTraining from "@/components/what-is-ems/AboutTraining";
import Hero from "@/components/what-is-ems/Hero";
import IndividualSports from "@/components/what-is-ems/IndividualSports";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutTraining />
            <IndividualSports />
            <Footer />
        </>
    )
}
