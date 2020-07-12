<template>
  <div class="flex justify-center" data-aos="fade-down">
    <div class="text-3xl md:text-6xl font-black mt-10 mb-5" :class="titleClass">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    titleClass: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
