const URL = 'https://api.themoviedb.org/3/';
const KEY = 'a961e99727987689b5a0d0e9241df951&language=en-US&page=1';

async function fetchSearchMovieName(query) {
    try {
      const response = await fetch(`${URL}/${query}/movie?api_key=${KEY}`);
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error.message);
    }
};

export default fetchSearchMovieName;