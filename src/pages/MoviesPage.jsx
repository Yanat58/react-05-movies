import { useEffect, useState, useSearchParams } from "react";
import fetchSearchMovieName from "services/searchMovieNameApi";
import SearchMovieList from "components/SearchMovielist/SearchMovielist";

const MoviesPage = () => {
  const [movies, setMovies]= useState([]);
  const [query, setquery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');

  const movieName = searchParams.get('query') ?? '';

useEffect(()=> {
  fetchSearchMovieName(query)
  .then(({ results }) => {
    results.map(({ id, original_title, poster_path }) => ({
      id,
      title: original_title,
      poster: poster_path,
    }));

    setMovies(prevResults => [...prevResults, ...results]);
  })
  .catch(error => console.log(error.message));
}, [])
  return (
  <div>
    { movies && <SearchMovieList movies={movies} query={query} />}
    </div>);
};

export default MoviesPage;
