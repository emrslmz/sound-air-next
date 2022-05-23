import { createRouter, createWebHistory } from 'vue-router';

import AppChildren from './app/index';
import PublicChildren from './public/index';

const routes = [
  {
    path: '/app',
    component: () => import('../modules/app/Index.vue'),
    children: AppChildren,
  },
  {
    path: '/',
    component: () => import('../modules/public/Index.vue'),
    children: PublicChildren,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
});

export default router;
