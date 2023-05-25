import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchCast from 'services/castApi';
import fotoAlternate from 'utilities/images/meh.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId)
      .then(({ cast }) => {
        cast.map(({ character, original_name, profile_path }) => ({
          character,
          original_name,
          profile_path,
        }));

        setCast(cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ character, original_name, profile_path }, index) => {
        return (
          <li key={index}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : fotoAlternate
              }
              alt=""
            />
            <div>
              <p>{original_name}</p>
              <p>Character:{character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
