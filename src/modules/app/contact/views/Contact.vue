<template>
  <div class="py-60 lg:py-20 bg-white dark:bg-gray-900">
    <div class="relative">

      <div class="flex justify-center items-center h-screen">
        <div class="container mx-auto my-4 px-4 lg:px-20">

          <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-zinc-200">
            <div class="py-10">
              <h1 class="font-extrabold leading-10 tracking-tight text-left text-gray-900 sm:leading-none text-4xl sm:text-5xl md:text-6xl lg:text-5xl">
                <span class="inline md:block dark:text-dark-200">Bizimle iletişime geç! <span>👇</span> </span>
                <span class="relative py-3 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block"> Aklına takılan soruları, istek ve öneriler için </span>
              </h1>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="İsim" v-model="model.name" />
              <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Soy isim" v-model="model.surname" />
            </div>
            <input class="w-full bg-gray-100 text-gray-900 mt-4 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder="Mail adres" v-model="model.email" />

            <div class="my-2">
              <textarea placeholder="Mesajın" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" v-model="model.message"></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4">
              <button class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600" @click="postContact(model)">Gönder</button>
            </div>
          </div>

          <div class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 mb-20 ml-auto bg-indigo-600 rounded-2xl">
            <div class="flex flex-col text-white">
              <h1 class="font-bold uppercase text-4xl my-4">Ya da</h1>
              <p class="text-gray-200">Mail atarak, sosyal medya hesaplarımızla bize ulaşabilirsiniz</p>

              <div class="flex my-4 w-2/3 lg:w-1/2">
                <div class="flex flex-col">
                  <i class="fa-solid fa-at pt-2 pr-2"></i>
                </div>
                <div class="flex flex-col">
                  <h2 class="text-2xl">E-posta</h2>
                  <p class="text-gray-200">shorproduction@gmail.com</p>
                </div>
              </div>

              <div class="flex my-4 w-2/3 lg:w-1/2">
                <div class="flex flex-col">
                  <i class="fa-solid fa-paper-plane pt-2 pr-2"></i>
                </div>
                <div class="flex flex-col">
                  <h2 class="text-2xl">Sosyal Medya</h2>
                  <p class="text-gray-200"><i class="fa-brands fa-instagram"></i> - <a href="https://www.instagram.com/soundaiir/" target="_blank">@soundaiir</a></p>
                  <p class="text-gray-200"><i class="fa-brands fa-twitter"></i> - <a href="https://twitter.com/SoundAiir" target="_blank">@SoundAiir</a></p>
                </div>
              </div>

              <div class="flex my-4 w-2/3 lg:w-1/2">
                <a href="https://www.instagram.com/soundaiir/" target="_blank" rel="noreferrer" class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i class="fa-brands fa-instagram text-blue-900"></i>
                </a>
                <a href="https://twitter.com/SoundAiir" target="_blank" rel="noreferrer" class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i class="fa-brands fa-twitter text-blue-900"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { notify } from '../../../../core/alerts/alerts.service';

export default {
  name: 'Contact',

  data() {
    return {
      model: {
        name: '',
        surname: '',
        email: '',
        message: '',
      }
    };
  },

  methods: {
    ...mapActions('Contact', ['postContact']),

    async contactButton(data) {
      notify('sa')

      try {
        await this.postContact({
          contactName: data.name + data.surname,
          contactMail: data.email,
          contactDescription: data.message,
          contactAcceptFeedback: true,
        });
      } catch (e) {
        notify('sa')
      }
    },

  },

};
</script>

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
