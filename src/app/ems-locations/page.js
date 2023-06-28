"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/ems-locations/Hero";
import Locations from "@/components/ems-locations/Locations";

export default function Home() {

    return (
        <>
            <Navbar />
            <Hero />
            <Locations />
            <Footer />
        </>
    )
}
