<template lang="">
  <button
    :class="
      'px-2 py-1 bg-emerald-500 text-white font-semibold rounded-sm ' + styles
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
});
</script>
<style lang=""></style>
