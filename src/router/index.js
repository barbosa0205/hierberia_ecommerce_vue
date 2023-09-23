import { createRouter, createWebHistory } from "vue-router";
import axios from "../axios";
import { storeToRefs } from "pinia";
import Home from "../pages/Home.vue";
import { useUserStore } from "../stores/useUserStore";

// defining routes
const routes = [
  // Home
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  // Auth
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../pages/Register.vue"),
  },

  //Profile
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../pages/profile/index.vue"),
    meta: {
      requiresAuth: true,
    },
  },

  //Products
  {
    path: "/products",
    name: "Products",
    component: () => import("../pages/products/index.vue"),
  },
  {
    path: "/products/:productSlug",
    name: "ProductDetails",
    component: () => import("../pages/products/ProductDetails.vue"),
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: () => import("../pages/Favorites.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/categories",
    name: "Categories",
    component: () => import("../pages/categories/index.vue"),
  },
  {
    path: "/categories/:categorySlug",
    component: () => import("../pages/categories/Category.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../pages/dashboard/index.vue"),
    meta: {
      hideNavbar: true,
      hideFooter: true,
    },
    children: [
      {
        path: "home",
        components: {
          home: () => import("../pages/dashboard/Home.vue"),
        },
      },
    ],
  },
];

// creating router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();

  if (to.matched.some((route) => route.meta.requiresAuth)) {
    const userData = await userStore.getUser();

    if (!userStore.user) {
      next({ name: "Login" });
    }
  }

  next();
});

export default router;
