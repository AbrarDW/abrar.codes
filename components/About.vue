<template>
  <div id="about" class="flex flex-col justify-between min-h-screen">
    <page-title title="About" title-class="text-pink-500" />
    <div class="flex flex-1 items-center min-h-full">
      <div class="w-3/4 flex flex-wrap justify-around mx-auto">
        <div
          class="w-full text-lg md:text-2xl font-semibold mb-5 dark:text-gray-300 text-center md:text-left"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="300"
        >
          Hi, I am Abrar Dhalwala based in Vadodara, India. I am a full-stack
          web developer since August, 2015. Currently, I have a full-time
          commitment at Aecor Digital.
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
          new skills and juggle
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
  }
}
</script>

<style></style>
