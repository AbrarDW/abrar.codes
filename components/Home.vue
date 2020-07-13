<template>
  <div class="flex flex-col justify-between min-h-screen">
    <the-header
      data-aos="fade-down"
      data-aos-delay="700"
      data-aos-once="true"
    />
    <div class="md:self-start sm:self-center md:mt-20" data-aos="fade-right">
      <div class="text-3xl md:text-6xl text-purple-600 font-black">
        Hey, I‘m Abrar.
      </div>
      <p class="text-xl md:text-3xl mt-4 text-gray-300 font-normal">
        Web developer from Vadodara, India.
        <br />I create easy to use web applications and websites.
      </p>
    </div>
    <div
      class="md:self-end sm:self-center mb-20"
      data-aos="fade-left"
      data-aos-offset="200"
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
  </div>
</template>

<script>
import TheHeader from '~/components/partials/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>

<style></style>
