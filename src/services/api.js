import axios from 'axios';

const API_KEY = process.env.REACT_APP_KEY;
export const fetchMovieAll = async () => {
  console.log(process.env);
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    console.log(data);
    return data;
  } catch (error) {}
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
