import React from "react";
import SlidesList from "./SlidesList";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slides = () => {
  return (
    <div className="pt-[2.5rem] ">
      <h2 className="text-[#212121] hover:text-[#333333] text-[1.6rem] lg:text-[2.6rem] font-bold pb-[1rem]">
        Treat yourself, get something extra!
      </h2>
      <Swiper spaceBetween={25} slidesPerView="auto">
        <SwiperSlide className="!w-auto">
          <SlidesList />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <SlidesList />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <SlidesList />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <SlidesList />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <SlidesList />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <SlidesList />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <SlidesList />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <SlidesList />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <SlidesList />
        </SwiperSlide>
        <SwiperSlide className="!w-auto">
          <SlidesList />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
