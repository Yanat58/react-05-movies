import { Link } from 'react-router-dom';
import fotoAlternate from 'utilities/images/meh.jpg';
import css from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <div className={css.container}>
      <h1 className={css.movlist__title}>Trending today</h1>
      <ul className={css.movlist__list}>
        {movies.map(({ id, title, poster_path }, index) => {
          return (
            <li className={css.movlist__item} key={index}>
              <Link to={`movies/${id}`}>
                <p className={css.film__name}>{title}</p>
                <img
                  className={css.film__poster}
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w200${poster_path}`
                      : fotoAlternate
                  }
                  alt="title"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
