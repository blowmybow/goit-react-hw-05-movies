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
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default App;
