import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const Home = import(/* webpackChunkName: "about" */ '../views/Home.vue')
const Manage = import(/* webpackChunkName: "manage" */ '../views/manage/Index.vue')
const Dashboard = import(/* webpackChunkName: "manage" */ '../views/manage/Dashboard.vue')
const General = import(/* webpackChunkName: "manage" */ '../views/manage/General.vue')
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
        name: "manage",
        component: Manage,
        redirect: 'dashboard',
        children: [
            {
                path: '',
                name: "dashboard",
                component: Dashboard,
            },
            {
                path: 'general',
                name: "general",
                component: General,
            },
        ],
    },
    {
        path: "/site/:id/content/:contentId",
        name: 'content',
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
