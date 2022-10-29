// import { getFilmbyId } from './fetchfromAPI';
// import { initModal } from './filmmodal';
// import { save, load, remove } from './localestorageservices';
// import { refs } from './refs';

// function toggleItems(filmId, storageKey) {
//   let watchedItems = load(storageKey);
  // watchedItems = watchedItems ? watchedItems : [];
//   if (Array.isArray(watchedItems)) {
//     const existIndex = watchedItems.indexOf(filmId);
//     if (existIndex > -1) {
//       watchedItems.splice(existIndex, 1);
//     } else {
//       watchedItems.push(filmId);
//     }
//   } else {
//     watchedItems = [filmId];
//   }
//   save(storageKey, watchedItems);
// }
// export function toggleWatched(filmId) {
//   toggleItems(filmId, 'watched');
// }

// export function toggleQueue(filmId) {
//   toggleItems(filmId, 'queue');
// }

// function findFilmIndex(filmId, storageKey) {
//   let items = load(storageKey);
//   if (Array.isArray(items)) {
//     return items.indexOf(filmId);
//   }
//   return -1;
// }

// export function isFilmWatched(filmId) {
//   return findFilmIndex(filmId, 'watched') > -1;
// }

// export function isFilmQueued(filmId) {
//   return findFilmIndex(filmId, 'queue') > -1;
// }

// export async function loadAllFilms() {
//   const watchedFilms = load('watched') || [];
//   const queuedFilms = load('queue') || [];
//   const filmsId = [...watchedFilms, ...queuedFilms];
//   console.log(filmsId);
//   const filmsPromises = filmsId.map(async filmId => await getFilmbyId(filmId));
//   const films = await Promise.all(filmsPromises);
//   refs.myLibraryFilmList.insertAdjacentHTML(
//     'beforeend',
//     createFilmMarkup(films)
//   );
// }
// export async function loadWatchedFilms() {
//   const watchedFilms = load('watched') || [];

//   const watchedfilmsId = [...watchedFilms];
//   console.log(watchedfilmsId);
//   const filmsPromises = watchedfilmsId.map(
//     async filmId => await getFilmbyId(filmId)
//   );
//   const films = await Promise.all(filmsPromises);
//   refs.myLibraryFilmList.insertAdjacentHTML(
//     'beforeend',
//     createFilmMarkup(films)
//   );
// }

// export async function loadQueuedFilms() {
//   const queuedFilms = load('queue') || [];

//   const queuedfilmsId = [...queuedFilms];
//   console.log(queuedfilmsId);
//   const filmsPromises = queuedfilmsId.map(
//     async filmId => await getFilmbyId(filmId)
//   );
//   const films = await Promise.all(filmsPromises);
//   refs.myLibraryFilmList.insertAdjacentHTML(
//     'beforeend',
//     createFilmMarkup(films)
//   );
// }

// function createFilmMarkup(films) {
//   return films
//     .map(({ title }) => {
//       return /*html*/ `
  
//     <li class="film-card">${title}</li>
   
// `;
//     })
//     .join('');
// }
