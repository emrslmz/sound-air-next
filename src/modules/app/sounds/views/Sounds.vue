<template>
  <div class="mx-20 pb-20">
    <div class="relative">
      <div class="fixed bottom-0 right-0 w-1/3 z-20">
        <the-now-playing @close="toggleNowPlayingCard(false)" />
      </div>

      <div class="py-10">
        <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-5xl">
          <span class="inline md:block">İkonlara Tıklayarak </span>
          <span class="relative py-3 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block"> çalmaya başla!</span>
        </h1>
      </div>
      <div v-if="sounds.length" class="max-w-2xl mx-auto">
        <section class="flex justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <div class="flex justify-center mx-20 mb-20" v-for="(sound, index) in sounds" :key="index">
            <div class="flex flex-col justify-start items-center p-4 bg-yellow-500 ring-2 ring-yellow-600 rounded-lg shadow-xl w-24 h-32 text-7xl text-white">
              <i class="opacity-50 hover:opacity-100 cursor-pointer" :title="sound.name" :class="sound.icon" :style="sound.active ? 'opacity: 1' : ''" @click="playAudioIcon(sound.id)"></i>
<!--              @click="toggleNowPlayingCard(!nowPlayingCard)"-->
              <span v-if="sound.showButton">
                <input type="range" min="0" max="100" class="volumeSlider" @change="toggleVolumeButton(sound.id)" v-model="sound.volume">
              </span>
              <span v-else class="mt-10"></span>

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
              <p class="pt-12 pb-1">>sayfa yüklenirken bir hata meydana geldi$</p>
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

