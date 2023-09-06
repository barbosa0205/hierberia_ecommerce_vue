<template lang="">
 <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder" class="w-full outline-none my-2 py-1 px-2 border border-slate-100 rounded-sm"/>
</template>
<script setup>
import { defineProps } from 'vue';
    defineProps({   
        modelValue: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        }
    })
</script>
<style lang="">
    
</style>