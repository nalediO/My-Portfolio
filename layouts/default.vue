<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div class="container mx-auto px-4 py-4">
        <!-- Navigation -->
        <header class="flex justify-between items-center mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h1 class="text-2xl font-bold text-blue-700 dark:text-blue-400">My Portfolio</h1>
          <nav class="flex gap-4">
            <NuxtLink to="/" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition duration-200">Home</NuxtLink>
            <NuxtLink to="/projects" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition duration-200">Projects</NuxtLink>
            <NuxtLink to="/contact" class="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition duration-200">Contact</NuxtLink>
            <button @click="toggleDarkMode" class="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-yellow-500 dark:text-blue-300 transition duration-300 hover:bg-gray-300 dark:hover:bg-gray-600">
              <span v-if="!darkMode">🌞</span>
              <span v-else>🌙</span>
            </button>
          </nav>
        </header>
        
        <!-- Page Content -->
        <main class="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <slot />
        </main>
        
        <!-- Footer -->
        <footer class="mt-8 py-4 border-t border-blue-200 dark:border-blue-900 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <p class="text-center text-blue-600 dark:text-blue-400">© ON Mokgothadi</p>
        </footer>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const darkMode = ref(false);
  
  onMounted(() => {
    if (
      localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      darkMode.value = true;
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
  
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    if (darkMode.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  </script>