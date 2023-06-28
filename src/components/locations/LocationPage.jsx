import React from "react";
import { useState, useEffect } from "react";

const LocationPage = ({ locationId }) => {
  const [locationData, seLocationData] = useState({});

  const geLocationData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://ems-xperience.eu/api/locations/${locationId}`,
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

  useEffect(() => {
    geLocationData();
  }, []);
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div>
          <h1>{locationData.name}</h1>
          <div>
            <img src="/location-icon.png" alt="Location Icon" />
            <p>{locationData.address}</p>
          </div>
          <div>
            <img src="/email-icon.png" alt="Email Icon" />
            <p>{locationData.email}</p>
          </div>
          <div>
            <img src="/phone-icon.png" alt="Phone Icon" />
            <p>{locationData.phone}</p>
          </div>
          <div>
            <img src="/clock-icon.png" alt="Clock Icon" />
            <p>{locationData.timings}</p>
          </div>
          <button>Book Session</button>
        </div>
      </div>
    </>
  );
};

export default LocationPage;
