export const refs = {
  body: document.querySelector('body'),

  watchedBtn: document.querySelector('.film-modal__watch-btn'),
  queueBtn: document.querySelector('.film-modal__queue-btn'),
  myLibraryFilmList: document.querySelector('.films__list'),
  form: document.querySelector('.header-form'),
  list: document.querySelector('.gallery'),
  spinNer: document.querySelector('.js-spinner'),
  loadSpin: document.querySelector('[js-data]'),

  pagination: document.querySelector('.tui-pagination'),

  openModalLink: document.querySelector('.footer-content__link'),
  closeModalBtn: document.querySelector('.modal-team__close-btn'),
  teamModal: document.querySelector('[data-team-modal]'),

  filterForm: document.querySelector('#filter-form'),
  sortForm: document.querySelector('#sortForm'),
  genreForm: document.querySelector('#genreForm'),
  yearForm: document.querySelector('#yearForm'),
  btnReset: document.querySelector('#btnResetFilter'),
};
