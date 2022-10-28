import {
  toggleWatched,
  toggleQueue,
  isFilmWatched,
  isFilmQueued,
} from './mylibrary';
import { refs } from './refs';

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

export function setupModalButtons(filmId) {
  console.log(document.querySelector('.film-modal__watch-btn'));
  refs.watchedBtn.addEventListener('click', () => {
    toggleWatched(filmId);
    updateWatchedBtnText(filmId);
  });
  refs.queueBtn.addEventListener('click', () => {
    toggleQueue(filmId);
    updateQueuedBtnText(filmId);
  });
  updateWatchedBtnText(filmId);
  updateQueuedBtnText(filmId);
}
// console.log(refs.watchedBtn);
// console.log(refs.queueBtn);
// console.log(refs.myLibraryFilmList);
