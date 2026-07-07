<template>
  <nav
    class="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <h1
        class="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent"
      >
        Phyo Ei
      </h1>

      <div class="flex gap-6 text-slate-300">
        <RouterLink class="rounded-xl border border-slate-700 px-7 py-3 font-semibold transition hover:bg-slate-800" to="/">Home</RouterLink>
        <RouterLink class="rounded-xl border border-slate-700 px-7 py-3 font-semibold transition hover:bg-slate-800" to="/about">About</RouterLink>
        <RouterLink
          to="/projects"
        class="rounded-xl border border-slate-700 px-7 py-3 font-semibold transition hover:bg-slate-800"
        >
          View Projects
        </RouterLink>
        <RouterLink
          to="/contact"
          class="rounded-xl border border-slate-700 px-7 py-3 font-semibold transition hover:bg-slate-800"
        >
          Contact Me
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
