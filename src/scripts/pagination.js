import Pagination from 'tui-pagination';

import { refs } from './refs';
import { MoviesApiService } from './api-work/apiServise';

import { clearGallery } from './keyword/clearGallery';
import { addImageNoResult } from './keyword/addImages';
import { hideImage } from './keyword/deleteImage';

import { spinerPlay, spinerStop } from './helpers/spin-ner';
import { renderGallery } from './helpers/render';
import { longify } from './helpers/longify';
import { paginationHide, togglerHide } from './helpers/hide-pagination';
import { onToTopBtn } from './btnToTop';
import { showWarningMessage, showReportFailture } from './helpers/messages';
import { load, save } from './localestorageservices';

import sprite from '../images/sprite.svg';

const arrowIcon = `${sprite}#icon-arrow`;
const dotsIcon = `${sprite}#icon-dots`;

const moviesApiService = new MoviesApiService();

async function paginationSetup(page, totalItems) {
  const paginationOptions = {
    page,
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
    usageStatistics: false,

    template: {
      page: '<a href="#" class="tui-page-btn" aria-label="page {{page}}">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}" aria-label="button tui-{{type}}">' +
        `<svg class="tui-ico-{{type}}" width="16" height="16"><use href="${arrowIcon}-{{type}}"></use></svg>` +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip" aria-label="button tui-{{type}}">' +
        `<svg class="tui-ico-ellip" width="14" height="14"><use href="${dotsIcon}"></use></svg>` +
        '</a>',
    },
  };

  const pagination = new Pagination(refs.pagination, paginationOptions);

  pagination.on('afterMove', async event => {
    if (moviesApiService.searchType === 'trending') {
      spinerPlay();

      try {
        moviesApiService.page = event.page;
        const data = await moviesApiService.fetchTrendData();

        renderGallery(data.results);
        longify(onToTopBtn);
      } catch (error) {
        console.log(error);
      } finally {
        longify(spinerStop);
      }
    } else if (moviesApiService.searchType === 'word') {
      spinerPlay();

      try {
        moviesApiService.page = event.page;
        const data = await moviesApiService.fetchMovieByWord();

        renderGallery(data.results);
        longify(onToTopBtn);
      } catch (error) {
        console.log(error);
      } finally {
        longify(spinerStop);
      }
    } else if (moviesApiService.searchType === 'filter') {
      spinerPlay();
      try {
        moviesApiService.page = event.page;
        const data = await moviesApiService.fetchFilterMovie();
        renderGallery(data.results);
        longify(onToTopBtn);
      } catch (error) {
        console.log(error);
      } finally {
        longify(spinerStop);
      }
    }
  });
}

async function onSearch(e) {
  e.preventDefault();

  const {
    elements: { query },
  } = e.currentTarget;

  const searchQuery = query.value.trim().toLowerCase();

  if (!searchQuery) {
    return showWarningMessage();
  }

  moviesApiService.query = searchQuery;
  moviesApiService.searchType = 'word';
  moviesApiService.resetPage();

  try {
    spinerPlay();
    const data = await moviesApiService.fetchMovieByWord();

    if (data.total_pages === 0) {
      showReportFailture();

      clearGallery();
      refs.form.reset();
      paginationHide();
      togglerHide();
      return addImageNoResult();
    }

    if (data.total_results <= 20) {
      paginationHide();
      return;
    }

    hideImage();
    clearGallery();
    refs.form.reset();

    renderGallery(data.results);
    moviesApiService.totalResults = data.total_results;

    paginationSetup(moviesApiService.page, moviesApiService.totalResults);
  } catch (error) {
    console.log(error);
  } finally {
    longify(spinerStop);
  }
}

async function openListSort(e) {
  const genre = refs.filterForm[0].value;
  const year = refs.filterForm[1].value;
  const sort = refs.filterForm[2].value;
  const genreUrl = `&with_genres=${genre}`;
  const yearUrl = `&primary_release_year=${year}`;
  const sortUrl = `&sort_by=${sort}`;

  moviesApiService.searchType = 'filter';
  moviesApiService.resetPage();

  try {
    spinerPlay();
    if (genre === 'start') {
      moviesApiService.genre = '';
    }
    if (year === 'start') {
      moviesApiService.genre = '';
    }
    if (sort === 'start') {
      moviesApiService.sort = '';
    }

    if (genre !== 'start' && year === 'start' && sort !== 'start') {
      moviesApiService.genre = genreUrl;
      moviesApiService.sort = sortUrl;

      const data = await moviesApiService.fetchFilterMovie();

      if (data.total_results > 10000) {
        moviesApiService.totalResults = 10000;
      } else {
        moviesApiService.totalResults = data.total_results;
      }

      moviesApiService.resetPage();

      renderGallery(data.results);
      paginationSetup(moviesApiService.page, moviesApiService.totalResults);
      return;
    }
    if (genre !== 'start' && year !== 'start' && sort === 'start') {
      moviesApiService.genre = genreUrl;
      moviesApiService.year = yearUrl;

      const data = await moviesApiService.fetchFilterMovie();

      if (data.total_results > 10000) {
        moviesApiService.totalResults = 10000;
      } else {
        moviesApiService.totalResults = data.total_results;
      }
      moviesApiService.resetPage();

      renderGallery(data.results);
      paginationSetup(moviesApiService.page, moviesApiService.totalResults);
      return;
    }
    if (genre !== 'start' && year === 'start' && sort === 'start') {
      moviesApiService.genre = genreUrl;

      const data = await moviesApiService.fetchFilterMovie();

      if (data.total_results > 10000) {
        moviesApiService.totalResults = 10000;
      } else {
        moviesApiService.totalResults = data.total_results;
      }
      moviesApiService.resetPage();

      renderGallery(data.results);
      paginationSetup(moviesApiService.page, moviesApiService.totalResults);
      return;
    }
    if (genre === 'start' && year !== 'start' && sort === 'start') {
      moviesApiService.year = yearUrl;

      const data = await moviesApiService.fetchFilterMovie();

      if (data.total_results > 10000) {
        moviesApiService.totalResults = 10000;
      } else {
        moviesApiService.totalResults = data.total_results;
      }
      moviesApiService.resetPage();

      renderGallery(data.results);
      paginationSetup(moviesApiService.page, moviesApiService.totalResults);
      return;
    }
    if (genre !== 'start' && year !== 'start' && sort !== 'start') {
      moviesApiService.genre = genreUrl;
      moviesApiService.year = yearUrl;
      moviesApiService.sort = sortUrl;

      const data = await moviesApiService.fetchFilterMovie();

      if (data.total_results > 10000) {
        moviesApiService.totalResults = 10000;
      } else {
        moviesApiService.totalResults = data.total_results;
      }
      moviesApiService.resetPage();

      renderGallery(data.results);
      paginationSetup(moviesApiService.page, moviesApiService.totalResults);
      return;
    }
    if (genre === 'start' && year !== 'start' && sort !== 'start') {
      moviesApiService.year = yearUrl;
      moviesApiService.sort = sortUrl;

      const data = await moviesApiService.fetchFilterMovie();

      if (data.total_results > 10000) {
        moviesApiService.totalResults = 10000;
      } else {
        moviesApiService.totalResults = data.total_results;
      }
      moviesApiService.resetPage();

      renderGallery(data.results);
      paginationSetup(moviesApiService.page, moviesApiService.totalResults);
      return;
    }
    if (genre === 'start' && year === 'start' && sort !== 'start') {
      moviesApiService.sort = sortUrl;

      const data = await moviesApiService.fetchFilterMovie(sortUrl);

      if (data.total_results > 10000) {
        moviesApiService.totalResults = 10000;
      } else {
        moviesApiService.totalResults = data.total_results;
      }
      moviesApiService.resetPage();

      renderGallery(data.results);
      paginationSetup(moviesApiService.page, moviesApiService.totalResults);
      return;
    }
  } catch (error) {
    console.log(error);
  } finally {
    longify(spinerStop);
  }
}

async function pageRender() {
  spinerPlay();
  try {
    moviesApiService.resetPage();
    const data = await moviesApiService.fetchTrendData();
    moviesApiService.totalResults = data.total_results;

    paginationSetup(moviesApiService.page, moviesApiService.totalResults);

    renderGallery(data.results);
    onToTopBtn();
  } catch (error) {
    console.log(error);
  } finally {
    longify(spinerStop);
  }
}

function togglerHandler() {
  if (refs.toggler.checked) {
    moviesApiService.popularity = 'week';
    refs.dayBtn.classList.remove('toggle-day--active');
    refs.weekBtn.classList.add('toggle-week--active');

    return pageRender();
  } else {
    moviesApiService.popularity = 'day';
    refs.dayBtn.classList.add('toggle-day--active');
    refs.weekBtn.classList.remove('toggle-week--active');

    return pageRender();
  }
}

pageRender();
refs.form.addEventListener('submit', onSearch);
refs.toggler.addEventListener('change', togglerHandler);
refs.filterForm.addEventListener('input', openListSort);
