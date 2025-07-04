import { ref } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useGlobalStore = defineStore('globale', () => {
  const isOpen = ref(false)
  function toggleDrawer() {
    isOpen.value = !isOpen.value
  }

  return { isOpen, toggleDrawer }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
