<template>
  <div>
    <div class="py-20 pb-36 bg-gray-900 items-center justify-center">

      <div class="pb-10">
        <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-white md:text-center sm:leading-none md:text-6xl lg:text-5xl">
          <span class="inline md:block">Çalma listesi oluştururken zorlanıyor musun? </span>
          <span class="relative py-3 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block"> kategorileri dene!</span> <span> 🤩</span>
        </h1>
      </div>

      <div class="flex flex-col m-auto p-auto  overflow-x-scroll hide-scroll-bar">
        <h1 class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-white">Senin</h1>
        
        <div class="flex pb-10">
          <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">

            <div class="inline-block px-3" v-for="(data, index) in 9" :key="index">
              <div class="w-64 h-min-64 max-w-xs overflow-hidden rounded-lg duration-300 ease-in-out">

                <div class="flex flex-col gap-1">
                    <!-- Image -->
                    <a href="" class="bg-purple-500">
                      <img src="https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg" class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" />
                    </a>

                    <!-- Games Title -->
                    <a href="#" class="hover:text-purple-500 text-gray-200 font-semibold"> VALORANT </a>

                    <!-- Viewers -->
                    <a href="#" class="hover:text-purple-500 text-sm text-gray-400 -mt-1"> 78.4K viewers </a>

                    <!-- Category Tags -->
                    <div class="flex flex-row flex-wrap gap-2">
                      <a href="#" class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Shooter </a>
                      <a href="#" class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> FPS </a>
                    </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>


      <div class="text-center flex items-center justify-center keyboard text-white">
        <div @click="scroll_left"><button class="minecraft-btn mx-auto text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200 mx-2">
          <i class="fa-solid fa-circle-left text-2xl"></i>
        </button></div> 
        
        <div @click="scroll_right"><button class="minecraft-btn mx-auto text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200 mx-2">
          <i class="fas fa-circle-right text-2xl"></i>
        </button></div> 
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  methods: {
    scroll_left() {
    let content = document.querySelector(".hide-scroll-bar");
    content.scrollLeft -= 100;
    },
    scroll_right() {
      let content = document.querySelector(".hide-scroll-bar");
      content.scrollLeft += 100;
    }
  },
};
</script>



<style scoped>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}


.minecraft-btn {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAAPCAAAAACe4j/AAAAEuElEQVRIx1WWS5Ibuw5EtddrdRRJJE4iSKrb4c2/AUuy30iK+jEBHCTwAICMCgAKiGhKVQUwKzJHQo4mQGBy7AIvk1E2AQKhFt6bUGD1gILy0DkD4dmzACkGyzCScgFgQmLZr4LpQpC56QB2wgSYE8i1fd6xd1yPHIAKwAs14Undx2LIHK0X6vdFbzTa6CNBLQE8Y5rapn7oAl3KSDKC6cLfL6sLnIVG7ffnyUgvQ6rwLjUZdIVqWz0iEXXCZ+TJsV8feUdoPHDk+a/IeAbq0ldLT59jtHweHwmKS6gFSUYCqKcVsPami1pEnqolkCMBiAS87FXTICp03geYUr8TV8un3KuyC0BfTUzihOCdwjUya1bkT9VWe+AaFOoJzHdtERXRe/eulyEDhC6pjYwr+JQuIDU9/0wQBnJEAkd+9i6IRTJrV7YWnGfwLA6ESphkBoCu88M0YH1CTTOiRUpDdwpGkkP5yL9phhwn+QVxDarAXq513y9bLKgxBGR/CjDyMl4ECd6lO82CaMLbEHGHp1R8ePDERj392ssaCOigNjJ+dXXl6OLUFfVx6dA1BFJLlHpkUHPam095C3QJLIjn6OLIOB3xe0JS85Zd+govg1/z/UhtG3RdVW98yxNp5I0Vtf/U+6y/dJ/yHtSK4q7G9ARscC3/Df/kXTwiT3d6ovjEISLJIVEvBwWeCXlALZTbpy85xqWuf3sNiBBUmYjI+BqN6aNQqDWpipSYf3W1nOV/WALoykjIiCPreSn97UigsjZdPA5s3AmCDIxaVO0Fa1fV/qkaiijPPz/bEeRyLSBDI8K8j37TO8aH7vmOqUUQ1DboYhvqd+FlFGEo+2T75MbLGnjvPeu7Pl521Ap14dcR3h7p75qv4xieqnNDoyCPLt/yKkf5gOUXl+6S3d9Syq/982fz+fhpsm28C5EhJcxsWWQke6KoPMA7tqm7kKcrn6FLhWcoqCNCxDPyQ8wEKR73nIlEX8GpARSJX7/rzeNtWPD/Dl2IwtOYMwV7osGsHYJanzeU7KqIZVCTcrT0IEbyD4d1e1dkBtW2qLhLXK7a1ogDqsjI1DR4PY7nHEqfF9tn8HUJL+eQ/lGOXdwI1++57CqgmDaReM9CZYLAk4D4ymqti4KZI9Htz9OnrcuOhCQEqJfXaxHPAFG/l/ee1GFJPXmPryYUiUGPutnRGXkagmnjHk5RNpm7xxiclm6CjJEQ4+MD4xPmuT9Ef4b3YT3B51a7d4Np76PF0cavuC+SoaH6PlilipEakoJBJETWT3k7Hf+1REPj2fIx95t5ct6u9S5v3KM2fv2Ve29ax9yC98zT2IZot61MHyYtdPF92nguZ29xfcVxSu9Nj5Gl8G3wcVoW8n1Q/f6BHFEAyy5R2aRIdYH8XfV4453vHKcnqarXPD6mdrD0rlVV5xBPF2xuJM5Oo0SdaaqGMjJva7ii6bYv74IzPMo5pGebpu72ghypwTR+WWDuhQOkFijGyAzF3GXh11lEH0hkPINZivpTqLEtVm2j1hVcn/S0//q0es5dbyxOErxKivQ+bHotvzcT3/XztPf20XqG6fJZMePT2X6ts+nlm9LoSYHMiHuJjGXniB7v2fo/5qT4nuxYg6AAAAAASUVORK5CYII=);
	font-family: 'MinecraftiaRegular';
  	border-color: #AAA #565656 #565656 #AAA;
  	text-shadow: 3px 3px #4C4C4C;
  	outline: 2px solid #000;
}
  
.minecraft-btn:hover {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAAPCAMAAACMV5AuAAAAVFBMVEVtd7ZteLZverdwerdwe7hxfLhyfbl0frl1f7p2gLt4grx6hLx7hb18hr5+iL+AisCBi8GCjMGEjsKGkMOHkcSIksSKk8WLlMWLlcaMlcaNlsePmMdwBHmVAAAEjElEQVRIx1WW27YbKw5F3Ul2GYTWFAJX+pyd///PfgDsTg0/mSqQ1k08AEAeDkAA7kXyDAeyu2QCWREgCGSvAAbIE/D9U2m8Ji4Drw0CEhP7EMiqBFxmDMBEkHvd5AziDsjoCKQXddUl1nuZgMZrf0PMdj1kgNY+Ay+CJPg8kj1rR3X/GS9kxaoJVFaB6QkxIX5TBX65mpAZGQH3HaoCFMj6/GxuYgDyTsyup1hfxwxVN+F08ANGANyf8jqAPaBpranJvhxV+VV08JGPVScmcL8W4EIuAFWFHMZrUkUfNC3WtIsEaFogMWJRl839MES61w1cjMUsI1fb7GKaoENMOdFNykzXPz2mlwekkXjV4ioO9b15rZWZd4AaCL9cxdSutl8buIOUkd8JTgAy01IKoFoFPhAZr65SbDHgxFIGKi5IpLaKdlafAHxaVWDt2SSZ24LQhEx6aLGyj7RtELDLiA7EiD72ehBiQJo5oPq1nOQMYGAIYoY2AwIrImaA+25P8vZRa0KgqrjnQIaACiom/1G9Sla3GUHVLl/mMl/mxeUPGT0T5seAeeAQtF9WV2F7cX4niJ4DYmBd12oh7jymyRkBuq6M81mQuExHVv313beo9VH3ojfM2zZ8AkTG8X7EeDs6OZw+mrY7E5l/gqQJmZx+YySQAi1/dqQZy0as4FL1d7nrcfd1kjWTX1ZIYESTUCnuPZE7+anrqcxlz3diUX2HowHCf15S3AvxrnhRxeMwtQACGYGKZ7wGjNl7vH73MHdP8s/vSXM0FiRqMnPowfbjRsfe6n7nZ/FGIyfgF6+A/t1XTrcWB3Q42AxkMOfMfuJotRPgqGqFMfB8KO6eN+BEpO8F2eLZ18YO0GUdmEDcXMcNey+XuOfvP5P35guSVxAzWRYUpIoSuZiJrJ/p4zPouw0pwX+6XwpIcyNWEcJ/uf5Svuyx+ncTfhmotEhIBPe/8f961F/jI5aQfSs3WFOwChnZZxPk+HQjZu/WBuDFVwobZnoLISBOdkmNLFPE9iadiImsgTcdTDKA8dj1qBT518Xcg6+6L0Yl/nqCLeH+b46InkCSETTBzEQBRoPEwS9lKVUkpEx426M3oIMHYQLhK/B6jHvgXw6if4+YM4mlJdWDpLw4MhHgjwBZgIt+ZJdAVENOEkiv6mY4yy5nFPjnQmGfGVy0IqP+cmbsWF7Se/rT+5ZBzHPdKfajHW2ouWldPJaoTDJ3GUYTNMV/IyaiPYqQuX0VPXK+ra3Mc8c5Wlkp4D/e5S5htjXU3HnPPJsBXraRM/rSpOMX99zMoVradRl9AMxJdVPIYgf8Rhu0DvLM739A5rmjJ51QcW9SFXjcvR85oYOhSKTsd65pqdKWIV59ZO/7kKTDJLbvYw9XVRIyTXKJdfm4rOjE18yT8IHM/euZa0Z0fLvBSIh7h925QLoXR80WNfnqOHHP7Qk5aj+dTLX4E3hhIkafoGd15/IDT/lPTVSVr233dy6OkJtiLm0yBu+byeE2Yc59pVrDdKyPjxgD4h6r6vcFwpYNHMxVBaE2ApmfyTTjf5jQnWRymG7iAAAAAElFTkSuQmCC);
  	border-color: #BDC6FF #59639A #59639A #BDC6FF;
}
</style>