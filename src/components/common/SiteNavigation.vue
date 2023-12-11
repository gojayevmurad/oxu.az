<template>
  <div
    :class="[
      'bg-[url(\'@/assets/sitenavigationbg.webp\')] h-[45px] text-white flex items-center transition duration-300',
      scrolled && 'fixed top-0 w-full z-50'
    ]"
  >
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
          <div>
            <input
              class="text-white outline-none pr-7 pl-1 bg-transparent"
              placeholder="Axtarış"
              type="search"
              v-model="searchInput"
              @input="handleInput"
            />
            <Transition
              enter-active-class="transition ease-in-out duration-300"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="transition ease-in-out duration-300"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <div class="absolute w-full bg-white  z-50" v-show="searchResults.length > 0">
                <p v-for="(searchResult, index) in searchResults" :key="index" class="text-black">
                  {{ searchResult }}
                </p>
              </div>
            </Transition>
          </div>
        </div>
        <div class="cursor-pointer">
          <p class="border-b-white border-b-2 leading-[0.8]">RU</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getQueries } from '@/api/search'
import { onMounted, onUnmounted, ref } from 'vue'

const scrolled = ref(false)

const searchInterval = ref(0)
const searchInput = ref('')
const searchResults = ref([])

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 150
}

const handleInput = async () => {
  clearTimeout(searchInterval.value)
  searchInterval.value = setTimeout(() => {
    getQueries(searchInput.value).then((data) => {
      searchResults.value = data as unknown as never[]
    })
  }, 300)
}

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
