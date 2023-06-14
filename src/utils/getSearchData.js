import { useQuery, useInfiniteQuery } from "react-query";
import { getMovies } from "./Api";

const getSearch = async (term, pageParam) => {
  const response = await getMovies.get(
    `/search/multi?query=${term}&page=${pageParam}`
  );
  return response.data;
};

export const getSearchMovie = (term) => {
  return useInfiniteQuery(
    ["search", term],
    ({ pageParam = 1 }) => getSearch(term, pageParam),
    {
      select: (data) => {
        return data?.pages?.reduce((acc, page) => {
          return [...acc, ...page.results];
        }, []);
      },
      getNextPageParam: (lastPage, allPage) => {
        const maxPage = lastPage.total_pages;
        const nextPage = allPage.length + 1;
        return nextPage <= maxPage ? nextPage : undefined;
      },
    }
  );
};
