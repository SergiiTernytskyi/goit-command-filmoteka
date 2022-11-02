export const refs = {
  body: document.querySelector('body'),
  form: document.querySelector('.header-form'),

  list: document.querySelector('.gallery'),
  myLibraryFilmList: document.querySelector('.films__list'),

  filterForm: document.querySelector('.filter_form'),
  toTopBtn: document.querySelector('.btn-to-top'),

  watchedBtn: document.querySelector('.film-modal__watch-btn'),
  queueBtn: document.querySelector('.film-modal__queue-btn'),
  watchedLibraryBtn: document.querySelector('.library-btn__btn-watched'),
  queueLibraryBtn: document.querySelector('.library-btn__btn-queue'),

  spinNer: document.querySelector('.js-spinner'),
  loadSpin: document.querySelector('.spin-backdrop'),

  pagination: document.querySelector('.tui-pagination'),
  togglerDiv: document.querySelector('.toggler'),
  toggler: document.querySelector('#switch'),
  dayBtn: document.querySelector('#text-day'),
  weekBtn: document.querySelector('#text-week'),

  openModalLink: document.querySelector('.footer-content__link'),
  closeModalBtn: document.querySelector('.modal-team__close-btn'),
  teamModal: document.querySelector('[data-team-modal]'),

  modalBackdrop: document.querySelector('.backdrop-film-modal'),
  closeFilmModalBtn: document.querySelector('.close-btn-js'),
  filmContainer: document.querySelector('.film-modal__container'),
  filmItem: document.querySelector('.card__item'),
  openTrailerBtn: document.querySelector('.open-trailer-btn'),
};
