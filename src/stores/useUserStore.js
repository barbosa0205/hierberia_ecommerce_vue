import { defineStore } from 'pinia'
import { ref } from 'vue';
import axios from "../axios"

export const useUserStore = defineStore('user', () => {

const user = ref(null);

const getUser = async () => {
    try {
      const data = await axios.get('/api/user')
    user.value = data.data
    return data.data
    } catch (error) {
      if(error.response.status === 401) {
        //Not login in
        console.log('unauthorized')
      }
    }
    }

return {user,getUser};
})