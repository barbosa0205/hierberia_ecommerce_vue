<template lang="">
  <section class="w-full min-h-screen flex flex-col items-center py-4">
    <div class="w-full flex items-center justify-end px-4 py-1">
      <span @click="logout" class="font-mono cursor-pointer"
        >Logout <i class="ri-logout-box-line text-rose-500"></i
      ></span>
    </div>
    <div
      class="mt-10 flex items-center justify-center mx-auto w-28 h-28 rounded-full bg-slate-100 border border-slate-300"
    >
      <i class="ri-user-4-line text-7xl text-slate-700"></i>
    </div>
    <div
      class="w-full flex flex-col items-center justify-center p-4 border-b border-slate-300"
    >
      <p class="font-mono text-xl">{{ user?.name }}</p>
      <p class="font-mono text-sm">{{ user?.email }}</p>
    </div>
  </section>
</template>
<script setup>
import { useAuthStore } from "../../stores/useAuthStore";
import { storeToRefs } from "pinia";
import { useUserStore } from "../../stores/useUserStore";

const authStore = useAuthStore();
const userStore = useUserStore();

const { logout } = authStore;

const { user } = storeToRefs(userStore);
</script>
<style lang=""></style>
