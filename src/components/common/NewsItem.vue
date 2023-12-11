<template>
  <div class="w-[300px] bg-white font-oxu border shadow-gray-950 hover:shadow-2xl">
    <RouterLink :to="'news/' + newsItem.id">
      <div class="relative w-full">
        <img :src="newsItem.img" alt="" />
        <div class="absolute top-0 left-0 w-[51px]">
          <div
            class="bg-[#2f9fa9c2] flex items-center justify-center flex-col text-center text-white font-bold line text-[18px]"
          >
            11
            <p>Dek</p>
          </div>
          <div class="bg-[#3f506dc2] text-white">
            <p class="text-center">16:08</p>
          </div>
        </div>
      </div>
      <div class="px-6 pb-8 pt-4">
        <p class="text-2xl text-blue-900">
          {{ newsItem.title }}
        </p>
      </div>
    </RouterLink>
    <div class="w-full border-t-2 border-t-gray-300 bg-[#f2f2f2] h-8 grid grid-cols-3">
      <div
        class="h-full flex justify-center items-center gap-1 hover:bg-green-500 group cursor-pointer border-r border-r-gray-300"
      >
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          class="fill-[#999] group-hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"
          />
        </svg>
        <p class="leading-[1] group-hover:text-white">{{ newsItem.like }}</p>
      </div>
      <div
        class="group h-full flex justify-center items-center gap-1 hover:bg-red-500 cursor-pointer border-r border-r-gray-300"
      >
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          class="fill-[#999] rotate-180 group-hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"
          />
        </svg>
        <p class="leading-[1] group-hover:text-white">{{ newsItem.dislike }}</p>
      </div>
      <div class="h-full flex justify-center items-center">
        <svg
          height="24"
          id="Layer_1"
          style="enable-background: new 0 0 512 512"
          version="1.1"
          viewBox="0 0 512 512"
          width="24"
          class="fill-[#999]"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <path
              d="M447.1,256.2C401.8,204,339.2,144,256,144c-33.6,0-64.4,9.5-96.9,29.8C131.7,191,103.6,215.2,65,255l-1,1l6.7,6.9   C125.8,319.3,173.4,368,256,368c36.5,0,71.9-11.9,108.2-36.4c30.9-20.9,57.2-47.4,78.3-68.8l5.5-5.5L447.1,256.2z M256,336   c-44.1,0-80-35.9-80-80c0-44.1,35.9-80,80-80c44.1,0,80,35.9,80,80C336,300.1,300.1,336,256,336z"
            />
            <path
              d="M250.4,226.8c0-6.9,2-13.4,5.5-18.8c-26.5,0-47.9,21.6-47.9,48.2c0,26.6,21.5,48.1,47.9,48.1s48-21.5,48-48.1v0   c-5.4,3.5-11.9,5.5-18.8,5.5C266,261.6,250.4,246,250.4,226.8z"
            />
          </g>
        </svg>
        <p class="leading-[1] group-hover:text-white">12</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type { INewsItem } from '../../types/news'

const { newsItem } = defineProps({
  newsItem: {
    type: Object as PropType<INewsItem>,
    required: true
  }
})
</script>
