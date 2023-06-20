import PropTypes from 'prop-types';
import MoviesGalleryItem from '../MoviesGalleryItem/MoviesGalleryItem';
import { MoviesGalleryList } from './MoviesGallery.styled';

const MoviesGallery = ({ movies }) => {
  return (
    <MoviesGalleryList>
      {movies.map(movie => (
        <MoviesGalleryItem key={movie.id} movie={movie} />
      ))}
    </MoviesGalleryList>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MoviesGallery;
