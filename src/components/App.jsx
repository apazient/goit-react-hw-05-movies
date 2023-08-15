import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { NotFound } from 'components/pages/NotFound';
import Home from './pages/Home';
import Movies from './pages/Movies';

import MovieInfoReviews from './MovieInfo/MovieInfoReviews';
import MovieInfoCast from './MovieInfo/MovieInfoCast';
import MovieDetails from './pages/MovieDetails';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<MovieInfoCast />} />
            <Route path="reviews" element={<MovieInfoReviews />} />
          </Route>
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
