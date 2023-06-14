import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { getSearchMovie } from "../utils/getSearchData";

const Search = () => {
  const params = useParams();
  const { searchTerm } = params;
  const { data, isLoading, hasNextPage, fetchNextPage } =
    getSearchMovie(searchTerm);

  return (
    <div className="mt-20 max-w-screen-lg mx-auto">
      <>
        <div className="text-2xl px-5 lg:px-0 font-semibold text-white">
          {`Search results for ${searchTerm}`}
        </div>
        {isLoading && <MovieCardSkeleton cardNumber={8} />}
        <InfiniteScroll
          dataLength={data ? data?.length : 0}
          hasMore={hasNextPage}
          next={() => fetchNextPage()}
        >
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 place-items-center px-4 lg:px-0 text-white">
            {data?.map((item) => {
              return (
                <Link to={`/${item.media_type}/${item.id}`}>
                  <MovieCard showDetails={true} data={item} key={item.id} />
                </Link>
              );
            })}
          </div>
        </InfiniteScroll>
      </>
      )
    </div>
  );
};

export default Search;
