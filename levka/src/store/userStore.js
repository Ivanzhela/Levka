import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isAuthenticated: false,
      user: null
    };
  },
  actions: {
    setUser(profileData) {
      console.log(Object.assign({}, profileData));
      this.user = profileData;
      this.isAuthenticated = true;
      sessionStorage.setItem("user", JSON.stringify(profileData));
    },
    setSessionUser() {
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
