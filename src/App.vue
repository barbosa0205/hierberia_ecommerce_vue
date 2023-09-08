<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import Main from "./layouts/Main.vue";
import Footer from "./components/Footer.vue";
import { useUserStore } from "./stores/useUserStore";

const userStore = useUserStore();

const { getUser } = userStore;

onMounted(() => {
  getUser();
});
</script>

<template>
  <Nav />
  <Main>
    <RouterView></RouterView>
  </Main>
  <Footer />
</template>
