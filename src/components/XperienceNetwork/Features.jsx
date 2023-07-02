import React from "react";
import Image from "next/image";

const Features = () => {
  const resultData = [
    {
      id: "1",
      title: "EMS Training",
      description:
        "“Time is money” as the old saying goes, and it is especially relevant in today's busy world. With EMS you can achieve the results of a 90-minute training in just 20 minutes, including strengthening and cardio sessions according to your preference",
    },
    {
      id: "2",
      title: "Xbody",
      description:
        "XBody is one of the biggest global players on the market, delivering value and the highest quality in all aspects. Their professional tools allow efficient training sessions",
    },
    {
      id: "3",
      title: "Nutrition",
      description:
        "Successful eating plants need to be individualized and take the whole person into consideration. Prior to starting new diet plan, consult with healthcare provider or registered dietitian, especially if you have an underlying health condition",
    },
    {
      id: "4",
      title: "Health Support",
      description:
        "In case of injuries, consultation with a certified doctor or physical therapist is necessary in order to put together the right training program and properly treat problem areas in addition to our training",
    },
  ];

  return (
    <div className="lg:h-max h-screen md:mb-0 mb-40">
              <img
              src="/results-banner.jpg"
              alt="What Is EMS Training"
              className="brightness-[50%] object-cover h-full w-full"
            />
      <div className="relative">
        <div className="md:h-[85vh] h-[120vh]">
        <img
              src="/results-banner.jpg"
              alt="What Is EMS Training"
              className="brightness-[50%] object-cover h-full w-full"
            />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[80%] w-[90%] text-white z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {resultData.map((item, index) => (
              <div className="flex flex-col items-start" key={index}>
                <h1 className="md:text-[24px] text-[#f10000] font-extrabold">
                  {item.title}
                </h1>
                <p className="text-start w-full md:w-[70%]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
