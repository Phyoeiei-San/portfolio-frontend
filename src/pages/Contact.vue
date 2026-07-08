<template>
  <section class="min-h-screen bg-slate-950 py-24 text-white">
    <div class="mx-auto max-w-3xl px-6">

      <div class="mb-12 text-center">
        <p class="text-blue-400 font-semibold">
          Contact
        </p>
        <h1 class="mt-3 text-5xl font-bold">
          Get In Touch
        </h1>
        <p class="mt-5 text-slate-400">
          Have a project in mind? Feel free to send me a message.
        </p>
      </div>
      <form
        class="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-8"
      >
        <input
          type="text"
          placeholder="Your Name"
          class="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          class="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
        />
         <input
          type="text"
          placeholder="Subject"
          class="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
        />
        <textarea
          rows="6"
          placeholder="Message"
          class="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-blue-500"
        ></textarea>
        <button
          type="submit"
          class="w-full rounded-xl bg-blue-600 py-4 font-semibold transition hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

