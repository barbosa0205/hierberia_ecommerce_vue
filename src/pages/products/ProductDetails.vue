<template lang="">
  <section class="p-4" v-if="productDetails">
    <H2 :title="productDetails.name"></H2>

    <div class="flex flex-col items-center justify-center px-8">
      <img class="w-96" :srcset="productDetails.images[0].url" alt="" />
      <p class="text-sm mt-5">{{ productDetails.description }}</p>

      <div class="w-full flex flex-col items-end justify-center px-4 py-2">
        <small class="text-slate-600 text-s s:text-base my-1"
          >In Stock -
          <span class="text-emerald-600">{{
            productDetails.quantity
          }}</span></small
        >
        <p class="text-xl s:text-3xl font-semibold">
          ${{ productDetails.price }} MXN
        </p>
        <div class="w-full flex justify-end">
          <!-- favorite icon -->
          <i
            @click="
              toggleFavorite(productDetails.id, productDetails.is_favorite)
            "
            :class="
              'ri-heart-fill flex items-center justify-center h-8 w-8 text-2xl bg-slate-200 mx-1 rounded-full ' +
              isFavorite
            "
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
import { onMounted, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "../../stores/useUserStore";
import { useProductsStore } from "../../stores/useProductsStore";
import H2 from "../../components/ui/text/H2.vue";
import SolidButton from "../../components/ui/button/SolidButton.vue";
import { storeToRefs } from "pinia";
const route = useRoute();

const productsStore = useProductsStore();
const userStore = useUserStore();

const { getProduct } = productsStore;
const { toggleFavorite } = userStore;

const { productDetails } = storeToRefs(productsStore);

const isFavorite = computed(() => {
  if (productDetails.value) {
    return productDetails.value.is_favorite?.length
      ? "text-emerald-500"
      : "text-slate-500";
  } else {
    return "text-slate-500";
  }
});

onMounted(async () => {
  const { data } = await getProduct(route.params.productSlug);
  console.log({ data });
  productDetails.value = data;
});
</script>
<style lang=""></style>
