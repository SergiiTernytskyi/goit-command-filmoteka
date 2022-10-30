import { refs } from '../refs';
import { renderList } from '../render-list';

export function renderGallery(value) {
  refs.list.innerHTML = renderList(value);
}
