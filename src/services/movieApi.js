const URL = 'https://api.themoviedb.org/3/';
const KEY = 'a961e99727987689b5a0d0e9241df951&language=en-US&page=1';
// const FILTER = 'movie/{movie_id}';

async function fetchMovie(movieId) {
  try {
    const response = await fetch(`${URL}movie/${movieId}?api_key=${KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }

  // return .then(response => {
  //   if (response.ok) {
  //     return response.json();
  //   }
  //   return Promise.reject(
  //     new Error(`Oops... there are no  images matching your search... `)
  //   );
  // });
}

export default fetchMovie;
