import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import Home from '../../pages/Home/Home';
import MoviesDetails from '../../pages/MovieDetails/MovieDetails';
import Movies from '../../pages/Movies/Movies';
import NotFoundPage from '../../pages/NotFound/NotFound';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:page" element={<Home />} />
        <Route path="search" element={<Movies />} />
        <Route path="search/:query/:page" element={<Movies />} />
        <Route path="movies/:movieId/" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default App;
