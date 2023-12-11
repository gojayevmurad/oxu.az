<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SiteNavigation from '@/components/common/SiteNavigation.vue'
import TopicHeader from './components/common/TopicHeader.vue'
</script>

<template>
  <SiteNavigation />
  <TopicHeader />
  <RouterView />
</template>

<style></style>
