const URL = 'https://api.themoviedb.org/3/';
const KEY = 'a961e99727987689b5a0d0e9241df951&language=en-US&page=1';
const FILTER = 'trending/movie/day';

async function fetchTrending() {
  try {
    const response = await fetch(`${URL}${FILTER}?api_key=${KEY}`);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }

  //   .then(
  //   response => {
  //     if (response.ok) {
  //       return response.json();
  //     }
  //     return Promise.reject(
  //       new Error(`Oops... there are no  images matching your search... `)
  //     );
  //   }
  // );
  // .then(response => console.log(response));
}

export default fetchTrending;
