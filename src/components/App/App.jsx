import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movies" element={<Movies />}></Route>
      <Route path="/moviedetails" element={<MovieDetails />}></Route>
    </Routes>
  );
};
export default App;
