import renderPopularList from '../scripts/render-list';
const popularGallery = document.querySelector('.gallery');
function fetchPopular() {
  return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=86c51b00b5bb8cfadb7d5efaffb91bf1'
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

fetchPopular()
  .then(films => renderPopularList(films.results))
  .then(markup => (popularGallery.innerHTML = markup))
  .catch(error => console.log(error));
