import listOfGenres from './genres-list';
export default function renderPopularList(films) {
  const markup = films
    .map(film => {
      return `<li class="card__item">
        <div class="card__thumb">
            <img class="card__img" src="https://image.tmdb.org/t/p/w500${
              film.poster_path
            }" alt="${film.title}">
        </div>
        <h2 class="card__title">
        ${film.title}
        </h2>
        <p class="card__text">
            <span class="card__genres">${listOfGenres(
              Object.values(film.genre_ids)
            )}</span> | <span class="card__date">${film.release_date}</span>
        </p>
        </li>`;
    })
    .join('');
  return markup;
}
