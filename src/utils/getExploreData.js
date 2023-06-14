import { useInfiniteQuery, useQuery } from "react-query";
import { getMovies } from "./Api";

export const movieFilterList = [
  {
    id: 1,
    name: "Rating- High to Low",
    key: "vote_average.desc",
  },
  {
    id: 2,
    name: "Rating- Low to High",
    key: "vote_average.asc",
  },

  {
    id: 5,
    name: "Release Date (Asc.)",
    key: "release_date.asc",
  },
  {
    id: 6,
    name: "Release Date (Des.)",
    key: "release_date.desc",
  },
];

export const tvFilterList = [
  {
    id: 1,
    name: "Rating- High to Low",
    key: "vote_average.desc",
  },
  {
    id: 2,
    name: "Rating- Low to High",
    key: "vote_average.asc",
  },

  {
    id: 5,
    name: "Release Date (Asc.)",
    key: "first_air_date.asc",
  },
  {
    id: 6,
    name: "Release Date (Des.)",
    key: "first_air_date.desc",
  },
];

const getExplore = async (media_type, genre, filter, pageParam) => {
  const { data } = await getMovies.get(
    `/discover/${media_type}?with_genres=${genre}&sort_by=${filter}&page=${pageParam}`
  );
  return data;
};

const getGenres = async (media_type) => {
  const response = await getMovies.get(`/genre/${media_type}/list`);
  return response.data.genres;
};

export const getMovieExplore = (media_type, genre, filter) => {
  return useInfiniteQuery(
    ["explore", media_type, genre, filter],
    ({ pageParam = 1 }) => getExplore(media_type, genre, filter, pageParam),
    {
      getNextPageParam: (lastPage, allPage) => {
        const maxPage = lastPage.total_pages;
        const nextPage = allPage.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
      },
    }
  );
};

export const getMovieGenre = (media_type) => {
  return useQuery(["genre", media_type], () => getGenres(media_type));
};
