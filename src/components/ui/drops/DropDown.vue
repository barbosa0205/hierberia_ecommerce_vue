<template lang="">
  <div @click="toggleItems" class="w-full flex justify-between items-center">
    <slot></slot>
    <i class="ri-arrow-down-s-line p-2 text-xl cursor-pointer"></i>
  </div>
  <Transition>
    <ul v-if="isOpen">
      <router-link
        :to="`/categories/${item.slug}`"
        class="w-full block border-b first:border-t border-slate-200 my-1 py-[.1rem] text-sm"
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item.name }}
      </router-link>
    </ul>
  </Transition>
</template>
<script setup>
import { defineProps, ref, toRefs, onMounted } from "vue";
const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
});

const { items } = toRefs(props);

const isOpen = ref(false);

const toggleItems = () => {
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  console.log("items", items.value[0].name);
});
</script>
<style lang=""></style>
