import React from "react";
import CardImage from "../assets/cardImage.jpg";

const MovieCardSkeleton = ({ cardNumber }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 place-items-center px-4 lg:px-0">
        {Array(cardNumber)
          .fill("c")
          .map((item, index) => {
            return (
              <div className="w-full flex flex-col gap-4" key={index}>
                <div className="w-full h-64 rounded-xl bg-orange-200/40 animate-pulse"></div>
                <div className="h-6 rounded-full bg-orange-200/40 animate-pulse w-full"></div>
                <div className="h-4 rounded-full bg-orange-200/40 animate-pulse w-2/3"></div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MovieCardSkeleton;
