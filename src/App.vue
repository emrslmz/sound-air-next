<template>
  <div :class="darkMode ? 'dark' : 'light'">
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',


  computed: {
    ...mapState('Core', ['darkMode']),
  },

  methods: {
    ...mapActions('Core', ['changeTheme']),
  },

};
</script>
