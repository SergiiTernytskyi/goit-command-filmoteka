import { refs } from './refs';
import confetti from 'canvas-confetti';

var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ['star'],
  colors: ['be0200', '55232a', 'ff6b01', 'ff001b', 'E89400', 'FFCA6C'],
};

function stars() {
  confetti({
    ...defaults,
    particleCount: 80,
    scalar: 1.2,
    shapes: ['star'],
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ['circle'],
  });
}

// function showConfetti() {
//   confetti.create(document.getElementById('canvas'), {
//     resize: true,
//     useWorker: true,
//   })({ particleCount: 200, spread: 200, zIndex: 2021});
// }

refs.openModalLink.addEventListener('click', onOpenTeamModal);
refs.closeModalBtn.addEventListener('click', onCloseTeamModal);
refs.teamModal.addEventListener('click', onBackdropClickClose);

function onOpenTeamModal() {
  setTimeout(stars, 0);
  setTimeout(stars, 100);
  setTimeout(stars, 200);

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
    console.log('click');
    onCloseTeamModal();
    window.removeEventListener('keydown', onEscPress);
  }
}
