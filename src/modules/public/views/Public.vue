<template>
  <section class="w-full h-full bg-white dark:bg-gray-900">
    <the-header />
    <div class="mx-auto max-w-7xl">

      <try-now-section />

<!--      <div class="pt-32">-->
<!--        <div class="container m-auto px-6 space-y-8 md:px-12 lg:px-56">-->
<!--          <div class="m-auto text-center lg:w-7/12">-->
<!--            <h2 class="text-gray-700 dark:text-white font-extrabold leading-10 tracking-tight text-2xl sm:text-5xl md:text-6xl lg:text-5xl">Diğer projelerimizi inceleyin</h2>-->
<!--          </div>-->
<!--          <div class="flex flex-wrap justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">-->
<!--            <div class="p-4">-->
<!--              <img src="src/assets/images/aim_side_logo.jpg" width="200" height="200" alt="Aim Side" />-->
<!--            </div>-->
<!--            <div class="p-4 hidden dark:block">-->
<!--              <img src="src/assets/images/pi_agents_logo_white.png" width="200" height="200" alt="Pi Agents" />-->
<!--            </div>-->
<!--            <div class="p-4 block dark:hidden">-->
<!--              <img src="src/assets/images/pi_agents_logo_black.png" width="200" height="200" alt="Pi Agents" />-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->


      <div class="py-32 flex justify-center items-center">

        <card class="grid grid-cols-6 max-w-5xl mx-8 py-5 rounded-xl bg-blue-800">

          <div class="col-span-4">

            <h2 class="font-bold text-2xl text-white ml-10 mt-8">
              {{ $t("buildYourOwnOrTryOurs") }}
            </h2>

            <p class="font-light text-white text-sm ml-10 mt-5">
              {{ $t("createYourOwnCategoryWith") }}
            </p>

            <div class="text-white font-semibold ml-10 mt-6 mb-8 group">
              <router-link :to="{ name: 'HowItsWorks' }">
                {{ $t("downloadOurMobileApp") }}
                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block h-6 w-6 group-hover:translate-x-2 transition delay-100 transition-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </router-link>
            </div>

          </div>

          <div class="col-span-2 relative">
            <img src="https://www.digitalocean.com/_next/static/media/cloudJourneyImage.954519ea.svg"  class="absolute bottom-0 right-0"/>
          </div>

        </card>

      </div>

      <div class="relative">
        <button class="inline-block fixed bottom-0 right-0 m-10">
          <router-link to="/app/sounds">
            <i class="fa-solid fa-bell h-10 w-10 text-gray-700 text-3xl opacity-50 hover:opacity-100"></i>
            <span class="animate-ping absolute top-0.5 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
          </router-link>
        </button>
      </div>

    </div>
  </section>

  <the-footer />

</template>

<script>
import TheHeader from '@/components/base/TheHeader.vue';
import TheFooter from '@/components/base/TheFooter.vue';
import TryNowSection from '@/modules/public/components/TryNowSection.vue';

export default {
  name: 'Public',
  components: { TheHeader, TheFooter, TryNowSection },
};
</script>
