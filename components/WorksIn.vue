<template>
  <div class="flex flex-col justify-between min-h-screen">
    <page-title title="Works In" title-class="text-yellow-500" />
    <div class="flex flex-grow items-center min-h-full">
      <div
        class="w-3/5 md:w-4/5 flex flex-wrap justify-evenly mx-auto"
        :class="{
          'mb-20': nextId === ''
        }"
      >
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
    <next-button v-if="nextId" :to-id="nextId" />
  </div>
</template>

<script>
import PageTitle from '~/components/partials/PageTitle'
import NextButton from '~/components/partials/NextButton'

export default {
  components: {
    PageTitle,
    NextButton
  },
  props: {
    nextId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      languages: [
        {
          name: 'NestJS',
          color: 'text-nest',
          hoverColor: 'hover:bg-nest hover:text-gray-800'
        },
        {
          name: 'Vue',
          color: 'text-vue',
          hoverColor: 'hover:bg-vue hover:text-gray-800'
        },
        {
          name: 'Laravel',
          color: 'text-laravel',
          hoverColor: 'hover:bg-laravel hover:text-gray-800'
        },
        {
          name: 'Angular',
          color: 'text-angular',
          hoverColor: 'hover:bg-angular hover:text-gray-800'
        },
        {
          name: 'MySQL',
          color: 'text-mysql',
          hoverColor: 'hover:bg-mysql hover:text-gray-800'
        },
        {
          name: 'MongoDB',
          color: 'text-mongo',
          hoverColor: 'hover:bg-mongo hover:text-gray-800'
        },
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

<style></style>
