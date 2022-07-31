<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="sm:mx-20 pb-20">
    <div class="relative">
      <div class="py-10">
        <h1 class="font-extrabold leading-10 tracking-tight text-center sm:text-left text-gray-900 md:text-center sm:leading-none text-2xl sm:text-5xl md:text-6xl lg:text-5xl">
          <span class="inline md:block dark:text-gray-200">İkonlara Tıklayarak </span>
          <span class="relative py-3 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block"> çalmaya başla!</span> <span> 😸</span>
        </h1>
      </div>

      <div v-if="sounds.length" class="w-full md:max-w-2xl mx-auto">
        <section class="flex justify-center items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
          <div class="flex justify-center md:mx-20 mb-20" v-for="(sound, index) in sounds" :key="index">

            <div class="flex-shrink-0 relative overflow-hidden bg-indigo-500 rounded-lg max-w-xs shadow-lg w-32 sm:w-40 h-56 sm:min-h-64">

              <div class="flex flex-col text-white pt-10 w-full">
                <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
                  <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
                  <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
                </svg>
                <div class="relative flex flex-col items-center justify-center text-5xl sm:text-7xl">
                  <i class="opacity-50 hover:opacity-100 cursor-pointer" :title="sound.name" :class="sound.icon" :style="sound.active ? 'opacity: 1' : ''" @click="playAudioIcon(sound.id)"></i>
                </div>
                <div class="text-white text-center flex flex-col">
                  <span class="opacity-75 pt-2"> {{ sound.name }}</span>
                    <span v-if="sound.showButton" class="bg-white rounded-full text-orange-500 text-xs font-bold leading-none items-center py-2 mx-2 my-6 sm:mx-5 sm:my-4">
                      <span class="font-semibold">
                        <input type="range" min="0" max="100" class="volumeSlider w-full" @change.stop="toggleVolumeButton(sound.id)" v-model="sound.volume">
                    </span>
                  </span>
                  <span v-else></span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      <div v-else class="pb-72 mx-5">
        <loading-terminal />
      </div>

    </div>
  </div>
  </div>
</template>

<script>
import LoadingTerminal from '@/components/errors_load/LoadingTerminal.vue';
import { mapState, mapActions} from 'vuex';

export default {
  name: 'SoundsPage',
  components: { LoadingTerminal },

  data() {
    return {
      errors: {},
    };
  },

  computed: {
    ...mapState('Sounds', ['sounds', 'inThePlaylist']),
  },

  methods: {
    ...mapActions('Sounds', ['getAudios', 'playSettings', 'volumeSettings']),

    async playAudioIcon(id) {
      await this.playSettings(id);
    },

    async toggleVolumeButton(id) {
      await this.volumeSettings(id);
    },

    async fetchSounds() {
      try {
        await this.getAudios();
        this.errors = {};
      } catch (e) {
        this.errors = e;
      }
    },

  },

  async created() {
    if (!this.sounds.length) {
      await this.fetchSounds();
    }
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
  z-index: 10;
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
  background: #818080;
  cursor: pointer;
}
</style>

