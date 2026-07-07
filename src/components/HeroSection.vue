<template>
  <section
    class="relative overflow-hidden bg-slate-950 text-white min-h-[90vh] flex items-center"
  >
    <div
      class="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
    ></div>

    <div
      class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"
    ></div>
    <div
      class="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 py-20 lg:flex-row"
    >
      <!-- Left -->
      <div class="flex-1 text-center lg:text-left">
        <p class="mb-4 text-blue-400 font-semibold">👋 Hello, I'm</p>

        <h1 class="text-5xl font-extrabold leading-tight lg:text-7xl">
          <span
            class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Phyo Ei San
          </span>
        </h1>
        <h2 class="mt-6 text-2xl font-semibold text-slate-300">
          Laravel Full Stack Developer
        </h2>
        <p class="mt-6 max-w-xl text-lg leading-8 text-slate-400">
          I build fast, scalable and modern web applications using Laravel,
          Vue.js and MySQL.
        </p>
        <div class="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
          <button
            class="rounded-xl bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700"
          >
            View Projects
          </button>
          <button
            class="rounded-xl border border-slate-700 px-7 py-3 font-semibold transition hover:bg-slate-800"
          >
            Contact Me
          </button>
        </div>
      </div>
      <!-- Right -->
      <div class="flex flex-1 justify-center">
        <div class="relative">
          <!-- Glow -->
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-30"
          ></div>
          <!-- Profile Image -->
          <img
            :src="profileImage"
            alt="Phyo Ei San"
            class="relative h-80 w-80 rounded-full border-4 border-slate-700 object-cover shadow-2xl transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import profileImage from "../assets/images/pes.png";
</script>
