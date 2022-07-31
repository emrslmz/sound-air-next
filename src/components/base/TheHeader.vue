<template>
  <div class="bg-white dark:bg-gray-900">
    <nav class="relative z-20 select-none border-b border-gray-200 dark:border-white">
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

            <dark-mode />

          </div>
          <!--/WEB-DEVICES-->

        </div>

        <div @click="showMenu = !showMenu" class="absolute right-0 flex flex-col items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100 text-xl text-gray-800 mr-5">
          <div v-show="showMenu">
            <i class="fas fa-circle-xmark"></i>
          </div>
          <div v-show="!showMenu">
            <i class="fa-solid fa-align-justify"></i>
          </div>
        </div>

      </div>

      <!--MOBILE-DEVICES-->
      <div v-show="showMenu">
        <div class="flex flex-wrap flex-col justify-center items-center py-3">

          <dark-mode />

          <router-link :to="{ name: item.name }" class="rounded-lg bg-indigo-700 text-gray-200 font-bold mx-16 py-2 my-2 text-center border-2 border-indigo-900 w-1/2" v-for="(item, index) in headerMenuItems" :key="index">{{ item.title }}</router-link>

        </div>
      </div>
      <!--/MOBILE-DEVICES-->

    </nav>
  </div>
</template>

<script>
import DarkMode from './DarkMode.vue';

export default {
  name: 'TheHeader',
  components: { DarkMode },

  data() {
    return {
      showMenu: false,

      headerMenuItems: [
        {
          title: 'Anasayfa',
          name: 'Public',
        },
        {
          title: 'Dinle',
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
          title: 'Öğren',
          name: 'HowItsWorks',
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

};
</script>

<style scoped>
.router-link-active {
  color: #4f46e5;
}

@media (max-width:800px) {
  .router-link-active {
    color: rgb(129 140 248);
  }
}
</style>
