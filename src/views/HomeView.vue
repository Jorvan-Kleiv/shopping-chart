<template>
  <main class="p-0 m-0">
    <Header />
    <Drawer title="Shopping chard">
      <template #content>
        <div class="flex flex-col gap-y-2" >
          <CartItem v-for="item in cart.cart" :item="item"/>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-col w-full min-h-full">
          <div class="flex justify-between items-center py-1">
            <h4 class="font-semibold font-mono text-base text-gray-700">Total amount:</h4>
            <p class="font-medium text-base text-gray-700">${{ cart.getTotalAmount, 0 }}</p>
          </div>
          <p class="text-xs text-gray-600">
            shipping and taxes are calculated at checkout
          </p>
          <div class="flex gap-1 flex-col w-full">
            <button class="py-1 w-full mt-4 rounded-md text-white bg-indigo-600">Go to checkout</button>
            <small class="text-xs text-center text-gray-700">or</small>
            <a href="javascript:void(0)" class="text-indigo-500 text-center">Continue shipping</a>
          </div>
        </div>
      </template>
    </Drawer>
    <div class="mx-32">
      <h2 class="text-2xl my-5 font-bold font-mono text-neutral-700">Our featured T-shirts</h2>
      <div class="grid grid-cols-5 gap-4">
        <ProductCard :product="product" :key="index" v-for="(product, index) in products" @click="cart.addToCart(product)" />
      </div>
    </div>

  </main>
</template>
<script setup lang="ts">
import Header from "@/components/Header.vue";
import ProductCard from "@/components/ProductCard.vue";
import Drawer from "@/components/Drawer.vue";
import {userCartStore} from "@/stores/cart.ts";
import CartItem from "@/components/CartItem.vue";
const cart = userCartStore();
const products = [
  {
    id: 1,
    name: "Balenciaga",
    price: 200,
    size: "XL",
    color: "Blue",
    image: "../assets/tshirt.png",
    quantity: 0
  },
  {
    id: 2,
    name: "Off-White",
    price: 180,
    size: "L",
    color: "White",
    image: "../assets/tshirt.png",
    quantity: 0
  },
  {
    id: 3,
    name: "Nike",
    price: 90,
    size: "M",
    color: "Black",
    image: "../assets/tshirt.png",
    quantity: 0
  },
  {
    id: 4,
    name: "Adidas",
    price: 85,
    size: "XL",
    color: "Gray",
    image: "../assets/tshirt.png",
    quantity: 0
  },
  {
    id: 5,
    name: "Supreme",
    price: 220,
    size: "L",
    color: "Red",
    image: "../assets/tshirt.png",
    quantity: 0
  },
  {
    id: 6,
    name: "Puma",
    price: 70,
    size: "S",
    color: "Green",
    image: "../assets/tshirt.png",
    quantity: 0
  },
  {
    id: 7,
    name: "Champion",
    price: 95,
    size: "M",
    color: "Beige",
    image: "../assets/tshirt.png",
    quantity: 0
  },
  {
    id: 8,
    name: "Uniqlo",
    price: 45,
    size: "L",
    color: "Navy",
    image: "../assets/tshirt.png",
    quantity: 0
  },
  {
    id: 9,
    name: "Zara",
    price: 55,
    size: "M",
    color: "Yellow",
    image: "../assets/tshirt.png",
    quantity: 0
  },
  {
    id: 10,
    name: "H&M",
    price: 35,
    size: "S",
    color: "Pink",
    image: "../assets/tshirt.png",
    quantity: 0
  }
];


export type Product = typeof products[0]



</script>
