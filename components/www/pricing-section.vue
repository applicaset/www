<template>
  <section :id="props.id">
    <div class="container mx-auto grid items-center py-16 gap-8">
      <div class="text-3xl md:text-4xl mx-auto w-auto">
        Our <span class="text-primary">Pricing</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="bg-gray-50 rounded p-8 shadow flex flex-col gap-4 items-center animate-bounce"
        >
          <div class="text-2xl">
            Starter
          </div>
          <div class="text-3xl font-semibold">
            Free
          </div>
          <ul class="text-center space-y-2">
            <li>0.5 CPU Core</li>
            <li>0.5GiB Memory</li>
            <li>5GiB Disk</li>
            <li>Free Subdomains</li>
          </ul>
          <as-button
            href="mailto:&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#97;&#112;&#112;&#108;&#105;&#99;&#97;&#115;&#101;&#116;&#46;&#99;&#111;&#109;?subject=Order Starter Plan"
            is-primary
          >
            Order Now
          </as-button>
        </div>
        <div
          class="bg-gray-50 rounded p-8 shadow flex flex-col gap-4 items-center"
        >
          <div class="text-2xl">
            Basic
          </div>
          <div class="text-3xl font-semibold relative">
            $5
            <span class="text-base absolute left-10 bottom-0">Monthly</span>
          </div>
          <ul class="text-center space-y-2">
            <li>1 CPU Core</li>
            <li>1GiB Memory</li>
            <li>10GiB Disk</li>
            <li>Free Subdomains</li>
          </ul>
          <as-button
            href="mailto:&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#97;&#112;&#112;&#108;&#105;&#99;&#97;&#115;&#101;&#116;&#46;&#99;&#111;&#109;?subject=Order Basic Plan"
            is-primary
          >
            Order Now
          </as-button>
        </div>
        <div
          class="bg-gray-50 rounded p-8 shadow flex flex-col gap-4 items-center"
        >
          <div class="text-2xl">
            Custom
          </div>
          <div class="text-3xl font-semibold relative">
            <span class="text-base absolute right-10">From</span>
            $5
            <span class="text-base absolute left-10 bottom-0">Monthly</span>
          </div>
          <ul class="text-center space-y-2">
            <li>$2 per CPU Core</li>
            <li>$2 per 1GiB Memory</li>
            <li>$1 per 10GiB Disk</li>
            <li>Free Subdomains</li>
          </ul>
          <as-button
            href="mailto:&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#97;&#112;&#112;&#108;&#105;&#99;&#97;&#115;&#101;&#116;&#46;&#99;&#111;&#109;?subject=Order Custom Plan"
            is-primary
          >
            Order Now
          </as-button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import AsButton from '~/components/basic/as-button.vue'

const props = defineProps<{id?: string}>()
</script>
