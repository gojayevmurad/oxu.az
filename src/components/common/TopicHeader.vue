<template>
  <div class="bg-[#222]">
    <div class="container flex justify-between items-center h-[45px] text-white font-oxu">
      <div class="flex justify-start items-center gap-1 h-full">
        <RouterLink
          :to="topic.slug"
          v-for="topic in mainTopics"
          :key="topic.slug"
          :class="[
            'text-[20px] px-3 h-full leading-[45px] hover:bg-[#333]',
            { 'bg-[#333]': route.path === topic.slug }
          ]"
        >
          {{ topic.name }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isMenuOpen = ref(false)

const mainTopics = ref([
  {
    name: 'Baş səhifə',
    slug: '/'
  },
  {
    name: 'Siyasət',
    slug: '/politics'
  },
  {
    name: 'İqtisadiyyat',
    slug: '/economy'
  },
  {
    name: 'Cəmiyyət',
    slug: '/society'
  },
  {
    name: 'Şou-biznes',
    slug: '/showbiz'
  },
  {
    name: 'Müharibə',
    slug: '/war'
  },
  {
    name: 'İdman',
    slug: '/sport'
  },
  {
    name: 'Kriminal',
    slug: '/criminal'
  },
  {
    name: 'Mədəniyyət',
    slug: '/culture'
  }
])

const secondaryTopics = ref([
  {
    name: 'Dünya',
    slug: '/world'
  },
  {
    name: 'Avto-Moto',
    slug: '/auto-moto'
  },
  {
    name: 'İKT',
    slug: '/ict'
  },
  {
    name: 'Turizm',
    slug: '/turism'
  },
  {
    name: 'Maraqlı',
    slug: '/interesting'
  },
  {
    name: 'Müsahibə',
    slug: '/interview'
  },
  {
    name: 'BAKU TV',
    slug: '/baku-tv'
  },
  {
    name: 'CINEMAPLUS',
    slug: '/cinema-plus'
  },
  {
    name: 'Ramazan 2023',
    slug: '/ramazan-2023'
  }
])
</script>
