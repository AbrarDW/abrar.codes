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
            <a :href="contact.link" target="_blank" v-html="contact.svg"></a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-grow-0 items-center justify-center text-gray-300 mb-10"
    >
      <div class="flex text-sm">
        <span data-aos="fade-up" data-aos-offset="1">Built with &nbsp;</span>
        <span data-aos="fade-down" data-aos-offset="1">
          <svg
            class="fill-current h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
          >
            <title>Nuxt JS</title>
            <g fill-rule="nonzero" transform="translate(0 50)" fill="none">
              <path
                d="M227.92099 83.45116l-13.6889 24.10141-46.8148-82.44693L23.7037 278.17052h97.3037c0 13.31084 10.61252 24.10142 23.70371 24.10142H23.70371c-8.46771 0-16.29145-4.59601-20.5246-12.05272-4.23315-7.4567-4.23272-16.64312.00114-24.0994L146.89383 13.05492c4.23415-7.45738 12.0596-12.05138 20.5284-12.05138 8.46878 0 16.29423 4.594 20.52839 12.05138l39.97037 70.39623z"
                fill="#00C58E"
              />
              <path
                d="M331.6642 266.11981l-90.05432-158.56724-13.6889-24.10141-13.68888 24.10141-90.04445 158.56724c-4.23385 7.45629-4.23428 16.64271-.00113 24.09941 4.23314 7.4567 12.05689 12.05272 20.5246 12.05272h166.4c8.46946 0 16.29644-4.591 20.532-12.04837 4.23555-7.45736 4.23606-16.64592.00132-24.10376h.01976zM144.7111 278.17052L227.921 131.65399l83.19012 146.51653h-166.4z"
                fill="#FFF"
              />
              <path
                d="M396.04938 290.22123c-4.23344 7.45557-12.05656 12.0507-20.52345 12.0507H311.1111c13.0912 0 23.7037-10.79057 23.7037-24.10141h40.66173L260.09877 74.98553l-18.4889 32.56704L227.921 83.45116l11.65432-20.51634c4.23416-7.45738 12.0596-12.05138 20.5284-12.05138 8.46879 0 16.29423 4.594 20.52839 12.05138l115.41728 203.185c4.23426 7.457 4.23426 16.6444 0 24.1014z"
                fill="#108775"
              />
            </g>
          </svg>
        </span>
        <span data-aos="fade-up" data-aos-offset="1">
          &nbsp; &amp; &nbsp;
        </span>
        <span data-aos="fade-down" data-aos-offset="1">
          <svg
            class="fill-current h-6 w-6 text-teal-500"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Tailwind CSS</title>
            <path
              d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '~/components/partials/PageTitle'

export default {
  components: {
    PageTitle
  },
  data() {
    return {
      contacts: [
        {
          name: 'Mail',
          svg:
            '<svg class="h-12 w-12 md:h-16 md:w-16 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1.574 5.286l7.5 4.029c.252.135.578.199.906.199.328 0 .654-.064.906-.199l7.5-4.029c.489-.263.951-1.286.054-1.286H1.521c-.897 0-.435 1.023.053 1.286zm17.039 2.203l-7.727 4.027c-.34.178-.578.199-.906.199s-.566-.021-.906-.199-7.133-3.739-7.688-4.028C.996 7.284 1 7.523 1 7.707V15c0 .42.566 1 1 1h16c.434 0 1-.58 1-1V7.708c0-.184.004-.423-.387-.219z"/></svg>',
          link: 'mailto:abrardw2@gmail.com',
          color: 'text-purple-500 hover:bg-purple-500'
        },
        {
          name: 'Insagram',
          svg:
            '<svg class="h-12 w-12 md:h-16 md:w-16 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M17.946 5.29a6.606 6.606 0 00-.418-2.185 4.412 4.412 0 00-1.039-1.594A4.412 4.412 0 0014.895.472a6.606 6.606 0 00-2.184-.418C11.75.01 11.444 0 9 0S6.25.01 5.29.054a6.606 6.606 0 00-2.185.418A4.412 4.412 0 001.51 1.511 4.412 4.412 0 00.472 3.105a6.606 6.606 0 00-.418 2.184C.01 6.25 0 6.556 0 9s.01 2.75.054 3.71a6.606 6.606 0 00.418 2.185 4.412 4.412 0 001.039 1.594 4.411 4.411 0 001.594 1.039 6.606 6.606 0 002.184.418C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054a6.606 6.606 0 002.185-.418 4.602 4.602 0 002.633-2.633 6.606 6.606 0 00.418-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71zm-1.62 7.347a4.978 4.978 0 01-.31 1.67 2.98 2.98 0 01-1.708 1.709 4.979 4.979 0 01-1.671.31c-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052a4.979 4.979 0 01-1.67-.31 2.788 2.788 0 01-1.036-.673 2.788 2.788 0 01-.673-1.035 4.978 4.978 0 01-.31-1.671c-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637a4.979 4.979 0 01.31-1.67 2.788 2.788 0 01.673-1.036 2.788 2.788 0 011.035-.673 4.979 4.979 0 011.671-.31c.95-.043 1.234-.052 3.637-.052s2.688.009 3.637.052a4.979 4.979 0 011.67.31 2.788 2.788 0 011.036.673 2.788 2.788 0 01.673 1.035 4.979 4.979 0 01.31 1.671c.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637zM9 4.378A4.622 4.622 0 1013.622 9 4.622 4.622 0 009 4.378zM9 12a3 3 0 113-3 3 3 0 01-3 3zm5.884-7.804a1.08 1.08 0 11-1.08-1.08 1.08 1.08 0 011.08 1.08z"/></svg>',
          link: 'https://www.instagram.com/abrar.codes/',
          color: 'text-pink-500 hover:bg-pink-500'
        },
        {
          name: 'LinkedIn',
          svg:
            '<svg class="h-12 w-12 md:h-16 md:w-16 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 6h4v13H1V6zm2-5C1.8 1 1 2 1 3.1 1 4.1 1.8 5 3 5c1.3 0 2-.9 2-2s-.8-2-2-2zm11.6 5.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z"/></svg>',
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
