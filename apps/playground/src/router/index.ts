import {createRouter, createWebHistory} from 'vue-router';
// import routes from './routes';
// import routes from '~pages';
import {setupLayouts} from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';

const routes = setupLayouts(generatedRoutes);

if (import.meta.env.DEV) {
  console.log(routes);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
