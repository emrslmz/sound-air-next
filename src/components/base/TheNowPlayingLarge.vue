<template>
  <div>
    <div class="w-full">
      <div class="flex bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden mx-auto mb-5 mr-5">
        <div class="flex flex-col w-full">
          <div class="flex p-5 border-b">
            <span v-if="getPrimary">
              <i class="flex justify-start text-black dark:text-white items-center w-10 text-3xl rounded-lg opacity-75" :title="getPrimary.name" :class="getPrimary.icon"></i>
            </span>
            <span v-else>
              <p class="flex justify-start items-center w-10 text-3xl rounded-lg opacity-75">😥</p>
            </span>

            <!--PLAYING-NOW-->
            <div class="flex flex-col px-2 w-full">
              <div class="flex justify-between">
                <span class="text-xs text-gray-700 dark:text-white uppercase font-medium">
                  <span v-if="getPrimary">{{ $t("currentlyPlaying") }}</span>
                  <span v-else>{{ $t("playStopped") }}</span>
                </span>
                <span class="text-xs text-gray-700 dark:text-white uppercase font-medium cursor-pointer opacity-50 hover:opacity-100">
                  <span v-if="cardStatus === 1" @click="toggleCardStatus(2)">
                    <i class="fa-solid fa-chevron-up"></i>
                  </span>
                  <span v-else-if="cardStatus === 2" @click="toggleCardStatus(1)">
                   <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </span>
              </div>
              <span class="text-sm text-lime-500 capitalize font-semibold pt-1">
                  <span v-if="getPrimary">{{ getPrimary.name }}</span>
                  <span v-else>{{ $t("noSound") }}</span>
                </span>
              <span class="text-xs text-gray-500 dark:text-white uppercase font-medium flex justify-between items-center">
                <span v-if="getPrimary">{{ getPrimary.description }}</span>
                <span v-else>{{ $t("noSound") }}</span>
                <span v-if="inThePlaylist && cardStatus === 1 && inThePlaylist.length > 1" class="px-2 py-1 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">{{ inThePlaylist.length - 1  }} {{ $t("oneMore") }}</span>
              </span>
            </div>
          </div>
          <!--/PLAYING-NOW-->

          <div class="flex flex-col w-full" v-if="cardStatus === 2">
            <!--PLAY-PAUSE-->
            <div class="flex flex-col sm:flex-row items-center p-5">
              <div class="flex items-center">
                <div class="flex space-x-3 p-2">
                  <button class="focus:outline-none text-xs" @click="backForwardAudio(1)">
                    <i class="fa-solid fa-forward-fast fa-rotate-180 text-lime-300 hover:text-lime-600"></i>
                  </button>
                  <button class="rounded-full w-10 h-10 flex items-center justify-center pl-0.5 ring-1 ring-indigo-400 focus:outline-none" v-if="getPrimary" @click="playAudioIcon(getPrimary.id)">
                    <span ><i class="fa-solid fa-pause text-lime-300 hover:text-lime-600"></i></span>
                  </button>
                  <button class="rounded-full w-10 h-10 flex items-center justify-center pl-0.5 ring-1 ring-lime-500 focus:outline-none" v-else>
                      <span ><i class="fa-solid fa-play text-lime-300 hover:text-lime-600"></i></span>
                    </button>
                  <button class="focus:outline-none pt-1 text-xs" @click="backForwardAudio(2)">
                    <i class="fa-solid fa-forward-fast text-lime-300 hover:text-lime-600"></i>
                  </button>
                </div>
              </div>
              <div class="relative w-full sm:w-1/2 md:w-7/12 lg:w-4/6 ml-2">
                <div v-if="getPrimary">
                  <input type="range" min="0" max="100" class="volumeSlider w-full bg-lime-500 dark:bg-lime-400 dark:bg-white" @change="toggleVolumeButton(getPrimary.id)" v-model="getPrimary.volume" />
                </div>
                <div v-else>
                  <input type="range" min="0" max="100" v-model="defaultVolume" class="volumeSlider w-full bg-lime-500" />
                </div>

              </div>
              <div class="flex justify-end w-full sm:w-auto pt-1 sm:pt-0">
                <span class="text-xs text-gray-700 dark:text-white uppercase font-medium pl-2">
                    <span v-if="getPrimary">{{ getPrimary.volume }}</span><span v-else>{{ defaultVolume }}</span>/100
                </span>
              </div>
            </div>
            <!--/PLAY-PAUSE-->

            <!--PLAYLIST-->
            <div class="flex flex-col p-5 max-h-56">
              <div class="border-b pb-1 flex justify-between items-center mb-2">
                <span class=" text-base font-semibold uppercase text-gray-700 dark:text-white"> {{ $t("soon") }}</span>
                <i class="fa-solid fa-gears w-4 cursor-not-allowed text-gray-200 hover:text-gray-300"></i>
              </div>

              <div class="overflow-auto" v-if="inThePlaylist.length > 1">
                <div class="flex border-b py-3 cursor-pointer hover:shadow-md px-2" v-for="(sound, index) in inThePlaylist" :key="index" @click="setPrimary(sound.id, index)" v-show="getPrimary.id !== sound.id">
                  <i class="flex justify-start items-center text-black dark:text-white cursor-pointer w-10 text-3xl rounded-lg opacity-75" :title="sound.name" :class="sound.icon"></i>

                  <div class="flex flex-col justify-start items-start px-2 w-full">
                  <span class="text-sm text-lime-500 capitalize font-semibold">
                    {{ sound.name }}
                  </span>
                    <span class="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium">
                      {{ sound.id }}
                  </span>
                  </div>
                </div>
              </div>

              <div v-else-if="inThePlaylist.length === 1">
                <span class="text-xs text-center text-gray-500 dark:text-gray-200  uppercase font-medium">
                  {{ $t("aSoundIsPlaying") }}
                </span>
              </div>
              <div v-else>
                <span class="text-xs text-center text-gray-500 dark:text-gray-200 uppercase font-medium">
                  {{ $t("noSound") }}
                </span>
              </div>
            </div>
            <!--/PLAYLIST-->
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TheNowPlayingLarge',
  emits: ['close'],
  data() {
    return {
      defaultVolume: 100,
      cardStatus: 1, //1 = full, 2 = half
      primaryItem: null,
    };
  },

  computed: {
    ...mapState('Sounds', ['inThePlaylist']),

    getPrimary() {
      if (this.inThePlaylist) {
        return this.inThePlaylist[0];
      }
      return null;
    },

    inThePlaylistFirstItem() {
      if (this.inThePlaylist[0]) {
        return this.inThePlaylist[0];
      } else {
        return null;
      }
    },

  },

  methods: {
    ...mapActions('Sounds', ['playSettings', 'volumeSettings', 'forwardBackButton']),

    async backForwardAudio(type) {
      await this.forwardBackButton(type);
    },

    setPrimary(id, index) {
      if (id) {
        const findById = this.inThePlaylist.find(p => p.id === id);
        const primaryItem = this.inThePlaylist[0];
        this.inThePlaylist[0] = findById;
        this.inThePlaylist[index] = primaryItem;
      } else {
        this.primaryItem = this.inThePlaylistFirstItem;
      }
    },

    async toggleVolumeButton(id) {
      await this.volumeSettings(id);
    },

    async playAudioIcon(id) {
      await this.playSettings(id);
      this.primaryItem = this.inThePlaylistFirstItem;
    },

    close() {
      // this.$emit('close');
    },

    toggleCardStatus(value) {
      this.cardStatus = value;
    }
  },
};
</script>

<style scoped>
.volumeSlider {
  -webkit-appearance: none;
  height: 5px;
  border-radius: 20px;
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
  background: rgb(132 204 22);
  cursor: pointer;
}
</style>

