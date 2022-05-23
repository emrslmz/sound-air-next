import { createStore } from 'vuex';

import Core from './core';
import Sounds from '../modules/app/sounds/store';

// Create a new store instance.
export default createStore({
  modules: {
    Core,
    Sounds,
  },
});
