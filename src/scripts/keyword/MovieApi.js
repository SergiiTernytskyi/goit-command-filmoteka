// export class MovieApi {
//   getMovie(searchQuery) {
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=bc4500f3e002eaa279df91f9e5a7b7d1&language=en-US&page=1&include_adult=false&query=${searchQuery}`;
//     return fetch(url).then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     });
//   }
// }
