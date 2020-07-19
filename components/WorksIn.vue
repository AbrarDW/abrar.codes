<template>
  <div id="works-in" class="flex flex-col justify-between min-h-screen">
    <page-title title="Works In" title-class="text-yellow-500" />
    <div class="flex flex-grow items-center min-h-full">
      <div class="w-3/5 md:w-4/5 flex flex-wrap justify-around mx-auto mb-20">
        <div
          v-for="(language, index) in languages"
          :key="language.name"
          class="w-full md:w-1/3 text-lg md:text-3xl font-semibold mb-5 md:mb-10 flex justify-center"
          :class="language.color"
        >
          <div
            class="h-12 w-12 md:h-20 md:w-20 work-item flex items-center rounded-lg bg-gray-800 p-2 cursor-default transform hover:shadow-xl hover:m-0 hover:w-3/4 hover:justify-center"
            :class="language.hoverColor"
            data-aos="fade-up"
            data-aos-offset="100"
            :data-aos-delay="delayValue1(index)"
          >
            <div
              class="ml-4 md:ml-8 work-item-inner"
              data-aos="fade-left"
              data-aos-offset="100"
              :data-aos-delay="delayValue2(index)"
            >
              {{ language.name }}
            </div>
          </div>
        </div>
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
      languages: [
        {
          name: 'PHP',
          color: 'text-php',
          hoverColor: 'hover:bg-php hover:text-gray-800'
        },
        {
          name: 'Laravel',
          color: 'text-laravel',
          hoverColor: 'hover:bg-laravel hover:text-gray-800'
        },
        {
          name: 'Javascript',
          color: 'text-javascript',
          hoverColor: 'hover:bg-javascript hover:text-gray-800'
        },
        {
          name: 'Angular',
          color: 'text-angular',
          hoverColor: 'hover:bg-angular hover:text-gray-800'
        },
        {
          name: 'Vue',
          color: 'text-vue',
          hoverColor: 'hover:bg-vue hover:text-gray-800'
        }
      ]
    }
  },
  methods: {
    delayValue1(a) {
      return 100 + 100 * a
    },
    delayValue2(a) {
      return 500 + 100 * a
    }
  }
}
</script>

<style scoped>
/* Tailwind and AOS library property conflict resolve */
.work-item {
  transition: transform 1s ease 0.3s, opacity 1s ease 0.3s,
    background-color 0.5s ease-in-out, color 0.5s ease-in-out,
    box-shadow 0.5s ease-in-out, width 0.5s ease-in-out,
    margin 0.5s ease-in-out 0.5s !important;
}

.work-item .work-item-inner {
  pointer-events: none;
  transition: opacity 1s, transform 1s, margin 1.5s !important;
  transition-timing-function: ease-in-out;
}

.work-item:hover .work-item-inner {
  margin-left: 0px;
}
</style>
