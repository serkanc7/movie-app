import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from '../views/home/Home.vue';
import MovieDetailComponent from '@/views/MovieDetail.vue'
import SearchComponent from '@/views/Search.vue';
import AllPopularMoviesComponent from '@/views/AllPopularMovies.vue';
import AllTopRatedMoviesComponent from '@/views/AllTopRatedMovies.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetailComponent
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: SearchComponent
  },
  {
    path: '/popular',
    name: 'All Popular Movies',
    component: AllPopularMoviesComponent,
 
  },
  {
    path: '/toprated',
    name: 'All Toprated Movies',
    component: AllTopRatedMoviesComponent,
    props: true
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;