
import { MovieApi } from './MovieApi'
import listOfGenres from '../genresList';
import { clearGallery } from './clearGallery';
import Notiflix from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';
import refs from './refs'


let searchQuery = '';

const movies = new MovieApi();

refs.form.addEventListener('submit', onSearch);
 
function onSearch(e) {
  e.preventDefault();
 
searchQuery = e.currentTarget.elements.query.value.trim().toLowerCase();
    if (!searchQuery) {
      return Notiflix.Notify.warning( `Please enter name of the movie`);
  }
  
  movies.getMovie(searchQuery).then(({ results }) => {
    
    if (results.length === 0) {
       Report.failure(
         'No Result &#128584',
         'Search result not successful. Enter the correct movie name and ',
         'Okay &#128527'
       );
      
    }
    refs.form.reset();
    clearGallery();
    const markup = createMarkup(results);
    refs.list.insertAdjacentHTML('beforeend', markup);
    
  });
    
};

/* -------------------------------------------------------------------------- */
/*                 Видалити коли буде окремо винесена функція                 */
/* -------------------------------------------------------------------------- */

 function createMarkup(films) {
   return films
     .map(({ poster_path, original_title, genre_ids, release_date }) => {
       return `<li class="card__item">
        <div class="card__thumb">
            <img class="card__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}">
        </div>
        <h2 class="card__title">
        ${original_title}
        </h2>
        <p class="card__text">
            <span class="card__genres">${listOfGenres(
              Object.values(genre_ids)
            )}</span> | <span class="card__date">${release_date}</span>
        </p>
        </li>`;
     })
     .join('');
   

 }
