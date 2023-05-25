import { useState, useEffect } from 'react';
import fetchTrending from 'services/trendingApi';
import MoviesList from 'components/MoviesList/MoviesList';
import React from 'react';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(({ results }) => {
        results.map(({ id, original_title, poster_path }) => ({
          id,
          title: original_title,
          poster: poster_path,
        }));

        setMovies(prevResults => [...prevResults, ...results]);
      })
      .catch(error => console.log(error.message));
  }, []);

  return <div>{movies && <MoviesList movies={movies} />}</div>;
};

export default HomePage;
