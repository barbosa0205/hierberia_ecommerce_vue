<template lang="">
  <div>FAVORITES</div>
</template>
<script setup>
import { onMounted } from "vue";
import { useUserStore } from "../stores/useUserStore";
import { storeToRefs } from "pinia";

const userStore = useUserStore();

const { getFavorites } = userStore;
const { user } = storeToRefs(userStore);
onMounted(() => {
  getFavorites(user.value.id);
});
</script>
<style lang=""></style>
