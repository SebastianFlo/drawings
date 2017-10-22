import Vue from '../main';

const base = 'https://dog.ceo';

export default {
	getAll() {
		Vue.http.get(`${base}/api/breeds/list/all`).then(
			response => {
				// get body data
				console.log(response.body);
				return response.body;
			},
			response => {
				// error callback
				new Error('got some error trying to fetch data');
			}
		);
	}
};
