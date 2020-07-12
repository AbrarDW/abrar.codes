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
          data-aos="fade-up"
          data-aos-offset="200"
          :data-aos-delay="delayValue(index)"
        >
          <div
            class="h-12 w-12 md:h-20 md:w-20 work-item flex items-center rounded-lg dark:bg-gray-800 p-2 cursor-default transition-all duration-1000 ease-in-out transform hover:shadow-xl hover:m-0 hover:w-3/4 hover:justify-center"
          >
            <div class="ml-4 md:ml-8 work-item-inner">
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
          color: 'text-teal-500'
        },
        {
          name: 'Laravel',
          color: 'text-red-500'
        },
        {
          name: 'Angular',
          color: 'text-red-500'
        },
        {
          name: 'Vue',
          color: 'text-green-500'
        },
        {
          name: 'Nuxt',
          color: 'text-green-500'
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

<style scoped>
.work-item .work-item-inner {
  pointer-events: none;
  transition: margin 1.5s;
  transition-timing-function: ease-in-out;
}

.work-item:hover .work-item-inner {
  margin-left: 0px;
}
</style>
