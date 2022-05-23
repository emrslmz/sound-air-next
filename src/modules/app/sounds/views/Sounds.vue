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
      {{ inThePlaylist }}

      <div class="max-w-2xl mx-auto">
        <section class="flex justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <div class="flex justify-center m-5" v-for="(sound, index) in sounds" :key="index">
            <div class="flex flex-col justify-center items-center p-4 bg-yellow-500 ring-2 ring-yellow-600 rounded-lg shadow-xl w-24 text-7xl text-white">
              <i class="opacity-50 hover:opacity-100 cursor-pointer" :title="sounds.name" :class="sound.icon" :style="sounds.active ? 'opacity: 1' : ''" @click="playAudioIcon(sound.id)"></i>
<!--              @click="toggleNowPlayingCard(!nowPlayingCard)"-->
              <span v-if="sound.showButton">
                <input type="range" min="0" max="100" class="volumeSlider" @change="toggleVolumeButton(sound.id)" v-model="sound.volume">
              </span>
              <span v-else class="mt-10"></span>

            </div>
          </div>
        </section>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex';
import TheNowPlaying from '../../../../components/base/TheNowPlaying.vue';

export default {
  name: 'Sounds',
  components: { TheNowPlaying },

  data() {
    return {
      nowPlayingCard: false,
    };
  },

  computed: {
    ...mapState('Sounds', ['sounds', 'inThePlaylist']),
  },

  methods: {
    ...mapActions('Sounds', ['getAudios', 'playSettings', 'volumeSettings']),

    toggleNowPlayingCard(value) {
      this.nowPlayingCard = value;
    },

    async playAudioIcon(id) {
      await this.playSettings(id);
    },

    async toggleVolumeButton(id) {
      await this.volumeSettings(id);
    }
  },

  async created() {
    this.getAudios();
  },

};
</script>

<style scoped>
.volumeSlider {
  -webkit-appearance: none;
  width: 75px;
  height: 5px;
  border-radius: 20px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.volumeSlider:hover {
  opacity: 1;
}

.volumeSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
}
</style>

