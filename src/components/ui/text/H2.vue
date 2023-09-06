<template lang="">
   <h2 v-if="title" class="text-lg mb-4 border-b border-slate-300">{{title}}</h2>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
   title:{
      type: String,
      
   }
})

</script>
<style lang="">
    
</style>