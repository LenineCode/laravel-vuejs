import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/hello',
            name: 'hello',
            component: () => import('../views/Hello'),
        },
        {
            path: '*',
            name: '404',
            component: () => import('../views/404.vue'),
        },
    ]
});

export default router;
