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
        <as-card v-for="service in services" :key="service.title">
          <img
            :src="service.imageUrl"
            :alt="service.title"
            width="64"
            height="64"
          >
          <h3 class="text-2xl">
            {{ service.title }}
          </h3>
          <div class="text-center text-lg h-24">
            {{ service.description }}
          </div>
        </as-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AsCard from '~/components/basic/as-card.vue'

import TechnicalConsultationUrl from '~/assets/images/technical-consultation.svg?url'
import AccelerateUrl from '~/assets/images/accelerate.svg?url'
import DevelopmentUrl from '~/assets/images/development.svg?url'
import SecurityUrl from '~/assets/images/security.svg?url'
import DevOpsUrl from '~/assets/images/devops.svg?url'
import ScaleUrl from '~/assets/images/scale.svg?url'

const props = defineProps<{id?: string}>()

const services = [
  {
    title: 'Consulting',
    imageUrl: TechnicalConsultationUrl,
    description: 'Expert advice for your business'
  },
  {
    title: 'Migration',
    imageUrl: AccelerateUrl,
    description: 'Seamlessly migrate your business to the cloud'
  },
  {
    title: 'Development',
    imageUrl: DevelopmentUrl,
    description: 'Accelerate your business with innovative tools'
  },
  {
    title: 'Security',
    imageUrl: SecurityUrl,
    description: 'Comprehensive security solutions for your business'
  },
  {
    title: 'DevOps',
    imageUrl: DevOpsUrl,
    description: 'Streamline your workflow with DevOps expertise'
  },
  {
    title: 'Scale',
    imageUrl: ScaleUrl,
    description: 'Scale your business with ease'
  }
]
</script>
