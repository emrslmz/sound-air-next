<template>
  <div>
    <div class="h-full">
      <the-header />
      <router-view />
      <the-footer />

    </div>
  </div>
</template>

<script>
// import config from '../../core/config';
import TheHeader from '../../components/base/TheHeader.vue';
import TheFooter from '../../components/base/TheFooter.vue';

export default {
  name: 'AppIndex',
  components: { TheHeader, TheFooter },

  methods: {

    setPathThatWantToGo() {
      localStorage.setItem('sk_last_path', this.$route.fullPath);
    },

  },

  async created() {
    // if (localStorage.getItem(config.VITE_TOKEN_NAME)) {
    //   try {
    //     await this.fetchMe();
    //   } catch (e) {
    //     this.logout();
    //     this.setPathThatWantToGo();
    //   }
    // } else {
    //   this.logout();
    //   this.setPathThatWantToGo();
    // }
  },

};
</script>
