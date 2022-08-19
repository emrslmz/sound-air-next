<template>
  <div class="flex justify-center m-2">
    <div class="flex justify-center">

      <div class="flex items-center gap-2 rounded-lg bg-indigo-500 p-2">
        <div class="flex h-5 w-9 items-center rounded-full bg-indigo-300 cursor-pointer" @click="toggleTheme">
          <input class="peer hidden" type="checkbox" v-model="darkMode" />
          <div class="h-3 w-3 translate-x-1 rounded-full bg-white transition-transform peer-checked:translate-x-5"></div>
        </div>
        <div class="text-white">
          <i v-if="darkMode" class="fas fa-moon"></i>
          <i v-else class="fas fa-sun"></i>
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
