import { API_KEY, TRENDING_URL, SEARCH_URL, ID_URL } from "./apiVars";
import axios from 'axios';

export default {

	async getTrendData(page) {
		try {
			const {data} = await axios.get(
				`${TRENDING_URL}?api_key=${API_KEY}&language=uk&page=${page}` 
			)	
		return data;
	} catch (error) {
		console.error('Smth wrong with api get full trends' + error);
		}
	},

	async fetchMovieSearch(text, page) {
		try {
			const {data} = await axios.get(
				`${SEARCH_URL}?api_key=${API_KEY}&language=uk&query=${text}&page=${page}`
			);

			return data;
		} catch (error) {
			console.error( 'Smth wrong with api search fetch' + error);
		}
	},

	async getMovieById(id) {
		try {
			const {data} = await axios.get(`${ID_URL}${id}?api_key=${API_KEY}&language=uk`);
			return data;
		} catch(error) {
			console.error('Smth wrong with api ID fetch' + error)
		}
	},

	async getMovieById(id) {
		try {
			const {data} = await axios.get(`${ID_URL}${id}/videosnpm run duild?api_key=${API_KEY}&language=uk`);
			return data;
		} catch(error) {
			console.error('Smth wrong with api ID fetch' + error)
		}
	}
}