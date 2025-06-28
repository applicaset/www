<template>
  <footer class="bg-gray-50" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">
      Footer
    </h2>
    <div class="container mx-auto p-8 md:flex md:items-center md:justify-between">
      <div class="flex space-x-4 md:order-2 justify-center md:justify-end">
        <a href="https://github.com/applicaset" class="cursor-pointer text-gray-400 hover:text-gray-500" target="_blank">
          <span class="sr-only">GitHub</span>
          <icon-mdi-github class="h-6 w-6" aria-hidden="true" />
        </a>
        <a href="https://www.linkedin.com/company/applicaset/" class="cursor-pointer text-gray-400 hover:text-gray-500" target="_blank">
          <span class="sr-only">LinkedIn</span>
          <icon-mdi-linkedin class="h-6 w-6" aria-hidden="true" />
        </a>
        <a href="https://www.facebook.com/applicaset/" class="cursor-pointer text-gray-400 hover:text-gray-500" target="_blank">
          <span class="sr-only">Facebook</span>
          <icon-mdi-facebook class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="text-gray-500 mt-4 md:order-1 md:mt-0 justify-self-center md:justify-self-start">
        &copy; 2022-{{ new Date().getFullYear() }} ApplicaSet
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import IconMdiGithub from '~/components/icons/icon-mdi-github.vue'
import IconMdiLinkedin from '~/components/icons/icon-mdi-linkedin.vue'
import IconMdiFacebook from '~/components/icons/icon-mdi-facebook.vue'
</script>
