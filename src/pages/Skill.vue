<template>

<section
class="bg-slate-950 py-24 text-white"
>

<div
class="mx-auto max-w-7xl px-6"
>


<div class="mb-16 text-center">

<p class="text-purple-400 font-semibold">
Skills
</p>


<h2
class="mt-3 text-4xl font-bold"
>
My Tech Stack
</h2>


</div>



<div
class="
grid
grid-cols-2
gap-6
md:grid-cols-3
lg:grid-cols-5
"
>
<div
v-for="skill in skills"
:key="skill.name"

class="
rounded-xl
border
border-slate-800
bg-slate-900
p-6
text-center
transition
hover:-translate-y-2
hover:border-blue-500
"
>


<div
class="text-4xl"
>
{{ skill.icon }}
</div>


<h3
class="mt-4 font-semibold"
>
{{ skill.name }}
</h3>


<p
class="mt-2 text-sm text-slate-400"
>
{{ skill.level }}
</p>


</div>
</div>


</div>

</section>

</template>



<script setup>

const skills = [

{
name:"Laravel",
icon:"🚀",
level:"Advanced"
},

{
name:"Vue.js",
icon:"💚",
level:"Intermediate"
},
{
name:"PHP",
icon:"🐘",
level:"Advanced"
},

{
name:"MySQL",
icon:"🗄️",
level:"Intermediate"
},

{
name:"Tailwind CSS",
icon:"🎨",
level:"Intermediate"
},

{
name:"Git",
icon:"🔧",
level:"Intermediate"
},

{
name:"REST API",
icon:"🌐",
level:"Advanced"
},

{
name:"JavaScript",
icon:"⚡",
level:"Intermediate"
},
{
name:"Linux",
icon:"🐧",
level:"Intermediate"
},

{
name:"Docker",
icon:"🐳",
level:"Learning"
}

]

</script>