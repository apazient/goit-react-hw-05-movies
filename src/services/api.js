import axios from 'axios';
import {
  moviesNormalize,
  movieNormalize,
  castNormalize,
  reviewsNormalize,
} from 'helpers/movieNormalize';

const API_KEY = process.env.REACT_APP_KEY;

export const fetchMovieAll = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day`,
      {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
      }
    );
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
    const { data } = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
      }
    );
    const newData = movieNormalize(data);
    return newData;
  } catch (error) {
    console.log('ERROR fetchMovieById');
  }
};

export const fetchCastByMovieId = async id => {
  try {
    const { data } = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
      }
    );
    const newData = castNormalize(data.cast);
    return newData;
  } catch (error) {
    console.log('ERROR fetchCastByMovieId');
  }
};

export const fetchReviewsByMovieId = async id => {
  try {
    const { data } = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}/reviews`,
      {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
      }
    );
    const newData = reviewsNormalize(data.results);
    return newData;
  } catch (error) {
    console.log('ERROR fetchCastByMovieId');
  }
};

export const fetchByQuery = async query => {
  try {
    const { data } = await axios.get(
      ` https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          query: query,
          api_key: API_KEY,
          language: 'en-US',
        },
      }
    );
    return data.results;
  } catch (error) {
    console.log('ERROR fetchByQuery');
  }
};
