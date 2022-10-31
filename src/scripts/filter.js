import axios from 'axios';
import { BASE_URL, API_KEY } from './api-work/apiVars';
import { save } from './localestorageservices';
import { refs } from "./refs";
import { renderGallery } from "./helpers/render";


const form = refs.filterForm
console.dir(form)
refs.filterForm.addEventListener('input', openListSort)

function search(e) {
  console.dir(e)
}

async function openListSort(e) {
  const genre = form[0].value
  const year = form[1].value
  const sort = form[2].value
  const genreUrl = `&with_genres=${genre}`
  const yearUrl = `&year=${year}`
  const sortUrl = `&sort_by=${sort}`
  if (genre !== "start" && year === "start" && sort !== "start") {
    const res = initFilter(genreUrl, sortUrl)
    console.log('genre, sort', res)
  }
  if (genre !== "start" && year !== "start" && sort === "start") {
    const res = initFilter(genreUrl, yearUrl)
    console.log('genre, year', res)
  }
  if (genre !== "start" && year === "start" && sort === "start") {
    const res = initFilter(genreUrl)
    console.log('genre', res)
  }
  if (genre === "start" && year !== "start" && sort === "start") {
    const res = initFilter(yearUrl)
    console.log('year', res)
  }
  if (genre !== "start" && year !== "start" && sort !== "start") {
    const res = initFilter(genreUrl, yearUrl, sortUrl)
    console.log('all on', res)
  }
  if (genre === "start" && year !== "start" && sort !== "start") {
    const res = initFilter(yearUrl, sortUrl)
    console.log('year, sort', res)
  }
  if (genre === "start" && year === "start" && sort !== "start") {
    const res = initFilter(sortUrl)
    console.log('sort', res)
  }
}
function initFilter(genreUrl, yearUrl, sortUrl) {
  return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US${yearUrl}${genreUrl}${sortUrl}&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
}