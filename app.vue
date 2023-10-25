<template>
  <div>
    <header class="border-b border-teal-700/20 bg-white sticky top-0 z-50">
      <nav class="container mx-auto p-2 flex justify-between items-center">
        <nuxt-link :to="{ path: '/', hash: '#' }" :external="true" class="flex items-center">
          <img src="~/assets/images/logo.svg" alt="ApplicaSet" width="48" height="48">
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
              Easy migrate to
              <Transition name="fade">
                <span v-if="showWord" class="text-primary fade-word">
                  {{ currentWord }}
                </span>
              </Transition>
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
            <img src="~/assets/images/cloud.svg" alt="Cloud" width="512" height="512">
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
              class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
            >
              <img
                src="~/assets/images/technical-consultation.svg"
                alt="Consulting"
                width="64"
                height="64"
              >
              <div class="text-2xl">
                Consulting
              </div>
              <div class="text-center text-lg">
                Expert advice for your business
              </div>
            </div>
            <div
              class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
            >
              <img
                src="~/assets/images/migration.svg"
                alt="Migration"
                width="64"
                height="64"
              >
              <div class="text-2xl">
                Migration
              </div>
              <div class="text-center text-lg">
                Seamlessly migrate your business to the cloud
              </div>
            </div>
            <div
              class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
            >
              <img
                src="~/assets/images/development.svg"
                alt="Development"
                width="64"
                height="64"
              >
              <div class="text-2xl">
                Development
              </div>
              <div class="text-center text-lg">
                Accelerate your business with innovative tools
              </div>
            </div>
            <div
              class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
            >
              <img
                src="~/assets/images/security.svg"
                alt="Security"
                width="64"
                height="64"
              >
              <div class="text-2xl">
                Security
              </div>
              <div class="text-center text-lg">
                Comprehensive security solutions for your business
              </div>
            </div>
            <div
              class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
            >
              <img
                src="~/assets/images/devops.svg"
                alt="DevOps"
                width="64"
                height="64"
              >
              <div class="text-2xl">
                DevOps
              </div>
              <div class="text-center text-lg">
                Streamline your workflow with DevOps expertise
              </div>
            </div>
            <div
              class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
            >
              <img
                src="~/assets/images/scale.svg"
                alt="Scale"
                width="64"
                height="64"
              >
              <div class="text-2xl">
                Scale
              </div>
              <div class="text-center text-lg">
                Scale your business with ease
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact">
        <div class="container mx-auto grid items-center py-16 gap-8">
          <div class="mx-auto w-auto">
            <img src="~/assets/images/mail.svg" alt="Cloud" width="64" height="45">
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
<script setup>
import { ref, watch, onMounted } from 'vue'

const words = ref(['any cloud', 'AWS', 'GCP', 'Azure', 'ApplicaSet'])
const currentIndex = ref(0)
const currentWord = ref(words.value[currentIndex.value])
const showWord = ref(true)

const replaceWord = () => {
  showWord.value = false
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % words.value.length // Move to the next word in the list
    currentWord.value = words.value[currentIndex.value]
    showWord.value = true
  }, 450)
}

watch(currentIndex, () => {
  setTimeout(replaceWord, 3000)
})

onMounted(() => {
  setTimeout(replaceWord, 3000)
})
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
