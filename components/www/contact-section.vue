<template>
  <section :id="props.id" class="bg-gray-50">
    <div class="container mx-auto grid items-center py-16 gap-8">
      <div class="mx-auto w-auto">
        <img src="~/assets/images/mail.svg" alt="Cloud" width="64" height="45">
      </div>
      <div class="text-3xl md:text-4xl mx-auto w-auto">
        <span class="text-primary">Contact</span> Us
      </div>
      <div class="mx-auto w-auto text-lg text-center">
        Contact us now for a free consultation meeting or early access to console.
      </div>
      <div class="mx-auto w-auto">
        <as-button href="mailto:&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#97;&#112;&#112;&#108;&#105;&#99;&#97;&#115;&#101;&#116;&#46;&#99;&#111;&#109;" is-primary size="xl">
          contact@applicaset.com
        </as-button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import AsButton from '~/components/basic/as-button.vue'

const props = defineProps<{id?: string}>()
</script>
