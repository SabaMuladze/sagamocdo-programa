import { createRouter,createWebHistory } from "vue-router";
import Home from './components/Home.vue'

const router = createRouter({
history:createWebHistory(),
 routes:[
    {
        path:'/', redirect:'/home', component:Home
    },
    {
        path:'/home', component:Home
    }
 ]
})

export default router