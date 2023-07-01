import React from "react";

const AboutTraining = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto my-20">
      <div className="border-2 border-black md:w-[80%] h-72 md:h-auto"></div>
      <div className="mt-10 md:mt-0">
        <p>
          EMS stands for Electro Muscle Stimulation and is based on the body&apos;s
          own principles: Each of your movements, is triggered by a bioelectric
          impulse from the brain
        </p>
        <p className="mt-10">
          In EMS training, this impulse is stimulated via a functional vest with
          electrodes and delivered directly to the various main muscle groups.
          Your muscles are activated and contracted by an electromuscular
          impulse, which is why our EMS training works like the body&apos;s own
          booster principle. This impulse is noticeable for you, but absolutely
          painless.
        </p>
      </div>
    </div>
  );
};

export default AboutTraining;
