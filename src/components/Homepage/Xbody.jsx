import React from "react";

const Xbody = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center my-20">
        <img src="/xbody.png" alt="xbody" className="rounded-lg w-max h-20" />
        <p className="md:w-[54%] md:mx-auto mx-3 mt-10">
          XBody was founded in 2010 and has been growing ever since. Today, it
          is one of the biggest global players on the market, delivering value
          and the highest quality in all aspects.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 w-full mt-10">
          <div className="flex flex-col items-center">
            <h1 className="text-[40px]">86</h1>
            <p className="text-[18px]">In 86 Countries Worldwide</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[40px]">+5.000</h1>
            <p className="text-[18px]">Studios Opened Worldwide</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[40px]">+35.000</h1>
            <p className="text-[18px]">Daily EMS Training</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 md:w-[90%] w-full md:mx-auto md:justify-center mt-10">
          <div className="flex justify-center">
            <img src="/award1.png" alt="award1" className="w-28 h-28 mb-5" />
          </div>
          <div className="flex justify-center">
            <img src="/award2.png" alt="award1" className="w-28 h-28 mb-5" />
          </div>
          <div className="flex justify-center">
            <img src="/award3.png" alt="award1" className="w-28 h-28 mb-5" />
          </div>
          <div className="flex justify-center">
            <img src="/award4.png" alt="award1" className="w-28 h-28 mb-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Xbody;
