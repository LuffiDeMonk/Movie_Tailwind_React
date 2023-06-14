import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Carousel = ({ data, media_type }) => {
  const swiperControls = useRef();
  return (
    <div className="h-[26rem]">
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={5}
        breakpoints={{
          640: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            centeredSlides: false,
          },
        }}
        ref={swiperControls}
        modules={[Navigation]}
        className="h-[26rem] relative mx-10 lg:mx-0"
      >
        {data?.map((item) => {
          return (
            <SwiperSlide>
              <Link to={`/${media_type}/${item.id}`}>
                <MovieCard showDetails={true} data={item} />
              </Link>
            </SwiperSlide>
          );
        })}
        <div
          className="hidden md:absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 text-black md:flex items-center justify-center cursor-pointer z-10"
          onClick={() => swiperControls.current.swiper.slidePrev()}
        >
          <AiFillCaretLeft size={15} />
        </div>
        <div
          className="hidden md:absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 text-black md:flex items-center justify-center cursor-pointer z-10"
          onClick={() => swiperControls.current.swiper.slideNext()}
        >
          <AiFillCaretRight size={15} />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
