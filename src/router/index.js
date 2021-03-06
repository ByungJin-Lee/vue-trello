import {createRouter, createWebHistory} from 'vue-router'
import Login from '../components/LoginComponent.vue'
import Home from '../components/HomeComponent.vue'
import NotFound from '../components/NotFoundComponent.vue'
import Board from '../components/BoardComponent.vue'
import Card from '../components/CardComponent.vue'

const router = createRouter({
    history: createWebHistory(), //Not Hash
    routes: [
        {path: '/', component: Home},
        {path: '/b/:bid', component: Board, children : [
            {path: 'c/:cid', component: Card}
        ]},
        {path: '/login', component: Login},
        {path: '/:pathMatch(.*)*', component: NotFound},
    ]
})

export default router