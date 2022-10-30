import { refs } from './refs';


  refs.openModalLink.addEventListener('click', toggleTeamModal);
  refs.closeModalBtn.addEventListener('click', toggleTeamModal);
  refs.modalTeamBackdrop.addEventListener('click', onBackdropClickClose);
  window.addEventListener('keydown', onEscPress);

function toggleTeamModal() {
    refs.teamModal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

function onCloseTeamModal(event) {
  window.removeEventListener('keydown', onEscPress);
  refs.modalTeamBackdrop.classList.add('is-hidden');
  document.body.style.overflow = 'scroll';
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