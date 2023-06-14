import { useQuery } from "react-query";
import { getMovies } from "./Api";

const getSimilar = async (id, media_type, query_type) => {
  const response = await getMovies.get(`/${media_type}/${id}/${query_type}`);
  return response.data.results;
};

const getDetails = async (id, media_type) => {
  const response = await getMovies.get(`/${media_type}/${id}`);
  return response.data;
};
const getCredentials = async (media_type, id) => {
  const response = await getMovies.get(`/${id}/${media_type}/credits`);
  return response.data;
};

const getTrailers = async (media_type, id) => {
  const response = await getMovies.get(`/${media_type}/${id}/videos`);
  return response.data.results;
};

export const getMovieDetails = (id, media_type) => {
  return useQuery(["details", id, media_type], () =>
    getDetails(id, media_type)
  );
};

export const getMovieCredentials = (media_type, id) => {
  return useQuery(["credentials", media_type, id], () =>
    getCredentials(media_type, id)
  );
};

export const getMovieTrailers = (media_type, id) => {
  return useQuery(["trailer", media_type, id], () =>
    getTrailers(media_type, id)
  );
};

export const getSimilarMovies = (media_type, id, query_type) => {
  return useQuery(["similar", media_type, id, query_type], () =>
    getSimilar(id, media_type, query_type)
  );
};
