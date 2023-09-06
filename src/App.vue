<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import Main from "./layouts/Main.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Nav />
  <Main>
    <RouterView></RouterView>
  </Main>
  <Footer />
</template>
