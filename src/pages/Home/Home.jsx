import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTrendingMovies } from '../../utils/Api/Api';

import MoviesGallery from '../../components/MoviesGallery/MoviesGallery';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';

import { Title, Container } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function addTrendingMovies() {
      setStatus('pending');
      try {
        const trendingMovies = await getTrendingMovies(page, controller);
        setMovies(trendingMovies.movies);
        setTotalPages(trendingMovies.totalPages);
        setStatus('resolved');
      } catch (error) {
        setError(error.message);
        setStatus('rejected');
      }
    }
    addTrendingMovies();

    return () => {
      controller.abort();
    };
  }, [page]);

  useEffect(() => {
    if (params.page) {
      setPage(params.page);
      return;
    }
    setPage(1);
  }, [params.page]);

  useEffect(() => {
    if (error === 'canceled') {
      return;
    }
    if (error) {
      toast.error(error);
      setError('');
    }
  }, [error]);

  const changePage = currentPage => {
    navigate(`/${currentPage}`);
    setPage(currentPage);
  };

  return (
    <>
      <Container>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <Title>Trending today</Title>}
        {status === 'resolved' && <MoviesGallery movies={movies} />}
        {status === 'resolved' && (
          <Pagination
            page={page}
            totalPages={totalPages}
            changePage={changePage}
          />
        )}
      </Container>
    </>
  );
};

export default Home;
