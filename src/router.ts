import { createRouter, createWebHistory } from 'vue-router'
import Layout_Auth from '@layouts/auth.vue'
import Layout_App from '@layouts/app.vue'
import Layout_Lab from "@layouts/lab.vue"
import Layout_Error from '@layouts/error.vue'

const routes = [
    {
        path: '/auth/login',
        component: () => import('@routes/auth/login.vue'),
        meta: {
            title: 'Gizmo - Login',
            layout: Layout_Auth,
            requiresAuth: false
        }
    },
    {
        path: '/auth/recovery',
        component: () => import('@routes/auth/recovery.vue'),
        meta: {
            title: 'Gizmo - Recovery',
            layout: Layout_Auth,
            requiresAuth: false
        }
    },
    {
        path: '/auth/signup',
        component: () => import('@routes/auth/signup.vue'),
        meta: {
            title: 'Gizmo - Signup',
            layout: Layout_Auth,
            requiresAuth: false
        }
    },
    {
        path: '/app/home',
        alias: '/',
        component: () => import('@routes/app/dashboard.vue'),
        meta: {
            title: 'Gizmo - Home',
            layout: Layout_App,
            requiresAuth: true
        }
    },
    {
        path: '/lab/atoms',
        component: () => import('@routes/inspect/atoms.vue'),
        meta: {
            title: 'Components - Atoms',
            layout: Layout_Lab,
            requiresAuth: true
        }
    },
    {
        path: '/lab/molecules',
        component: () => import('@routes/inspect/molecules.vue'),
        meta: {
            title: 'Components - Molecules',
            layout: Layout_Lab,
            requiresAuth: true
        }
    },
    {
        path: '/lab/organisms',
        component: () => import('@routes/inspect/organisms.vue'),
        meta: {
            title: 'Components - Organisms',
            layout: Layout_Lab,
            requiresAuth: true
        }
    },
    {
        path: '/lab/widgets',
        component: () => import('@routes/inspect/widgets.vue'),
        meta: {
            title: 'Components - widgets',
            layout: Layout_Lab,
            requiresAuth: true
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@routes/404.vue'),
        meta: {
            title: 'Gizmo - 404',
            layout: Layout_Error,
            requiresAuth: false
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, _from, next) => {
    document.title = to.meta.title ? String(to.meta.title).trim() : "Hytech Gizmo";
    next()
})

export default router
