<template>
  <div class="bg-white dark:bg-gray-900">
    <nav class="relative z-50 select-none border-b border-gray-200 dark:border-white">
      <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium md:overflow-visible lg:justify-center sm:px-4 md:px-2">
        <div class="flex items-center justify-start w-1/4 h-full pr-4">
          <a href="#_" class="inline-block py-4 md:py-0 pl-5">
            <span class="p-1 text-xl font-black leading-none text-gray-900 dark:text-white">
              <span>sound air</span><span class="text-indigo-600">.</span>
            </span>
          </a>
        </div>
        <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
        <!--WEB-DEVICES-->
          <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">

            <div class="flex items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
              <div v-for="(item, index) in headerMenuItems" :key="index">
                <router-link :to="{ name: item.name }" class="inline-block w-full py-2 mx-2 ml-6 font-medium text-left dark:text-white hover:text-indigo-600 dark:hover:text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">{{ item.title}}</router-link>
              </div>
            </div>

            <div class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
              <div class="w-full px-6 py-2 mr-0 text-gray-700 dark:text-white md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto">
                  <div class="flex justify-center">
                    <div class="flex justify-center">

                      <div class="flex items-center gap-2 rounded-lg bg-indigo-500 p-2">
                        <div class="flex h-5 w-9 items-center rounded-full bg-indigo-300 cursor-pointer" @click="toggleTheme">
                          <input class="peer hidden" type="checkbox" v-model="darkMode" />
                          <div class="h-3 w-3 translate-x-1 rounded-full bg-white transition-transform peer-checked:translate-x-5"></div>
                        </div>
                        <div class="text-white">
                          <i v-if="darkMode" class="fas fa-moon" ></i>
                          <i v-else class="fas fa-sun"></i>
                        </div>
                        {{ darkMode }}
                      </div>
                    </div>
                </div>
              </div>
            </div>

          </div>
          <!--/WEB-DEVICES-->

        </div>

        <div @click="showMenu = !showMenu" class="absolute right-0 flex flex-col items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100 text-xl text-gray-900 mr-5">
          <div v-show="showMenu">
            <i class="fas fa-circle-xmark"></i>
          </div>
          <div v-show="!showMenu">
            <i class="fa-solid fa-align-justify"></i>
          </div>
        </div>

      </div>

      <!--MOBILE-DEVICES-->
      <div class="flex flex-wrap items-center justify-center w-full px-28" v-show="showMenu">
        <div class="flex flex-wrap items-center justify-center text-center">
          <div class="bg-indigo-500 rounded-full text-white" v-for="(item, index) in headerMenuItems" :key="index">
            <router-link :to="{ name: item.name }" class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left hover:text-indigo-900 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">{{ item.title}}</router-link>
          </div>
        </div>
      </div>
      <!--/MOBILE-DEVICES-->

    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TheHeader',

  data() {
    return {
      showMenu: false,

      headerMenuItems: [
        {
          title: 'Anasayfa',
          name: 'Public',
        },
        {
          title: 'Sesler',
          name: 'Sounds',
        },
        {
          title: 'Kategoriler',
          name: 'Categories',
        },
        {
          title: 'Harita',
          name: 'Weather',
        },
        {
          title: 'Ekstra',
          name: 'Public',
        },
        {
          title: 'İletişim',
          name: 'Contact',
        },
        {
          title: 'bavış',
          name: 'Donate',
        },
      ]
    };
  },

  computed: {
    ...mapState('Core', ['darkMode']),
  },

  methods: {
    ...mapActions('Core', ['changeTheme']),

    toggleTheme() {
      this.changeTheme(!this.darkMode);
    },
  },

};
</script>

<style scoped>
.router-link-active {
  color: #4f46e5;
}
</style>
