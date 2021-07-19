/* @flow */

import { API_URL, API_KEY } from "../config/url";
import apiHandler from "./apiHandler";

export default {
  getMovies: (category, page = 1) => {
    const url = `${API_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;
    return apiHandler.get(url);
  },
  getSearch: (query) => {
    const url = `${API_URL}/search/movie?query=${query}&api_key=${API_KEY}`;
    return apiHandler.get(url);
  },
  getMovieById: (movieId) => {
    const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
    return apiHandler.get(url);
  },
  getMostVoted: (page = 1) => {
    const url = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=true&include_video=false&page=${page}`;
    return apiHandler.get(url);
  }
};
 