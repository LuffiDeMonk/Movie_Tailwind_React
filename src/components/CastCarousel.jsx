import React, { useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Avatar from "../assets/avatar.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CastCarousel = ({ data }) => {
  const swiperControls = useRef(null);

  return (
    <div>
      <h2 className="text-xl mt-4 px-10 lg:px-0">Cast</h2>
      {data?.length === 0 ? (
        <div className="text-white font-bold text-2xl my-14 text-center">{`No cast data available`}</div>
      ) : (
        <Swiper
          modules={[Navigation]}
          breakpoints={{
            200: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
          className="h-36 relative mx-10 lg:mx-0 focus:cursor-grab"
          ref={swiperControls}
          grabCursor={true}
        >
          {data?.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="h-full w-full flex gap-1 flex-col justify-center items-center"
              >
                {item?.profile_path ? (
                  <LazyLoadImage
                    effect="blur"
                    src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                ) : (
                  <img src={Avatar} alt="" className="w-16 h-16 rounded-full" />
                )}

                <h2 className="text-[12px] md:text-sm text-center">
                  {item?.name}
                </h2>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default CastCarousel;
