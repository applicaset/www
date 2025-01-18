<template>
  <div>
    <header class="border-b border-teal-700/20 bg-white sticky top-0 z-50">
      <nav class="container mx-auto p-2 flex justify-between items-center">
        <a href="#" class="flex items-center">
          <img src="~/assets/images/logo.svg" alt="ApplicaSet" width="48" height="48">
          <span class="mx-2">ApplicaSet</span>
        </a>
        <ul class="flex-row gap-4 hidden sm:flex">
          <li>
            <a href="#services" class="p-2">
              Services
            </a>
          </li>
          <li v-if="false">
            <a href="#paas" class="p-2">
              PaaS
            </a>
          </li>
          <li v-if="false">
            <a href="#pricing" class="p-2">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" class="p-2">
              Contact
            </a>
          </li>
          <li>
            <a href="#about" class="p-2">
              About
            </a>
          </li>
        </ul>
        <ul class="flex flex-row gap-4">
          <li>
            <as-button href="https://console.applicaset.com" is-primary>
              Console
            </as-button>
          </li>
        </ul>
      </nav>
    </header>
    <main class="relative">
      <hero-section />
      <services-section id="services" />
      <trusted-by-section />
      <contact-section id="contact" />
      <about-section id="about" />
    </main>
    <footer class="bg-gray-50">
      <div class="container mx-auto grid items-center p-4">
        <div class="mx-auto w-auto text-gray-500">
          &copy; 2022-{{ new Date().getFullYear() }} ApplicaSet
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import AsButton from '~/components/basic/as-button.vue'
import HeroSection from '~/components/www/hero-section.vue'
import ServicesSection from '~/components/www/services-section.vue'
import TrustedBySection from '~/components/www/trusted-by-section.vue'
import ContactSection from '~/components/www/contact-section.vue'
import AboutSection from '~/components/www/about-section.vue'
</script>
