<template>
  <div class="flex justify-center m-2">
    <div class="flex justify-center">

      <div class="flex items-center gap-2 rounded-lg bg-indigo-500 p-2">
        <div class="flex h-5 w-9 items-center rounded-full bg-indigo-300 cursor-pointer" @click="toggleLanguageButton">
          <input class="peer hidden" type="checkbox" v-model="language" />
          <div class="h-3 w-3 translate-x-1 rounded-full bg-white transition-transform peer-checked:translate-x-5"></div>
        </div>
        <div class="text-white py-0.5">
          <p v-if="language"><img width="20" height="20" src="@/assets/images/icon/flag-turkey_1f1f9-1f1f7.png" alt="tr-flag" /></p>
          <p v-else><img width="20" height="20" src="@/assets/images/icon/flag-united-kingdom_1f1ec-1f1e7.png" alt="tr-flag" /></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageMode',

  data() {
    return {
      language: true, //true = tr, false=eng
    };
  },

  methods: {
    toggleLanguageButton() {
      this.language = !this.language;

      if (this.language) {
        localStorage.setItem('lang', 'tr');
      } else {
        localStorage.setItem('lang', 'en');
      }
      location.reload();
    },

  },

  created() {
    const localStorageLanguage = localStorage.getItem('lang');

    if (localStorageLanguage) {
      this.language = localStorageLanguage === 'tr';
    }
  }


};
</script>
