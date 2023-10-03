<template lang="html">
  <nav
    v-if="!$route.meta.hideNavbar"
    class="w-full flex items-center justify-between shadow-sm shadow-slate-200 py-4"
  >
    <!-- Logo -->
    <h1
      @click="router.push({ name: 'Home' })"
      class="text-3xl font-semibold font-mono text-emerald-600 px-4 cursor-pointer"
    >
      {{ logo }}
    </h1>

    <div class="flex">
      <section
        :class="
          menuOpen +
          ' flex flex-col sm:p-2 fixed top-0 w-4/6 h-screen bg-gray-100 sm:flex-row-reverse sm:items-center sm:w-fit sm:h-fit sm:relative sm:bg-transparent sm:left-0 sm:duration-0 z-20'
        "
      >
        <!-- profile section -->
        <section
          v-if="user"
          @click="toProfile"
          class="flex items-center justify-between p-4 sm:px-2 mt-1 sm:w-fit border-b border-slate-300 sm:border-none cursor-pointer sm:cursor-default"
        >
          <div>
            <i
              class="ri-user-4-line text-2xl text-slate-800 bg-slate-300 mx-4 p-2 rounded-full cursor-pointer"
            ></i>
            <span class="text-md text-slate-800 sm:hidden">{{
              user?.name
            }}</span>
          </div>
          <i class="ri-arrow-right-s-line text-xl text-slate-800 sm:hidden"></i>
        </section>

        <!-- Routes -->
        <div class="flex flex-col jus h-fit sm:flex-row mt-1 sm:flex-wrap">
          <NavLink @click="() => (menu = false)" :to="{ name: 'Home' }"
            >Home</NavLink
          >

          <template v-if="!user">
            <NavLink @click="() => (menu = false)" :to="{ name: 'Login' }"
              >Login</NavLink
            >
            <NavLink @click="() => (menu = false)" :to="{ name: 'Register' }"
              >Register</NavLink
            >
          </template>
        </div>
      </section>

      <div class="relative flex items-center justify-end px-2">
        <!-- Cart  -->
        <div
          v-if="width < 640"
          @click="router.push({ name: 'MyCart' })"
          class="relative mr-5 cursor-pointer"
        >
          <i class="ri-shopping-cart-line text-lg ml-2 sm:ml-0"></i>
          <!-- Cart Notification -->
          <span
            v-if="cartItems.products.length"
            class="flex items-center justify-center absolute bottom-4 left-4 w-5 h-5 text-sm rounded-full bg-amber-300"
            >{{ cartItems.products.length }}</span
          >
        </div>
        <div
          v-else
          @click="toggleCartMenu"
          class="relative mr-5 cursor-pointer"
        >
          <i class="ri-shopping-cart-line text-lg ml-2 sm:ml-0"></i>
          <!-- Cart Notification -->
          <span
            v-if="cartItems.products.length"
            class="flex items-center justify-center absolute bottom-4 left-4 w-6 h-6 text-sm rounded-full bg-amber-300"
            >{{ cartItems.products.length }}</span
          >
        </div>
        <PopDown :toggle="cartMenu" otherStyles="sm:right-3 sm:top-14">
          <ul>
            <li
              class="flex"
              v-for="(item, index) in cartItems.products"
              :key="index"
            >
              <img class="w-20 h-20 rounded-full" :src="item.image" alt="" />
              <div class="flex flex-col items-center justify-center mx-2">
                <p>{{ item.name }}</p>
                <p>{{ item.price }}</p>
              </div>
            </li>
          </ul>
        </PopDown>
      </div>

      <!-- Hamburguer Menu -->
      <i
        @click="toggleMenu"
        class="ri-menu-line text-xl mx-2 visible sm:hidden cursor-pointer"
      ></i>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/useAuthStore";
import { useUserStore } from "../stores/useUserStore";
import NavLink from "./NavLink.vue";
import { useProductsStore } from "../stores/useProductsStore";
import PopDown from "../components/ui/drops/PopDown.vue";
import { useDimensionsStore } from "../stores/useDimensionsStore";

const menu = ref(false);

const dimensionsStore = useDimensionsStore();

const { width } = storeToRefs(dimensionsStore);

const userStore = useUserStore();

const productStore = useProductsStore();

const { cartItems } = storeToRefs(productStore);

const { user } = storeToRefs(userStore);

const router = useRouter();

const cartMenu = ref(false);

const toggleCartMenu = () => {
  cartMenu.value = !cartMenu.value;
};

const toggleMenu = () => {
  menu.value = !menu.value;
};

const toProfile = () => {
  //close menu
  menu.value = false;
  router.push("/profile");
};

// computed
const logo = computed(() => {
  return width.value < 680 ? "HLM" : "HIERBERIA LA MADRINA";
});

const menuOpen = computed(() => {
  return !menu.value ? "-left-[100%] duration-300" : "left-0 duration-300";
});
</script>

<style lang="css"></style>
