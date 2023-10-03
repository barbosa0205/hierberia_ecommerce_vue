import { defineStore } from "pinia";
import { onMounted, onUnmounted, ref } from "vue";


export const useDimensionsStore = defineStore("dimensions", () => {
 
    const width = ref(0);

    onMounted(() => {
        window.addEventListener("resize", myEventHandler);
        width.value = window.innerWidth;
      });
      
      onUnmounted(() => clearInterval(myEventHandler));
      
      const myEventHandler = (e) => {
        width.value = e.currentTarget.innerWidth;
      };
  return {
    width
  };
});
