import Pagination from 'tui-pagination';
import Notiflix from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { refs } from './refs';
import { MoviesApiService } from './api-work/apiServise';
import { renderList } from './render-list';
import { clearGallery } from './keyword/clearGallery';
import { addImageNoResult } from './keyword/addImages';
import { hideImage } from './keyword/deleteImage';

import sprite from '../images/sprite.svg';

const arrowIcon = `${sprite}#icon-arrow`;
const dotsIcon = `${sprite}#icon-dots`;

const moviesApiService = new MoviesApiService();

export function paginationSetup(page, totalItems) {
  const paginationOptions = {
    page,
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
    usageStatistics: false,

    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        `<svg class="tui-ico-{{type}}" width="16" height="16"><use href="${arrowIcon}-{{type}}"></use></svg>` +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        `<svg class="tui-ico-ellip" width="14" height="14"><use href="${dotsIcon}"></use></svg>` +
        '</a>',
    },
  };

  const pagination = new Pagination(refs.pagination, paginationOptions);

  pagination.on('afterMove', async event => {
    if (moviesApiService.searchType === 'trending') {
      try {
        moviesApiService.page = event.page;
        const data = await moviesApiService.fetchTrendData();
        renderGallery(renderList(data.results));
      } catch (error) {
        console.log(error);
      }
    } else if (moviesApiService.searchType === 'word') {
      try {
        console.log(event.page);
        moviesApiService.page = event.page;
        const data = await moviesApiService.fetchMovieByWord();
        renderGallery(renderList(data.results));
      } catch (error) {
        console.log(error);
      }
    }
  });
}

refs.form.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();

  const {
    elements: { query },
  } = e.currentTarget;

  const searchQuery = query.value.trim().toLowerCase();

  if (!searchQuery) {
    return Notiflix.Notify.warning(`Please enter name of the movie`);
  }

  moviesApiService.query = searchQuery;
  moviesApiService.searchType = 'word';
  moviesApiService.resetPage();

  try {
    const data = await moviesApiService.fetchMovieByWord();

    if (data.total_pages === 0) {
      Report.failure(
        'No Result &#128584',
        'Search result not successful. Enter the correct movie name and ',
        'Okay &#128527'
      );

      clearGallery();
      refs.form.reset();
      return addImageNoResult();
    }

    if (data.total_results <= 20) {
      refs.pagination.classList.add('pagination-hidden');
      return;
    }

    hideImage();
    clearGallery();
    refs.form.reset();

    renderGallery(renderList(data.results));
    moviesApiService.totalResults = data.total_results;

    paginationSetup(moviesApiService.page, moviesApiService.totalResults);
  } catch (error) {
    console.log(error);
  }
}

async function pageRender() {
  try {
    const data = await moviesApiService.fetchTrendData();
    renderGallery(renderList(data.results));
    moviesApiService.totalResults = data.total_results;
    paginationSetup(moviesApiService.page, moviesApiService.totalResults);
  } catch (error) {
    console.log(error);
  }
}

pageRender();

function renderGallery(value) {
  refs.list.innerHTML = value;
}
