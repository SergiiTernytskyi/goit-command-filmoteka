import findTrailer from './trailer';
import { setupModalButtons } from './filmmodal';
import { MoviesApiService } from './api-work/apiServise';
import { spinerPlay, spinerStop } from './helpers/spin-ner';
import { refs } from './refs';

// const refs = {
//   // filmList: document.querySelector('.gallery'),
//   // modalBackdrop: document.querySelector('.backdrop-film-modal'),
//   // closeFilmModalBtn: document.querySelector('.close-btn-js'),
//   // body: document.querySelector('body'),
//   // filmContainer: document.querySelector('.film-modal__container'),

//   // filmItem: document.querySelector('.card__item'),
//   // openTrailerBtn: document.querySelector('.open-trailer-btn'),
// };

const moviesApiService = new MoviesApiService();

refs.list.addEventListener('click', onFilmOpen);

async function onFilmOpen(event) {
  if (event.target.nodeName === 'UL') {
    return;
  }

  spinerPlay();

  refs.filmContainer.innerHTML = '';

  moviesApiService.movieId = event.target.closest('.card__item').dataset.filmid;
  const filmData = event.target.closest('.card__item').dataset.filminfo;
  const decodedFilm = decodeURIComponent(filmData);

  const filmInfo = JSON.parse(decodedFilm);

  try {
    const film = await moviesApiService.fetchMovieById();

    const markupFilm = createMarkup(film);

    refs.filmContainer.innerHTML = markupFilm;
    setupModalButtons(filmInfo);
  } catch (error) {
    console.log(error);
  } finally {
    spinerStop();
  }

  refs.modalBackdrop.classList.remove('is-hidden');

  document.body.style.overflow = 'hidden';

  window.addEventListener('keydown', onEscPress);
}

refs.closeFilmModalBtn.addEventListener('click', onCloseFilmModal);

function onCloseFilmModal() {
  window.removeEventListener('keydown', onEscPress);
  refs.modalBackdrop.classList.add('is-hidden');
  document.body.style.overflow = 'scroll';
}

refs.modalBackdrop.addEventListener('click', onBackdropClickClose);

function onBackdropClickClose(event) {
  if (event.currentTarget === event.target) {
    onCloseFilmModal();
  }
}

function onEscPress(event) {
  if (event.code === 'Escape') {
    onCloseFilmModal();
  }
}

// -----------------------------------------------

function filmGenres(list) {
  let newList = [];
  list.forEach(item => {
    newList.push(item.name);
  });
  if (newList.length > 3) {
    newList = newList.slice(0, 2);
    newList.push('Other');
  }
  return newList.join(', ');
}

function createMarkup(film) {
  const markupFilm = `<div class="film-modal__card" data-filmid="${film.id}">
      <div class="film-modal__img-thumb">
        <img src="https://image.tmdb.org/t/p/w500${film.poster_path}" alt="${
    film.original_title
  }" class="film-modal__img" onerror="this.onerror=null;this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';"/>
       <button type="button" class="open-trailer-btn" data-filmid="${film.id}">
       <svg class="icon-play" width="68" height="48" viewBox="0 0 68 48">
       <path class="icon-path" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121"></path>
       <path d="M 45,24 27,14 27,34" fill="#fff"></path>
       </svg>
       </button>
      </div>
      <div class="film-modal__info-container">
        <h2 class="film-modal__title">${film.title}</h2>
        <div class="film-modal__list-container">
          <ul class="film-modal__list list">
            <li class="film-modal__item">
              <p class="film-modal__info-sub-title">Vote / Votes</p>
              <p class="film-modal__info-text">
                <span class="film-modal__info-text-vote">${film.vote_average.toFixed(
                  1
                )}</span> /
                <span class="film-modal__info-text-votes">1260</span>
              </p>
            </li>
            <li class="film-modal__item">
              <p class="film-modal__info-sub-title">Popularity</p>
              <p class="film-modal__info-text">${film.popularity.toFixed(1)}</p>
            </li>
            <li class="film-modal__item">
              <p class="film-modal__info-sub-title">Original Title</p>
              <p class="film-modal__info-text">${film.original_title}</p>
            </li>
            <li class="film-modal__item">
              <p class="film-modal__info-sub-title">Genre</p>
              <p class="film-modal__info-text">${filmGenres(film.genres)}</p>
            </li>
          </ul>
        </div>
        <h3 class="film-modal__about-title">About</h3>
        <p class="film-modal__about-text">
            ${film.overview}
        </p>
        <div class="film-modal__btn-container">
          <button
            type="button"
            class="film-modal__watch-btn film-modal__btn library-btn"
          >
            ADD TO WATCHED
          </button>
          <button
            type="button"
            class="film-modal__queue-btn film-modal__btn library-btn queue-btn"
          >
            ADD TO QUEUE
          </button>
        </div>
      </div>
    </div>`;
  return markupFilm;
}

refs.filmContainer.addEventListener('click', openTrailer);

async function openTrailer(e) {
  if (e.target.nodeName === 'path' || e.target.nodeName === 'IMG') {
    const key = e.target.parentElement.parentElement.dataset.filmid;
    console.dir(key);
    try {
      const data = await findTrailer(key);
      refs.body.insertAdjacentHTML('afterbegin', data);
    } catch {
      console.log(error);
    }
    window.addEventListener('click', closeBackdropTrailer);
    window.addEventListener('keydown', onEscCloseTrailer);
    window.removeEventListener('keydown', onEscPress);
  }
}

function closeBackdropTrailer(e) {
  if (e.target.className === 'backdropTrailer') {
    e.target.remove();
    window.removeEventListener('click', closeBackdropTrailer);
    window.removeEventListener('keydown', onEscCloseTrailer);
    window.addEventListener('keydown', onEscPress);
  }
}
function onEscCloseTrailer(e) {
  if (e.key === 'Escape') {
    body.children[0].remove();
    window.removeEventListener('click', closeBackdropTrailer);
    window.removeEventListener('keydown', onEscCloseTrailer);
    window.addEventListener('keydown', onEscPress);
  }
}
