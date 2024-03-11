"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./Carousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Card } from "..";
import { ICard } from "@/interfaces";

export default function Carousel({ display }: { display: ICard[] }) {
  const [isMobile, setIsMobile] = useState<boolean>();
  useEffect(() => {
    function handleWidth() {
      window.innerWidth > 1024 ? setIsMobile(false) : setIsMobile(true);
    }

    handleWidth();
    window.addEventListener(`resize`, handleWidth);
    return () => {
      window.removeEventListener(`resize`, handleWidth);
    };
  }, []);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isMobile ? 1 : 2}
        coverflowEffect={{
          rotate: 2,
          stretch: 10,
          depth: 20,
          modifier: 10,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="Carousel "
      >
        {display.map(({ name, text, date }, index) => (
          <SwiperSlide key={text + index}>
            <Card name={name} text={text} date={date} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
