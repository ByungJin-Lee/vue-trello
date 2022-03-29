import * as Vue from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'

//This router code is for vue 3.x

const Login = {
    template: '<div>Login</div>'
}
const NotFound = {
    template: '<div color=red>Page Not Found</div>'
}

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(), //Not Hash
    routes: [
        {path: '/', component: App},
        {path: '/login', component: Login},
        {path: '/:pathMatch(.*)*', component: NotFound},
    ]
})

const app = Vue.createApp({
    render: ()=>Vue.h({template:'<router-view></router-view>'})
});

app.use(router);

app.mount("#app");