"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Features from "@/components/XperienceNetwork/Features";
import Hero from "@/components/XperienceNetwork/Hero";
import PartnerNetwork from "@/components/XperienceNetwork/PartnerNetwork";
import WhatWeOffer from "@/components/XperienceNetwork/WhatWeOffer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <WhatWeOffer />
            <Features />
            <PartnerNetwork />
            <Footer />
        </>
    )
}
