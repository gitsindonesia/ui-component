import {createRouter, createWebHistory} from 'vue-router';
import {setupLayouts} from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import NProgress from 'nprogress';
import {handleMiddleware} from '~/middleware';

NProgress.configure({showSpinner: false});

const routes = setupLayouts(generatedRoutes);

if (import.meta.env.DEV) {
  console.log('Routes: ', routes);
}

const router = createRouter({
  history: createWebHistory(),
  routes: routes, // short for `routes: routes`
  linkExactActiveClass: '!text-primary-600',
});

router.beforeEach((to, from, next) => {
  NProgress.start();

  // next();
  handleMiddleware(to, from, next);
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
