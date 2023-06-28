"use client";

import Footer from "@/components/Footer";
import GoalsPara from "@/components/Goals/GoalsPara";
import Hero from "@/components/Goals/Hero";
import Results from "@/components/Goals/Results";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <GoalsPara />
            <Results />
            <Footer />
        </>
    )
}
