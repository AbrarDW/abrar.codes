<template>
  <div class="flex flex-col justify-between min-h-screen">
    <page-title title="About" title-class="text-pink-500" />
    <div class="flex flex-grow items-center min-h-full">
      <div
        class="w-full md:w-4/5 flex flex-wrap justify-around mx-auto"
        :class="{
          'md:mb-20': nextId === '',
          'mb-10': nextId === ''
        }"
      >
        <div
          class="w-full text-base md:text-2xl font-semibold text-gray-300 text-center md:text-left"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="300"
        >
          Hi, I am <span class="text-blue-400">Abrar Dhalwala</span> based in
          Vadodara, India. I am a
          <span class="text-yellow-400">full-stack web developer</span> since
          August, 2015. Currently, I have a full-time commitment at Aecor
          Digital.
          <br />
          <br />
          My goal as a web professional has always been to create a more usable
          and elegant products for the clients. My experience and knowledge
          provide me the capability to handle and deliver tasks in efficient yet
          beautiful way.
          <br />
          <br />
          I prefer to keep learning, continue challenging myself, and do
          interesting things that matter. I’m a fast learner, able to pick up
          new skills and juggle.
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
  }
}
</script>

<style></style>
