<template lang="">
  <div v-if="cartItems.products.length">
    <h1 class="m-4 border-b border-slate-300">Mi Carrito de Compras</h1>
    <table v-if="width > 480" class="border mx-auto">
      <thead class="border">
        <tr>
          <th class="px-1 text-center text-sm ss:text-lg">#</th>
          <th class="border-x px-1 ss:px-5 text-sm ss:text-lg">Producto</th>
          <th class="border-x px-1 ss:px-5 text-sm ss:text-lg">Precio</th>
          <th class="border-x px-1 ss:px-5 text-sm ss:text-lg">Cantidad</th>
        </tr>
      </thead>
      <tbody class="">
        <tr
          class="odd:bg-slate-100"
          v-for="(cartItem, index) in cartItems.products"
          :key="index"
        >
          <CartItemList
            :cartItem="{
              ...cartItem,
              index,
            }"
          />
        </tr>
      </tbody>
    </table>

    <ul class="w-full" v-else>
      <CartItem :cartItems="cartItems" />
    </ul>

    <div class="w-full flex flex-col justify-center items-end p-5 pr-10">
      <h3 class="text-3xl font-semibold my-1">Total:</h3>
      <p class="text-2xl my-1 text-emerald-600 font-semibold">
        ${{ cartItems.total }}
        <small class="font-semibold">MXN</small>
      </p>
    </div>

    <div class="py-2 flex items-center justify-center">
      <SolidButton styles="py-3 px-3 bg-amber-500"
        >PROCEDER CON LA COMPRA</SolidButton
      >
    </div>
  </div>
  <div v-else>
    <p class="p-4 mt-10 text-center font-semibold text-lg">
      No tienes productos en tu carrito de compras
    </p>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useProductsStore } from "../stores/useProductsStore";
import SolidButton from "../components/ui/button/SolidButton.vue";
import CartItemList from "../components/cart/CartItemList.vue";
import CartItem from "../components/cart/CartItem.vue";
import { useDimensionsStore } from "../stores/useDimensionsStore";
import { ref, watch } from "vue";

const productStore = useProductsStore();

const { totalComputed } = productStore;

const { cartItems } = storeToRefs(productStore);

const dimensionsStore = useDimensionsStore();

const { width } = storeToRefs(dimensionsStore);
</script>
<style lang=""></style>
