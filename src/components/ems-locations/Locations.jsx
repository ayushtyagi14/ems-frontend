import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Locations = () => {
  const router = useRouter();

  const [locationData, setLocationData] = useState({});

  const getLocationData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`https://ems-xperience.eu/api/locations/`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        console.log(data);
        setLocationData(data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getLocationData();
  }, []);

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 my-20 w-[85%] mx-auto">
        {locationData.length > 0 &&
          locationData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start border border-[#f10000] rounded-lg p-4"
            >
              <h1 className="text-[22px] font-extrabold">{item.name}</h1>
              <div className="flex flex-row items-start my-2">
                <img src="/location-icon.png" alt="location" className="mr-2" />
                <a
                  href={item.map_location}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.address}
                </a>
              </div>
              <div className="flex flex-row items-start my-2">
                <img src="/user-icon.png" alt="user" className="mr-2" />
                <h1>{item.head}</h1>
              </div>
              <div className="flex flex-row items-start my-2">
                <img src="/email-icon.png" alt="email" className="mr-2" />
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </div>

              <div className="flex flex-row items-start my-2">
                <img
                  src="/phone-icon.png"
                  alt="phone"
                  className="mr-2 mt-2 md:mt-0"
                />
                <a href={`tel:${item.phone}`}>{item.phone}</a>
              </div>
              <div className="flex flex-row items-start my-2">
                <img
                  src="/clock-icon.png"
                  alt="clock"
                  className="mr-2 mt-2 md:mt-0"
                />
                <p>Mon-Fri: {item.timings}</p>
              </div>
              <button
                className="my-3 border bg-[#f10000] w-[80%] mx-auto text-white rounded-xl py-1 hover:bg-[#f34848]"
                onClick={() =>
                  router.push(`/locations/${item.id}/${item.slug}`)
                }
              >
                Studio Profile
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Locations;
