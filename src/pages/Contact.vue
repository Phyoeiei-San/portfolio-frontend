
<template>
  <section class="min-h-screen bg-slate-950 py-20 text-white">
    <div class="mx-auto max-w-3xl px-6">
      <h1 class="mb-10 text-center text-5xl font-bold">
        Contact Me
      </h1>
      <form
        @submit.prevent="submit"
        class="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-8"
      >
        <input
          v-model="form.name"
          type="text"
          placeholder="Your Name"
          class="w-full rounded-lg border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
        />
         <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="w-full rounded-lg border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
        />
        <input
          v-model="form.subject"
          type="text"
          placeholder="Subject"
          class="w-full rounded-lg border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
        />
        <textarea
          v-model="form.message"
          rows="6"
          placeholder="Message..."
          class="w-full rounded-lg border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
        ></textarea>
        <button
          :disabled="store.loading"
          class="w-full rounded-lg bg-blue-600 py-4 font-semibold transition hover:bg-blue-700 disabled:opacity-50"
        >
          {{ store.loading ? "Sending..." : "Send Message" }}
        </button>
        <p
          v-if="store.success"
          class="text-green-400"
        >
          {{ store.success }}
        </p>
        <p
          v-if="store.error"
          class="text-red-400"
        >
          {{ store.error }}
        </p>
      </form>
    </div>
  </section>
</template>
<script setup>
import { reactive } from "vue";
import { useContactStore } from "../stores/contact";
const store = useContactStore();
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submit = async () => {
  await store.sendMessage(form);

  if (store.success) {
    form.name = "";
    form.email = "";
    form.subject = "";
    form.message = "";
  }
};
</script>

