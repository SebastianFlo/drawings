// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue-material/dist/vue-material.css';

import Vue from 'vue';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';

import TheaApp from './TheaApp';
import router from './router';

import storeConfig from './storeConfig';
import themes from './themes';


Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(Vuex);

// State configuration
const store = new Vuex.Store(storeConfig);

//  Theme configuration
Vue.material.registerTheme(themes);

/* eslint-disable no-new */
new Vue({
  el: '#thea-app',
  router,
  store,
  template: '<TheaApp/>',
  components: { TheaApp },
});
