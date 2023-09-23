<template lang="">
  <section class="p-4 mt-2" v-if="productDetails">
    <!--The category is the subcategory and the subcategory is the category. pdt:
    i don't know why. -->
    <p class="text-sm m-2 font-semibold">Categoria</p>
    <span class="text-sm my-2" v-if="!productDetails.category.subcategories">
      <router-link
        :to="`/categories/${productDetails.category.slug}`"
        class="underline underline-offset-2 text-amber-700 mx-2"
      >
        {{ productDetails.category.name }}
      </router-link>
    </span>
    <span class="text-sm flex my-2" v-else>
      <router-link
        :to="`/categories/${productDetails.category.subcategories.slug}`"
        class="underline underline-offset-2 mx-2"
      >
        {{ productDetails.category.subcategories.name }}
      </router-link>
      >
      <router-link
        :to="`/categories/${productDetails.category.slug}`"
        class="mx-2 text-sm underline underline-offset-2 text-amber-700"
      >
        {{ productDetails.category.name }}
      </router-link>
    </span>

    <div class="py-5">
      <H2 :title="productDetails.name" />
    </div>
    <div
      class="flex flex-col items-center justify-center px-8 md-px0 md:flex-row"
    >
      <img
        class="w-96 md:w-80 md:mr-10"
        :srcset="productDetails.images[0].url"
        alt=""
      />

      <div
        class="w-full max-w-md flex flex-col justify-center px-4 py-2 sm:mt-5 items-center"
      >
        <small class="text-slate-600 text-s s:text-base sm:text-lg my-1"
          >In Stock -
          <span class="text-emerald-600">{{
            productDetails.quantity
          }}</span></small
        >
        <p class="text-xl s:text-3xl font-semibold">
          ${{ productDetails.price }} MXN
        </p>
        <div class="w-full flex items-center justify-center">
          <!-- favorite icon -->
          <div class="flex items-center justify-center mt-4">
            <span class="my-2 md:my-0 md:mx-2">Add to favorites</span
            ><i
              @click="
                toggleFavorite(productDetails.id, productDetails.is_favorite)
              "
              :class="
                'ri-heart-fill flex items-center justify-center h-10 w-10 text-2xl bg-slate-200 mx-1 rounded-full cursor-pointer sm:text-3xl sm:h-12 sm:w-12 ' +
                isFavorite
              "
            ></i>
          </div>
        </div>
        <div class="w-full flex flex-col items-center py-4 mt-3">
          <SolidButton
            styles="w-full px-3 py-2 mb-1 text-xl font-normal bg-blue-500 border border-emerald-600 sm:py-4"
            >Buy Now
          </SolidButton>
          <SolidButton
            @click="
              addProductToCart({
                id: productDetails.id,
                name: productDetails.name,
                price: productDetails.price,
                image: productDetails.images[0].url,
              })
            "
            styles="w-full px-3 py-2 mt-1 text-xl font-normal bg-amber-400 border border-amber-500 sm:py-4"
            >Add to cart</SolidButton
          >
        </div>
      </div>
    </div>
    <div
      class="w-full max-w-2xl flex items-center justify-center bg-slate-100 mx-auto p-4"
    >
      <p class="text-sm sm:text-lg mt-5 max-w-2xl">
        {{ productDetails.description }}
      </p>
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
import router from "../../router";
const route = useRoute();

const productsStore = useProductsStore();
const userStore = useUserStore();

const { getProduct, addProductToCart } = productsStore;
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
  try {
    const data = await getProduct(route.params.productSlug);
    if (!data) {
      //Replace this with a 404 message on the same page, do not redirect to 404 or something similar.

      router.push("/");
    } else {
      console.log(data.data);
      productDetails.value = data.data;
    }
  } catch (error) {
    console.log({ error });
  }
});
</script>
<style lang=""></style>
