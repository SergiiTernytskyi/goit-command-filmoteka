import axios from 'axios';

import { API_KEY, TRENDING_URL, SEARCH_URL, ID_URL } from './apiVars';

export class MoviesApiService {
  #query = '';
  #page = 1;
  #id = '';
  #totalResults = 0;
  #searchType = 'trending';

  //   constructor() {
  //     this.page = 1;
  //     this.searchQuery = ' ';
  //     this.id = ' ';
  //   }

  async fetchTrendData() {
    try {
      const { data } = await axios.get(
        `${TRENDING_URL}?api_key=${API_KEY}&page=${this.#page}`
      );
      return data;
    } catch (error) {
      console.error('Smth wrong with api get full trends' + error);
    }
  }

  async fetchMovieByWord() {
    try {
      const { data } = await axios.get(
        `${SEARCH_URL}?api_key=${API_KEY}&query=${this.#query}&page=${
          this.#page
        }`
      );

      return data;
    } catch (error) {
      console.error('Smth wrong with api search fetch' + error);
    }
  }

  async fetchMovieById() {
    try {
      const { data } = await axios.get(
        `${ID_URL}${
          this.#id
        }?api_key=${API_KEY}&append_to_response=videos&language=uk`
      );
      return data;
    } catch (error) {
      console.error('Smth wrong with api ID fetch' + error);
    }
  }

  // async fetchTrailerById() {
  // 	try {
  // 		const {data} = await axios.get(`${ID_URL}${this.id}/videos?api_key=${API_KEY}&language=uk`);
  // 		return data;
  // 	} catch(error) {
  // 		console.error('Smth wrong with api ID fetch' + error)
  // 	}
  // }
  get page() {
    return this.#page;
  }

  set page(newPage) {
    this.#page = newPage;
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  get searchType() {
    return this.#searchType;
  }

  set searchType(newType) {
    this.#searchType = newType;
  }

  get totalResults() {
    return this.#totalResults;
  }

  set totalResults(newTotalResults) {
    this.#totalResults = newTotalResults;
  }

  resetPage() {
    this.#page = 1;
  }
}
