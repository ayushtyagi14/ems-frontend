import React from "react";

const LocationPage = ({ locationData }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 md:w-[80%] w-[90%] mx-auto my-20">
        <div className="flex flex-col items-start">
          <h1 className="text-[30px] font-extrabold my-2">
            {locationData.name}
          </h1>
          <div className="flex flex-row md:items-center items-start my-2 md:text-[20px]">
            <img
              src="/location-icon.png"
              alt="Location Icon"
              className="mr-2"
            />
            <p>{locationData.address}</p>
          </div>
          <div className="flex flex-row md:items-center items-start my-2 md:text-[20px]">
            <img src="/email-icon.png" alt="Email Icon" className="mr-2" />
            <p>{locationData.email}</p>
          </div>
          <div className="flex flex-row md:items-center items-start md:text-[20px] my-2">
            <img src="/phone-icon.png" alt="Phone Icon" className="mr-2" />
            <p>{locationData.phone}</p>
          </div>
          <div className="flex flex-row md:items-center items-start md:text-[20px] my-2">
            <img src="/clock-icon.png" alt="Clock Icon" className="mr-2" />
            <p>{locationData.timings}</p>
          </div>
          <button className="mt-4 rounded-full text-[18px] bg-[#f10000] text-white hover:bg-[#f34848] md:w-[50%] w-full py-2">
            Book Session
          </button>
        </div>
        <div className="flex lg:flex-row flex-col items-center">
          <img
            src={locationData.photo}
            alt={locationData.name}
            className="h-full lg:w-[80%] w-full object-contain rounded-lg mt-8 md:mt-0"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        <h1 className="text-[30px] font-extrabold uppercase">What We Offer</h1>
        <p className="md:w-[70%] w-[90%] mx-auto text-center my-4 md:text-[18px]">
          {locationData.description}
        </p>
        <div className="flex flex-row items-center mt-2">
          <button className="border border-[#f10000] md:px-4 px-2 py-1 text-[#f10000] hover:text-white hover:bg-[#f10000] rounded-l-lg">
            EMS Training
          </button>
          <button className="border border-[#f10000] md:px-4 px-2 py-1 text-[#f10000] hover:text-white hover:bg-[#f10000]">
            EMS to Go
          </button>
          <button className="border border-[#f10000] md:px-4 px-2 py-1 text-[#f10000] hover:text-white hover:bg-[#f10000]">
            4Life
          </button>
          <button className="border border-[#f10000] md:px-4 px-2 py-1 text-[#f10000] hover:text-white hover:bg-[#f10000] rounded-r-lg">
            Zinzino
          </button>
        </div>
      </div>
    </>
  );
};

export default LocationPage;
