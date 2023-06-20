import axios from 'axios';

import defaultImage from '../../images/no-image.jpg';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f5d9437320e908c9e483d2406c4ae5b6';

function getImagePosterPath(path) {
  return path ? `https://image.tmdb.org/t/p/w500/${path}` : defaultImage;
}

export async function getTrendingMovies(page, controller) {
  const response = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&page=${page}`,
    { signal: controller.signal }
  );

  const movies = response.data.results.map(({ id, title, poster_path }) => {
    return { id, title, posterPath: getImagePosterPath(poster_path) };
  });
  return { movies, totalPages: response.data.total_pages };
}

export async function getMovieDetails(movieId, controller) {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`, {
    signal: controller.signal,
  });

  const { title, poster_path, overview, genres, vote_average, release_date } =
    response.data;
  return {
    title,
    posterPath: getImagePosterPath(poster_path),
    overview,
    genres: genres.map(genre => genre.name).join(', '),
    vote: vote_average.toFixed(1),
    year: release_date.slice(0, 4),
  };
}
export async function getMovieCast(movieId, controller) {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`,
    { signal: controller.signal }
  );
  const actors = response.data.cast.map(
    ({ id, name, profile_path, character }) => {
      return {
        id,
        name,
        profilePath: getImagePosterPath(profile_path),
        character,
      };
    }
  );

  return actors;
}
export async function getMovieReviews(movieId, controller) {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`,
    { signal: controller.signal }
  );
  const reviews = response.data.results.map(({ id, author, content }) => {
    return {
      id,
      author,
      content,
    };
  });

  return reviews;
}
export async function getMovieSearchQuery(query, page = 1, controller) {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
    { signal: controller.signal }
  );
  const movies = response.data.results.map(({ id, title, poster_path }) => {
    return {
      id,
      title,
      posterPath: getImagePosterPath(poster_path),
    };
  });

  return {
    movies,
    totalPages: response.data.total_pages,
    totalResults: response.data.total_results,
  };
}
