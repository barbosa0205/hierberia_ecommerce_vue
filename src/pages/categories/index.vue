<template lang="">
  <h1 class="text-center font-semibold text-lg my-5">Todas las categorias</h1>
  <ul>
    <li
      class="w-full px-2 py-1 border-b first:border-t"
      v-for="(category, index) in categories"
      :key="index"
    >
      <!-- Drow Down -->
      <DropDown
        v-if="category.children_categories.length"
        :items="category.children_categories"
      >
        <div class="w-full flex items-center">
          <img
            @click="router.push(`/categories/${category.slug}`)"
            class="w-20 cursor-pointer"
            :src="category.images.url"
            alt=""
          />
          <router-link
            :to="`/categories/${category.slug}`"
            class="mx-2 text-sm"
            >{{ category.name }}</router-link
          >
        </div>
      </DropDown>

      <div v-else class="w-full flex justify-between items-center">
        <div class="w-full flex items-center">
          <img class="w-20" :src="category.images.url" alt="" />
          <p class="mx-2 text-sm">{{ category.name }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductsStore } from "../../stores/useProductsStore";
import DropDown from "../../components/ui/drops/DropDown.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const categories = ref([]);

const productsStore = useProductsStore();

const { getCategories } = productsStore;

onMounted(async () => {
  categories.value = await getCategories("/api/categories?children=true");
});
</script>
<style lang=""></style>
