import React, { useRef, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Cover from "../assets/cover.jpg";
import VideoPortal from "./VideoPortal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Trailer = ({ data }) => {
  const [openPortal, setOpenPortal] = useState(false);
  const [trailerdata, setTrailerData] = useState(null);
  const swiperControls = useRef(null);
  const showTrailer = (key) => {
    if (openPortal === false) {
      setOpenPortal(true);
      document.body.style.overflow = "hidden";
      setTrailerData(key);
    } else {
      setOpenPortal(false);
      document.body.style.overflow = "";
      setTrailerData(null);
    }
  };
  return (
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-xl my-4 px-10 md:px-0">Watch Trailers</h2>
      {data?.length === 0 ? (
        <h1 className="text-2xl font-bold text-center text-white my-24">
          No trailers available
        </h1>
      ) : (
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
              centeredSlides: false,
            },
          }}
          className="h-24 relative mx-10 lg:mx-0 text-white"
          ref={swiperControls}
        >
          {data?.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="relative h-full w-full  rounded-md overflow-hidden cursor-pointer group"
              >
                <LazyLoadImage
                  src={`https://i.ytimg.com/vi/${item.key}/0.jpg`}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-black/30 cursor-pointer"></div>
                <AiOutlinePlayCircle
                  onClick={() => showTrailer(item.key)}
                  className="w-12 h-12 text-white/60 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer group-hover:opacity-100 opacity-0"
                />
              </SwiperSlide>
            );
          })}
          <div
            className="hidden absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 text-black md:flex items-center justify-center cursor-pointer z-10"
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
      )}
      {openPortal && (
        <VideoPortal showTrailer={showTrailer} data={trailerdata} />
      )}
    </div>
  );
};

export default Trailer;
