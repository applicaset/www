<template>
  <section :id="props.id" class="bg-gray-50 px-2 md:px-0">
    <div class="container mx-auto grid items-center py-16 gap-8">
      <div class="text-3xl md:text-4xl mx-auto w-auto">
        <span class="text-primary">Platform</span> as a Service
      </div>
      <div class="mx-auto w-auto text-lg text-center">
        Experience elevated flight with the force of <span class="text-primary">Kubernetes</span> engine
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
        >
          <img
            src="~/assets/images/cloud-server.svg"
            alt="Consulting"
            width="64"
            height="64"
          >
          <div class="text-2xl">
            Managed Clusters
          </div>
          <div class="text-center text-lg h-24">
            We manage Kubernetes clusters. <br>
            You use what you need.
          </div>
        </div>
        <div
          class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
        >
          <img
            src="~/assets/images/money-save.svg"
            alt="Migration"
            width="64"
            height="64"
          >
          <div class="text-2xl">
            Cost Effective
          </div>
          <div class="text-center text-lg h-24">
            Decrease your cost by paying for what you use, not for a whole cluster
          </div>
        </div>
        <div
          class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
        >
          <img
            src="~/assets/images/cloud-lock.svg"
            alt="Development"
            width="64"
            height="64"
          >
          <div class="text-2xl">
            Avoid Vendor Lock-in
          </div>
          <div class="text-center text-lg h-24">
            Most popular cloud services, like AWS, GCP, or Azure have <a
              href="https://en.wikipedia.org/wiki/Vendor_lock-in"
              target="_blank"
              class="underline"
            >vendor
              lock-in</a>. <br>
            But we care your freedom.
          </div>
        </div>
        <div
          class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
        >
          <img
            src="~/assets/images/multiple-regions.svg"
            alt="Security"
            width="64"
            height="64"
          >
          <div class="text-2xl">
            Multiple Regions
          </div>
          <div class="text-center text-lg h-24">
            Different clusters in US, Europe,<br>
            and counting
          </div>
        </div>
        <div
          class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
        >
          <img
            src="~/assets/images/features.svg"
            alt="DevOps"
            width="64"
            height="64"
          >
          <div class="text-2xl">
            Fully Featured
          </div>
          <div class="text-center text-lg h-24">
            Most useful tools and features like are available on our clusters
          </div>
        </div>
        <div
          class="bg-white rounded p-8 shadow flex flex-col gap-4 items-center"
        >
          <img
            src="~/assets/images/consulting.svg"
            alt="Scale"
            width="64"
            height="64"
          >
          <div class="text-2xl">
            Personalized Support
          </div>
          <div class="text-center text-lg h-24">
            We not just provide services, but support you to have no more concern about your infrastructure
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{id?: string}>()
</script>
