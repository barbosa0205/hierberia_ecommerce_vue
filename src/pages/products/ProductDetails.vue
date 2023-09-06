<template lang="">
  <section class="p-4" v-if="product">
    <H2 :title="product.name"></H2>

    <div class="flex flex-col items-center justify-center px-8">
      <img class="w-96" :srcset="product.images[0].url" alt="" />
      <p class="text-sm mt-5">{{ product.description }}</p>

      <div class="w-full flex flex-col items-end justify-center px-4 py-2">
        <small class="text-slate-600 text-s s:text-base my-1"
          >In Stock -
          <span class="text-emerald-600">{{ product.quantity }}</span></small
        >
        <p class="text-xl s:text-3xl font-semibold">${{ product.price }} MXN</p>
        <div class="w-full flex justify-end">
          <!-- favorite icon -->
          <i
            class="ri-heart-fill flex items-center justify-center h-8 w-8 text-2xl bg-slate-200 text-slate-500 mx-1 rounded-full"
          ></i>
        </div>
        <div class="w-full flex flex-col items-center py-4 mt-3">
          <SolidButton
            styles="w-full px-3 py-2 mb-1 text-xl font-normal bg-blue-500"
            >Buy Now
          </SolidButton>
          <SolidButton styles="w-full px-3 py-2 mt-1 text-xl font-normal"
            >Add to cart</SolidButton
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "../../stores/useProductsStore";
import H2 from "../../components/ui/text/H2.vue";
import SolidButton from "../../components/ui/button/SolidButton.vue";
const route = useRoute();

const productsStore = useProductsStore();

const product = ref(null);

const { getProduct } = productsStore;

onMounted(async () => {
  const { data } = await getProduct(route.params.productSlug);
  console.log({ data });
  product.value = data;
});
</script>
<style lang=""></style>
