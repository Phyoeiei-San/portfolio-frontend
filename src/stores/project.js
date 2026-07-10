import { defineStore } from "pinia";
import api from "../services/api";

export const useProjectStore = defineStore("projects", {
  state: () => ({
    projects: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProjects() {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.get("/projects");
        this.projects = response.data.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async fetchProjectDetail(id) {
      this.loading = true;
      try {
        const response = await api.get(`/projects/${id}`);
        this.project = response.data.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
