<template>
  <div class="flex flex-col justify-between min-h-screen">
    <page-title title="Connect" title-class="text-green-500" />
    <div class="flex flex-grow items-center min-h-full">
      <div class="w-3/5 flex flex-wrap justify-around mx-auto mb-20">
        <div
          v-for="(contact, index) in contacts"
          :key="index"
          class="w-full md:w-1/3 text-lg md:text-3xl font-semibold flex justify-center"
          data-aos="fade-up"
          :data-aos-delay="delayValue(index)"
        >
          <div
            class="flex justify-center items-center rounded-full p-4 transition duration-500 ease-in-out transform hover:shadow-xl hover:-translate-y-1 hover:scale-110 hover:text-gray-900"
            :class="contact.color"
          >
            <!-- eslint-disable-next-line -->
            <a :href="contact.link" target="_blank" v-html="contact.svg"> </a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="flex flex-grow-0 items-center justify-center text-gray-300 mb-10"
    >
      <div class="flex text-sm">
        <span data-aos="fade-up" data-aos-offset="1">Built with &nbsp;</span>
        <span data-aos="fade-down" data-aos-offset="1">
          <NuxtLogo />
        </span>
        <span data-aos="fade-up" data-aos-offset="1">
          &nbsp; &amp; &nbsp;
        </span>
        <span data-aos="fade-down" data-aos-offset="1">
          <TailwindLogo />
        </span>
      </div>
    </div> -->
  </div>
</template>

<script>
import mail from '~/assets/svg/mail.svg?raw'
import instagram from '~/assets/svg/instagram.svg?raw'
import linkedin from '~/assets/svg/linkedin.svg?raw'
// import NuxtLogo from '~/assets/svg/nuxt.svg?inline'
// import TailwindLogo from '~/assets/svg/tailwind.svg?inline'
import PageTitle from '~/components/partials/PageTitle'

export default {
  components: {
    PageTitle
    // NuxtLogo,
    // TailwindLogo
  },
  data() {
    return {
      contacts: [
        {
          name: 'Mail',
          svg: mail,
          link: 'mailto:abrardw2@gmail.com',
          color: 'text-purple-500 hover:bg-purple-500'
        },
        {
          name: 'Instagram',
          svg: instagram,
          link: 'https://www.instagram.com/abrar.codes/',
          color: 'text-pink-500 hover:bg-pink-500'
        },
        {
          name: 'LinkedIn',
          svg: linkedin,
          link: 'https://www.linkedin.com/in/abrardw/',
          color: 'text-blue-500 hover:bg-blue-500'
        }
      ]
    }
  },
  methods: {
    delayValue(a) {
      return 100 + 100 * a
    }
  }
}
</script>

<style></style>
