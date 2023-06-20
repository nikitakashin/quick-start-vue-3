import { createRouter, createWebHistory } from 'vue-router';
import PageTask from '~/pages/task.vue';
import PageIndex from '~/pages/index.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: PageIndex,
    meta: { layout: 'LayoutDefault' }
  },
  {
    path: '/task',
    name: 'Task',
    component: PageTask,
    meta: { layout: 'LayoutDefault' }
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
