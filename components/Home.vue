<template>
  <div class="flex flex-col justify-between min-h-screen">
    <the-header data-aos="fade-down" data-aos-delay="700" />
    <div
      class="md:self-start sm:self-center md:mt-20 text-center md:text-left"
      data-aos="fade-right"
    >
      <div class="text-3xl md:text-6xl text-purple-600 font-black">
        Hey, I‘m Abrar.
      </div>
      <p class="text-lg md:text-3xl mt-4 text-gray-300 font-normal">
        A full-stack web developer from India based in UAE.
        <br />I create easy to use web applications and websites.
      </p>
    </div>
    <div
      class="md:self-end sm:self-center"
      :class="{
        'mb-20': nextId === ''
      }"
      data-aos="fade-left"
      data-aos-offset="50"
      data-aos-once="true"
      data-aos-delay="300"
    >
      <div class="max-w-sm overflow-hidden">
        <img
          class="h-48 md:h-64 w-full object-contain"
          src="~assets/images/PinClipart.com_vexed-clipart_3334460.png"
          alt
        />
      </div>
    </div>
    <next-button v-if="nextId" :to-id="nextId" />
  </div>
</template>

<script>
import TheHeader from '~/components/partials/TheHeader'
import NextButton from '~/components/partials/NextButton'

export default {
  components: {
    TheHeader,
    NextButton
  },
  props: {
    nextId: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
