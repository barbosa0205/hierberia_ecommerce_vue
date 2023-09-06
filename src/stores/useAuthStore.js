import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue';
import axios from "../axios"
import { useRouter } from "vue-router";
import {useUserStore} from './useUserStore'

export const useAuthStore = defineStore('auth', () => {

  const userStore = useUserStore()

  const {getUser} = userStore
  const {user} = storeToRefs(userStore)
const router = useRouter();


const errors = ref(null)

const getCSRF = async () => {
await axios.get('/sanctum/csrf-cookie')
}

const handleLogin = async ({email,password}) => {
try {
await getCSRF()
await axios.post("/login", {
email,
password,
});

router.push({ name: "Home" });

} catch (error) {
if(error.response.status === 422) {
errors.value = error.response.data.errors;
}}};

const handleRegister = async ({name,email,password, password_confirmation}) => {
try {
await getCSRF()
await axios.post("/register", {
name,email,password, password_confirmation
});
router.push('/')
} catch (error) {
console.log(error)
}
}



const logout = async () => {
try {
  await getCSRF()
  await axios.post('/logout')
  user.value = null
  router.push({name:'Login'})
} catch (error) {
  console.log(error)
}
}

return {errors, handleLogin, handleRegister, logout, getUser };
})
