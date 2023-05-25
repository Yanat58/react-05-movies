const URL = 'https://api.themoviedb.org/3/';
const KEY = 'a961e99727987689b5a0d0e9241df951&language=en-US&page=1';

async function fetchReviews(movieId) {
  try {
    const response = await fetch(
      `${URL}movie/${movieId}/reviews?api_key=${KEY}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchReviews;
