<template>
  <div class="container mx-auto px-8 xl:px-0">
    <home />
    <works-in />
    <about />
    <back-to-top bottom="50px" right="50px">
      <button
        type="button"
        class="btn-to-top text-white rounded-full bg-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="fill-current"
        >
          <path
            d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"
          />
        </svg>
      </button>
    </back-to-top>
  </div>
</template>

<script>
import BackToTop from 'vue-backtotop'
import Home from '~/components/Home'
import WorksIn from '~/components/WorksIn'
import About from '~/components/About'

export default {
  components: {
    Home,
    WorksIn,
    About,
    BackToTop
  }
}
</script>

<style>
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
</style>
