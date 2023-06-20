import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieSearchQuery } from '../../utils/Api/Api';

import SearchMovies from '../../components/SearchMovies/SearchMovies';
import MoviesGallery from '../../components/MoviesGallery/MoviesGallery';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';
import { Container, Main } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query'));
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(searchParams.get('page'));
  const [totalPages, setTotalPages] = useState(0);
  const [notification, setNotification] = useState({ type: '', message: '' });

  useEffect(() => {
    if (!query) return;

    const controller = new AbortController();

    async function addMoviesSearchQuery() {
      setStatus('pending');
      try {
        const { movies, totalPages, totalResults } = await getMovieSearchQuery(
          query,
          page,
          controller
        );

        if (totalResults === 0) {
          setNotification({
            type: 'error',
            message:
              'Sorry, there are no movies matching your search query. Please try again.',
          });
          setSearchedMovies([]);
          setQuery(null);
        }

        setSearchedMovies(movies);
        setTotalPages(totalPages);
        setStatus('resolved');
      } catch (error) {
        setNotification({
          type: 'error',
          message: error.message,
        });
        setStatus('rejected');
      }
    }
    addMoviesSearchQuery();

    return () => {
      controller.abort();
    };
  }, [page, query]);

  useEffect(() => {
    if (notification) {
      function handleNotification() {
        const notificationType = notification.type;
        const notificationMessage = notification.message;

        if (notification.message === 'canceled') {
          return;
        }
        if (notificationType === 'info') {
          toast.info(notificationMessage);
          setNotification({ type: '', message: '' });
        }
        if (notificationType === 'error') {
          toast.error(notificationMessage);
          setNotification({ type: '', message: '' });
        }
      }
      handleNotification();
    }
  }, [notification]);

  const changePage = currentPage => {
    setSearchParams({ query: query, page: currentPage });
    setPage(currentPage);
  };

  const handleSearch = value => {
    if (!value) {
      setNotification({
        type: 'info',
        message: 'Please enter your search query!',
      });
      return;
    }

    if (value === query) {
      setNotification({
        type: 'info',
        message:
          'You are seeing the images by this query. Please, change your query.',
      });
      return;
    }

    setQuery(value);
    setPage(1);
    setSearchParams({ query: value, page: 1 });
    setNotification({
      type: '',
      message: '',
    });
    setStatus('idle');
  };

  return (
    <Main>
      <Container>
        <SearchMovies onSubmit={handleSearch} />
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <MoviesGallery movies={searchedMovies} />}
        {status === 'resolved' && totalPages > 1 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            changePage={changePage}
            query={query}
          />
        )}
      </Container>
    </Main>
  );
};
export default Movies;
