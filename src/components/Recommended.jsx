import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Recommended = ({ data }) => {
  const swiperControls = useRef();
  return (
    <div className="mb-4">
      <h2 className="text-xl my-4 px-10 lg:px-0">Recommended Movies</h2>
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
              <MovieCard data={item} />
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
          className="hidden absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 text-black md:flex items-center justify-center cursor-pointer z-10"
          onClick={() => swiperControls.current.swiper.slideNext()}
        >
          <AiFillCaretRight size={15} />
        </div>
      </Swiper>
    </div>
  );
};

export default Recommended;
