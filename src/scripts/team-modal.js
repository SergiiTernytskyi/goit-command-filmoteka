import { refs } from './refs';

refs.openModalLink.addEventListener('click', onOpenTeamModal);
refs.closeModalBtn.addEventListener('click', onCloseTeamModal);
refs.teamModal.addEventListener('click', onBackdropClickClose);

function onOpenTeamModal() {
  refs.teamModal.classList.remove('is-hidden');
  refs.body.classList.add('no-scroll');
  window.addEventListener('keydown', onEscPress);
}

function onCloseTeamModal() {
  refs.teamModal.classList.add('is-hidden');
  refs.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', onEscPress);
}

function onBackdropClickClose(event) {
  if (event.currentTarget === event.target) {
    onCloseTeamModal();
  }
}

function onEscPress(event) {
  if (event.code === 'Escape') {
    onCloseTeamModal();
  }
}
