<template>
  <Teleport to="body">
    <!-- le parent reste présent -->
    <div class="fixed inset-0 z-50 flex pointer-events-none">
      <div
          v-if="global.isOpen"
          class="w-full h-full pointer-events-auto"
          @click="global.toggleDrawer()"
      ></div>

      <!-- Drawer -->
      <Transition
          enter-active-class="transition-transform duration-300"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-300"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
      >
        <div
            v-if="global.isOpen"
            class="w-1/3 h-screen bg-white shadow-lg absolute right-0 top-0 z-50 pointer-events-auto"
        >
          <!-- Contenu du drawer -->
          <div class="w-full h-full">
            <div class="px-4 py-3">
              <h2 class="text-lg font-mono text-gray-700 font-bold">{{ title }}</h2>
            </div>
            <div class="px-4 h-5/8 py-2 overflow-y-auto">
              <slot name="content"/>
            </div>
            <div class="px-4 right-0  border-t border-t-neutral-200 py-2 mt-auto">
              <slot name="footer"/>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import {useGlobalStore} from "@/stores/global.ts";
const global = useGlobalStore();
defineProps<{
  title: string
}>()
</script>
