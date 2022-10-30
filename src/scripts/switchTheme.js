const refs = {
  darkBtn: document.querySelector('.them-dark-btn'),
  lightBtn: document.querySelector('.them-light-btn'),
  lightIcon: document.querySelector('.icon-light'),
  darkIcon: document.querySelector('.icon-dark'),
};

refs.darkBtn.addEventListener('click', onDarkBtnClick);

function onDarkBtnClick() {
  refs.lightBtn.classList.add('hide-btn');
  refs.darkBtn.classList.remove('hide-btn');
  refs.lightIcon.classList.add('opacity-icon');
  refs.darkIcon.classList.remove('opacity-icon');
}

refs.lightBtn.addEventListener('click', onLightBtnClick);

function onLightBtnClick() {
  refs.darkBtn.classList.add('hide-btn');
  refs.lightBtn.classList.remove('hide-btn');
  refs.lightIcon.classList.remove('opacity-icon');
  refs.darkIcon.classList.add('opacity-icon');
}
