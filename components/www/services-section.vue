<template>
  <section :id="props.id" class="px-2 md:px-0 bg-gray-50">
    <div class="container mx-auto grid items-center py-16 gap-8">
      <h2 class="font-semibold text-3xl md:text-4xl mx-auto w-auto">
        Our <span class="text-primary">Services</span>
      </h2>
      <div class="mx-auto w-auto text-lg text-center">
        Custom software and
        <span class="text-primary">cloud</span> solutions to fit your
        business needs
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8">
        <as-card>
          <img
            src="~/assets/images/technical-consultation.svg"
            alt="Consulting"
            width="64"
            height="64"
          >
          <h3 class="text-2xl">
            Consulting
          </h3>
          <div class="text-center text-lg h-24">
            Expert advice for your business
          </div>
        </as-card>
        <as-card>
          <img
            src="~/assets/images/accelerate.svg"
            alt="Migration"
            width="64"
            height="64"
          >
          <h3 class="text-2xl">
            Migration
          </h3>
          <div class="text-center text-lg h-24">
            Seamlessly migrate your business to the cloud
          </div>
        </as-card>
        <as-card>
          <img
            src="~/assets/images/development.svg"
            alt="Development"
            width="64"
            height="64"
          >
          <h3 class="text-2xl">
            Development
          </h3>
          <div class="text-center text-lg h-24">
            Accelerate your business with innovative tools
          </div>
        </as-card>
        <as-card>
          <img
            src="~/assets/images/security.svg"
            alt="Security"
            width="64"
            height="64"
          >
          <h3 class="text-2xl">
            Security
          </h3>
          <div class="text-center text-lg h-24">
            Comprehensive security solutions for your business
          </div>
        </as-card>
        <as-card>
          <img
            src="~/assets/images/devops.svg"
            alt="DevOps"
            width="64"
            height="64"
          >
          <h3 class="text-2xl">
            DevOps
          </h3>
          <div class="text-center text-lg h-24">
            Streamline your workflow with DevOps expertise
          </div>
        </as-card>
        <as-card>
          <img
            src="~/assets/images/scale.svg"
            alt="Scale"
            width="64"
            height="64"
          >
          <h3 class="text-2xl">
            Scale
          </h3>
          <div class="text-center text-lg h-24">
            Scale your business with ease
          </div>
        </as-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AsCard from '~/components/basic/as-card.vue'

const props = defineProps<{id?: string}>()
</script>
