
import {MovieApi} from './MovieApi'

refs = {
    form: document.querySelector('.header-form'),
    list: document.querySelector('.gallery')
};
let searchQuery = '';

const movies = new MovieApi();
console.log(movies);

refs.form.addEventListener('submit', onSearch);
 
function onSearch(e) {
  e.preventDefault();
  
searchQuery = e.currentTarget.elements.query.value.trim().toLowerCase();
    if (!searchQuery) {
      return console.log("Введіть дані для пошуку")
    }
    movies.getMovie(searchQuery).then(({ results }) => {
        const markup = createMarkup(results);
        console.log(markup);
        refs.list.insertAdjacentHTML('beforeend', markup);
    });
    
};


function createMarkup(movies) {
  
  return movies

    .map(({ poster_path, original_title }) => {
      return `<li>
       
       <img scr="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}" width="150"/>
       <p>${original_title}</p>
       </li>`;
    })
    .join('');
}