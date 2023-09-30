import {createRouter, createWebHistory} from "vue-router"
import HomePage from '../Views/HomePage'
import ContactMePage from '../Views/ContactMePage'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/contactme',
        name: 'ContactMe',
        component: ContactMePage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router