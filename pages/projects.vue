<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-12">
      <!-- Page Header -->
      <header class="mb-12 text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent works showcasing my skills and experience.
        </p>
      </header>

      <!-- Static Projects -->
      <div v-if="staticProjects.length > 0" class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Featured Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="(project, index) in staticProjects"
            :key="'static-'+index"
            :project="project"
          />
        </div>
      </div>

      <!-- GitHub Projects -->
      <div v-if="githubProjects && githubProjects.length > 0" class="mb-16">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          GitHub Repositories
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div 
            v-for="project in githubProjects"
            :key="project.id"
            class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 class="text-xl font-semibold mb-2">
              <a :href="project.html_url" target="_blank" class="hover:text-blue-600 dark:hover:text-blue-400">
                {{ project.name }}
              </a>
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ project.description || 'No description available' }}
            </p>
            <div v-if="project.language" class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
                {{ project.language }}
              </span>
            </div>
            <p class="text-sm text-gray-500 mt-4">
              Last updated: {{ formatDate(project.updated_at) }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="loading" class="text-center py-8">
        <p class="text-gray-600 dark:text-gray-400">Loading projects...</p>
      </div>

      <div v-if="error" class="text-center py-8 text-red-600 dark:text-red-400">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup>
// Initialize with empty array to prevent null errors
const githubProjects = ref([])
const loading = ref(true) // Start in loading state
const error = ref(null)

// Static projects data
const staticProjects = [
  {
    title: "E-commerce Website",
    description: "A full-stack online store with payment integration",
    tags: ["JavaScript", "HTML", "PHP", "MariaDB"],
    image: "/ecom.jpeg",
    github: "https://github.com/nalediO/S1L05_RWD"
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
    description: "A mini Rock, Paper, Scissors Game built with C#",
    tags: ["C#"],
    image: "/rps.png",
    github: "https://github.com/nalediO/Practical-1"
  }
]

// Fetch GitHub projects
onMounted(async () => {
  try {
    const { data } = await useFetch(
      'https://api.github.com/users/nalediO/repos?sort=updated&per_page=3'
    )
    githubProjects.value = data.value || [] // Ensure it's never null
  } catch (err) {
    error.value = 'Failed to load GitHub projects. Please try again later.'
    console.error('GitHub API error:', err)
  } finally {
    loading.value = false
  }
})

// Date formatter
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>