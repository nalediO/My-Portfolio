<template>
    <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <!-- Project Image -->
      <NuxtImg 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-48 object-cover"
        width="400"
        height="240"
      />
      
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
        
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            v-for="(tag, index) in project.tags"
            :key="index"
            class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm rounded-full"
          >
            {{ tag }}
          </span>
        </div>
        
        <!-- Buttons -->
        <div class="flex gap-3">
          <a 
            v-if="project.github"
            :href="project.github"
            target="_blank"
            class="flex-1 text-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    project: {
      type: Object,
      required: true
    }
  })
  </script>