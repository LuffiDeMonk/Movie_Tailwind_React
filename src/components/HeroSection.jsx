import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { getBannerImage } from "../utils/getMovieData";

const HeroSection = () => {
  const imageURL = getBannerImage();
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (term) {
      navigate(`/search/${term}`);
    }
  };
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="w-full h-[600px] md:h-[550px] relative">
        <img src={imageURL} alt="" className="h-full w-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70" />
        <div className="absolute top-0 left-0 w-full h-full z-10 text-white flex flex-col items-center justify-center space-y-2">
          <h1 className="text-center text-5xl md:text-6xl font-bold">
            Welcome
          </h1>
          <p className="text-center text-base md:text-lg">
            Millions of movies, TV shows and people to discover.
            <span className="text-orange-600 font-bold ml-1">Explore now</span>
          </p>
          <form
            className="w-[20rem] sm:w-[30rem] md:w-[40rem] flex flex-col md:flex-row items-center gap-5 md:gap-0 pt-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search any movie or TV show"
              className="h-12 md:h-10 py-2 px-4 capitalize rounded-full md:rounded-none md:rounded-l-full w-full md:w-full outline-none focus:outline-none border-none text-black placeholder:text-sm"
              onChange={(event) => setTerm(event.target.value)}
            />
            <button
              type="submit"
              className="flex items-center justify-center w-32 md:h-10 p-3 md:p-0 rounded-full md:rounded-none md:rounded-r-full bg-gradient-to-r from-orange-600 to-orange-300 ouline-none border-none focus:outline-none"
            >
              <span className="text-base font-semibold text-center md:hidden">
                Search
              </span>
              <BiSearch size={30} className="hidden md:block" />
            </button>
          </form>
        </div>
        <div className="absolute bottom-0 w-full left-0 h-16 bg-gradient-to-b from-transparent via-black/5 to-black" />
      </div>
    </div>
  );
};

export default HeroSection;
