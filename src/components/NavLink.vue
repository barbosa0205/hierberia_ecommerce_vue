<template lang="">
  <router-link
    :to="to"
    class="w-full sm:w-fit text-center py-2 border-b border-slate-300 sm:border-none sm:px-4 sm:py-1 hover:bg-slate-200"
    ><slot></slot
  ></router-link>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  to: {
    type: Object,
  },
});
</script>
<style lang="scss"></style>
