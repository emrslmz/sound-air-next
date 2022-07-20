<template>
  <div>
    <div class="container max-w-lg px-4 pt-32 mx-auto text-left md:max-w-none md:text-center">
      <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
        <span class="inline md:block dark:text-white"> Odaklanmaya Hazırlanın! </span>
        <span class="relative py-3 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block"> Verimliliğinizi arttırın </span
        >
      </h1>
      <div class="mx-auto mt-5 text-gray-500 dark:text-gray-200 md:mt-8 md:max-w-lg md:text-center lg:text-lg">
        Ders mi çalışıyorsunuz? Veya önemli bir toplantıya mı hazırlanıyorsunuz?
      </div>
      <div class="flex flex-col items-center mt-8 text-center">
          <span class="relative inline-flex w-full md:w-auto">
            <router-link to="/app/sounds" class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">Hemen Deneyin</router-link>
            <span class="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-2 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">ŞİMDİLİK ÜCRETSİZ $0.00</span>
          </span>
        <router-link to="/app/terms" class="mt-3 text-sm text-indigo-500">Şartlar ve koşullar geçerlidir.</router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TryNowSection',
};
</script>
