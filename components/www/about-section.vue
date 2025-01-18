<template>
  <section :id="props.id" class="px-2 md:px-0">
    <div class="container mx-auto grid items-center py-16 gap-8 px-4 md:px-8">
      <h2 class="font-semibold text-3xl md:text-4xl mx-auto w-auto">
        <span class="text-primary">About</span> Us
      </h2>
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
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{id?: string}>()
</script>
