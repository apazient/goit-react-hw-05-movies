//normalize list of movies
export const moviesNormalize = data => {
  return data.map(
    ({ id, original_title, poster_path, release_date, vote_average }) => ({
      id,
      title: original_title,
      img: `https://image.tmdb.org/t/p/w500` + poster_path,
      date: release_date,
      vote: vote_average,
    })
  );
};

//normalize item of movie
export const movieNormalize = ({
  id,
  title,
  overview,
  genres,
  backdrop_path,
  popularity,
}) => ({
  id,
  title,
  overview,
  genres: genres.map(el => {
    return el.name;
  }),

  url: `https://image.tmdb.org/t/p/w500` + backdrop_path,
  score: popularity,
});

//normalize cast of movie details
export const castNormalize = casts => {
  return casts.map(({ id, profile_path, name, character }) => ({
    id,
    name,
    url: `https://image.tmdb.org/t/p/w500` + profile_path,
    character,
  }));
};

//normalize reviews of movie details
export const reviewsNormalize = reviews => {
  return reviews.map(({ author, content }) => ({
    author,
    content,
  }));
};
