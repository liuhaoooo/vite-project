import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/index.vue'
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'

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
                children: [
                    {
                        path: 'network_status',
                        name: 'network_status',
                        component: () => import('@/views/systemStatus/network_status.vue'),
                    }
                ],
            }
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