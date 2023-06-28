"use client";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/autoplay";

const WeWork = () => {
  const [width, setWidth] = useState(null);
  let mobile = false;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  if (width < 1000) {
    mobile = true;
  } else {
    mobile = false;
  }

  const images = [
    "/work1.png",
    "/work1.png",
    "/work1.png",
    "/work1.png",
    "/work1.png",
    "/work1.png",
  ];
  const autoplayDelay = 800; // Autoplay delay in milliseconds
  const slideTransitionDuration = 1000; // Slide transition duration in milliseconds

  return (
    <>
      <h1 className="text-center text-[40px] mb-10 uppercase font-extrabold">How We Work</h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={mobile ? 1 : 2.25}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: true,
        }}
        speed={slideTransitionDuration}
        loop={true}
        centeredSlides={true}
        className="mySwiper w-[96%] mx-auto mt-0"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item}
              alt={`Image ${index}`}
              className="h-72 w-max rounded shadow-lg mb-10"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default WeWork;
