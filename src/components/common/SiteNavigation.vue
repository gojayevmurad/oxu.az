<template>
  <div class="bg-[url('@/assets/sitenavigationbg.webp')] h-[45px] text-white flex items-center">
    <div class="container flex justify-between items-center font-oxu">
      <!-- LOGO -->
      <div class="flex justify-center items-center gap-1">
        <p class="text-[32px] leading-[32px] font-oxu">oxu.az</p>
        <img src="@/assets/icons/icon.webp" width="32" height="32" alt="logo" />
      </div>
      <!-- NAVIGATION -->
      <div class="flex items-center gap-3 justify-center">
        <div class="flex justify-center items-center gap-3">
          <RouterLink
            :to="route.path"
            v-for="(route, index) in routes"
            :key="index"
            class="leading-[0.8] border-b-white border-b-2"
          >
            {{ route.name }}
          </RouterLink>
        </div>
        <div class="flex justify-center items-center gap-3">
          <a href="">
            <img src="@/assets/icons/facebook.png" width="20" alt="" />
          </a>
          <a href="">
            <img src="@/assets/icons/twitter.png" width="20" alt="" />
          </a>
        </div>
        <div class="h-full relative border-gray-500 border">
          <input
            class="text-white outline-none pr-7 pl-1 bg-transparent"
            placeholder="Axtarış"
            type="search"
          />
          <button class="absolute right-1 h-full">
            <svg
              data-name="Livello 1"
              id="Livello_1"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
              class="h-full py-[2px]"
              fill="#fff"
            >
              <title />
              <path
                d="M127.11,122.87l-48.45-48A45,45,0,0,0,45,0,44.7,44.7,0,0,0,13.18,13.18h0A45,45,0,0,0,45,90,44.65,44.65,0,0,0,74.38,79.07l48.51,48.06a3,3,0,1,0,4.22-4.26ZM17.42,72.58a39,39,0,0,1,0-55.15h0A39,39,0,1,1,72.58,72.58a39,39,0,0,1-55.15,0Z"
              />
            </svg>
          </button>
        </div>
        <div class="cursor-pointer">
          <p class="border-b-white border-b-2 leading-[0.8]">RU</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const routes = ref([
  {
    name: 'Haqqımızda',
    path: '/about'
  },
  {
    name: 'Reklam',
    path: '/ads'
  }
])
</script>
