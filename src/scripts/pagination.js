import Pagination from 'tui-pagination';

import { refs } from './refs';
// import { MoviesApiService } from './search-movie';
import { renderList } from './render-list';

import sprite from '../images/sprite.svg';

const arrowIcon = `${sprite}#icon-arrow`;
const dotsIcon = `${sprite}#icon-dots`;

function paginationSetup(page, totalItems) {
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
        // moviesApiService.page = event.page;
        // const data = await moviesApiService.searchTrendingMovies();
        renderList(data.results);
      } catch (error) {
        console.log(error);
      }
    } else if (moviesApiService.searchType === 'word') {
      try {
        // moviesApiService.page = event.page;
        // const data = await moviesApiService.searchMovieByWord();
        renderList(data.results);
      } catch (error) {
        console.log(error);
      }
    }
  });
}
