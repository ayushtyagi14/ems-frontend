"use client";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Feedback = () => {
  const swiperRef = useRef();

  return (
    <>
      <div className="my-10">
        <h1 className="text-[40px] text-center font-extrabold uppercase">
          Our Customer&apos;s Feedback
        </h1>
        <div className="flex flex-row justify-between mx-5">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/chevron-left.png"
              alt="chevron-right"
              className="w-20"
            />
          </button>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            centeredSlides={true}
            className="mySwiper"
          >
            <SwiperSlide className="flex flex-col items-center mt-10 mb-16">
              <p className="w-[80%] mx-auto text-[18px] text-center italic font-light">
                XBody gives you oppurtunity to be your own boss while giving
                your clients the chance to achieve outstanding results. Wherever
                you are in the world. Xbody gives you the support needed to
                achieve your objectives!
              </p>
              <div className="flex flex-row justify-center items-center mt-8">
                <img
                  src="/person1.jpg"
                  alt="person1"
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex flex-col ml-4">
                  <h1 className="font-bold">Vincent Boundry</h1>
                  <p>Studio Franchise Owner, Reunion</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col items-center mt-10 mb-16">
              <p className="w-[80%] mx-auto text-[18px] text-center italic font-light">
                XBody gives you oppurtunity to be your own boss while giving
                your clients the chance to achieve outstanding results. Wherever
                you are in the world. Xbody gives you the support needed to
                achieve your objectives!
              </p>
              <div className="flex flex-row justify-center items-center mt-8">
                <img
                  src="/person1.jpg"
                  alt="person1"
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex flex-col ml-4">
                  <h1 className="font-bold">Vincent Boundry</h1>
                  <p>Studio Franchise Owner, Reunion</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/chevron-right.png"
              alt="chevron-right"
              className="w-20"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Feedback;
