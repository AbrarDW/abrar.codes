<template>
  <nav
    class="flex items-start justify-between flex-wrap h-20 md:h-auto mt-5 md:mt-10 mb-5"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span
        class="font-semibold text-xl md:text-2xl tracking-tight text-blue-400"
      >
        Abrar Dhalwala
      </span>
    </div>
    <div class="block md:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-blue-400 border-blue-400 hover:text-white hover:border-white"
        @click="showMenu = !showMenu"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class="w-full md:flex md:items-center md:w-auto"
      :class="{
        hidden: !showMenu
      }"
    >
      <div class="md:flex-grow text-base md:text-xl text-right md:text-left">
        <a
          v-for="(menu, index) in menuLinks"
          :key="index"
          v-scroll-to="menu.link"
          href="#"
          class="block mt-2 md:inline-block md:mt-0 md:mr-10 last:mr-0 md:text-gray-300"
          :class="menu.color"
          @click="showMenu = false"
        >
          {{ menu.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { WORKS_IN_PAGE_ID, ABOUT_PAGE_ID, CONNECT_PAGE_ID } from '~/constant'

export default {
  data() {
    return {
      showMenu: false,
      menuLinks: [
        {
          name: 'Skills',
          link: `#${WORKS_IN_PAGE_ID}`,
          color: 'hover:text-yellow-400 text-yellow-400'
        },
        {
          name: 'About',
          link: `#${ABOUT_PAGE_ID}`,
          color: 'hover:text-pink-400 text-pink-400'
        },
        {
          name: 'Connect',
          link: `#${CONNECT_PAGE_ID}`,
          color: 'hover:text-green-400 text-green-400'
        }
      ]
    }
  }
}
</script>

<style></style>
