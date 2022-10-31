import {
  toggleWatched,
  toggleQueue,
  isFilmWatched,
  isFilmQueued,
  loadWatchedFilms,
  loadQueuedFilms,
} from './mylibrary';

import { refs } from './refs';

const refsBtn = {
  watchedBtn: null,
  queueBtn: null,
};

function updateWatchedBtnText(filmId) {
  if (isFilmWatched(filmId)) {
    refsBtn.watchedBtn.textContent = 'Remove from watched';
    refsBtn.watchedBtn.classList.add('active');
  } else {
    refsBtn.watchedBtn.textContent = 'Add to watched';
    refsBtn.watchedBtn.classList.remove('active');
  }
}
function updateQueuedBtnText(filmId) {
  if (isFilmQueued(filmId)) {
    refsBtn.queueBtn.textContent = 'Remove from queued';
    refsBtn.queueBtn.classList.add('active');
  } else {
    refsBtn.queueBtn.textContent = 'Add to queued';
    refsBtn.queueBtn.classList.remove('active');
  }
}

export function setupModalButtons(film) {
  refsBtn.watchedBtn = document.querySelector('.film-modal__watch-btn');
  refsBtn.queueBtn = document.querySelector('.film-modal__queue-btn');
  refsBtn.watchedBtn.addEventListener('click', () => {
    toggleWatched(film);
    updateWatchedBtnText(film.id);

    if (
      !refs.myLibraryFilmList ||
      !refs.watchedLibraryBtn.classList.value.includes(
        'library-btn__btn--active'
      )
    ) {
      return;
    }

    loadWatchedFilms();
  });
  refsBtn.queueBtn.addEventListener('click', () => {
    toggleQueue(film);
    updateQueuedBtnText(film.id);

    if (
      !refs.myLibraryFilmList ||
      !refs.queueLibraryBtn.classList.value.includes('library-btn__btn--active')
    ) {
      return;
    }
    loadQueuedFilms();
  });
  updateWatchedBtnText(film.id);
  updateQueuedBtnText(film.id);
}
