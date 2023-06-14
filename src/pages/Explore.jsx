import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
import MovieCard from "../components/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  getMovieExplore,
  getMovieGenre,
  movieFilterList,
  tvFilterList,
} from "../utils/getExploreData";
import MovieCardSkeleton from "../components/MovieCardSkeleton";

const SelectMenu = ({ displayText, menuItems, setSelect, select }) => {
  const [isOpen, setisOpen] = useState(false);
  const params = useParams();
  const { media_type } = params;
  useEffect(() => {
    setSelect(null);
  }, [media_type]);
  const handleSelect = (option) => {
    if (option?.name) {
      setisOpen(false);
      setSelect(option.id);
    }
    if (option?.key) {
      setisOpen(false);
      setSelect(option.key);
    }
  };

  return (
    <>
      <div
        className="mb-2 h-7 md:w-[140px] md:flex-shrink-0 md:h-9 text-2xl bg-white w-1/2 rounded-full inline-flex justify-between items-center sm:gap-2 md:gap-4 px-4 relative cursor-pointer shadow-inner shadow-black/30"
        onClick={() => setisOpen(!isOpen)}
      >
        <p className="text-[12px] whitespace-nowrap">
          {select
            ? select.length > 10
              ? select.substring(0, 11).concat("...")
              : select
            : displayText}
        </p>
        <AiOutlineCaretDown className="" size={10} />
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-8 md:top-11 left-0 w-full h-32 bg-white rounded-md py-2 overflow-y-scroll scrollbar-none z-10`}
        >
          {menuItems?.map((option) => (
            <li
              key={option.name}
              className="text-[16px] md:text-sm cursor-pointer md:hover:bg-orange-300 px-2 py-1 font-extralight mb-2"
              onClick={() => handleSelect(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const Explore = () => {
  const [type, setType] = useState(null);
  const [filter, setFilter] = useState(null);
  const params = useParams();
  const { media_type } = params;
  const { data: genre } = getMovieGenre(media_type);
  const { data, isLoading, fetchNextPage, hasNextPage } = getMovieExplore(
    media_type,
    type,
    filter
  );
  const refactored = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.results];
  }, []);

  return (
    <div className="mt-20 max-w-screen-lg mx-auto text-white">
      <div className="md:flex items-center justify-between text-black sm:px-2 md:px-0 space-y-3 md:space-y-0">
        <h1 className="text-2xl text-white uppercase px-2 md:px-0">
          {media_type}
        </h1>
        <div className="flex gap-1 px-2 md:px-0">
          <SelectMenu
            displayText="Select Genre"
            menuItems={genre}
            setSelect={setType}
            select={type}
          />
          <SelectMenu
            displayText="Select Filters"
            menuItems={media_type === "movie" ? movieFilterList : tvFilterList}
            setSelect={setFilter}
            select={filter}
          />
        </div>
      </div>
      {isLoading && <MovieCardSkeleton cardNumber={8} />}
      <InfiniteScroll
        dataLength={refactored ? refactored?.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={
          <h1 className="text-xl text-center font-bold text-white">
            Loading...
          </h1>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 mb-4 place-items-center px-4 lg:px-0 text-white">
          {refactored?.map((item) => {
            return (
              <Link to={`/${media_type}/${item.id}`}>
                <MovieCard showDetails={false} data={item} />
              </Link>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Explore;
