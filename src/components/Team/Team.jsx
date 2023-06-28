import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Team = () => {
  const router = useRouter();

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
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-4 md:w-[88%] w-[95%] mx-auto my-20">
        {teamData.length > 0 &&
          teamData.map((items) => (
            <div
              className="w-full shadow flex flex-col items-start cursor-pointer overflow-hidden hover:shadow-lg"
              key={items.id}
              onClick={() => router.push(`/ems-team/${items.id}/${items.slug}`)}
            >
              <img
                src={items.photo}
                alt="Tobias"
                className="w-full h-40 lg:h-56 object-cover rounded hover:transform hover:scale-105 hover:ease-in-out"
              />
              <h1 className="md:text-[22px] font-bold mx-2 mt-3">
                {items.name}
              </h1>
              <p className="md:text-[18px] mx-2 font-bold mt-1">
                {items.position}
              </p>
              <p className="mx-2 my-3 flex flex-row items-center">
                <img src="/email-icon.png" alt="Email Icon" className="mr-1" />{" "}
                {items.email}
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Team;
