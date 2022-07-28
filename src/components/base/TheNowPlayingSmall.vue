<template>
  <div>
    <div class="bg-white rounded-tr-lg rounded-tl-lg shadow dark:bg-gray-800">

      <div class="bg-white dark:bg-gray-800 rounded-tl-xl sm:rounded-t-xl px-4 pt-1 pb-4  space-y-6">
        <div class="flex items-center space-x-3.5">
          <div class="w-20 h-20 rounded-lg flex justify-center items-center">
          <span v-if="getPrimary" class="flex flex-col">
            <i class="flex items-center text-4xl text-black dark:text-white rounded-lg opacity-75" :title="getPrimary.name" :class="getPrimary.icon"></i>
          </span>
          <span v-else class="flex flex-col">
            <span class="text-4xl text-indigo-500 capitalize font-semibold">😥</span>
          </span>
          </div>
          <div class="min-w-0 flex-auto space-y-0.5">
            <div class="flex justify-between">
              <p class="text-lime-600 dark:text-lime-400 text-sm font-semibold uppercase" v-if="getPrimary">
                {{ getPrimary.name }}
              </p>
              <p class="text-lime-600 dark:text-lime-400 text-sm font-semibold uppercase" v-else>
                ses yok
              </p>
              <div class="text-sm font-semibold uppercase">
                <span class="text-xs text-gray-700 dark:text-white uppercase font-medium cursor-pointer opacity-50 hover:opacity-100">
                  <span v-if="cardStatus === 1" @click="toggleCardStatus(2)">
                    <i class="fa-solid fa-chevron-up"></i>
                  </span>
                  <span v-else-if="cardStatus === 2" @click="toggleCardStatus(1)">
                   <i class="fa-solid fa-chevron-down"></i>
                  </span>
                </span>
              </div>
            </div>
            <h2 class="text-black dark:text-white text-base sm:text-xl lg:text-base xl:text-xl font-semibold truncate">
              <span v-if="getPrimary">{{ getPrimary.description }}</span>
              <span v-else>Ses bulunmuyor</span>
            </h2>
            <p class="text-gray-500 dark:text-gray-400 text-xs font-medium">
              <span v-if="getPrimary">{{ getPrimary.id }}</span>
              <span v-else>Ses bulunmuyor</span>
            </p>
          </div>
        </div>
        <div class="space-y-2">
          <div class="rounded-full overflow-hidden">
            <div v-if="getPrimary">
              <input type="range" min="0" max="100" class="volumeSlider w-full bg-lime-500 dark:bg-lime-400 dark:bg-white" @change="toggleVolumeButton(getPrimary.id)" v-model="getPrimary.volume" />
            </div>
            <div v-else>
              <input type="range" min="0" max="100" v-model="defaultVolume" class="volumeSlider w-full bg-indigo-300" />
            </div>
          </div>
          <div v-if="getPrimary" class="text-gray-500 dark:text-gray-400 flex justify-between text-sm font-medium tabular-nums">
            <div>{{ getPrimary.volume }}.0</div>
            <div>{{ defaultVolume }}</div>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 text-black dark:bg-gray-900 dark:text-white px-4 pt-1 pb-4 items-center">

       <div class="grid grid-cols-5 items-center">

         <button type="button" class="mx-auto text-gray-500" @click="toggleShareApp(true)">
           <i class="fa-solid fa-share-nodes"></i>
         </button>

         <button class="mx-auto text-2xl" @click="backForwardAudio(1)">
           <i class="fa-solid fa-forward-fast fa-rotate-180 text-indigo-200 hover:text-indigo-300"></i>
         </button>
         <button class="rounded-full w-16 h-16 flex items-center justify-center text-3xl ring-1 ring-indigo-400 mx-auto" v-if="getPrimary" @click="playAudioIcon(getPrimary.id)">
           <span ><i class="fa-solid fa-pause text-indigo-600 dark:text-indigo-200"></i></span>
         </button>
         <button class="rounded-full w-16 h-16 flex items-center justify-center text-3xl ring-1 ring-indigo-400 mx-auto" v-else>
           <span ><i class="fa-solid fa-play text-indigo-600 dark:text-indigo-200"></i></span>
         </button>
         <button class="mx-auto text-2xl" @click="backForwardAudio(2)">
           <i class="fa-solid fa-forward-fast text-indigo-200 hover:text-indigo-300"></i>
         </button>

         <button type="button" class="hidden sm:block lg:hidden xl:block mx-auto">
           <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
             <path d="M17 0H15V18H17V0Z" fill="currentColor" />
             <path d="M13 9L0 0V18L13 9Z" fill="currentColor" />
           </svg>
         </button>
         <button type="button" class="mx-auto border border-gray-300 rounded-md text-sm font-medium py-0.5 px-2 text-gray-500 dark:border-gray-600 dark:text-gray-400" v-if="inThePlaylist" @click="toggleCardStatus(2)">
           {{ inThePlaylist.length }} <i class="fas fa-compact-disc" :class="inThePlaylist.length > 0 ? 'fa-spin' : ''"></i>
         </button>
       </div>


        <div class="p-4" v-if="cardStatus === 2">
          <div class="flex justify-center items-center mt-3 w-full overflow-auto" v-if="inThePlaylist.length > 1">
            <div class="inline-block px-3" v-for="(sound, index) in inThePlaylist" :key="index" @click="setPrimary(sound.id, index)" v-show="getPrimary.id !== sound.id">
              <div class="rounded-lg duration-300 ease-in-out">

                <div class="flex flex-col gap-1">
                  <i class="flex justify-start items-center text-black dark:text-white cursor-pointer w-10 text-3xl rounded-lg opacity-75" :title="sound.name" :class="sound.icon"></i>
                </div>

              </div>
            </div>
          </div>

          <div v-else-if="inThePlaylist.length === 1">
            <span class="text-lime-600 dark:text-lime-400 text-xs font-semibold uppercase">
              Bir ses oynatılıyor..
            </span>
          </div>
          <div v-else>
            <span class="text-lime-600 dark:text-lime-400 text-xs font-semibold uppercase">
              Ses bulunmuyor
            </span>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TheNowPlayingSmall',
  emits: ['close'],

  data() {
    return {
      defaultVolume: 100,
      cardStatus: 1, //1 = full, 2 = half
      primaryItem: null,
      shareApp: false,
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
    ...mapActions('Sounds', ['playSettings', 'volumeSettings']),

    toggleShareApp(type) {
      this.shareApp = type;
    },

    backForwardAudio(type) {
      this.specificIemInPlaylist(type);
    },

    specificIemInPlaylist(type) {  //type 1 = backAudio, type 2 = ForwardAudio

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

  }

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


/* Hide scrollbar for Chrome, Safari and Opera */
.overflow-auto::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.overflow-auto {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
