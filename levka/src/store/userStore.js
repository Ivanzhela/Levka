import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isAuthenticated: false,
      user: null,
      productsInCart: [],
      favourites: [],
    };
  },
  actions: {
    setUser(profileData) {
      this.user = profileData;
      this.isAuthenticated = true;
      sessionStorage.setItem("user", JSON.stringify(profileData));
    },
    addProductToCart(id) {
        let product = this.productsInCart.find(a => a.hasOwnProperty(id));
        if(!product) {
            this.productsInCart.push({[id] : 1});
        } else {
            product[id] += 1;
        }
    },
    addFavouriteProduct(id) {
      this.favouritesIds.push(id);
    },
    removeFavouriteProduct(id) {
      this.favouritesIds = this.favouritesIds.filter(
        (favourite) => favourite !== id
      );
    },
    getUser() {
      const userData = sessionStorage.getItem("user");
      if (!userData) return;
      this.user = JSON.parse(userData);
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      sessionStorage.removeItem("user");
    },
  },
});
