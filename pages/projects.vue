<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-12">
      
      <header class="mb-12 text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent works showcasing my skills and experience.
        </p>
      </header>

      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="(project, index) in projec"
          :key="index"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

const projec = [
  {
    title: "E-commerce Website",
    description: "A full-stack online store with payment integration",
    tags: ["JavaScript", "HTML", "PHP", "MariaDB"],
    image: "/ecom.jpeg",
    github: "hhttps://github.com/nalediO/S1L05_RWD"
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with modern technologies",
    tags: ["Nuxt", "Tailwind CSS", "Vue"],
    image: "/pot.png",
    github: "https://github.com/nalediO/omphemetseStudyGroup"
  },
  {
    title: "Mini Game",
    description: "A mini Rock, Paper, Scessor Game built with C#",
    tags: ["C#"],
    image: "/rps.png",
    github: "https://github.com/nalediO/Practical-1"
  },

]
</script>
