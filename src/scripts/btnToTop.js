import { refs } from './refs';

window.addEventListener('scroll', onScroll);
if (refs.toTopBtn) refs.toTopBtn.addEventListener('click', onToTopBtn);

function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    refs.toTopBtn.classList.add('btn-to-top--visible');
  }
  if (scrolled <= coords && refs.toTopBtn) {
    refs.toTopBtn.classList.remove('btn-to-top--visible');
  }
}
export function onToTopBtn() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

onScroll();
onToTopBtn();
