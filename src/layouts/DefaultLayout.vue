<template>
  <Navbar />
  <main class="min-h-screen">
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";
</script>