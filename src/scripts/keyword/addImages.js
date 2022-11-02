import { refs } from '../refs';
import photoCat from '../../images/catbig.jpg';

const elem = document.createElement('img');
const srcImg = photoCat;
elem.setAttribute('src', srcImg);
elem.setAttribute('alt', 'Cat with big eyes');
elem.id = '124';
console.log(srcImg);

export function addImageNoResult() {
  if (elem.id !== 124) {
    refs.list.parentNode.appendChild(elem);
    elem.classList.add('show');
  }
  return;
}
