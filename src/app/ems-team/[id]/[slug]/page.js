"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeamPage from "@/components/ems-team/TeamPage";
import { useParams } from 'next/navigation';

export default function Home() {
    const params = useParams();
    const id = params.id;

    return (
        <>
            <Navbar />
            <TeamPage teamId={id} />
            <Footer />
        </>
    )
}
