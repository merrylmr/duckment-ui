import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const Home = import(/* webpackChunkName: "about" */ '../views/Home.vue')
const Dashboard = import(/* webpackChunkName: "manage" */ '../views/manage/Dashboard.vue')
const Editor = import(/* webpackChunkName: "edit" */ '../views/edit/Editor.vue')
const createIndex = import(/* webpackChunkName: "edit" */ '../views/create/Index.vue')
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/site/:id',
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/site/:id/content/:contentId",
        name: 'editor',
        component: Editor,
    },
    {
        path: "/create",
        name: 'createSite',
        component: createIndex,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
