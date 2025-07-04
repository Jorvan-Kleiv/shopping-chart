<template>
  <div class="flex flex-col active:drop-shadow-xs drop-shadow-teal-300 active:scale-105 cursor-pointer h-fit">
    <div class="bg-neutral-200 rounded-sm p-0 m-0 w-full h-fit">
      <img src="../assets/tshirt.png" class="rounded-sm" alt="">
    </div>
    <div class="flex my-1.5 w-full flex-col">
      <div class="flex w-full items-center justify-between">
        <h3 class="font-semibold font-mono text-gray-700 text-sm">{{ product.name }}</h3>
        <h3 class="text-gray-700 text-xs">${{ product.price }}</h3>
      </div>
      <small class="text-gray-600 font-medium text-xs uppercase">{{ product.size }}</small>
      <small class="text-gray-600 text-xs">{{ product.color }}</small>
    </div>
  </div>
</template>
<script setup lang="ts">
import type {Product} from "@/views/HomeView.vue";

defineProps<{
  product: Product
}>()
</script>

<style scoped>

</style>