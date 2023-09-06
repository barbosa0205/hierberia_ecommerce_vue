<template lang="">
 <button class="w-full font-mono mt-5 px-4 py-1 text-slate-800 bg-slate-200 hover:text-white hover:bg-emerald-500 duration-100 transition-all rounded-sm"><slot></slot></button>
</template>
<script setup>
const props = defineProps(['onClickRequest'])
</script>
<style lang="">
    
</style>