<template>
  <div>
    <header class="border-b border-teal-700/20 bg-white sticky top-0 z-50">
      <nav class="container mx-auto p-2 flex justify-between items-center">
        <nuxt-link :to="{ path: '/', hash: '#' }" :external="true" class="flex items-center">
          <img src="images/logo.svg" alt="ApplicaSet" width="48" height="48">
          <span class="mx-2 hidden sm:block">ApplicaSet</span>
        </nuxt-link>
        <ul class="flex flex-row gap-4">
          <li>
            <nuxt-link :to="{ path: '/', hash: '#services' }" :external="true" class="p-2">
              Services
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{ path: '/', hash: '#contact' }" :external="true" class="p-2">
              Contact
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="{ path: '/', hash: '#about' }" :external="true" class="p-2">
              About
            </nuxt-link>
          </li>
        </ul>
        <ul class="flex flex-row gap-4">
          <li>
            <a href="https://console.applicaset.com" class="p-2 button primary">
              Console
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <main class="relative">
      <div class="px-2 md:px-0">
        <div
          class="container mx-auto grid items-center py-16 md:grid-cols-2 grid-cols-1"
        >
          <div class="grid gap-4">
            <div class="text-3xl md:text-5xl text-center md:text-start">
              Migrate to <span class="text-primary">any</span> cloud easily
            </div>
            <div class="text-lg text-center md:text-start">
              Seamless cloud solutions for your software. Let us be your tech
              partner for creating, migrating, and optimizing in any cloud.
            </div>
            <div class="flex gap-4 justify-center md:justify-start">
              <nuxt-link
                :to="{ path: '/', hash: '#contact' }"
                :external="true"
                class="button primary"
              >
                Contact Us
              </nuxt-link>
            </div>
            <div class="text-primary text-sm text-center md:text-start">
              Contact us now for a free consultation meeting or early access to console.
            </div>
          </div>
          <div
            class="order-first md:order-last flex justify-center md:justify-end"
          >
            <img src="images/cloud.svg" alt="Cloud" width="512" height="512">
          </div>
        </div>
      </div>
      <div id="services" class="px-2 md:px-0 bg-gray-100">
        <div class="container mx-auto grid items-center py-16 gap-8">
          <div class="text-4xl mx-auto w-auto">
            Our <span class="text-primary">Services</span>
          </div>
          <div class="mx-auto w-auto text-lg">
            Custom software and
            <span class="text-primary">cloud</span> solutions to fit your
            business needs
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(service, i) in services"
              :key="i"
              class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
            >
              <img
                :src="service.image"
                :alt="service.title"
                width="64"
                height="64"
              >
              <div class="text-2xl">
                {{ service.title }}
              </div>
              <div class="text-center text-lg">
                {{ service.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact">
        <div class="container mx-auto grid items-center py-16 gap-8">
          <div class="mx-auto w-auto">
            <img src="images/mail.svg" alt="Cloud" width="64" height="45">
          </div>
          <div class="text-4xl mx-auto w-auto">
            <span class="text-primary">Contact</span> Us
          </div>
          <div class="mx-auto w-auto text-lg text-center">
            Contact us now for a free consultation meeting or early access to console.
          </div>
          <div class="mx-auto w-auto text-xl button primary">
            <a href="mailto:&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#97;&#112;&#112;&#108;&#105;&#99;&#97;&#115;&#101;&#116;&#46;&#99;&#111;&#109;">
              contact@applicaset.com
            </a>
          </div>
        </div>
      </div>
      <div id="about" class="px-2 md:px-0 bg-gray-100">
        <div class="container mx-auto grid items-center py-16 gap-8">
          <div class="text-4xl mx-auto w-auto">
            <span class="text-primary">About</span> Us
          </div>
          <div class="mx-auto w-auto text-lg text-center">
            At ApplicaSet, we are a team of forward-thinking engineers and
            entrepreneurs with a passion for leveraging cutting-edge cloud
            technologies to help businesses achieve their goals.
            <br>
            Our expertise in infrastructure upgrades, software development, and
            cloud solutions allows us to deliver innovative and tailored
            solutions that drive growth and maximize ROI for our clients.
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="container mx-auto grid items-center p-4">
        <div class="mx-auto w-auto text-gray-500">
          &copy; 2022-2023 ApplicaSet
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
export default {
  data () {
    return {
      services: [
        {
          title: 'Consulting',
          image: 'images/technical-consultation.svg',
          description: 'Expert advice for your business'
        },
        {
          title: 'Migration',
          image: 'images/migration.svg',
          description: 'Seamlessly migrate your business to the cloud'
        },
        {
          title: 'Development',
          image: 'images/development.svg',
          description: 'Accelerate your business with innovative tools'
        },
        {
          title: 'Security',
          image: 'images/security.svg',
          description: 'Comprehensive security solutions for your business'
        },
        {
          title: 'DevOps',
          image: 'images/devops.svg',
          description: 'Streamline your workflow with DevOps expertise'
        },
        {
          title: 'Scale',
          image: 'images/scale.svg',
          description: 'Scale your business with ease'
        }
      ]
    }
  }
}
</script>
<style>
html {
  scroll-behavior: smooth;
}

.button {
  @apply px-8 py-2 rounded;
}

.button.primary {
  @apply bg-teal-700 text-white;
}

.text-primary {
  color: #008b8b;
}
</style>
