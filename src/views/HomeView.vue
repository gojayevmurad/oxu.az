<template>
  <main>
    <div class="container">
      <div class="w-[620px] mt-5">
        <MainSwiperVue :swiper-data="swiperData" />
      </div>
    </div>
    <div class="container">
      <div class="grid grid-cols-3 h-2 mt-4 gap-y-3">
        <NewsItem
          v-for="newsItemData in swiperData"
          :newsItem="newsItemData"
          :key="newsItemData.id"
        />
        <NewsItem
          v-for="newsItemData in swiperData"
          :newsItem="newsItemData"
          :key="newsItemData.id"
        />
        <NewsItem
          v-for="newsItemData in swiperData"
          :newsItem="newsItemData"
          :key="newsItemData.id"
        />
        <NewsItem
          v-for="newsItemData in swiperData"
          :newsItem="newsItemData"
          :key="newsItemData.id"
        />
        <NewsItem
          v-for="newsItemData in swiperData"
          :newsItem="newsItemData"
          :key="newsItemData.id"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import MainSwiperVue from '../components/Home/MainSwiper.vue'
import { getNews } from '../api/news'
import { onMounted, ref } from 'vue'
import NewsItem from '../components/common/NewsItem.vue'
import type { INewsItem } from '../types/news'

const swiperData = ref<INewsItem[]>([])

onMounted(async () => {
  const data: unknown = await getNews()
  swiperData.value = data as never[]
})
</script>
