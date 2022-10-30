// import Notiflix from 'notiflix';
// import { Report } from 'notiflix/build/notiflix-report-aio';

// import { refs } from '../refs';
// import { MoviesApiService } from '../api-work/apiServise';
// import { clearGallery } from './clearGallery';
// import { renderList } from '../render-list';
// import { addImageNoResult } from './addImages';
// import { hideImage } from './deleteImage';
// import { paginationSetup } from '../pagination';

// const moviesApiService = new MoviesApiService();

// refs.form.addEventListener('submit', onSearch);

// async function onSearch(e) {
//   e.preventDefault();

//   const {
//     elements: { query },
//   } = e.currentTarget;

//   const searchQuery = query.value.trim().toLowerCase();

//   if (!searchQuery) {
//     return Notiflix.Notify.warning(`Please enter name of the movie`);
//   }

//   moviesApiService.query = searchQuery;
//   moviesApiService.searchType = 'word';
//   moviesApiService.resetPage();

//   try {
//     const data = await moviesApiService.fetchMovieByWord();

//     if (data.total_pages === 0) {
//       Report.failure(
//         'No Result &#128584',
//         'Search result not successful. Enter the correct movie name and ',
//         'Okay &#128527'
//       );

//       clearGallery();
//       refs.form.reset();
//       return addImageNoResult();
//     }

//     if (data.total_results <= 20) {
//       refs.pagination.classList.add('pagination-hidden');
//       return;
//     }

//     hideImage();
//     clearGallery();
//     refs.form.reset();

//     renderGallery(renderList(data.results));
//     moviesApiService.totalResults = data.total_results;

//     console.log(moviesApiService.page);
//     console.log(moviesApiService.totalResults);

//     paginationSetup(moviesApiService.page, moviesApiService.totalResults);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function renderGallery(value) {
//   refs.list.innerHTML = value;
// }
