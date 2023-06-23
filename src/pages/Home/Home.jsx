import { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { getTrendingMovies } from '../../utils/Api/Api';

import MoviesGallery from '../../components/MoviesGallery/MoviesGallery';

import Loader from '../../components/Loader/Loader';

import { Title, Container } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page] = useState(1);

  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function addTrendingMovies() {
      setStatus('pending');
      try {
        const trendingMovies = await getTrendingMovies(page, controller);
        setMovies(trendingMovies.movies);

        setStatus('resolved');
      } catch (error) {
        if (error === 'canceled') {
          return;
        }
        if (error) {
          toast.error(error);
          setError('');
        }
        setStatus('rejected');
      }
    }
    addTrendingMovies();

    return () => {
      controller.abort();
    };
  }, [page, error]);

  return (
    <>
      <Container>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <Title>Trending today</Title>}
        {status === 'resolved' && <MoviesGallery movies={movies} />}
      </Container>
    </>
  );
};

export default Home;
