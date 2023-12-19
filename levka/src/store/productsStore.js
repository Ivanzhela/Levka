import { defineStore } from "pinia";
import { getAllProducts } from "../dataProviders/products";
export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      products: null,
    };
  },
  actions: {
    async setProducts() {
      await getAllProducts({}).then((p) => {this.products = p});
    }
  },
});
