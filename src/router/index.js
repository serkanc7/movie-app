import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../views/Home.vue';
import MovieDetailComponent from '@/views/MovieDetail.vue'
import SearchComponent from '@/views/Search.vue';
import AllPopularMoviesComponent from '@/views/AllPopularMovies.vue';
import AllTopRatedMoviesComponent from '@/views/AllTopRatedMovies.vue';
import FavoritesComponent from '@/views/Favorites.vue';
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
    path: '/search',
    name: 'search',
    component: SearchComponent,
    props: route => ({ query: route.query.q })
   
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
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoritesComponent,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
  
});

export default router;