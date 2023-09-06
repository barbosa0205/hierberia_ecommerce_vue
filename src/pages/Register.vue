<template lang="">
    <section class="w-full min-h-screen flex items-start justify-center">
        <Form>
            <h2 class="text-emerald-600 font-mono font-semibod text-2xl mb-4">Register Form</h2>

            <BaseInput :modelValue="name" @update:modelValue="(newValue) => (name = newValue)" placeholder="Name" />

            <BaseInput :modelValue="email" @update:modelValue="(newValue) => (email = newValue)" placeholder="Email" />
            <BaseInput :modelValue="password" @update:modelValue="(newValue) => (password = newValue)"
                placeholder="Password" type="password" />
            <BaseInput :modelValue="password_confirmation" @update:modelValue="(newValue) => (password_confirmation = newValue)"
                placeholder="Confirm Password" type="password" />
            <FormButton @click.prevent='handleRegister({name,email,password,password_confirmation})'>Sign Up</FormButton>
        </Form>
    </section>
</template>
<script setup>
    import {
        ref
    } from 'vue';
    import {
        useAuthStore
    } from '../stores/useAuthStore';
    import Form from '../components/form/Form.vue'
    import FormButton from '../components/form/FormButton.vue'
    import BaseInput from '../components/form/BaseInput.vue';

    const name = ref('')
    const email = ref('')
    const password = ref('')
    const password_confirmation = ref('')

    const store = useAuthStore()

    const {
        handleRegister
    } = store
</script>
<style lang="">

</style>
