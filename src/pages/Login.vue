<template lang="">
        <section class="w-full min-h-screen flex flex-col items-center justify-start">
            <div v-if="errors" class="mx-auto mt-10 px-2">
                <ul v-for="error in errors">
                <li v-for="err in error" class="my-2 text-sm font-mono font-semibold text-white rounded-md bg-rose-500 p-2 shadow-sm shadow-slate-300">-{{err}}</li>
                </ul>
            </div>
            <template v-else></template>
            <Form>
                <h2 class="text-emerald-600 font-mono font-semibod text-2xl mb-4">Login Form</h2>
                <BaseInput :modelValue="email" @update:modelValue="(newValue) => (email = newValue)" placeholder="Email"/>
                <BaseInput 
                    :modelValue="password" 
                    @update:modelValue="(newValue) => (password = newValue)" 
                    placeholder="Password"  
                    type="password"
                    />
                    <FormButton @click.prevent="handleLogin({email,password})">Sign In</FormButton>
                </Form>
        </section>
</template>
<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../stores/useAuthStore';
import Form from '../components/form/Form.vue'
import FormButton from '../components/form/FormButton.vue'
import BaseInput from '../components/form/BaseInput.vue'

const email = ref('')
const password = ref('')

const store = useAuthStore()



const {handleLogin} = store

const {errors} = storeToRefs(store)


</script>
<style lang="scss">
    
</style>