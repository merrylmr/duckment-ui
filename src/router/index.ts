import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
// import Home from '../views/Home.vue'

const Editor = () => import(/* webpackChunkName: "editor" */ '../views/Editor.vue');
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Editor
    },
    {
        path: '/editor',
        name: 'editor',
        component: Editor
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
