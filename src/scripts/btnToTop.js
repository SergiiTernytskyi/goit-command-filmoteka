const toTopBtn = document.querySelector('.btn-to-top');

window.addEventListener('scroll', onScroll);
if (toTopBtn) toTopBtn.addEventListener('click', onToTopBtn);

function onScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    toTopBtn.classList.add('btn-to-top--visible');
  }
  if (scrolled <= coords && toTopBtn) {
    toTopBtn.classList.remove('btn-to-top--visible');
  }
}
export function onToTopBtn() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

onScroll();
onToTopBtn();
