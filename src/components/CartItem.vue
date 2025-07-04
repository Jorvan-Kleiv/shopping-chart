<template>
  <div class="flex gap-x-2 w-full h-fit">
    <div class="bg-slate-200 w-28 aspect-square rounded-sm">
      <img src="../assets/tshirt.png" alt="">
    </div>
    <div class="flex flex-col w-full min-h-full relative">
      <div class="flex justify-between items-center">
        <p class="text-sm font-semibold text-gray-700">
          {{ item.name }}
        </p>
        <p class="text-sm text-gray-700">
          ${{ item.price }}
        </p>
      </div>
      <small class="text-gray-500 text-xs uppercase">{{ item.size }}</small>
      <p class="text-sm text-gray-600">Quantity: {{ item.quantity }}</p>
      <button class="mt-auto text-xs absolute bottom-0 right-0 text-red-500" @click="userCartStore().removeFromCart(item.id)">remove</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import type {Product} from "@/views/HomeView.vue";
import {userCartStore} from "@/stores/cart.ts";

defineProps<{
  item: Product
}>()

</script>

<style scoped>

</style>