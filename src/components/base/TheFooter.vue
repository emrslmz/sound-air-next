<template>
  <div>
    <div class="bg-gray-900">
      <div class="max-w-2xl mx-auto text-white py-10">
        <div class="text-center">
          <h3 class="text-3xl font-extrabold leading-10 tracking-tight mb-3">Mobil uygulamamızı indirin </h3>
          <p>Tüm platformlarda deneyin!</p>
          <div class="flex flex-wrap justify-center my-10">
            <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2 m-4 relative">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" class="w-7 md:w-8">
              <div class="text-left ml-3">
                <p class='text-xs text-gray-200'>Download on </p>
                <p class="text-sm md:text-base"> Google Play Store </p>
              </div>
              <span class="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full z-10">YAKINDA</span>
            </div>

            <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2 m-4 relative">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" class="w-7 md:w-8">
              <div class="text-left ml-3">
                <p class='text-xs text-gray-200'>Download on </p>
                <p class="text-sm md:text-base"> Apple Store </p>
              </div>
              <span class="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full z-10">YAKINDA</span>
            </div>
          </div>
        </div>
        <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-400">
          <p class="order-2 md:order-1 mt-8 md:mt-0 mx-5 text-center">Designed by Emre ᔕolmaz in Istanbul. All rights reserved. Copyright 2022 &copy;</p>
          <div class="order-1 md:order-3">
            <span class="px-2 hover:text-indigo-600"><router-link :to="{ name: 'About' }">About us</router-link></span>
            <span class="px-2 border-l hover:text-indigo-600"><router-link :to="{ name: 'Contact' }">Contact us</router-link></span>
            <span class="px-2 border-l hover:text-indigo-600"><router-link :to="{ name: 'PrivacyPolicy' }">Privacy Policy</router-link></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>
