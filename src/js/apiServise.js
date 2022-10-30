import { API_KEY, TRENDING_URL, SEARCH_URL, ID_URL } from "./apiVars";
import axios from 'axios';

export default class ApiService {
constructor() {
	this.page = 1;
	this.searchQuery = ' ';
	this.id = ' ';
}

async fetchTrendData() {
	try {
		const {data} = await axios.get(
			`${TRENDING_URL}?api_key=${API_KEY}&language=uk&page=${this.page}` 
		)	
	return data;
} catch (error) {
	console.error('Smth wrong with api get full trends' + error);
	}
}

async fetchMovieSearch() {
	try {
		const {data} = await axios.get(
			`${SEARCH_URL}?api_key=${API_KEY}&language=uk&query=${this.searchQuery}&page=${this.page}`
		);

		return data;
	} catch (error) {
		console.error( 'Smth wrong with api search fetch' + error);
	}
}

async fetchMovieById() {
	try {
		const {data} = await axios.get(`${ID_URL}${this.id}?api_key=${API_KEY}&append_to_response=videos&language=uk`);
		return data;
	} catch(error) {
		console.error('Smth wrong with api ID fetch' + error)
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

}