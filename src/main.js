// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue-material/dist/vue-material.css';

import Vue from 'vue';
import VueMaterial from 'vue-material';

import App from './App';
import router from './router';

import themes from './themes';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

//  Theme configuration
Vue.material.registerTheme(themes);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
