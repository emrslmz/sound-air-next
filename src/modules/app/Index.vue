<template>
  <div>
    <div class="h-full w-full" @click="toggleCard(false)">
      <the-header />
      <div class="relative">
        <div class="fixed bottom-0 right-0 md:w-7/12 xl:w-5/12 2xl:w-4/12 z-40 hidden md:block">
          <the-now-playing-large @close="toggleNowPlayingLargeCard(false)" />
        </div>
        <div class="fixed bottom-0 w-full block md:hidden z-40">
          <the-now-playing-small @close="toggleNowPlayingLargeCard(false)" />
        </div>
      </div>
      <router-view />
      <the-footer />
    </div>
  </div>
</template>

<script>
// import config from '../../core/config';
import TheHeader from '../../components/base/TheHeader.vue';
import TheFooter from '../../components/base/TheFooter.vue';
import TheNowPlayingLarge from '../../components/base/TheNowPlayingLarge.vue';
import TheNowPlayingSmall from '../../components/base/TheNowPlayingSmall.vue';

export default {
  name: 'AppIndex',
  components: { TheHeader, TheFooter, TheNowPlayingLarge, TheNowPlayingSmall },

  data() {
    return {
      nowPlayingLargeCard: false,
      nowPlayingSmallCard: false,
    };
  },

  methods: {

    toggleNowPlayingLargeCard(value) {
      this.nowPlayingLargeCard = value;
    },

    toggleNowPlayingSmallCard(value) {
      this.nowPlayingSmallCard = value;
    },

    toggleCard(value) {
      this.toggleNowPlayingLargeCard(value);
      this.toggleNowPlayingSmallCard(value);
    },

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
