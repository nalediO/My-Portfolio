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
          View All Projects
        </NuxtLink>

        <div class="mt-8 flex gap-6 justify-center">
          <a 
            v-for="(social, i) in socials" 
            :key="i" 
            :href="social.url" 
            target="_blank"
            class="p-3 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all"
            :aria-label="social.name"
          >
            <Icon :name="social.icon" size="1.5rem" />
          </a>
        </div>
      </section>
    </div>
  </div>


  <!-- /////////////////////////////////////////// -->
    <div class="mb-8">
    
    <div 
      v-if="isLoading" 
      class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center"
    >
      <div class="flex justify-center items-center space-x-2">
        <svg class="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="text-gray-600 dark:text-gray-300">Loading weather data...</span>
      </div>
    </div>

   
    <div 
      v-else-if="weatherError" 
      class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4"
    >
      <div class="flex items-start">
        <svg class="h-5 w-5 text-red-500 dark:text-red-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
        <div>
          <h3 class="text-sm font-medium text-red-800 dark:text-red-200">Weather unavailable</h3>
          <p class="text-sm text-red-700 dark:text-red-300 mt-1">{{ weatherError }}</p>
        </div>
      </div>
    </div>


    <div 
      v-else-if="weatherData" 
      class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
    >
      <div class="p-6">

        <div class="flex items-center mb-4">
          <svg class="w-5 h-5 text-blue-500 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Weather in {{ weatherData.name }}
          </h3>
        </div>

 
        <div class="flex items-center justify-between">
          <div>
   
            <p class="text-5xl font-bold text-gray-900 dark:text-white">
              {{ Math.round(weatherData.main.temp) }}°C
            </p>
            
           
            <p class="text-lg text-gray-600 dark:text-gray-300 capitalize mt-1">
              {{ weatherData.weather[0].description }}
            </p>
          </div>

  
          <img 
            :src="`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`" 
            :alt="weatherData.weather[0].main"
            class="w-24 h-24"
          >
        </div>


        <div class="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="text-center">
            <p class="text-sm text-gray-500 dark:text-gray-400">Feels Like</p>
            <p class="text-lg font-medium text-gray-900 dark:text-white">
              {{ Math.round(weatherData.main.feels_like) }}°C
            </p>
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
            <p class="text-lg font-medium text-gray-900 dark:text-white">
              {{ weatherData.main.humidity }}%
            </p>
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-500 dark:text-gray-400">Wind</p>
            <p class="text-lg font-medium text-gray-900 dark:text-white">
              {{ Math.round(weatherData.wind.speed * 3.6) }} km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>




</template>

<script setup>

const skills = [
  {
    name: 'Web Development',
    icon: 'i-heroicons-code-bracket', 
    description: 'Building responsive websites with modern frameworks'
  },
  {
    name: 'Front-end',
    icon: 'i-heroicons-computer-desktop',
    description: 'HTML, Vue, Nuxt, Tailwind CSS, and JavaScript'
  },
  {
    name: 'Back-end',
    icon: 'i-heroicons-server',
    description: 'Node.js, Express, php and SQL'
  }
];

const socials = [
  { 
    name: 'GitHub', 
    icon: 'i-uil-github',
    url: 'https://github.com/nalediO' 
  },
  { 
    name: 'LinkedIn', 
    icon: 'i-uil-linkedin', 
    url: 'https://linkedin.com/in/omphemetse-mokgothadi' 
  },
  { 
    name: 'Email', 
    icon: 'i-heroicons-envelope', 
    url: 'mailto:omphemetsenaledi45@gmail.com' 
  }
];




const config = useRuntimeConfig()
const weatherData = ref(null)
const weatherError = ref(null)
const isLoading = ref(true)

onMounted(async () => {
  try {
    const { data, error } = await useFetch(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        query: {
          q: 'Pretoria',
          appid: config.public.weatherApiKey,
          units: 'metric'
        }
      }
    )

    if (error.value) {
      throw new Error(error.value.message)
    }

    if (!data.value || data.value.cod !== 200) {
      throw new Error(data.value?.message || 'Invalid response format')
    }

    weatherData.value = data.value
  } catch (error) {
    weatherError.value = `Failed to load weather: ${error.message}`
    console.error('API Error:', {
      error,
      config: config.public
    })
  } finally {
    isLoading.value = false
  }
});


</script>