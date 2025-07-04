import {defineStore} from "pinia";
import type {Product} from "@/views/HomeView.vue";

export const userCartStore = defineStore("cart", {
    state: () => ({
        cart: [] as Product[]
    }),
    persist: true,
    getters: {
        getQuantity: (state) => state.cart.reduce((acc, p) => acc + p.quantity, 0),
        getTotalAmount: (state) => state.cart.reduce((acc, p) => acc + p.price * p.quantity, 0)
    },
    actions: {
        addToCart(product: Product) {
            const existingProduct = this.cart.find(p => p.id === product.id)
            if (existingProduct) {
                existingProduct.quantity++
            } else {
                this.cart.push({...product, quantity: 1})
            }
        },
        removeFromCart(id: number) {
            this.cart = this.cart.filter(p => p.id !== id)
        }
    }
})