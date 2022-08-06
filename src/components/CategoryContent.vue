<template>
  <div class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
      <div @click="close" class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-11/12 sm:w-7/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-5/12">
        <!-- Modal header -->
        <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-gray-900 text-xl lg:text-2xl font-semibold dark:text-white">
          {{ category.name }}
          </h3>
          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" @click="close">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        <!-- Modal body -->
        <div class="px-6 py-4 space-y-6">
          <p class="text-gray-500 text-base leading-relaxed dark:text-white">
          <i :class="category.icon"></i>  {{ category.description }}
          </p>
          <p class="text-gray-500 text-xs leading-relaxed dark:text-white">
            Bu kategoride şu sesler mevcut;
          </p>

          <div v-if="sounds.length" class="w-full md:max-w-2xl mx-auto">
            <section class="flex justify-center items-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
              <div class="flex justify-center md:mx-20" v-for="(sound, index) in sounds" :key="index">
                <div class="text-gray-500 text-base leading-relaxed dark:text-white" >
                  <div class="relative overflow-hidden bg-indigo-500 rounded-lg max-w-xs shadow-lg w-32 sm:w-40 h-44 sm:min-h-64 m-1">

                    <div class="flex flex-col text-white pt-10 w-full">
                      <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5); opacity: 0.1;">
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
                      </svg>
                      <div class="relative flex flex-col items-center justify-center text-5xl sm:text-7xl">
                        <i class="opacity-100 cursor-pointer" :title="sound.name" :class="sound.icon" :style="sound.active ? 'opacity: 1' : ''"></i>
                      </div>
                      <div class="text-white text-center flex flex-col">
                        <span class="opacity-75 pt-2">{{ sound.name }}</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>
          </div>

          <div v-else class="w-full">
            <loading-terminal />
          </div>


          <p class="text-gray-500 text-base text-center leading-relaxed dark:text-white">
            kategoriyi çalıştırmak için alttaki çal butonuna dokun!
          </p>

        </div>
        <!-- Modal footer -->
        <div class="flex justify-center items-center pb-6 border-t border-gray-200 rounded-b dark:border-gray-600">
          <div class="flex flex-col items-center mt-8 text-center">
          <span class="relative inline-flex w-full md:w-auto">
            <button class="items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-lime-600 border border-transparent rounded-full md:w-auto hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 px-20 uppercase" @click="playCategory">
              <i class="fas fa-play"></i> Çal
            </button>
          </span>
          </div>
        </div>

        <div class="relative">
          <full-page-loading v-if="isLoading" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import LoadingTerminal from '@/components/errors_load/LoadingTerminal.vue';
import FullPageLoading from '@/components/errors_load/FullPageLoading.vue';
import { mapActions } from 'vuex';

export default {
  name: 'CategoryContent',
  components: { LoadingTerminal, FullPageLoading },

  data() {
    return {
      sounds: [],
      errors: {},
      isLoading: false,
    };
  },

  props: {
    category: {
      required: false,
      type: Object,
      default: {},
    },
  },

    methods: {
    ...mapActions('Sounds', ['getAudio', 'playSettings']),

      async playCategory() {
        this.isLoading = true;
        await setTimeout(() => {
          this.isLoading = false;
          this.close();
          this.category.audios.forEach(id => {
            this.playSettings(id);
          });
        }, 1000);
      },

      async getSounds() {
        await this.category.audios.forEach(id => {
            this.getAudio(id).then((response) => {
            this.sounds.push(...response.data);
          }).catch((e) => {
            this.erros = e;
          })
        });
      },

      close() {
        this.$emit('close');
      },
  },

  created() {
    this.getSounds();
  },

};
</script>
