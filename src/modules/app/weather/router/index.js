export default [
    {
        name: 'Weather',
        path: 'weather',
        meta: {
            title: 'Weather page',
        },
        component: () => import('../views/Weather.vue'),
    },
];
