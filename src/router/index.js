import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/news',
    name: 'News',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "news" */ '../views/news/News.vue'),
  },
  {
    path: '/story',
    name: 'Story',
    component: () => import(/* webpackChunkName: "story" */ '../views/story/Story.vue'),
  },
  {
    path: '/drink',
    name: 'Drink',
    component: () => import(/* webpackChunkName: "drink" */ '../views/drink/Drink.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
