<template>
  <section :id="props.id" class="px-2 md:px-0">
    <div class="container mx-auto grid items-center py-16 gap-8">
      <h2 class="font-semibold text-3xl md:text-4xl mx-auto w-auto">
        <span class="text-primary">Trusted</span> by
      </h2>
      <div class="mx-auto w-auto text-lg text-center">
        Some companies that trusted <span class="text-primary">ApplicaSet</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-8">
        <as-card
          v-for="customer in costumers"
          :key="customer.title"
          :href="customer.homePageUrl"
          target="_blank"
          class="!bg-gray-50"
        >
          <img
            :src="customer.logoUrl"
            :alt="customer.title"
            width="256"
            height="256"
            class="h-64"
          >
          <div class="text-2xl">
            {{ customer.title }}
          </div>
        </as-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AsCard from '~/components/basic/as-card.vue'

import UTrackLogoUrl from '~/assets/images/trusted-by/utrack.svg?url'
import ChangLogoUrl from '~/assets/images/trusted-by/chang.svg?url'
import CRSTripLogoUrl from '~/assets/images/trusted-by/crstrip.svg?url'

const props = defineProps<{id?: string}>()

const costumers = [
  {
    title: 'uTrack™ Energy',
    logoUrl: UTrackLogoUrl,
    homePageUrl: 'https://utrack.energy'
  },
  {
    title: 'Chang Education',
    logoUrl: ChangLogoUrl,
    homePageUrl: 'https://chang.education'
  },
  {
    title: 'CRS Trip',
    logoUrl: CRSTripLogoUrl,
    homePageUrl: 'https://crstrip.com/'
  }
]
</script>
