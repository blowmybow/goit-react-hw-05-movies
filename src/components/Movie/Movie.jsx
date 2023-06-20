import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Loader from '../Loader/Loader';
import { ButtonBack } from '../ButtonBack/ButtonBack.styled';
import {
  Main,
  Container,
  MovieContainerInfo,
  Image,
  Navigation,
  MovieInfoWrapper,
  MovieInfoTitle,
  OverviewTitle,
  OverviewText,
  GenresTitle,
  GenresText,
  Rate,
} from './Movie.styled';

const Movie = ({
  movie: { title, posterPath, overview, genres, vote, year },
}) => {
  const { state, pathname } = useLocation();

  return (
    <Main>
      <Container>
        <ButtonBack to={state?.from ?? '/'}>
          <IoIosArrowRoundBack />
          Go back
        </ButtonBack>
        <MovieContainerInfo>
          <Image src={posterPath} alt={title} />
          <div>
            <MovieInfoWrapper>
              <MovieInfoTitle>
                {title} ({year ? year : 'xxxx'})
              </MovieInfoTitle>
              {vote !== 0 && <Rate>{vote}</Rate>}
            </MovieInfoWrapper>
            <OverviewTitle>Overview</OverviewTitle>
            {overview ? (
              <OverviewText>{overview}</OverviewText>
            ) : (
              'Information is not available'
            )}
            <GenresTitle>Genres</GenresTitle>
            {genres ? (
              <GenresText>{genres}</GenresText>
            ) : (
              'Information is not available'
            )}
          </div>
        </MovieContainerInfo>
        <Navigation>
          <ButtonBack
            to={pathname.includes('cast') ? '' : 'cast'}
            state={{ from: state?.from ?? '/' }}
          >
            {pathname.includes('cast') ? 'Hide Cast' : 'Show Cast'}
          </ButtonBack>
          <ButtonBack
            to={pathname.includes('reviews') ? '' : 'reviews'}
            state={{ from: state?.from ?? '/' }}
          >
            {pathname.includes('reviews') ? 'Hide Reviews' : 'Show Reviews'}
          </ButtonBack>
        </Navigation>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </Main>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
};
export default Movie;
