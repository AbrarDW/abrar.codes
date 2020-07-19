<template>
  <div
    class="next-btn self-center mb-12"
    data-aos="fade-down"
    data-aos-delay="500"
    data-aos-offset="1"
  >
    <button
      v-scroll-to="`#${toId}`"
      type="button"
      class="text-blue-400 rounded-full h-10 w-10 p-2 md:h-16 md:w-16 md:p-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        class="fill-current"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    toId: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>
