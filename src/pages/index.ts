import { createWebHistory, createRouter } from 'vue-router'

import Home from "./Home.vue";
import About from "./About.vue";
import Admission from "./Admission.vue";
import Contact from '../pages/Contact.vue'  ;

const routes = [
  { path: '/', component: Home },
   { path: '/about', component: About },
   { path: '/admission', component:Admission},
  { path: '/contact', component: Contact }, 
   
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})