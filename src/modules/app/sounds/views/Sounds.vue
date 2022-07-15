<template>
  <div class="mx-20 pb-20">
    <div class="relative">
      <div class="fixed bottom-0 right-0 w-1/3 z-20">
        <the-now-playing @close="toggleNowPlayingCard(false)" />
      </div>

      <div class="py-10">
        <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-5xl">
          <span class="inline md:block">İkonlara Tıklayarak </span>
          <span class="relative py-3 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block"> çalmaya başla!</span> <span> 😸</span>
        </h1>
      </div>


      <div v-if="sounds.length" class="max-w-2xl mx-auto">
        <section class="flex justify-center items-center grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
          <div class="flex justify-center mx-20 mb-20" v-for="(sound, index) in sounds" :key="index">

            <div class="flex-shrink-0 relative overflow-hidden bg-indigo-500 rounded-lg max-w-xs shadow-lg w-40 h-56">

              <div class="flex flex-col text-white pt-10">
                <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
                  <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
                  <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
                </svg>
                <div class="relative flex items-center justify-center text-7xl">
                  <i class="opacity-50 hover:opacity-100 cursor-pointer" :title="sound.name" :class="sound.icon" :style="sound.active ? 'opacity: 1' : ''" @click="playAudioIcon(sound.id)"></i>
                </div>
                <div class="relative text-white px-6 pb-6 mt-6 text-center">
                  <span class="opacity-75 -mb-1">{{ sound.name }}</span>
                    <span v-if="sound.showButton" class="bg-white w-full rounded-full text-orange-500 text-xs font-bold leading-none items-center py-1 mt-8">
                      <span class="font-semibold text-xl">
                        <input type="range" min="0" max="100" class="volumeSlider my-10 mx-5 w-full" @change="toggleVolumeButton(sound.id)" v-model="sound.volume">
                    </span>
                  </span>
                  <span v-else></span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      <div v-else class="pb-72">
        <div class="w-1/2 mx-auto">
          <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
            <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
              <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
              </div>
              <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
              </div>
              <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
              </div>
              <div class="mx-auto pr-16" id="terminaltitle">
                <p class="text-center text-sm">Terminal</p>
              </div>

            </div>
            <div class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
              <p class="pb-1">When You Are: {{ new Date() }}</p>
              <p class="pb-1">JavScripts: Sound-air emresolmaz$</p>
              <p class="pl-32 pb-1">go to Website: <a target="_blank" href="https://emresolmaz.com.tr">emresolmaz.com.tr</a>$</p>
              <p class="pt-12 pb-1">
                >
                <svg role="status"
                     class="inline h-2 w-2 animate-spin text-gray-200 dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                                      viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
              </svg>
                Sesler yükleniyor...$
              </p>
              <p class="pb-1" @click="fetchSounds()">>yenilemek icin tikla$</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex';
import TheNowPlaying from '../../../../components/base/TheNowPlaying.vue';

export default {
  name: 'SoundsPage',
  components: { TheNowPlaying },

  data() {
    return {
      nowPlayingCard: false,
      errors: {},
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
    await this.fetchSounds();
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

