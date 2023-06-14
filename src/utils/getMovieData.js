import { useQuery } from "react-query";
import { getMovies } from "./Api";

export const createImageURL = (path) => {
  return `https://image.tmdb.org/t/p/original/${path}`;
};

const getPopular = async (media_type = "movie") => {
  const response = await getMovies.get(`/${media_type}/popular`);
  return response?.data;
};

const getTopRated = async (media_type = "movie") => {
  const response = await getMovies.get(`/${media_type}/top_rated`);
  return response?.data;
};

const getTrending = async () => {
  const response = await getMovies.get(`/movie/now_playing`);
  return response?.data;
};

export const getPopularMovie = (media_type) => {
  const data = useQuery(["popular", media_type], () => getPopular(media_type), {
    refetchOnWindowFocus: false,
  });
  return data;
};

export const getRatedMovie = (media_type, page) => {
  return useQuery(
    ["top-rated", media_type, page],
    () => getTopRated(media_type, page),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
};

export const getTrendingMovie = () => {
  return useQuery(["trending"], getTrending, {
    refetchOnWindowFocus: false,
  });
};

export const getBannerImage = () => {
  const { data: imageURL } = useQuery(["banner"], () => getTopRated(), {
    refetchOnWindowFocus: false,
    select: (data) => {
      let index = Math.floor(Math.random() * 10) + 1;
      const imagedata = data.results[index].poster_path;
      return createImageURL(imagedata);
    },
  });
  return imageURL;
};
