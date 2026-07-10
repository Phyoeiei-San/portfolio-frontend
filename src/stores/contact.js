import { defineStore } from "pinia";
import api from "../services/api";

export const useContactStore = defineStore("contact", {
  state: () => ({
    loading: false,
    success: "",
    error: "",
  }),

  actions: {
    async sendMessage(form) {
      this.loading = true;
      this.success = "";
      this.error = "";

      try {
        const response = await api.post("/messages", form);

        this.success = response.data.message;
      } catch (error) {
        if (error.response) {
          this.error = error.response.data.message || "Something went wrong.";
        } else {
          this.error = error.message;
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
