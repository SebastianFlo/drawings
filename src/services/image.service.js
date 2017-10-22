import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const base = 'https://dog.ceo';

export default {
	getAll() {
		return Vue.http.get(`${base}/api/breeds/list/all`).then(
			response => {
				// get body data
				console.log(response.body.message);
				return response.body.message;
			},
			response => {
				// error callback
				new Error('got some error trying to fetch data', response);
			}
		);
	}
};
