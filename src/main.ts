import { createApp } from 'vue'
import App from './App.vue'

import '@/index.css'
import '@/assets/vendor/@fortawesome/fontawesome-free-6.0.0-web/css/all.css';

import router from '@/router';
import store from '@/store';


const appInstance = createApp(App);

appInstance.use(router);
appInstance.use(store);
appInstance.mount('#app');
