import React from "react";
import HeroSection from "../components/HeroSection";
import Trending from "../components/Trending";
import {
  getPopularMovie,
  getRatedMovie,
  getTrendingMovie,
} from "../utils/getMovieData";

const test = (term) => {
  console.log(term);
};

const toggleMenu = [
  {
    id: 1,
    name: "movie",
  },
  {
    id: 2,
    name: "tv",
  },
];

const Home = () => {
  return (
    <div className="">
      <HeroSection />

      {/* <Trending
        heading="Popular"
        option={toggleMenu}
        test={test}
        getData={getPopularMovie}
      /> */}
      <Trending
        heading="Top Rated"
        option={toggleMenu}
        test={test}
        getData={getRatedMovie}
      />
    </div>
  );
};

export default Home;
