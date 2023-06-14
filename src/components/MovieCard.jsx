import React from "react";
import { AiFillStar } from "react-icons/ai";
import CardImage from "../assets/cardImage.jpg";
import { createImageURL } from "../utils/getMovieData";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieCard = ({ showDetails, data }) => {
  const image = createImageURL(data?.poster_path);
  const genre = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Sci-Fi" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
    { id: 10759, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 10762, name: "Kids" },
    { id: 9648, name: "Mystery" },
    { id: 10763, name: "News" },
    { id: 10764, name: "Reality" },
    { id: 10765, name: "Fantasy" },
    { id: 10766, name: "Soap" },
    { id: 10767, name: "Talk" },
    { id: 10768, name: "Politics" },
    { id: 37, name: "Western" },
  ];

  const filteredGenre = genre.filter((genreObj) => {
    return data?.genre_ids?.includes(genreObj.id);
  });
  return (
    <div className="w-full lg:w-[15.3rem] h-[26rem] flex flex-col justify-center space-y-2">
      <div className="h-[85%] w-full overflow-hidden rounded-xl relative">
        {data?.poster_path === null ? (
          <LazyLoadImage
            src={CardImage}
            alt=""
            className="h-full object-cover"
          />
        ) : (
          <LazyLoadImage
            effect="blur"
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
        {showDetails && (
          <div className="absolute w-full bottom-3 left-0 flex items-center justify-between px-2">
            <div className="bg-purple-800/70 w-12 p-1 h-6 text-sm flex items-center justify-between">
              <AiFillStar size={15} className="text-orange-400" />
              <p className="text-md font-bold">
                {data.vote_average?.toFixed(1)}
              </p>
            </div>
            <div className="md:flex flex-wrap items-center justify-end gap-1 hidden">
              {filteredGenre.splice(0, 2).map((item) => (
                <div
                  className="w-16 h-6 bg-orange-400 text-white text-[9px] font-mono rounded-full flex items-center justify-center"
                  key={item.id}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {data.title && (
        <h2 className="text-xl font-bold capitalize text-ellipsis">
          {data.title.length > 18
            ? data.title.substring(0, 12).concat("...")
            : data.title}
        </h2>
      )}
      {data.original_name && (
        <h2 className="text-xl font-bold capitalize text-ellipsis">
          {data.original_name.length > 14
            ? data.original_name.substring(0, 14).concat("...")
            : data.original_name}
        </h2>
      )}
      {data.release_date && (
        <p className="text-sm font-light text-gray-400">{data.release_date}</p>
      )}
      {data.first_air_date && (
        <p className="text-sm font-light text-gray-400">
          {data.first_air_date}
        </p>
      )}
      {data?.release_date === null && data?.first_air_date === null && (
        <p className="text-sm font-light text-gray-400">No dates available</p>
      )}
    </div>
  );
};

export default MovieCard;
