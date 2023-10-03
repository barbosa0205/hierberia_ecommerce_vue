<template lang="">
<td class="text-center w-min text-sm border-r ss:text-lg">{{cartItem.index +1}}</td>
        <td class="flex items-center px-1 ss:px-5 ss:text-lg">
                        <div class="flex justify-center items-center">
                            <img class="w-[3rem] h-[3rem] rounded-full my-1" :src="cartItem.image" alt="">
                        <p class="text-center overflow-hidden text-ellipsis whitespace-nowrap mx-2" :title="cartItem.name">{{cartItem.name}}</p>
                        </div>
                    </td>
                    <td class="text-sm text-center px-1 ss:px-5 ss:text-lg">
                        <p class="font-semibold text-emerald-600"><span>$</span>{{cartItem.price}} <small class="text-slate-800">MXN</small></p>
                    </td>
                    <td class="text-center text-sm ss:text-lg">
                        <div class="flex flex-col">
                            <i @click="restItem" class="ri-arrow-left-s-line bg-indigo-100 rounded-sm mx-3 p-1 cursor-pointer"></i>
                            <span>{{qty}}</span>
                            <i @click="addItem" class="ri-arrow-right-s-line bg-indigo-100 rounded-sm mx-3 p-1 cursor-pointer"></i>
                        </div>
                    </td>
                    <td class="px">
                        <i class="ri-close-line text-rose-500"></i>
                    </td>
</template>
<script setup>
import { computed, defineProps, ref } from "vue";

   const props = defineProps({
        cartItem: {
            type: Object,
            default:null
        }
    })

    const qty = ref(1)

    const addItem = () => {
        qty.value = qty.value + 1
    }

    const restItem = () => {
        if(qty.value > 1) {
            qty.value = qty.value - 1
        }
    }

    const arrowDirection = computed(() => {
    
    })

</script>
<style lang="">
    
</style>