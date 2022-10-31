const refs = {
  body: document.querySelector('body'),
  darkBtn: document.querySelector('.them-dark-btn'),
  lightBtn: document.querySelector('.them-light-btn'),
  lightIcon: document.querySelector('.icon-light'),
  darkIcon: document.querySelector('.icon-dark'),
};

// function darkThemeStyles() {
//   refs.main.classList.add('main--dark');
//   refs.footer.classList.add('footer--dark');
//   refs.pagination.classList.add('pagination--dark');
//   refs.footerText.forEach(item => {
//     item.classList.add('footer-content--dark');
//   });

//   for (let title of refs.galleryTitle) {
//     title.classList.add('card__title--dark');
//   }
// }

// function lightThemeStyles() {
//   refs.main.classList.remove('main--dark');
//   refs.footer.classList.remove('footer--dark');
//   refs.pagination.classList.remove('pagination--dark');
//   refs.footerText.forEach(item => {
//     item.classList.remove('footer-content--dark');
//   });
//   for (let title of refs.galleryTitle) {
//     title.classList.remove('card__title--dark');
//   }
// }

let savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  refs.body.classList = savedTheme;
  console.log(savedTheme);
}

refs.darkBtn.addEventListener('click', onDarkBtnClick);

function onDarkBtnClick() {
  refs.lightBtn.classList.add('hide-btn');
  refs.darkBtn.classList.remove('hide-btn');
  refs.lightIcon.classList.add('opacity-icon');
  refs.darkIcon.classList.remove('opacity-icon');

  refs.body.classList.remove('light-theme');
  refs.body.classList.add('dark-theme');

  localStorage.setItem('theme', refs.body.classList);
}

refs.lightBtn.addEventListener('click', onLightBtnClick);

function onLightBtnClick() {
  refs.darkBtn.classList.add('hide-btn');
  refs.lightBtn.classList.remove('hide-btn');
  refs.lightIcon.classList.remove('opacity-icon');
  refs.darkIcon.classList.add('opacity-icon');

  refs.body.classList.remove('dark-theme');
  refs.body.classList.add('light-theme');

  localStorage.setItem('theme', refs.body.classList);
}

const theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};
