import { refs } from '../refs';

const elem = document.createElement('img');
const srcImg =
  'https://funart.pro/uploads/posts/2021-07/1626947950_4-funart-pro-p-kot-shrek-glaza-zhivotnie-krasivo-foto-4.jpg';
elem.setAttribute('src', srcImg);
elem.setAttribute('alt', 'Cat with big eyes');
elem.id = '124';


export function addImageNoResult() {
  if (elem.id !== 124) {
    refs.list.parentNode.appendChild(elem);
    elem.classList.add('show');
  }
  return;
}
