<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-12">
      
      <header class="mb-12 text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Reach out to me!
        </p>
      </header>

     
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              @submit.prevent="handleSubmit"
              class="space-y-6"
          >
           <input type="hidden" name="form-name" value="contact">
  
          <div>
                <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
            <input
                v-model="form.name"
                type="text"
                id="name"
                name="name"
                required
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              name="email"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            >
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
            <textarea
              v-model="form.message"
              id="message"
              name="message"
              rows="5"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>

         <button
           type="submit"
           class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
         >
           Send Message
         </button>
          </form>
        </div>

  
        <div class="space-y-6">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
            
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <Icon name="heroicons:envelope" class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <a href="mailto:omphemetsenaledi45@gmail.com" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    omphemetsenaledi45@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <Icon name="heroicons:phone" class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                  <a href="tel:+1234567890" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    +27 12 345 6789
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <Icon name="heroicons:map-pin" class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 class="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                  <p class="text-gray-600 dark:text-gray-300">Pretoria, South Africa</p>
                </div>
              </div>
            </div>

            
            <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect With Me</h3>
              <div class="flex gap-4">
                <a 
                  v-for="(social, i) in socials" 
                  :key="i" 
                  :href="social.url" 
                  target="_blank"
                  class="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all"
                  :aria-label="social.name"
                >
                  <Icon :name="social.icon" size="1.5rem" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const handleSubmit = () => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': 'contact',
      ...form
    })
  })
  .then(() => alert('Message sent successfully!'))
  .catch(error => alert('Error: ' + error))
}

const socials = [
  { name: 'GitHub', icon: 'i-uil-github', url: 'https://github.com/nalediO' },
  { name: 'LinkedIn', icon: 'i-uil-linkedin', url: 'https://linkedin.com/in/yourusername' },
  { name: 'Email', icon: 'i-uil-envelope', url: 'mailto:omphemetsenaledi45@gmail.com' }
]


</script>