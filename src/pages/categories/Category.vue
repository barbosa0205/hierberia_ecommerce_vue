<template lang="">
  <section v-if="category" class="w-full relative">
    <div class="px-4">
      <H2 :title="category.name" />
      <img
        class="w-full h-32 rounded-sm object-cover mx-auto"
        :src="category.images?.url ?? 'https://picsum.photos/200'"
        alt="category"
      />
    </div>
    <div class="mt-14">
      <p class="text-center mx-auto px-5">
        Productos mas recientes en esta categoria
      </p>
      <ul class="flex items-center justify-center flex-wrap mt-5">
        <ProductCard
          v-for="(product, index) in recentProducts"
          :key="index"
          :data="product"
          otherStyles="my-3"
        />
      </ul>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import {} from "pinia";
import { useProductsStore } from "../../stores/useProductsStore";
import { useRoute } from "vue-router";
import H2 from "../../components/ui/text/H2.vue";
import ProductCard from "../../components/ProductCard.vue";
const route = useRoute();

const productsStore = useProductsStore();

const { getCategory, getProductsByCategory } = productsStore;

const category = ref(null);

const recentProducts = ref(null);

onMounted(async () => {
  const categoryData = await getCategory(route.params.categorySlug);

  category.value = categoryData;

  const recentProductsData = await getProductsByCategory(category.value.id);

  recentProducts.value = recentProductsData;
});
</script>
<style lang=""></style>
