import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieDetails } from '../../utils/Api/Api';

import Movie from '../../components/Movie/Movie';
import Loader from '../../components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;

    const controller = new AbortController();

    async function addMovieDetails() {
      setStatus('pending');
      try {
        const movie = await getMovieDetails(movieId, controller);
        setMovieDetails(movie);
        setStatus('resolved');
      } catch (error) {
        if (error === 'canceled') {
          return;
        }
        if (error) {
          toast.error(error);
          setError('');
        }
        setError(error.message);
        setStatus('rejected');
      }
    }
    addMovieDetails();

    return () => {
      controller.abort();
    };
  }, [movieId, error]);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && <Movie movie={movieDetails} />}
    </>
  );
};

export default MovieDetails;
