<!-- <template>
  <section class="min-h-screen bg-slate-950 py-24 text-white">
    <div class="mx-auto max-w-7xl px-6">
      <div class="mb-14 text-center">
        <p class="text-blue-400 font-semibold">
          Portfolio
        </p>
        <h1 class="mt-3 text-5xl font-bold">
          My Projects
        </h1>
        <p class="mt-5 text-slate-400">
          Here are some of my recent Laravel & Vue.js projects.
        </p>
      </div>
      <div
        class="rounded-2xl border border-slate-800 bg-slate-900 p-16 text-center"
      >
        <h2 class="text-2xl font-semibold">
          🚀 Projects will be loaded from Laravel API
        </h2>
        <p class="mt-4 text-slate-400">
          Next step: Connect this page with your backend using Axios.
        </p>
      </div>
    </div>
  </section>
</template> -->
<template>

<section
class="min-h-screen bg-slate-950 text-white py-20"
>

<div
class="mx-auto max-w-7xl px-6"
>

<h1
class="text-5xl font-bold"
>

Projects

</h1>


<div
v-if="projectStore.loading"
class="mt-10"
>
</div>


<div
v-else-if="projectStore.error"
class="mt-10 text-red-500"
>

{{ projectStore.error }}

</div>



<div
v-else

class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
>
<div

v-for="project in projectStore.projects"

:key="project.id"

class="rounded-2xl bg-slate-900 p-6"
>

<img

v-if="project.image"

:src="'http://127.0.0.1:8000/storage/' + project.image"

class="h-52 w-full rounded-xl object-cover"
/>

<h2

class="mt-5 text-2xl font-bold"
>

{{ project.title }}

</h2>

<p

class="mt-3 text-slate-400"
>

{{ project.description }}

</p>

</div>

</div>
</div>

</section>
</template>
<script setup>
import { onMounted } from "vue";
import { useProjectStore } from "../stores/project";
const projectStore = useProjectStore();
onMounted(() => {
    projectStore.fetchProjects();
});
</script>

