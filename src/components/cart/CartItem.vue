<template lang="">
  <li
    class="relative w-full my-4 p-2 shadow-sm"
    v-for="(cartItem, index) in cartItems.products"
    :key="index"
  >
    <i
      @click="removeCartItem(cartItem)"
      class="absolute top-0 right-5 ri-close-line text-2xl p-2 cursor-pointer"
    ></i>
    <div class="flex w-full items-center justify-start pt-4">
      <img class="w-20 h-20 rounded-full mr-2" :src="cartItem.image" alt="" />
      <div class="w-full flex items-center justify-evenly">
        <div class="w-full">
          <p class="m-2 py-2" :title="cartItem.name">
            {{ cartItem.name }}
          </p>
          <div class="flex items-center justify-around">
            <p>${{ cartItem.price }} <small>MXN</small></p>

            <div class="flex">
              <i
                @click="restItemQty(cartItem.id)"
                class="ri-arrow-left-s-line text-lg bg-indigo-100 mx-3 cursor-pointer"
              ></i>
              <span>{{ cartItem.qty }}</span>
              <i
                @click="addItemQty(cartItem.id)"
                class="ri-arrow-right-s-line text-lg bg-indigo-100 rounded-sm mx-3 cursor-pointer"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script setup>
import { defineProps, ref, useTransitionState } from "vue";
import { useProductsStore } from "../../stores/useProductsStore";
import { storeToRefs } from "pinia";
const props = defineProps({
  cartItems: {
    type: Array,
    default: null,
  },
});

const productStore = useProductsStore();
const { removeCartItem, addTotal, restTotal, addItemQty, restItemQty } =
  productStore;
</script>
<style lang=""></style>
