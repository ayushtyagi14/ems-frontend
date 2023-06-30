import React from "react";

const EMSTraining = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 my-24 w-[85%] mx-auto gap-10 items-center">
        <div className="flex flex-col h-full justify-between">
          <h1 className="text-[22px] font-extrabold">EMS Training</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor vero
            qui enim ipsum quae facilis voluptatem amet. Facilis, cum
            temporibus!
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-center">
          <img
            src="/training1.jpg"
            alt="Training Image"
            className="h-full lg:w-[80%] w-full object-contain rounded-lg mt-8 md:mt-0"
          />
        </div>
        <div className="flex lg:flex-row flex-col items-center">
          <img
            src="/training2.jpg"
            alt="Training Image"
            className="h-full lg:w-[80%] w-full object-contain rounded-lg mt-8 md:mt-0"
          />
        </div>
      </div>
    </>
  );
};

export default EMSTraining;
