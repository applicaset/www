<template>
  <div>
    <header class="border-b border-teal-700/20 bg-white sticky top-0 z-50">
      <nav class="container mx-auto p-2 flex justify-between items-center">
        <nuxt-link :to="{ path: '/',hash:'#'}" class="flex items-center">
          <img src="images/logo.svg" alt="ApplicaSet" width="48" height="48">
          <span class="mx-2">ApplicaSet</span>
        </nuxt-link>
        <div class="hidden md:block">
          <ul class="flex flex-row gap-4">
            <li>
              <nuxt-link :to="{ path: '/',hash:'#services'}" class="p-2">
                Services
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ path: '/',hash:'#contact'}" class="p-2">
                Contact
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ path: '/',hash:'#about'}" class="p-2">
                About
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main class="relative">
      <div class="px-2 md:px-0">
        <div class="container mx-auto grid items-center py-16 md:grid-cols-2 grid-cols-1">
          <div class="grid gap-4">
            <div class="text-3xl md:text-5xl font-bold">
              Migrate to <span class="text-primary">any</span> cloud easily
            </div>
            <div class="text-lg font-light">
              We are here as your tech partner helping you create, migrate & optimize your software products in any
              cloud.
            </div>
            <div class="flex gap-4 justify-center md:justify-start">
              <nuxt-link :to="{ path: '/',hash:'#contact'}" class="button primary">
                Contact Us
              </nuxt-link>
            </div>
            <div class="text-primary text-sm">
              Contact us now for a free consultation meeting.
            </div>
          </div>
          <div class="order-first md:order-last">
            <img src="images/cloud.svg" alt="Cloud" width="512" height="512">
          </div>
        </div>
      </div>
      <div id="services" class="px-2 md:px-0 bg-gray-100">
        <div class="container mx-auto grid items-center py-16 gap-8">
          <div class="text-4xl font-light mx-auto w-auto">
            Our <span class="text-primary">Services</span>
          </div>
          <div class="mx-auto w-auto text-lg font-light">
            Custom software services and <span class="text-primary">cloud</span> solutions
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(service, i) in services"
              :key="i"
              class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
            >
              <img :src="service.image" :alt="service.title" width="64" height="64">
              <div class="text-2xl font-light">
                {{ service.title }}
              </div>
              <div class="text-center text-lg font-light">
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
          <div class="text-4xl font-light mx-auto w-auto">
            <span class="text-primary">Contact</span> Us
          </div>
          <div class="mx-auto w-auto text-xl font-light">
            <Mailto mail="contact@applicaset.com" subject="Consultant">
              contact@applicaset.com
            </Mailto>
          </div>
        </div>
      </div>
      <div id="about" class="px-2 md:px-0 bg-gray-100">
        <div class="container mx-auto grid items-center py-16 gap-8">
          <div class="text-4xl font-light mx-auto w-auto">
            <span class="text-primary">About</span> Us
          </div>
          <div class="mx-auto w-auto text-lg font-light text-center">
            We are a group engineers and entrepreneurs who are interested in cloud technologies and upgrading
            infrastructures.
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="container mx-auto grid items-center p-4">
        <div class="mx-auto w-auto text-gray-500 font-light">
          &copy; 2022-2023 ApplicaSet
        </div>
      </div>
    </footer>
  </div>
</template>
<script>

export default {
  data () {
    return {
      services: [
        {
          title: 'Consulting',
          image: 'images/technical-consultation.svg',
          description: 'Advice and solutions for modernizing your infrastructure'
        },
        {
          title: 'Migration',
          image: 'images/migration.svg',
          description: 'Transform your business by migrating to the cloud'
        },
        {
          title: 'Development',
          image: 'images/development.svg',
          description: 'Accelerating innovation by using great tools'
        },
        {
          title: 'Security',
          image: 'images/security.svg',
          description: 'The right team for the right project, No concern, just grow'
        },
        {
          title: 'DevOps',
          image: 'images/devops.svg',
          description: 'Our DevOps engineers will work with your team on defining a workflow and tool chain'
        },
        {
          title: 'Scale',
          image: 'images/scale.svg',
          description: 'Do not struggle when success forces you to scale rapidly'
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
  color: #008B8B;
}
</style>
