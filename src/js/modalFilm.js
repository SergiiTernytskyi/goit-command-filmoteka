const refs = {
  filmCard: document.querySelector('.gallery-js'),
  modalBackdrop: document.querySelector('.backdrop-film-modal'),
  closeFilmModalBtn: document.querySelector('.close-btn-js'),
  body: document.querySelector('body'),
  filmContainer: document.querySelector('.film-modal__card'),
};

refs.filmCard.addEventListener('click', onFilmOpen);

function onFilmOpen(event) {
  if (event.target.nodeName === 'UL') {
    return;
  }

  refs.modalBackdrop.classList.remove('is-hidden');

  document.body.style.overflow = 'hidden';

  window.addEventListener('keydown', onEscPress);
}

refs.closeFilmModalBtn.addEventListener('click', onCloseFilmModal);

function onCloseFilmModal(event) {
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

function createMarkup() {
  const markup = `<div class="film-modal__card">
      <div class="film-modal__img-container">
        <img src="#" alt="photo" class="film-modal__img" />
      </div>
      <div class="film-modal__info-container">
        <h2 class="film-modal__title">A FISTFUL OF LEAD</h2>
        <div class="film-modal__list-container">
          <ul class="film-modal__list list">
            <li class="film-modal__item">
              <p class="film-modal__info-sub-title">Vote / Votes</p>
              <p class="film-modal__info-text">
                <span class="film-modal__info-text-vote">7.3</span> /
                <span class="film-modal__info-text-votes">1260</span>
              </p>
            </li>
            <li class="film-modal__item">
              <p class="film-modal__info-sub-title">Popularity</p>
              <p class="film-modal__info-text">100.2</p>
            </li>
            <li class="film-modal__item">
              <p class="film-modal__info-sub-title">Original Title</p>
              <p class="film-modal__info-text">A FISTFUL OF LEAD</p>
            </li>
            <li class="film-modal__item">
              <p class="film-modal__info-sub-title">Genre</p>
              <p class="film-modal__info-text">Western</p>
            </li>
          </ul>
        </div>
        <h3 class="film-modal__about-title">About</h3>
        <p class="film-modal__about-text">
          Four of the West’s most infamous outlaws assemble to steal a huge
          stash of gold from the most corrupt settlement of the gold rush towns.
          But not all goes to plan one is killed and the other three escapes
          with bags of gold hide out in the abandoned gold mine where they
          happen across another gang of three – who themselves were planning to
          hit the very same bank! As tensions rise, things go from bad to worse
          as they realise the bags of gold are filled with lead... they’ve been
          double crossed – but by who and how?
        </p>

        <!--  -->

        <div class="film-modal__btn-container">
          <button
            type="button"
            class="film-modal__watch-btn film-modal__btn library-btn active"
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

  refs.filmContainer.innerHTML = markup;
}
