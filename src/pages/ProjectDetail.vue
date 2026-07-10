<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProjectStore } from "../stores/project";
const route = useRoute();
const store = useProjectStore();
onMounted(() => {
    store.fetchProjectDetail(route.params.id);
});
</script>
<template>
<div
class="min-h-screen bg-slate-950 text-white"
>
<div
v-if="store.project"
class="mx-auto max-w-5xl px-6 py-20"
>
<img
:src="'http://127.0.0.1:8000/storage/' + store.project.image"
class="rounded-2xl"
/>
<h1
class="mt-10 text-5xl font-bold"
>
{{ store.project.title }}
</h1>
<p
class="mt-8 text-slate-400"
>
{{ store.project.description }}
</p>
</div>

</div>
</template>