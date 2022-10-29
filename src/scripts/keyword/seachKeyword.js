import { MovieApi } from './MovieApi';

import listOfGenres from '../genres-list';

import { clearGallery } from './clearGallery';
import Notiflix from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { refs } from '../refs';
import renderPopularList from '../render-list';
import { addImageNoResult } from './addImages';

let searchQuery = '';

const movies = new MovieApi();

refs.form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  searchQuery = e.currentTarget.elements.query.value.trim().toLowerCase();
  if (!searchQuery) {
    return Notiflix.Notify.warning(`Please enter name of the movie`);
  }

  movies.getMovie(searchQuery).then(films => {
    if (films.total_pages === 0) {
      Report.failure(
        'No Result &#128584',
        'Search result not successful. Enter the correct movie name and ',
        'Okay &#128527'
      );

      addImageNoResult();
    }
    clearGallery();
    refs.form.reset();
    const markup = renderPopularList(films.results);
    refs.list.insertAdjacentHTML('beforeend', markup);
  });
}
