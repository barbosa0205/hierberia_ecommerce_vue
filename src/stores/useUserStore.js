import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import axios from "../axios";
import { useRouter } from "vue-router";
import { useProductsStore } from "./useProductsStore";
export const useUserStore = defineStore("user", () => {
  const router = useRouter();

  const user = ref(null);

  const productStore = useProductsStore();

  const { productDetails } = storeToRefs(productStore);

  const getUser = async () => {
    try {
      const data = await axios.get("/api/user");
      user.value = data.data;
      return data.data;
    } catch (error) {
      if (error.response.status === 401) {
        //Not login in
        console.log("unauthorized");
      }
    }
  };

  // Favorite

  const toggleFavorite = async (productId, isFavorite) => {
    try {
      if (user.value) {
        console.log(isFavorite);
        if (isFavorite.length) {
          //Remove from favorites
          const data = await axios.delete(
            `/api/favorites/${user.value.id}/${productId}`,
            {
              userId: user.value.id,
              productId,
            }
          );
          //change is_favorite on productDetails
          if (data.status === 200) {
            productDetails.value.is_favorite = [];
          }
        } else {
          //Add to favorite

          const data = await axios.post("/api/favorite", {
            userId: user.value.id,
            productId,
          });
          console.log({ data });

          if (data.status === 200) {
            productDetails.value.is_favorite = [data.data.data];
          }
        }
      } else {
        console.log("wasant");
        router.push({ name: "Login" });
      }
    } catch (error) {}
  };

  const getFavorites = async (userId) => {
    const data = await axios.get(`/api/favorites?userId=${userId}`);
    console.log({ data });
  };

  return { user, getUser, toggleFavorite, getFavorites };
});
