<template lang="">
  <Carousel title="New Products">
    <ProductCard
      v-for="(product, index) in newProducts"
      :key="index"
      :data="product"
    />
    <p
      class="w-full font-mono text-center p-4 text-slate-600"
      v-if="!newProducts.length"
    >
      No Products Find
    </p>
  </Carousel>
  <section class="p-4 mt-10">
    <H2 title="Explore Categories" />
    <ul
      class="w-full max-w-2xl flex items-center justify-center flex-wrap py-5 mx-auto"
    >
      <div
        class="flex items-center sm:flex-col sm:w-fit sm:my-1 w-full mx-1 border-b first:border-t border-x border-slate-300"
        v-for="(category, index) in categories"
        :key="index"
      >
        <img
          class="w-28 sm:w-80 object color brightness-150"
          :srcset="category.images.url"
          alt=""
        />
        <p class="text-center py-2 ml-4 text-lg font-mono">
          {{ category.name }}
        </p>
      </div>
      <div
        class="w-full flex items-center justify-center pt-5"
        v-if="newProducts.length"
      >
        <SolidButton>Show More</SolidButton>
      </div>
    </ul>
  </section>
</template>

<script setup>
import axios from "../axios";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/useUserStore";
import { useProductsStore } from "../stores/useProductsStore";
import Carousel from "../components/Carousel.vue";
import ProductCard from "../components/ProductCard.vue";
import H2 from "../components/ui/text/H2.vue";
import SolidButton from "../components/ui/button/SolidButton.vue";

const userStore = useUserStore();
const productsStore = useProductsStore();

const { user } = storeToRefs(userStore);
const { newProducts, categories } = storeToRefs(productsStore);

onMounted(() => {
  userStore.getUser();
  productsStore.getProducts("/api/products");
  productsStore.getCategories("/api/categories?count=4");
});
</script>
<style lang="scss"></style>
