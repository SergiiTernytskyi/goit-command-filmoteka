import { save, load, remove } from './localestorageservices';
import { refs } from './refs';
import { renderList } from './render-list';

function toggleItems(film, storageKey) {
  let storedItems = load(storageKey);
  // watchedItems = watchedItems ? watchedItems : [];
  if (Array.isArray(storedItems)) {
    const existIndex = storedItems.findIndex(item => item.id === film.id);
    if (existIndex > -1) {
      storedItems.splice(existIndex, 1);
    } else {
      storedItems.push(film);
    }
  } else {
    storedItems = [film];
  }
  save(storageKey, storedItems);
}
export function toggleWatched(film) {
  toggleItems(film, 'watched');
}

export function toggleQueue(film) {
  toggleItems(film, 'queue');
}

function findFilmIndex(filmId, storageKey) {
  let items = load(storageKey);
  if (Array.isArray(items)) {
    return items.findIndex(item => item.id === filmId);
  }
  return -1;
}

export function isFilmWatched(filmId) {
  return findFilmIndex(filmId, 'watched') > -1;
}

export function isFilmQueued(filmId) {
  return findFilmIndex(filmId, 'queue') > -1;
}

export async function loadAllFilms() {
  const watchedFilms = load('watched') || [];
  const queuedFilms = load('queue') || [];
  const films = [...watchedFilms, ...queuedFilms];

  refs.myLibraryFilmList.insertAdjacentHTML('beforeend', renderList(films));
}
export async function loadWatchedFilms() {
  const watchedFilms = load('watched') || [];
  refs.myLibraryFilmList.innerHTML = '';
  refs.myLibraryFilmList.insertAdjacentHTML(
    'beforeend',
    renderList(watchedFilms)
  );
}

export async function loadQueuedFilms() {
  const queuedFilms = load('queue') || [];
  refs.myLibraryFilmList.innerHTML = '';
  refs.myLibraryFilmList.insertAdjacentHTML(
    'beforeend',
    renderList(queuedFilms)
  );
}

export function setupLIbraryBtns() {
  function onQueueBtnClick() {
    refs.queueLibraryBtn.classList.add('active');
    refs.watchedLibraryBtn.classList.remove('active');
    loadQueuedFilms();
  }

  function onWatchedBtnClick() {
    refs.watchedLibraryBtn.classList.add('active');
    refs.queueLibraryBtn.classList.remove('active');
    loadWatchedFilms();
  }

  refs.queueLibraryBtn.addEventListener('click', onQueueBtnClick);
  refs.watchedLibraryBtn.addEventListener('click', onWatchedBtnClick);
}
