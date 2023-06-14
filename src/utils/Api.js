import Axios from "axios";

const API_KEY = "fd2687ecff02d6a63493567681027ccb";

export const getMovies = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
  },
});
