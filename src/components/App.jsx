import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import Home from '../pages/Home';
// import { NotFound } from 'components/pages/NotFound';
// import Movies from './pages/Movies';

import MovieInfoReviews from './MovieInfo/MovieInfoReviews';
import MovieInfoCast from './MovieInfo/MovieInfoCast';
import MovieDetails from '../pages/MovieDetails';
const Movies = lazy(() => import('../pages/Movies'));
const NotFound = lazy(() => import('../pages/NotFound'));
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
