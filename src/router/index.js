import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/index.vue'
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'
import { homeRouter } from "./modules";
import routerController from './routerController.js'

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: "/home",
        component: Index,
        children: [
            {
                path: '/login',
                name: 'login',
                component: Login,
            },
            {
                path: '/home',
                name: 'home',
                redirect: "/home/network_status",
                component: Home,
                children: homeRouter
            },
            {
                path: '/step',
                name: 'step',
                component: () => import('@/views/step/index.vue')
            },
            {
                path: '/simlock',
                name: 'simlock',
                component: () => import('@/views/step/simlock.vue')
            },
            {
                path: '/plmnlock',
                name: 'plmnlock',
                component: () => import('@/views/step/plmnlock.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router