import { MoviesApiService } from './api-work/apiServise';
import { spinerPlay, spinerStop } from './helpers/spin-ner';

const moviesApiService = new MoviesApiService();

export default async function findTrailer(movieId) {
  spinerPlay();
  moviesApiService.movieId = movieId;

  try {
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
