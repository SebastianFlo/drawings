import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const base = 'http://localhost:3005';
const limit = 3;

export default {
	getAll() {
		return Vue.http.get(`${base}/images`).then(
			response => {
				// get body data
				console.log(response.body);
				return response.body;
			},
			response => {
				// error callback
				new Error('got some error trying to fetch data', response);
			}
		);
    },
    getById(id) {
        return Vue.http.get(`${base}/images/?id=${id}`).then(
			response => {
				// get body data
				console.log(response.body);
				return response.body;
			},
			response => {
				// error callback
				new Error('got some error trying to fetch particular image 😑', response);
			}
		);
    },
    getPage(pageNumber) {
        return Vue.http.get(`${base}/images/?_limit=${limit}&_page=${pageNumber}`).then(
			response => {
				// get body data
				console.log(response.body);
				return response.body;
			},
			response => {
				// error callback
				new Error('got some error trying to fetch particular image 😑', response);
			}
		);
    }
};
