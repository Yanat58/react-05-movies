import { Link, Outlet, useLocation } from 'react-router-dom';
import BackLink from 'components/BackLink/BackLink';
import fotoAlternate from 'utilities/images/meh.jpg';

const MovieCard = ({ movie }) => {
  const { title, genres, overview, poster, release_date, vote_average } = movie;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <BackLink to={backLinkHref}>Back</BackLink>
      <div>
        <h1>{title}</h1>
        <p>
          <b>{release_date.slice(0, 4)}</b>
        </p>
        <img
          src={
            poster ? `https://image.tmdb.org/t/p/w400${poster}` : fotoAlternate
          }
          alt=""
        />
        <p>Overview: {overview}</p>
        <p>User score:{Math.round(vote_average * 10)}%</p>
        <p>
          Genres:
          {genres &&
            genres.map((genre, index) => (
              <span key={index}> {genre.name}</span>
            ))}
        </p>
      </div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast" state={location}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={location}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieCard;
