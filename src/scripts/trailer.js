import { MoviesApiService } from './api-work/apiServise';
import { spinerPlay, spinerStop } from './helpers/spin-ner';
import { longify } from './helpers/longify';

const moviesApiService = new MoviesApiService();

// const axios = require('axios').default;

export default async function findTrailer(movieId) {
  // const config = {
  //   URL: 'https://api.themoviedb.org/3/movie/',
  //   key: '86c51b00b5bb8cfadb7d5efaffb91bf1',
  // };
  spinerPlay();
  moviesApiService.movieId = movieId;

  try {
    // const response = await axios.get(
    //   `${config.URL}${movieId}/videos?api_key=${config.key}&language=en-US`
    // );
    // const data = response.data.results;

    const response = await moviesApiService.fetchTrailerById();
    const data = response.results;

    for (let i = 0; i < data.length; i += 1) {
      if (data[i].type === 'Trailer') {
        if (data[i].name.indexOf('Trailer') > 0) {
          return `<div class="backdropTrailer">
              <iframe src="https://www.youtube.com/embed/${data[i].key}" class="trailerPlayer" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen></iframe>
            </div>`;
        }
      }
    }
  } catch (error) {
    console.log('error');
  } finally {
    spinerStop();
  }
}
