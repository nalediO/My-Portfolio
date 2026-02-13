<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      
      <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Have a project in mind or want to collaborate? Reach out to me!
        </p>

        <form
        
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
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
</template>

<script setup>

import { onMounted } from 'vue';

onMounted(() => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
});

const handleSubmit = event => {
  event.preventDefault();
  
  const myForm = event.target;
  const formData = new FormData(myForm);
  
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => alert("Form successfully submitted"))
    .catch(error => alert(error));
};


const socials = [
  { name: 'GitHub', icon: 'i-uil-github', url: 'https://github.com/nalediO' },
  { name: 'LinkedIn', icon: 'i-uil-linkedin', url: 'https://linkedin.com/in/omphemetse-mokgothadi' },
  { name: 'Email', icon: 'i-uil-envelope', url: 'mailto:omphemetsenaledi45@gmail.com' }
]
</script>
