import clickOutside from './click-outside';

/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

const GlobalDirective = {
  install(Vue) {
    Vue.directive('click-outside', clickOutside);
  },
};

export default GlobalDirective;
