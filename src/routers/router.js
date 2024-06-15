import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'InputView',
    component: () => import('../views/InputView.vue')
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;