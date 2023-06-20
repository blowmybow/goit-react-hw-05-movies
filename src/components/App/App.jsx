import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from 'components/Layout/Layout';

const PageHome = lazy(() => import('pages/Home/Home'));
const PageMoviesDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const PageMovies = lazy(() => import('pages/Movies/Movies'));
const PageNotFound = lazy(() => import('pages/NotFound/NotFound'));
const MovieCast = lazy(() => import('components/Cast/Cast'));
const MovieReviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PageHome />} />
        <Route path="/:page" element={<PageHome />} />
        <Route path="search" element={<PageMovies />} />
        <Route path="search/:query/:page" element={<PageMovies />} />
        <Route path="movies/:movieId/" element={<PageMoviesDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
export default App;
