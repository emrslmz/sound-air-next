export default [
    {
        name: 'About',
        path: 'about',
        meta: {
            title: 'About us page',
        },
        component: () => import('../views/About.vue'),
    },
];
