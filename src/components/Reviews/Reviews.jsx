import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieReviews } from '../../utils/Api/Api';

import Loader from '../Loader/Loader';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import Message from '../Message/Message';

const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;
    const abortController = new AbortController();
    async function addMovieReviews() {
      setStatus('pending');
      try {
        const reviews = await getMovieReviews(movieId, abortController);
        setMovieReviews(reviews);
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

    addMovieReviews(movieId, abortController);

    return () => {
      abortController.abort();
    };
  }, [movieId, error]);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'resolved' && movieReviews.length !== 0 ? (
        <ReviewInfo reviews={movieReviews} />
      ) : (
        <Message />
      )}
    </>
  );
};

export default Reviews;
