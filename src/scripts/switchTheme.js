const refs = {
  darkBtn: document.querySelector('.them-dark-btn'),
  lightBtn: document.querySelector('.them-light-btn'),
  lightIcon: document.querySelector('.icon-light'),
  darkIcon: document.querySelector('.icon-dark'),
  main: document.querySelector('main'),
  footer: document.querySelector('footer'),
  footerText: document.querySelectorAll('.footer-content'),
  galleryTitle: document.getElementsByClassName('card__title'),
};

function darkThemeStyles() {
  refs.main.classList.add('main--dark');
  refs.footer.classList.add('footer--dark');
  refs.footerText.forEach(item => {
    item.classList.add('footer-content--dark');
  });

  for (let title of refs.galleryTitle) {
    title.classList.add('card__title--dark');
  }
}

function lightThemeStyles() {
  refs.main.classList.remove('main--dark');
  refs.footer.classList.remove('footer--dark');
  refs.footerText.forEach(item => {
    item.classList.remove('footer-content--dark');
  });
}

refs.darkBtn.addEventListener('click', onDarkBtnClick);

function onDarkBtnClick() {
  refs.lightBtn.classList.add('hide-btn');
  refs.darkBtn.classList.remove('hide-btn');
  refs.lightIcon.classList.add('opacity-icon');
  refs.darkIcon.classList.remove('opacity-icon');

  darkThemeStyles();
}

refs.lightBtn.addEventListener('click', onLightBtnClick);

function onLightBtnClick() {
  refs.darkBtn.classList.add('hide-btn');
  refs.lightBtn.classList.remove('hide-btn');
  refs.lightIcon.classList.remove('opacity-icon');
  refs.darkIcon.classList.add('opacity-icon');

  lightThemeStyles();
}
