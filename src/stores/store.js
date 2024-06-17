import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "user",
  state: () => ({
    useName: ""
  }),
  actions: {
    setUserName(name) {
      this.userName = name;
    }
  },
  reset() {
    this.userName = "";
  }
});