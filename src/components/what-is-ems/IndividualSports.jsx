import React from "react";
import Image from "next/image";

const IndividualSports = () => {
  const sportsData = [
    {
      title: "Golf",
      imageSrc: "/golf.png",
      description:
        "With the addition of EMS training to your golf training, your driving distance can be increased by up to 20%, your tee shot becomes more precise, you stay fit for a longer time and you enjoy golfing even more.",
    },
    {
      title: "(Race) Bicycle",
      imageSrc: "/bicycle.png",
      description:
        "For many years, professional cyclists have been using EMS training as a support to normal training, especially to ensure faster recovery after hard cycling races/training rides. Significant performance increases are thus possible through the use of EMS training.",
    },
    {
      title: "Tennis",
      imageSrc: "/tennis.png",
      description:
        "Tennis requires a complex range of motion that involves a large number of muscles. EMS training uses electrical impulses to contract and strengthen these muscles. It also helps you prevent injuries, improve muscle strength, increase endurance and much more to take your tennis game to the next level.",
    },
    {
      title: "Horse Riding",
      imageSrc: "/horse-riding.png",
      description:
        "EMS training can benefit equestrian athletes by targeting stability, mobility, endurance, coordination, and balance. This helps address the sport's unique demands and reduces injury risk from muscular imbalances. Individualized EMS sessions can prolong an active career and ensure a pain-free life both during and after riding.",
    },
  ];

  return (
    <div className="flex flex-col items-center text-white bg-[#1e1e1e] py-6">
      <h1 className="md:text-[40px] text-[28px] uppercase font-extrabold">Individual Sports</h1>
      <p className="text-[14px] text-center mx-4 md:mx-0">
        THANKS TO INDIVIDUAL TRAINING CONCEPTS YOU WILL REACH YOUR PERSONAL
        TRAINING GOAL WITH EMS XPERIENCE
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-[85%] mx-auto">
        {sportsData.map((sport, index) => (
          <div key={index} className="md:mt-10 mt-6 flex flex-col items-start">
            <h1 className="text-[24px] mb-5">{sport.title}</h1>
            <Image src={sport.imageSrc} width={500} height={500} className="w-full mb-5" />
            <p>{sport.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualSports;
