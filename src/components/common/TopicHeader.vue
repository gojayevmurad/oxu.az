<template>
  <div class="bg-[#222]">
    <div class="container flex justify-between items-center h-[45px] text-white font-oxu relative">
      <!-- MAIN TOPICS -->
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
      <!-- SECOND TOPICS -->
      <button class="w-[18px] h-full flex justify-center items-center" @click="toggleMenu">
        <div
          :class="[
            'cursor-pointer transition-all before:transition-all after:transition-all  w-full h-1 relative before:absolute after:absolute before:w-full after:w-full before:h-1 after:h-1  before:left-0 after:left-0 after:bg-white before:bg-white',
            {
              'before:rotate-45 after:-rotate-45 before:top-0 after:top-0 bg-transparent':
                isMenuOpen
            },
            {
              'before:rotate-0 after:rotate-0 before:-top-2 after:-bottom-2 bg-white': !isMenuOpen
            }
          ]"
        ></div>
      </button>
      <!-- SECOND TOPICS MENU-->
      <Transition
        enter-active-class="transition-all duration-300 ease-in-out"
        leave-active-class="transition-all duration-300 ease-in-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          class="w-[220px] absolute z-30 bg-white shadow-lg shadow-gray-600 right-0 top-[calc(100%-10px)] text-black flex flex-col py-6 px-[10px]"
          v-show="isMenuOpen"
        >
          <RouterLink
            :to="topic.slug"
            v-for="topic in secondaryTopics"
            :key="topic.name"
            class="h-[24px] mb-[18px] text-[20px] px-[10px]"
            @click="toggleMenu"
          >
            {{ topic.name.toUpperCase() }}
          </RouterLink>
        </div>
      </Transition>
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
  },
  {
    name: 'Formula 1',
    slug: '/formula-1'
  }
])

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value)
</script>
