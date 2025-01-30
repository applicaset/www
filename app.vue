<template>
  <div>
    <header class="border-b border-teal-700/20 bg-white sticky top-0 z-50">
      <nav class="container mx-auto p-2 flex justify-between items-center">
        <a href="#" class="flex items-center">
          <img src="~/assets/images/logo.svg" alt="ApplicaSet" width="48" height="48">
          <h1 class="mx-2">ApplicaSet</h1>
        </a>
        <!--<ul class="flex-row gap-4 hidden sm:flex">-->
        <ul class="flex-row gap-4 flex">
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
        <ul v-if="false" class="flex flex-row gap-4">
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
      <customers-section />
      <pass-section v-if="false" id="paas" />
      <pricing-section v-if="false" id="pricing" />
      <contact-section id="contact" />
      <about-section id="about" />
    </main>
    <website-footer />
  </div>
</template>
<script setup>
import AsButton from '~/components/basic/as-button.vue'
import HeroSection from '~/components/www/hero-section.vue'
import ServicesSection from '~/components/www/services-section.vue'
import CustomersSection from '~/components/www/customers-section.vue'
import ContactSection from '~/components/www/contact-section.vue'
import AboutSection from '~/components/www/about-section.vue'
import PassSection from '~/components/www/pass-section.vue'
import PricingSection from '~/components/www/pricing-section.vue'
import WebsiteFooter from '~/components/www/website-footer.vue'
</script>
