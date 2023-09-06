<template lang="html">
  <nav
    class="w-full flex items-center justify-between shadow-sm shadow-slate-200 py-4"
  >
    <!-- Logo -->
    <h1
      @click="router.push({ name: 'Home' })"
      class="text-3xl font-semibold font-mono text-emerald-600 px-4 cursor-pointer"
    >
      {{ logo }}
    </h1>

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
          <span class="text-md text-slate-800 sm:hidden">{{ user?.name }}</span>
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
            >Login<i class="ri-login-box-line text-lg ml-2"></i
          ></NavLink>
          <NavLink @click="() => (menu = false)" :to="{ name: 'Register' }"
            >Register</NavLink
          >
          <NavLink @click="() => (menu = false)" to=""
            >Shopping Cart <i class="ri-shopping-cart-line text-lg ml-2"></i
          ></NavLink>
        </template>
      </div>
    </section>
    <!-- Hamburguer Menu -->
    <i
      @click="toggleMenu"
      class="ri-menu-line text-xl mx-2 visible sm:hidden cursor-pointer"
    ></i>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/useAuthStore";
import { useUserStore } from "../stores/useUserStore";
import NavLink from "./NavLink.vue";

const width = ref(0);
const menu = ref(false);
const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const router = useRouter();

onMounted(() => {
  window.addEventListener("resize", myEventHandler);
  width.value = window.innerWidth;
});

onUnmounted(() => clearInterval(myEventHandler));

const myEventHandler = (e) => {
  width.value = e.currentTarget.innerWidth;
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
  return width.value < 640 ? "HLM" : "HIERBERIA LA MADRINA";
});

const menuOpen = computed(() => {
  return !menu.value ? "-left-[100%] duration-300" : "left-0 duration-300";
});
</script>

<style lang="css"></style>
