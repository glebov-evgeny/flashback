import { createRouter, createWebHistory } from 'vue-router'

import posts from "@/pages/posts/posts";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

const routes = [
  {
    path: '/',
    name: 'posts',
    component: posts
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
