<template lang="">
  <button
    :class="
      bgColor +
      ' px-2 py-1 text-white font-semibold rounded-sm max-w-sm ' +
      styles
    "
  >
    <slot></slot>
  </button>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  styles: {
    type: String,
    default: "",
  },
  bgColor: {
    type: String,
    default: "bg-emerald-500",
  },
});
</script>
<style lang=""></style>
