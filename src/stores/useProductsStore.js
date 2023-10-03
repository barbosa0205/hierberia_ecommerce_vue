import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import axios from "../axios";
import { useUserStore } from "./useUserStore";
import { useRouter } from "vue-router";

export const useProductsStore = defineStore("products", () => {
  const cartItems = ref({
    products: [],
    total: 0.0,
  });
  const cartTotal = ref(0.0);
  const newProducts = ref([]);
  const productDetails = ref(null);

  //User store
  const userStore = useUserStore();

  const router = useRouter();

  const getProducts = async (url) => {
    try {
      const { data } = await axios.get(url);
      newProducts.value = data;
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

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  //Añade un producto al Carrito
  const addCartItem = (product) => {
    if (!userStore.user?.id) {
      return router.push({ name: "Login" });
    }
    product = { ...product, qty: 1 };
    const isInCart = cartItems.value.products.find(
      (pdt) => pdt.id === product.id
    );
    if (!isInCart) {
      cartItems.value.products.push(product);
      const productPrice = parseFloat(product.price);

      //Aumenta el total
      addTotal(productPrice);
    }
  };

  const removeCartItem = (cartItem) => {
    const newCartItems = cartItems.value.products.filter(
      (pdt) => pdt.id !== cartItem.id
    );
    cartItems.value.products = newCartItems;

    //rest the total
    const total = cartItems.value.total - cartItem.price * cartItem.qty;

    const newTotal = Math.round(total * 100) / 100;

    cartItems.value.total = newTotal;
  };

  const addItemQty = (id) => {
    const item = cartItems.value.products.find((item) => item.id === id);

    item.qty = item.qty + 1;
    const itemPrice = parseFloat(item.price);

    addTotal(itemPrice);
  };

  const restItemQty = (id) => {
    const item = cartItems.value.products.find((item) => item.id === id);
    if (item.qty > 1) {
      item.qty = item.qty - 1;

      const itemPrice = parseFloat(item.price);

      restTotal(itemPrice);
    }
  };

  //Aumenta el total

  const addTotal = (price) => {
    const total = cartItems.value.total + price;

    const newTotal = Math.round(total * 100) / 100;

    console.log({ price, total, newTotal });

    cartItems.value.total = newTotal;
  };

  //Resta el total
  const restTotal = (price) => {
    const total = cartItems.value.total - price;

    const newTotal = Math.round(total * 100) / 100;

    cartItems.value.total = newTotal;
  };

  // const totalComputed = computed(() => {
  //   return cartItems.value.products.reduce(
  //     (sum, p) => sum + Number(p.price),
  //     0
  //   );
  // });

  return {
    cartItems,
    cartTotal,
    newProducts,
    productDetails,
    getProduct,
    getProducts,
    getCategories,
    getCategory,
    getProductsByCategory,
    addCartItem,
    removeCartItem,
    addTotal,
    restTotal,
    addItemQty,
    restItemQty,
    // totalComputed,
  };
});
