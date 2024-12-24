import { createRouter, createWebHistory } from 'vue-router';
import Page1 from '../views/Page1.vue';
import Page2 from '../views/Page2.vue';
import Page3 from '../views/Page3.vue';
import SectionPage from '@/components/SectionPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/page1',
  },
  {
    path: '/page1',
    component: Page1,
    children: [
      {
        path: 'section/:id',
        component: SectionPage,
      },
    ],
  },
  {
    path: '/page2',
    component: Page2,
    children: [
      {
        path: 'section/:id',
        component: SectionPage,
      },
    ],
  },
  {
    path: '/page3',
    component: Page3,
    children: [
      {
        path: 'section/:id',
        component: SectionPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;