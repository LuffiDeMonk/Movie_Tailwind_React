import React, { useEffect, useState } from "react";
import { SiThemoviedatabase } from "react-icons/si";
import Carousel from "./Carousel";

const Trending = ({ heading, option, test, getData }) => {
  const [select, setSelect] = useState(option[0].name);
  const { data, isLoading } = getData(select);

  const handleSelect = (item) => {
    setSelect(item);
  };

  return (
    <div className="max-w-screen-lg mx-auto text-white my-8">
      {isLoading && (
        <div className="z-20 bg-black fixed top-0 left-0 w-screen h-screen text-white flex items-center justify-center">
          <SiThemoviedatabase
            size={40}
            className="text-orange-400 animate-bounce"
          />
        </div>
      )}
      <div className="flex items-center justify-between px-4 md:px-0 mb-6">
        <h1 className="text-3xl font-semibold">{heading}</h1>
        <div className="flex items-center justify-between w-28 sm:w-36 md:w-56 h-8 rounded-full bg-white text-black p-[2px] relative">
          {option.map((item) => {
            return (
              <div
                key={item.id}
                className={`h-full flex items-center justify-center w-1/2 rounded-full transition-all duration-300 ${
                  select === item.name
                    ? "bg-gradient-to-r from-orange-600 to-orange-300 text-white"
                    : ""
                } cursor-pointer text-[10px] md:text-sm uppercase`}
                onClick={() => handleSelect(item.name)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <Carousel data={data?.results} media_type={select} />
    </div>
  );
};

export default Trending;
