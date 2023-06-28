"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LocationPage from "@/components/locations/LocationPage";
import { useParams } from 'next/navigation';

export default function Home() {
    const params = useParams();
    const id = params.id;

    return (
        <>
            <Navbar />
            <LocationPage locationId={id} />
            <Footer />
        </>
    )
}
