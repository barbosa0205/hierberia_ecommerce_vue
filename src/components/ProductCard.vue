<template lang="">
  <article
    class="relative w-[12rem] min-w-[12rem] s:w-[14rem] s:min-w-[14rem] mx-3 pb-4 first:ml-0 bg-slate-100 border border-slate-200"
  >
    <!-- Image -->
    <img :srcset="data.images[0].url" class="w-full h-40" />
    <section class="px-2">
      <h3
        class="font-mono text-md pt-2 overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {{ data.name }}
      </h3>
      <p class="overflow-hidden text-ellipsis whitespace-nowrap">
        {{ data.description }}
      </p>
      <p class="text-lg text-end pr-3 my-2">${{ data.price }} MXN</p>
      <div class="w-full flex items-center justify-center px-4">
        <!-- <button 
                    @click="router.push({
                        name:'ProductDetails',
                        params: {
                            productSlug: data.slug
                        }
                        })" 
                        class="border py-1 border-slate-400 w-full rounded-sm text-sm font-mono text-slate-800 hover:shadow-md duration-75">
                        Details
                    </button> -->

        <BorderButton
          @click="
            router.push({
              name: 'ProductDetails',
              params: {
                productSlug: data.slug,
              },
            })
          "
        >
          Details
        </BorderButton>

        <SolidButton styles="mx-2 py-0 px-3 text-lg"
          ><i class="ri-shopping-cart-line"></i
        ></SolidButton>
      </div>
    </section>
  </article>
</template>
<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import BorderButton from "./ui/button/BorderButton.vue";
import SolidButton from "./ui/button/SolidButton.vue";
import { useUserStore } from "../stores/useUserStore";
import { storeToRefs } from "pinia";

defineProps({
  data: {
    type: Object,
    default: null,
  },
});

const router = useRouter();

const userStore = useUserStore();

const { addProductToFavorite } = useUserStore();

// const { user } = storeToRefs(userStore);
</script>
<style lang=""></style>
