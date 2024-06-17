import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'InputView',
    component: () => import('../views/InputView.vue')
  },
  {
    path: '/graduation-card',
    name: 'GraduationCard',
    component: () => import('../views/GraduationCard.vue')
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;