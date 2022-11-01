import listOfGenres from './genres-list';

export function renderList(films) {
  const markup = films
    .map(film => {
      const movieDate = new Date(film.release_date).getFullYear();

      const filmData = JSON.stringify(film);

      const encodedFilm = encodeURIComponent(filmData);
      return `<li class="card__item" data-filminfo="${encodedFilm}" data-filmid="${
        film.id
      }">
        <div class="card__thumb">
            <img class="card__img" src="https://image.tmdb.org/t/p/w500${
              film.poster_path
            }" alt="${
        film.title
      }" onerror="this.onerror=null;this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';">
        </div>
        <h2 class="card__title">
        ${film.title}
        </h2>
        <p class="card__text">
            <span class="card__genres">${listOfGenres(
              Object.values(film.genre_ids)
            )}</span> | <span class="card__date">${movieDate}</span>
        </p>
        </li>`;
    })
    .join('');

  return markup;
}
