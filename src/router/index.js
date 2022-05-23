import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import EditReview from '../components/EditReview.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: EditReview
        }
    ]
});

export default router