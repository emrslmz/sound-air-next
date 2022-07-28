<template>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'DarkMode',

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
