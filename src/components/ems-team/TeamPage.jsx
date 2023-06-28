import React from "react";
import { useState, useEffect } from "react";

const TeamPage = ({ teamId }) => {
  const [teamData, setTeamData] = useState({});

  const getTeamData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://ems-xperience.eu/api/team/${teamId}`, requestOptions)
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
      <div className="grid lg:grid-cols-2 grid-cols-1 w-[92%] mx-auto my-20">
        <div className="flex lg:flex-row flex-col items-center">
          <img
            src={teamData.photo}
            alt="Tobias"
            className="h-full lg:w-[80%] w-full object-contain rounded-lg"
          />
        </div>
        <div className="flex flex-col lg:items-start items-center">
          <h1 className="md:text-[32px] text-[28px] font-extrabold uppercase">
            {teamData.name}
          </h1>
          <p className="md:text-[22px] text-[18px] text-[#f10000]">
            {teamData.position}
          </p>
          <p className="mt-5 md:text-[18px] text-center lg:text-start">
            {teamData.about}
          </p>
          {teamData.licenses?.length > 0 && (
            <ul className="my-6 lg:w-[60%] lg:mx-auto list-disc">
              {teamData.licenses.map((license, index) => (
                <li key={index} className="mt-2">
                  {license}
                </li>
              ))}
            </ul>
          )}
          <div className="flex md:flex-row flex-col items-center w-full justify-between mt-5">
            <div className="flex flex-row items-center">
              <img src="/email-icon.png" alt="email" className="mr-2" />
              <a href={`mailto:${teamData.email}`}>{teamData.email}</a>
            </div>

            <div className="flex flex-row items-center">
              <img
                src="/phone-icon.png"
                alt="phone"
                className="mr-2 mt-2 md:mt-0"
              />
              <a href={`tel:${teamData.phone}`}>{teamData.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
