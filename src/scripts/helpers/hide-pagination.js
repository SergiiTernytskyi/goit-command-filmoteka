import { refs } from '../refs';

export function paginationHide() {
  refs.pagination.classList.add('pagination-hidden');
}

export function togglerHide() {
  refs.togglerDiv.classList.add('toggler-hidden');
}
