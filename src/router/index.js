import { createRouter, createWebHistory } from "vue-router"
import Book from '../components/Book.vue'
import Movie from '../components/Movie.vue'
import Show from '../components/Show.vue'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/books',
      name: 'books',
      component: Book
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movie
    },
    {
      path: '/shows',
      name: 'shows',
      component: Show
    }
  ]
})

export default router
