<template lang="">
  <div class="flex flex-col sm:flex-row">
    <SideMenu />
    <section class="w-full">
      <router-view name="home"></router-view>
    </section>
  </div>
</template>
<script setup>
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import SideMenu from "./SideMenu.vue";

const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
  if (route.path === "/dashboard") {
    router.push("/dashboard/home");
  }
});
</script>
<style lang=""></style>
