
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
       <img scr="${poster_path}" alt="${original_title}"/>
       <p>${original_title}</p>
       </li>`;
      })
      .join('');
}