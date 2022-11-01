// import axios from 'axios';
// import { BASE_URL, API_KEY } from './api-work/apiVars';
// import { save } from './localestorageservices';
// import { refs } from './refs';
// import { renderGallery } from './helpers/render';
// import { MoviesApiService } from './api-work/apiServise';
// import { clearGallery } from './keyword/clearGallery';
// import { renderGallery } from './helpers/render';

// const moviesApiService = new MoviesApiService();
// const form = refs.filterForm;
// console.dir(form);
// refs.filterForm.addEventListener('input', openListSort);

// function search(e) {
//   console.dir(e);
// }

// export default async function openListSort(e) {
//   const genre = form[0].value;
//   const year = form[1].value;
//   const sort = form[2].value;
//   let genreUrl = `&with_genres=${genre}`;
//   let yearUrl = `&primary_release_year=${year}`;
//   let sortUrl = `&sort_by=${sort}`;
//   if (genre !== 'start' && year === 'start' && sort !== 'start') {
//     moviesApiService.resetPage();
//     clearGallery();
//     yearUrl = '';
//     const response = await initFilter(genreUrl, yearUrl, sortUrl);
//     const data = await response.data;
//     renderGallery(data.results);
//     console.log(data);
//     return data;
//   }
//   if (genre !== 'start' && year !== 'start' && sort === 'start') {
//     moviesApiService.resetPage();
//     clearGallery();
//     sortUrl = '';
//     const response = await initFilter(genreUrl, yearUrl, sortUrl);
//     const data = await response.data;
//     renderGallery(data.results);
//     console.log(data);
//     return data;
//   }
//   if (genre !== 'start' && year === 'start' && sort === 'start') {
//     moviesApiService.resetPage();
//     clearGallery();
//     yearUrl = '';
//     sortUrl = '';
//     const response = await initFilter(genreUrl, yearUrl, sortUrl);
//     const data = await response.data;
//     renderGallery(data.results);
//     console.log(data);
//     return data;
//   }
//   if (genre === 'start' && year !== 'start' && sort === 'start') {
//     moviesApiService.resetPage();
//     clearGallery();
//     sortUrl = '';
//     genreUrl = '';
//     const response = await initFilter(genreUrl, yearUrl, sortUrl);
//     const data = await response.data;
//     renderGallery(data.results);
//     console.log(data);
//     return data;
//   }
//   if (genre !== 'start' && year !== 'start' && sort !== 'start') {
//     moviesApiService.resetPage();
//     clearGallery();
//     const response = await initFilter(genreUrl, yearUrl, sortUrl);
//     const data = await response.data;
//     renderGallery(data.results);
//     console.log(data);
//     return data;
//   }
//   if (genre === 'start' && year !== 'start' && sort !== 'start') {
//     moviesApiService.resetPage();
//     clearGallery();
//     genreUrl = '';
//     const response = await initFilter(genreUrl, yearUrl, sortUrl);
//     const data = await response.data;
//     renderGallery(data.results);
//     console.log(data);
//     return data;
//   }
//   if (genre === 'start' && year === 'start' && sort !== 'start') {
//     moviesApiService.resetPage();
//     clearGallery();
//     genreUrl = '';
//     yearUrl = '';
//     const response = await initFilter(genreUrl, yearUrl, sortUrl);
//     const data = await response.data;
//     renderGallery(data.results);
//     console.log(data);
//     return data;
//   }
//   function initFilter(genreUrl, yearUrl, sortUrl) {
//     return axios.get(
//       `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US${sortUrl}&include_adult=false&include_video=false&page=1${yearUrl}${genreUrl}&with_watch_monetization_types=flatrate`
//     );
//   }
// }
