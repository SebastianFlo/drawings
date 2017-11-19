// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue-material/dist/vue-material.css';

import Vue from 'vue';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';
import VueAuthenticate from 'vue-authenticate';
import VueResource from 'vue-resource';

import TheaApp from './TheaApp';
import router from './router';

import storeConfig from './storeConfig';
import themes from './themes';

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(Vuex);

// State configuration
const store = new Vuex.Store(storeConfig);

const vueAuth = new VueAuthenticate(Vue.http, {
    baseUrl: 'http://localhost:8080',
    providers: {
		google: {
			clientId: '',
			redirectUri: 'http://localhost:8080/auth/callback' // Your client app URL
		}
	}
});

//  Theme configuration
Vue.material.registerTheme(themes);

/* eslint-disable no-new */
new Vue({
	el: '#thea-app',
	router,
	store,
	vueAuth,
	template: '<TheaApp/>',
	components: { TheaApp }
});

export default {
	vueAuth
};
