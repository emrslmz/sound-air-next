export default [
    {
        name: 'PrivacyPolicy',
        path: 'privacy_policy',
        meta: {
            title: 'Privacy Policy page',
        },
        component: () => import('../views/PrivacyPolicy.vue'),
    },
];
