import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PaymentOK from './views/PaymentOK.vue'
import Error404 from './views/Error404.vue'
import Nprogress from 'nprogress';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/payment-ok',
      name: 'payment-ok',
      component: PaymentOK,
      props: true
    },
    {
      path: '*',
      name: 'error404',
      component: Error404,
    },
  ]
});

router.beforeEach((routeTo, routeFrom, next) => {
  Nprogress.start();
  next()
});

router.afterEach(() => Nprogress.done());

export default router
