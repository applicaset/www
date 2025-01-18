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
          href="https://utrack.energy"
          target="_blank"
          class="!bg-gray-50"
        >
          <img
            src="~/assets/images/trusted-by/utrack.svg"
            alt="uTrack Energy"
            width="256"
            height="256"
            class="h-64"
          >
          <div class="text-2xl">
            uTrack&trade; Energy
          </div>
        </as-card>
        <as-card
          href="https://chang.education"
          target="_blank"
          class="!bg-gray-50"
        >
          <img
            src="~/assets/images/trusted-by/chang.svg"
            alt="Chang Education"
            width="256"
            height="256"
            class="h-64"
          >
          <div class="text-2xl">
            Chang Education
          </div>
        </as-card>
        <as-card
          href="https://crstrip.com/"
          target="_blank"
          class="!bg-gray-50"
        >
          <img
            src="~/assets/images/trusted-by/crstrip.svg"
            alt="CRS Trip"
            width="256"
            height="256"
          >
          <div class="text-2xl">
            CRS Trip
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
