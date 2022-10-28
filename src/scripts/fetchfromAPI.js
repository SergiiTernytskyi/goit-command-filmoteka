import { save, load, remove } from './localestorageservices';
import axios from 'axios';

// export async function getFilms() {
//   const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=d210a4e5fa71331bdd85136700dad179`;
//   const response = await axios.get(url);
//   const data = response.data;
//   console.log(data);
//   const { results } = data;
//   console.log(results);
//   let filmID;
//   results.forEach(film => {
//     console.log(film.id);
//     filmID = film.Id;
//   });

//   //   let filmID = response.data.id;
//   //   return filmID;
// library-btn film-modal__watch-btn active
// -btn library-btnfilm-modal__queue-btn queue-btn
// }
export async function getFilmbyId(filmId) {
  const url = `https://api.themoviedb.org/3/movie/${filmId}?api_key=d210a4e5fa71331bdd85136700dad179`;
  const response = await axios.get(url);
  return response.data;
}
