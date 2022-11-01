const refs = {
  body: document.querySelector('body'),
  darkBtn: document.querySelector('.them-dark-btn'),
  lightBtn: document.querySelector('.them-light-btn'),
  lightIcon: document.querySelector('.icon-light'),
  darkIcon: document.querySelector('.icon-dark'),
};

let savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  refs.body.classList = savedTheme;
}

refs.darkBtn.addEventListener('click', onDarkBtnClick);

function onDarkBtnClick() {
  refs.body.classList.remove('light-theme');
  refs.body.classList.add('dark-theme');

  localStorage.setItem('theme', refs.body.classList);
}

refs.lightBtn.addEventListener('click', onLightBtnClick);

function onLightBtnClick() {
  refs.body.classList.remove('dark-theme');
  refs.body.classList.add('light-theme');

  localStorage.setItem('theme', refs.body.classList);
}
