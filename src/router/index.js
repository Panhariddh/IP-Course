import { createRouter, createWebHistory } from 'vue-router';

// Import views for routing
import Page1 from '@/components/Page1.vue';
import Page2 from '@/components/Page2.vue';
import Page3 from '@/components/Page3.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Default route
      redirect: '/page1', // Redirect to Page 1
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1, // Render Page1.vue
    },
    {
      path: '/page2',
      name: 'Page2',
      component: Page2, // Render Page2.vue
    },
    {
      path: '/page3',
      name: 'Page3',
      component: Page3, // Render Page3.vue
    },
  ],
});

export default router;
