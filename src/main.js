import * as Vue from 'vue'
import router from './router'
import App from './App.vue'

//This router code is for vue 3.x

const app = Vue.createApp({
    render: ()=>Vue.h(App)
});

//use router instance import
app.use(router);

app.mount("#app");