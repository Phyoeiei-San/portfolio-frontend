<template>
  <section class="min-h-screen bg-slate-950 py-24 text-white">
    <div class="mx-auto max-w-7xl px-6">
      <div class="mb-16 text-center">
        <p class="font-semibold text-blue-400">Portfolio</p>
        <h1 class="mt-3 text-5xl font-bold">My Projects</h1>
        <p class="mt-5 text-slate-400">Laravel & Vue.js Projects</p>
      </div>
      <div
        v-if="projectStore.loading"
        class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="n in 6"
          :key="n"
          class="animate-pulse rounded-2xl bg-slate-900 p-6"
        >
          <div class="h-52 rounded bg-slate-800"></div>
          <div class="mt-6 h-6 rounded bg-slate-800"></div>
          <div class="mt-4 h-4 rounded bg-slate-800"></div>
          <div class="mt-2 h-4 w-2/3 rounded bg-slate-800"></div>
        </div>
      </div>
      <div v-else-if="projectStore.error" class="text-center text-red-500">
        {{ projectStore.error }}
      </div>
      <div v-else class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="project in projectStore.projects"
          :key="project.id"
          class="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:-translate-y-2 hover:border-blue-500"
        >
        <RouterLink
    :to="`/projects/${project.id}`"
>
          <img
            v-if="project.image"
            :src="BASE_URL + '/storage/' + project.image"
            class="h-60 w-full object-cover"
          />
          <div class="p-6">
            <h2 class="text-2xl font-bold">
              {{ project.title }}
            </h2>
            <p class="mt-4 text-slate-400">
              {{ project.description }}
            </p>
            <div v-if="project.tech_stack" class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech_stack"
                :key="tech"
                class="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-300"
              >
                {{ tech }}
              </span>
            </div>
            <div class="mt-8 flex gap-3">
              <a
                v-if="project.github_link"
                :href="project.github_link"
                target="_blank"
                class="rounded-lg bg-slate-800 px-5 py-2 transition hover:bg-slate-700"
              >
                GitHub
              </a>
              <a
                v-if="project.live_demo"
                :href="project.live_demo"
                target="_blank"
                class="rounded-lg bg-blue-600 px-5 py-2 transition hover:bg-blue-700"
              >
                Live Demo
              </a>
            </div>
          </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { BASE_URL } from "../services/api.js";
import { onMounted } from "vue";
import { useProjectStore } from "../stores/project";
const projectStore = useProjectStore();
onMounted(() => {
  projectStore.fetchProjects();
});
</script>
