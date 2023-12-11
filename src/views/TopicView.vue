<template>
  <div class="about">
    <h1>{{ route.params.id }}</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

onMounted(() => {
  console.log('mounted!')
})

const route = useRoute()
// console.log(route.params.id)
</script>
