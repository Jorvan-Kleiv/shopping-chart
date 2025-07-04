<template>
  <header class="h-fit sticky top-0 w-full font-sans">
    <div class="h-fit flex py-0.5 justify-center items-center w-full bg-indigo-600">
      <small class="text-xs text-white font-mono">
        Delivery offered on orders over $100
      </small>
    </div>
    <nav class="mx-32 py-2 bg-white z-10 sticky border-b mt-1 border-b-neutral-200 flex justify-between items-center">
      <img src="../assets/Logo.svg" class="w-8 h-8" alt="logo">
      <ul class="flex items-center text-sm text-neutral-700 gap-x-4">
        <li class="">Our products</li>
        <li class="cursor-pointer text-indigo-600 font-bold">T-shirt</li>
        <li class="cursor-pointer">Jewelry</li>
        <li class="cursor-pointer">computer</li>
        <li class="cursor-pointer">Phone</li>
        <li class="cursor-pointer">Trouser</li>
      </ul>
      <div class="flex items-center gap-x-4">
        <div class="flex items-stretch gap-x-1">
          <button class="px-2 py-1 hover:text-indigo-500 text-neutral-700 text-sm">Sign in</button>
          <div class="min-h-full w-[1px] bg-neutral-200"></div>
          <button class="px-2 py-1 hover:text-indigo-500 text-neutral-700 text-sm">Create an account</button>
        </div>
        <div class="flex items-stretch gap-x-1.5">
          <button class="px-2 py-1 gap-x-1 hover:text-indigo-500 text-neutral-700 flex items-center text-sm">
            <img src="../assets/img.png" class="w-3 h-3" alt="">
            <span class="text-sm">francais</span>
          </button>
          <div class="flex items-center gap-2">
            <button class="p-0 cursor-pointer  m-0">
              <Search class="w-4 h-4 text-neutral-700" />
            </button>
            <button class="p-0 cursor-pointer w-6 h-6 m-0 relative" @click="global.toggleDrawer()">
              <ShoppingCart class="w-4 text-neutral-700 h-4" />
              <span class="absolute text-xs text-red-700 font-semibold top-0 right-0">{{ cart.getQuantity }}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>

</template>
<script setup lang="ts">
import { Search, ShoppingCart} from "lucide-vue-next";
import {useGlobalStore} from "@/stores/global.ts";
import {userCartStore} from "@/stores/cart.ts";
const global = useGlobalStore();
const cart = userCartStore();

</script>

<style scoped>
nav {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    background: #4f39f6;
    block-size: 2px;
    bottom: 0;
    left: 0;
    right: 0;
    scale: var(--width, 6%) 1;
    translate: var(--left, 230px);
    transform-origin: left;
  }
}

</style>