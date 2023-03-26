import {Abayas, Beauty, Home, Weddings} from "../pages";

export const routes = [
    {
        id: 1,
        name: 'home',
        path: '/',
        component: Home
    },
    {
        id: 2,
        name: 'abayas',
        path: '/abayas',
        component: Abayas
    },
    {
        id: 3,
        name: 'weddings',
        path: '/weddings',
        component: Weddings
    },
    {
        id: 4,
        name: 'beauty',
        path: '/beauty',
        component: Beauty
    }
]