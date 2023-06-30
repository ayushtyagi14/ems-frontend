"use client";

import Footer from "@/components/Footer";
import WeWork from "@/components/Homepage/WeWork";
import Navbar from "@/components/Navbar";
import LocationPage from "@/components/locations/LocationPage";
import LocationTeam from "@/components/locations/LocationTeam";
import EMSTraining from "@/components/locations/ems-training";
import { useParams } from 'next/navigation';
import { useState, useEffect } from "react";

export default function Home() {
    const params = useParams();
    const id = params.id;

    const [locationData, seLocationData] = useState({});

    const geLocationData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            `https://ems-xperience.eu/api/locations/${id}`,
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => {
                const data = JSON.parse(result);
                console.log(data);
                seLocationData(data);
            })
            .catch((error) => console.log("error", error));
    };

    const [teamData, setTeamData] = useState({});

    const getTeamData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("https://ems-xperience.eu/api/team/", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                const data = JSON.parse(result);
                console.log(data);
                setTeamData(data);
            })
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getTeamData();
        geLocationData();
    }, []);

    return (
        <>
            <Navbar />
            <LocationPage locationData={locationData} />
            <EMSTraining />
            <LocationTeam teamData={teamData} />
            <WeWork />
            <Footer />
        </>
    )
}
