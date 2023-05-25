import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchReviews from 'services/reviewsApi';
import fotoAlternate from 'utilities/images/meh.jpg';

const Reviews = () => {
  const { movieId } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchReviews(movieId)
      .then(({ results }) => {
        results.map(({ author, content, author_details }) => ({
          author,
          content,
          author_details,
        }));

        setResults(results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      <ul>
        {results.map(({ author, content, author_details }, index) => {
          return (
            <li key={index}>
              <img
                src={
                  author_details.avatar_path
                    ? `https://image.tmdb.org/t/p/w200${author_details.avatar_path}`
                    : fotoAlternate
                }
                alt=""
              />
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
