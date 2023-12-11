<template>
  <div>
    <div class="container mt-6 grid grid-cols-[2fr_1fr]">
      <div>
        <h1 class="text-5xl font-oxu text-[#13317f]">{{ newsItem?.title }}</h1>
        <img :src="newsItem?.img" alt="" />
        <div class="flex items-center justify-between font-oxu h-[40px] my-2">
          <div class="text-[20px] flex h-full">
            <p class="px-[15px] bg-[#1894a0] text-white flex justify-center items-center">
              11 Dek, 2023
            </p>
            <p class="px-[15px] bg-[#475773] text-white flex justify-center items-center">16:41</p>
          </div>
          <div
            class="border bg-[#F2F2F2] flex gap-1 h-full justify-center items-center px-4 text-[#757575]"
          >
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
            <p>221</p>
          </div>
          <div class="flex min-w-[30%] border h-full">
            <div
              class="w-1/2 flex justify-center items-center gap-1 h-full text-[#757575] bg-[#f7f7f7] border-r"
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
              <p class="leading-[1] group-hover:text-white">{{ newsItem?.like }}</p>
            </div>
            <div
              class="w-1/2 flex justify-center items-center gap-1 h-full text-[#757575] bg-[#f7f7f7]"
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
              <p class="leading-[1] group-hover:text-white">{{ newsItem?.dislike }}</p>
            </div>
          </div>
          <div class="flex justify-center items-center border">
            <p class="px-[10px] h-full text-[#777777] border-r text-xl">A <sup>-</sup></p>
            <p class="px-[10px] h-full text-[#777777] text-3xl">A <sup class="text-xl">+</sup></p>
          </div>
        </div>
        <p>{{ newsItem?.content.slice(0, 500) }}</p>
        <br />
        <p>{{ newsItem?.content.slice(500) }}</p>
      </div>
      <div>
        <img src="@/assets/images/karabagh.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { getNewsById } from '@/api/news'
import type { INewsItem } from '@/types/news'

const route = useRoute()

const newsItem = ref<INewsItem>()

onMounted(async () => {
  const data = (await getNewsById(route.params.id.toString())) as unknown
  newsItem.value = data as INewsItem
})
</script>
