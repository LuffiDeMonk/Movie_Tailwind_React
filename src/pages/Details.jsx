import React from "react";
import Cover from "../assets/cover.jpg";
import { SiThemoviedatabase } from "react-icons/si";

import CardImage from "../assets/cardImage.jpg";
import Trailer from "../components/Trailer";
import CastCarousel from "../components/CastCarousel";
import SimilarMovies from "../components/SimilarMovies";
import Recommended from "../components/Recommended";
import {
  getMovieCredentials,
  getMovieDetails,
  getMovieTrailers,
  getSimilarMovies,
} from "../utils/getMovieDetails";
import { useParams } from "react-router-dom";
import { createImageURL } from "../utils/getMovieData";
import CastCarouselSkeleton from "../components/CastCarouselSkeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MovieDetailLoading from "../components/MovieDetail";

const Details = () => {
  const params = useParams();
  const { type, id } = params;
  const { data, isLoading: detailsLoading } = getMovieDetails(id, type);
  const { data: castDetails } = getMovieCredentials(id, type);
  const { data: trailers } = getMovieTrailers(type, id);
  const { data: similar, isLoading } = getSimilarMovies(type, id, "similar");
  const { data: recommendations } = getSimilarMovies(
    type,
    id,
    "recommendations"
  );
  const directors = castDetails?.crew.filter((item) => {
    return item.job === "Director";
  });
  const writers = castDetails?.crew.filter((item) => {
    return item.job === "Writer";
  });
  const image = createImageURL(data?.poster_path);
  return (
    <div className="max-w-screen-lg text-white md:pt-18 pt-16 mx-auto">
      {detailsLoading && (
        <div className="z-20 bg-black fixed top-0 left-0 w-screen h-screen text-white flex items-center justify-center">
          <SiThemoviedatabase
            size={40}
            className="text-orange-400 animate-bounce"
          />
        </div>
      )}
      <div className="flex flex-col items-center md:items-start md:justify-start md:flex-row gap-6 md:px-10 lg:px-0">
        <div className="flex justify-center">
          {data?.poster_path === null ? (
            <img
              src={CardImage}
              className="max-w-[250px] h-64 md:h-96 rounded-xl object-contain"
            />
          ) : (
            <LazyLoadImage
              effect="blur"
              src={image}
              alt=""
              className="max-w-[250px] h-64 md:h-96 rounded-xl object-contain"
            />
          )}
        </div>
        <div className="space-y-2 px-10 md:px-0">
          {data?.original_title && (
            <h1 className="text-3xl">{data?.original_title}</h1>
          )}
          {data?.original_name && <h1 className="text-3xl">{data?.name}</h1>}
          <p className="text-md text-gray-500 italic">{data?.tagline}</p>
          <div className="flex items-center gap-2 pt-2 flex-wrap">
            {data?.genres.map((item) => {
              return (
                <span
                  key={item.id}
                  className="whitespace-nowrap px-3 py-0.5 cursor-pointer bg-rose-800 text-sm text-white rounded-md"
                >
                  {item.name}
                </span>
              );
            })}
          </div>
          <h3 className="text-xl font-semibold pt-4">Overview:</h3>
          {data?.overview ? (
            <p className="text-sm">{data?.overview}</p>
          ) : (
            <p className="text-sm">No overview to display</p>
          )}
          <hr />
          <h3 className="text-md text-gray-400 underline underline-offset-4">
            Directors:
          </h3>
          <div className="flex flex-wrap gap-x-4">
            {directors?.map((item) => {
              return (
                <span className="text-sm" key={item.id}>
                  {item.name}
                </span>
              );
            })}
          </div>
          <hr />
          <h3 className="text-md text-gray-400 underline underline-offset-4">
            Writers:
          </h3>
          <div className="flex flex-wrap gap-x-4">
            {writers?.map((item) => {
              return (
                <span className="text-sm" key={item.id}>
                  {item.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <CastCarousel data={castDetails?.cast} />
      <Trailer data={trailers} />
      <SimilarMovies
        loading={isLoading}
        data={similar}
        text={type === "movie" ? "Similar Movies" : "Similar TV Shows"}
      />
      <SimilarMovies
        data={recommendations}
        text={type === "movie" ? "Recommended Movies" : "Recommended TV Shows"}
      />
    </div>
  );
};

export default Details;
