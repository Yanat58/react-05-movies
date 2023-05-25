import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchMovie from 'services/movieApi';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie(movieId)
      .then(
        ({
          original_title,
          genres,
          overview,
          poster_path,
          release_date,
          vote_average,
        }) => {
          const movie = {
            genres,
            overview,
            release_date,
            vote_average,
            title: original_title,
            poster: poster_path,
          };

          return setMovie(movie);
        }
      )
      .catch(error => console.log(error));
  }, [movieId]);

  return <div>{movie && <MovieCard key={movie.id} movie={movie} />}</div>;
};

export default MovieDetailsPage;
