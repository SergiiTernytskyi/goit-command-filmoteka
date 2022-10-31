import axios from 'axios';

import {
  API_KEY,
  TRENDING_URL,
  SEARCH_URL,
  ID_URL,
  DISCOVER_URL,
} from './apiVars';

export class MoviesApiService {
  #query = '';
  #page = 1;
  #id = '';
  #totalResults = 0;
  #searchType = 'trending';
  #popularity = 'day';
  #genre = '';
  #year = '';
  #sort = '';

  //   constructor() {
  //     this.page = 1;
  //     this.searchQuery = ' ';
  //     this.id = ' ';
  //   }

  async fetchTrendData() {
    try {
      const { data } = await axios.get(
        `${TRENDING_URL}${this.#popularity}?api_key=${API_KEY}&page=${
          this.#page
        }`
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
        }?api_key=${API_KEY}&append_to_response=videos&language=en-US`
      );
      return data;
    } catch (error) {
      console.error('Smth wrong with api ID fetch' + error);
    }
  }

  async fetchTrailerById() {
    try {
      const { data } = await axios.get(
        `${ID_URL}${this.#id}/videos?api_key=${API_KEY}&language=en-US`
      );
      return data;
    } catch (error) {
      console.error('Smth wrong with api ID fetch' + error);
    }
  }

  async fetchFilterMovie(genreUrl, yearUrl, sortUrl) {
    try {
      const { data } = await axios.get(
        `${DISCOVER_URL}?api_key=${API_KEY}&language=en-US${this.#year}${
          this.#genre
        }${this.#sort}&include_adult=false&include_video=false&page=${
          this.#page
        }`
      );
      return data;
    } catch (error) {
      console.error('Smth wrong with api ID fetch' + error);
    }

    //
  }

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

  get movieId() {
    return this.#id;
  }

  set movieId(newId) {
    this.#id = newId;
  }

  get popularity() {
    return this.#popularity;
  }

  set popularity(newPop) {
    this.#popularity = newPop;
  }

  get genre() {
    return this.#genre;
  }

  set genre(newGenre) {
    this.#genre = newGenre;
  }

  get year() {
    return this.#year;
  }

  set year(newYear) {
    this.#year = newYear;
  }

  get sort() {
    return this.#sort;
  }

  set sort(newSort) {
    this.#sort = newSort;
  }

  resetPage() {
    this.#page = 1;
  }
}
