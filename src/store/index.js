import { createStore } from 'vuex';

import Core from './core';
import Sounds from '../modules/app/sounds/store';
import Contact from '../modules/app/contact/store';

// Create a new store instance.
export default createStore({
  modules: {
    Core,
    Sounds,
    Contact,
  },
});
