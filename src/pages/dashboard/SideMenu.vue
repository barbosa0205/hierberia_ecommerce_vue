<template lang="">
  <!-- Nav mobile -->
  <nav class="w-full flex items-center justify-end p-4 sm:hidden">
    <i @click="toggleMenu" class="ri-menu-line text-xl cursor-pointer"></i>
  </nav>

  <!-- Side menu -->
  <nav
    :class="`fixed top-0 ${isOpen} sm:static flex flex-col justify-between max-w-[12rem] h-screen bg-blue-500`"
  >
    <section
      class="flex items-center justify-center w-full min-h-[8rem] bg-rose-400"
    >
      <div>USER!</div>
    </section>
    <section class="flex items-center justify-center h-full bg-sky-400">
      links section
    </section>
    <section
      class="flex items-center justify-center w-full min-h-[5rem] bg-zinc-400"
    >
      footer section
    </section>
  </nav>
</template>
<script setup>
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";

import { useUserStore } from "../../stores/useUserStore";

const isMenuOpen = ref(false);

const userStore = useUserStore();

const { user } = storeToRefs(userStore);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const isOpen = computed(() => {
  return !isMenuOpen.value
    ? "left-[-100%] transition-all duration-75"
    : "left-0 transition-all duration-75";
});
</script>
<style lang=""></style>
