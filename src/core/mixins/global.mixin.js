import { mapState, mapGetters } from 'vuex';

import languages from '../../languages';
export default {
  computed: {
    ...mapState('Auth', ['lang', 'me']),
    ...mapGetters('Auth', ['isStudent', 'isAcademician']),
    ...mapGetters('Core', ['isExistsRunningRequest']),
  },

  methods: {
    generateContext(module, key, condition = false) {
      return !condition ? null : languages[module][key][this.lang];
    },
  },
};
