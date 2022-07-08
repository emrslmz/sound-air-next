<template>
  <div class="mx-20 pb-20">
    <div class="relative">

      <div class="py-10">
        <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-5xl">
          <span class="inline md:block">Hava Olayları </span>
          <span class="relative py-3 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block"> Özelleştirerek bölgendeki hava olaylarını takip edebilirsin!</span>
        </h1>
      </div>

      <div class="w-full" align="center">
        <div class="maps">
          <iframe class="w-full" src="https://embed.windy.com/embed2.html?lat=34.778&lon=28.916&detailLat=37.962&detailLon=28.916&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.maps {
  padding: 0 100px 0 100px;
  width: 100%;
  overflow:hidden;
}

.maps iframe {
  width: 100%;
  min-height: 700px;
  color: transparent;
  font-size:  25px;
  -webkit-mask-image: radial-gradient(circle at top, transparent 50px, red 30px);
  border-radius: 20px;

  margin-top: -8px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
