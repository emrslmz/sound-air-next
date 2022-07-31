<template>
  <div class="py-20 pb-48 bg-white dark:bg-gray-900 items-center justify-center">

    <div class="pb-10">
      <h1 class="font-extrabold leading-10 tracking-tight text-center md:text-left text-white md:text-center sm:leading-none text-2xl sm:text-5xl md:text-6xl lg:text-5xl">
        <span class="inline md:block dark:text-white text-gray-900">Hakkımızda </span>
        <span class="relative py-3 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block"> biz kimiz ki?</span>
      </h1>
    </div>

    <div class="w-full flex flex-col justify-center items-center">
      <div class="bg-gray-800 text-white w-full max-w-5xl flex flex-col rounded-xl shadow-lg p-4 min-h-xl">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="rounded-full w-4 h-4 border border-purple-500"></div>
            <div class="text-md font-bold">SOUND AIR Nedir?</div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="cursor-pointer">

            </div>
            <div class="text-gray-500 hover:text-gray-300 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <div class="text-gray-500 hover:text-gray-300 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
          </div>
        </div>
        <div class="mt-4 text-gray-400 font-bold text-sm">
          <div>
            <small>#Last updated and effective date: July 30, 2022</small>

            <p class="my-4">Öncelikle burayı bulduysan ya geliştiricisindir, ya çok meraklısındır ya da sitede canın sıkılmıştır. Biz derken 1 kişiden bahsediyoruz. Benim kim olduğumu merak ediyorsan
              <a href="https://emresolmaz.com.tr" target="_blank">buraya</a> basman yeterli :)</p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>
