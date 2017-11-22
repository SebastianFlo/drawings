import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Shop from '@/pages/Shop';
import Admin from '@/pages/Admin';
import Gallery from '@/pages/Gallery';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    }
  ]
});
