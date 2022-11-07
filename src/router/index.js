import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/index.vue'
import Home from '@/views/home.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: "/home",
        component: Index,
        children: [
            {
                path: '/home',
                name: 'home',
                redirect: "/home/menu_1",
                component: Home,
                children: [
                    {
                        path: 'menu_1',
                        name: 'menu_1',
                        component: () => import('@/views/menu_1/index.vue'),
                        redirect: "/home/menu_1/ipFiltering",
                        children: [
                            {
                                path: 'ipFiltering',
                                name: 'ipFiltering',
                                component: () => import('@/views/menu_1/ipFiltering.vue'),
                            },
                            {
                                path: 'macFiltering',
                                name: 'macFiltering',
                                component: () => import('@/views/menu_1/macFiltering.vue'),
                            },
                            {
                                path: 'portFiltering',
                                name: 'portFiltering',
                                component: () => import('@/views/menu_1/portFiltering.vue'),
                            },
                        ]
                    },
                    {
                        path: 'menu_2',
                        name: 'menu_2',
                        component: () => import('@/views/menu_1/index.vue'),
                    },
                    {
                        path: 'menu_3',
                        name: 'menu_3',
                        component: () => import('@/views/menu_1/index.vue'),
                    },
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