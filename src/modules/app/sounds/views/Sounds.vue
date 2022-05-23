<template>
  <div class="mx-20 pb-20">
    <div class="relative">
      <div class="fixed bottom-0 right-0 w-1/3">
        <the-now-playing v-if="nowPlayingCard" @close="toggleNowPlayingCard(false)" />
      </div>

      <div class="py-10">
        <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-5xl">
          <span class="inline md:block">İkonlara Tıklayarak </span>
          <span class="relative py-3 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block"> çalmaya başla!</span>
        </h1>
      </div>

      <div class="max-w-5xl mx-auto">
        <section class="flex flex-wrap justify-center items-center">
          <div class="flex justify-center" @click="toggleNowPlayingCard(!nowPlayingCard)">
            <div class="flex justify-center p-4 bg-yellow-300 ring-2 ring-yellow-100 rounded-lg shadow-xl w-24 text-7xl text-white">
              <i class="fa-solid fa-cube opacity-50 hover:opacity-100 cursor-pointer"></i>
            </div>
          </div>
        </section>
      </div>

    </div>
  </div>
</template>

<script>
import TheNowPlaying from '../../../../components/base/TheNowPlaying.vue';

export default {
  name: 'Sounds',
  components: { TheNowPlaying },

  data() {
    return {
      nowPlayingCard: false,
    };
  },

  methods: {
    toggleNowPlayingCard(value) {
      this.nowPlayingCard = value;
    }
  },

};
</script>

