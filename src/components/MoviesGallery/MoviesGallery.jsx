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
      title: PropTypes.string.isRequired,
      posterPath: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.string.isRequired,
      vote: PropTypes.number.isRequired,
      year: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MoviesGallery;
