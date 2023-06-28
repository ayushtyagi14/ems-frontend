import React from "react";

const NoBanner = () => {
  return (
    <>
      <div className="relative max-h-screen my-20">
        <div>
          <img
            src="/no-banner.jpeg"
            alt="Banner Image"
            className="w-full object-cover brightness-[50%] h-screen"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] mx-auto md:w-full text-white">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl md:text-5xl font-extrabold uppercase">
              No Time? No Excuse!
            </h1>
            <p className="md:text-xl">
              20 Minutes EMS Training Per Week Is Enough
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-80 md:w-full mx-auto mt-20">
            <div className="flex flex-col items-center mx-2 text-center">
              <h1 className="text-lg md:text-xl">Personal Coaching</h1>
              <p className="mt-2 text-sm md:text-base">
                Your goals are our goals. Whether you want to lose weight, build
                muscle, strengthen your back, or improve your overall fitness.
                We help you achieve it!
              </p>
            </div>
            <div className="flex flex-col items-center mx-2 text-center">
              <h1 className="text-lg md:text-xl">Time Efficient</h1>
              <p className="mt-2 text-sm md:text-base">
                In just 20 minutes, you can increase your overall fitness and
                performance. Our qualified trainer helps you reach your goals
                with just one session per week!
              </p>
            </div>
            <div className="flex flex-col items-center mx-2 text-center">
              <h1 className="text-lg md:text-xl">Highly Effective</h1>
              <p className="mt-2 text-sm md:text-base">
                Your tailor-made whole-body workout is not only highly
                effective, but it also helps improve your overall health.
                Energize your body and feel fit in everyday life!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoBanner;
