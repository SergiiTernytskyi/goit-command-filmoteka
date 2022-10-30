import {
  toggleWatched,
  toggleQueue,
  isFilmWatched,
  isFilmQueued,
} from './mylibrary';

const refs = {
  watchedBtn: null,
  queueBtn: null,
};

function updateWatchedBtnText(filmId) {
  if (isFilmWatched(filmId)) {
    refs.watchedBtn.textContent = 'Remove from watched';
    refs.watchedBtn.classList.add('active');
  } else {
    refs.watchedBtn.textContent = 'Add to watched';
    refs.watchedBtn.classList.remove('active');
  }
}
function updateQueuedBtnText(filmId) {
  if (isFilmQueued(filmId)) {
    refs.queueBtn.textContent = 'Remove from queued';
    refs.queueBtn.classList.add('active');
  } else {
    refs.queueBtn.textContent = 'Add to queued';
    refs.queueBtn.classList.remove('active');
  }
}

export function setupModalButtons(film) {
  refs.watchedBtn = document.querySelector('.film-modal__watch-btn');
  refs.queueBtn = document.querySelector('.film-modal__queue-btn');
  refs.watchedBtn.addEventListener('click', () => {
    toggleWatched(film);
    updateWatchedBtnText(film.id);
  });
  refs.queueBtn.addEventListener('click', () => {
    toggleQueue(film);
    updateQueuedBtnText(film.id);
  });
  updateWatchedBtnText(film.id);
  updateQueuedBtnText(film.id);
}
