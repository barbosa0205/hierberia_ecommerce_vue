<template lang="">
     <section class="w-full p-2 py-3 px-3 mt-10">
     
    <H2 :title="title"/>
     
    <ul class="w-full flex overflow-x-scroll">
      <slot></slot>
      </ul>
     </section>
</template>
<script setup>
import { defineProps } from "vue";
import H2 from "./ui/text/H2.vue";
   defineProps({
        title: {
            type: String,
            default: ''
    }
})
</script>
<style lang="">
    
</style>