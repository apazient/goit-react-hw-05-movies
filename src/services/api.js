import axios from 'axios';
import {
  moviesNormalize,
  movieNormalize,
  castNormalize,
  reviewsNormalize,
} from 'helpers/movieNormalize';

const API_KEY = 'f31f6b965c6ae5d645f6378249d44b10';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchMovieAll = async () => {
  try {
    const { data } = await axios.get(BASE_URL + `trending/movie/day`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    const newData = {
      data: moviesNormalize(data.results),
      total_pages: data.total_pages,
      page: data.page,
      total_results: data.total_results,
    };
    return newData;
  } catch (error) {
    console.log('ERROR fetchMovieAll');
  }
};

export const fetchMovieById = async id => {
  try {
    const { data } = await axios.get(BASE_URL + `/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    const newData = movieNormalize(data);
    return newData;
  } catch (error) {
    console.log('ERROR fetchMovieById');
  }
};

export const fetchCastByMovieId = async id => {
  try {
    const { data } = await axios.get(BASE_URL + `movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    const newData = castNormalize(data.cast);
    return newData;
  } catch (error) {
    console.log('ERROR fetchCastByMovieId');
  }
};

export const fetchReviewsByMovieId = async id => {
  try {
    const { data } = await axios.get(BASE_URL + `movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    const newData = reviewsNormalize(data.results);
    return newData;
  } catch (error) {
    console.log('ERROR fetchCastByMovieId');
  }
};

export const fetchByQuery = async query => {
  try {
    const { data } = await axios.get(BASE_URL + `search/movie`, {
      params: {
        query: query,
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return data.results;
  } catch (error) {
    console.log('ERROR fetchByQuery');
  }
};
