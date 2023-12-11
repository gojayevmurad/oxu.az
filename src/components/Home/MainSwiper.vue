<template>
  <div class="w-full relative">
    <swiper
      :modules="[Navigation]"
      :navigation="true"
      :loop="true"
      :slides-per-view="1"
      :space-between="50"
      style="
        --swiper-navigation-top-offset: 50%;
        --swiper-navigation-sides-offset: 10px;
        --swiper-navigation-color: #fff;
      "
    >
      <swiper-slide v-for="(data, index) in swiperData" :key="index" class="relative">
        <RouterLink :to="'news/' + data.id">
          <img :src="data.img" />
          <div class="absolute bottom-0 w-full left-0 h-[100px] flex flex-col justify-end">
            <div class="bg-blue-900 w-max px-3 text-white font-oxu">
              <p>11 Dek 12:08</p>
            </div>
            <div class="bg-black text-white font-oxu text-3xl px-3 py-3">
              <p>{{ data.title }}</p>
            </div>
          </div>
        </RouterLink>
      </swiper-slide>
    </swiper>
    <!-- <div class="absolute w-10 h-10 z-20 top-1/2 left-4 cursor-pointer">
      <svg
        height="40px"
        id="Layer_1"
        style="enable-background: new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        width="40px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9  c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8  L213.7,256z"
        />
      </svg>
    </div>
    <div class="absolute w-10 h-10 z-20 top-1/2 right-4 cursor-pointer">
      <svg
        height="40px"
        id="Layer_1"
        style="enable-background: new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        width="40px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="rotate-180"
      >
        <path
          d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9  c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8  L213.7,256z"
        />
      </svg>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { INewsItem } from '../../types/news'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import type { PropType } from 'vue'

import 'swiper/css/navigation'
import 'swiper/css'

defineProps({
  swiperData: {
    type: Array as PropType<INewsItem[]>,
    required: true
  }
})
</script>
