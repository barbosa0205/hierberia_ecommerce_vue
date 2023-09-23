import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "../axios";

export const useProductsStore = defineStore("products", () => {
  const cartItems = ref([]);
  const newProducts = ref([]);
  const productDetails = ref(null);

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
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async (slug) => {
    try {
      const { data } = await axios.get(`/api/categories/${slug}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByCategory = async (category) => {
    try {
      const { data } = await axios.get(`/api/products?category=${category}`);
      console.log({ data });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const addProductToCart = (product) => {
    const isInCart = cartItems.value.find((pdt) => pdt.id === product.id);
    if (!isInCart) cartItems.value.push(product);
  };

  return {
    cartItems,
    newProducts,
    productDetails,
    getProduct,
    getProducts,
    getCategories,
    getCategory,
    getProductsByCategory,
    addProductToCart,
  };
});
