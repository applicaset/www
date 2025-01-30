<template>
  <header class="border-b border-teal-700/20 bg-white sticky top-0 z-50">
    <nav class="container mx-auto p-2 flex justify-between items-center">
      <a href="#" class="flex items-center">
        <img src="~/assets/images/logo.svg" alt="ApplicaSet" width="48" height="48">
        <h1 class="mx-2">ApplicaSet</h1>
      </a>
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
    </nav>
  </header>
</template>
