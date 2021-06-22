import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "news" */ '../views/news/News.vue'),
  },
  {
    path: '/news/:newsId',
    name: 'newsContent',
    component: () => import(/* webpackChunkName: "newsContent" */ '../views/news/NewsContent.vue'),
  },
  {
    path: '/story',
    name: 'story',
    component: () => import(/* webpackChunkName: "story" */ '../views/story/Story.vue'),
  },
  {
    path: '/drink',
    name: 'drink',
    component: () => import(/* webpackChunkName: "drink" */ '../views/drink/Drink.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
