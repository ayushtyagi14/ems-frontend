import React, { useState } from "react";
import Image from "next/image";

const Results = () => {
  const [selectedItem, setSelectedItem] = useState("Joint Protection");

  const handleClick = (item) => {
    setSelectedItem(item);
    const paraSection = document.getElementById("selected-items");
    paraSection.scrollIntoView({ behavior: "smooth" });
  };

  const resultsData = [
    {
      id: "joint-protection",
      title: "Joint Protection",
      description:
        "The electrical impulses act directly on the muscles and thus protect the joints. They are not overstressed, as is often the case with conventional training with weights. During a workout with our premium EMS equipment, the electrodes stimulate about 95% of the entire body musculature simultaneously. If necessary, individual muscle groups can of course also be trained in a targeted manner. Thus, we can also focus on weak points and strengthen them.",
    },
    {
      id: "muscle-building",
      title: "Muscle Building",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis fuga inventore saepe corrupti. Fugit numquam assumenda dolores natus cum earum iusto accusantium eveniet, possimus ullam id rem eius facere!",
    },
    {
      id: "weight-loss",
      title: "Weight Loss",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis fuga inventore saepe corrupti. Fugit numquam assumenda dolores natus cum earum iusto accusantium eveniet, possimus ullam id rem eius facere!",
    },
    {
      id: "back-and-spinal-discs",
      title: "Back & Spinal Discs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis fuga inventore saepe corrupti. Fugit numquam assumenda dolores natus cum earum iusto accusantium eveniet, possimus ullam id rem eius facere!",
    },
    {
      id: "strengthening-the-pelvic-floor",
      title: "Strengthening The Pelvic Floor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis fuga inventore saepe corrupti. Fugit numquam assumenda dolores natus cum earum iusto accusantium eveniet, possimus ullam id rem eius facere!",
    },
    {
      id: "cellulite",
      title: "Cellulite",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis fuga inventore saepe corrupti. Fugit numquam assumenda dolores natus cum earum iusto accusantium eveniet, possimus ullam id rem eius facere!",
    },
    {
      id: "knee",
      title: "Knee",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis fuga inventore saepe corrupti. Fugit numquam assumenda dolores natus cum earum iusto accusantium eveniet, possimus ullam id rem eius facere!",
    },
    {
      id: "rheuma",
      title: "Rheuma",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reiciendis fuga inventore saepe corrupti. Fugit numquam assumenda dolores natus cum earum iusto accusantium eveniet, possimus ullam id rem eius facere!",
    },
  ];

  return (
    <>
      <h1 className="text-center font-extrabold text-[40px] mt-20 mb-5">
        Individual Goals and Results
      </h1>
      <div className="h-max">
        <div className="relative">
          <div className="md:h-[85vh] h-[55vh]">
            <img
              src="/no-banner.jpeg"
              alt="What Is EMS Training"
              className="brightness-[50%] object-cover h-full w-full"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-max w-[90%] text-white text-center z-10">
            <div className="grid grid-cols-2 md:gap-20">
              <div>
                <ul className="space-y-4">
                  {resultsData
                    .slice(0, Math.ceil(resultsData.length / 2))
                    .map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleClick(item.title)}
                        className={`cursor-pointer text-center md:text-[20px] p-2 ${
                          selectedItem === item.title
                            ? "bg-[#f10000] rounded-xl text-white"
                            : ""
                        }`}
                      >
                        {item.title}
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  {resultsData
                    .slice(Math.ceil(resultsData.length / 2))
                    .map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleClick(item.title)}
                        className={`cursor-pointer text-center p-2 md:text-[20px] ${
                          selectedItem === item.title
                            ? "bg-[#f10000] rounded-xl text-white"
                            : ""
                        }`}
                      >
                        {item.title}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {selectedItem && (
          <div
            className="flex md:flex-row flex-col items-start justify-between w-[90%] mx-auto border border-[#f10000] my-8 p-10"
            id="selected-items"
          >
            <h1 className="text-[28px] font-bold text-[#f10000]">
              {selectedItem}
            </h1>
            <p className="text-[18px] md:w-[70%]">
              {
                resultsData.find((item) => item.title === selectedItem)
                  ?.description
              }
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Results;
