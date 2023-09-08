import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "../axios";

export const useProductsStore = defineStore("products", () => {
  const newProducts = ref([]);
  const productDetails = ref(null);
  const categories = ref([]);

  const getProducts = async (url) => {
    try {
      const { data } = await axios.get(url);
      newProducts.value = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (slug) => {
    try {
      const product = await axios.get(`/api/products/${slug}`);
      return product;
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async (url) => {
    try {
      const { data } = await axios.get(url);
      categories.value = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    newProducts,
    categories,
    productDetails,
    getProduct,
    getProducts,
    getCategories,
  };
});
