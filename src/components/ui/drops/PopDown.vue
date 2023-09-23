<template lang="">
  <div
    :class="`${isOpen} absolute top-10 right-0 p-4 bg-slate-100 rounded-md min-w-[12rem] min-h-[5rem] shadow-md shadow-slate-500 z-10 ${otherStyles}`"
  >
    <slot></slot>
  </div>
</template>
<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  toggle: {
    type: Boolean,
  },
  otherStyles: {
    type: String,
    default: "",
  },
});

const isOpen = computed(() => {
  return props.toggle ? "visible" : "hidden";
});
</script>
<style lang=""></style>
