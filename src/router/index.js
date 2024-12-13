import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import MenuItem from '../components/MenuItem.vue';
import Category from '../components/Category.vue';
import PageHeader from '../components/PageHeader.vue';
import ProductDetail from '../components/ProductDetail.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/menu', component: MenuItem },  
  { path: '/category', component: Category },  
  { path: '/pageHeader', component: PageHeader },  
  { path: '/productDetail', component: ProductDetail },  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes, 
});

export default router;
