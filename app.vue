<template>
  <div>
    <website-header />
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
import HeroSection from '~/components/www/hero-section.vue'
import ServicesSection from '~/components/www/services-section.vue'
import CustomersSection from '~/components/www/customers-section.vue'
import ContactSection from '~/components/www/contact-section.vue'
import AboutSection from '~/components/www/about-section.vue'
import PassSection from '~/components/www/pass-section.vue'
import PricingSection from '~/components/www/pricing-section.vue'
import WebsiteFooter from '~/components/www/website-footer.vue'
import WebsiteHeader from '~/components/www/website-header.vue'
</script>
