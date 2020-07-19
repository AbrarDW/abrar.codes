<template>
  <div class="container mx-auto px-8 xl:px-0">
    <home :next-id="worksInId" />
    <works-in :id="worksInId" :next-id="aboutId" />
    <about :id="aboutId" :next-id="connectId" />
    <contact :id="connectId" />
    <back-to-top bottom="50px" right="40px">
      <button
        type="button"
        class="text-blue-400 rounded-full bg-gray-800 h-10 w-10 p-2 md:h-16 md:w-16 md:p-4"
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
import Contact from '~/components/Contact'
import { WORKS_IN_PAGE_ID, ABOUT_PAGE_ID, CONNECT_PAGE_ID } from '~/constant'

export default {
  components: {
    Home,
    WorksIn,
    About,
    Contact,
    BackToTop
  },
  data() {
    return {
      worksInId: WORKS_IN_PAGE_ID,
      aboutId: ABOUT_PAGE_ID,
      connectId: CONNECT_PAGE_ID
    }
  }
}
</script>

<style></style>
