<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 py-12">
        
        <section class="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div class="flex-shrink-0">
            <NuxtImg
              src="/image3.jpg"
              alt="Naledi"
              class="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500 dark:border-blue-400 shadow-lg"
              width="256"
              height="256"
            />
          </div>
  
          <div class="flex-1">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              Hi, I'm <span class="text-blue-600 dark:text-blue-400">Omphemetse Mokgothadi</span>
            </h1>
            <h2 class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              Web Developer | Designer
            </h2>
            <p class="text-gray-700 dark:text-gray-300 text-lg max-w-2xl">
              I'm a passionate developer with expertise in modern web technologies. 
              I love creating beautiful, functional websites and applications that 
              solve real problems. When I'm not coding, you can find me playing soccer, 
              reading, or taking long walks.
            </p>
          </div>
        </section>
  
        
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            My Skills
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div 
              v-for="(skill, index) in skills"
              :key="index"
              class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div class="text-blue-600 dark:text-blue-400 text-4xl mb-3">
                <Icon :name="skill.icon" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {{ skill.name }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                {{ skill.description }}
              </p>
            </div>
          </div>
        </section>
  
        
        <section class="text-center">
          <NuxtLink 
            to="/projects" 
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            View My Projects
          </NuxtLink>
          

          <div class="mt-8 flex gap-6 justify-center">
            <a 
              v-for="(social, i) in socials" 
              :key="i" 
              :href="social.url" 
              target="_blank"
              class="p-3   text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" size="1.5rem" />
            </a>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const skills = [
    {
      name: 'Web Development',
      icon: 'i-uil-code',
      description: 'Building responsive websites with modern frameworks'
    },
    {
      name: 'Front-end',
      icon: 'i-uil-desktop',
      description: 'HTML, Vue, Nuxt, Tailwind CSS, and JavaScript'
    },
    {
      name: 'Back-end',
      icon: 'i-heroicons-server',
      description: 'Node.js, Express, PHP and SQL'
    }
  ]
  
  const socials = [
    { 
      name: 'GitHub', 
      icon: 'i-uil-github', 
      url: 'https://github.com/nalediO/nalediO' 
    },
    { 
      name: 'LinkedIn', 
      icon: 'i-uil-linkedin', 
      url: 'https://linkedin.com/in/yourusername' 
    },
    { 
      name: 'Email', 
      icon: 'i-uil-envelope', 
      url: 'mailto:omphemetsenaledi45@gmail.com' 
    }
  ]
  </script>