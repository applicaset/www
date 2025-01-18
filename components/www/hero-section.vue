<template>
  <section :id="props.id" class="px-2 lg:px-0">
    <div
      class="container mx-auto grid items-center py-8 lg:py-16 xl:grid-cols-2 lg:grid-cols-3 grid-cols-1 px-4 md:px-8"
    >
      <div class="grid gap-4 xl:col-span-1 lg:col-span-2 col-span-1">
        <div class="text-2xl sm:text-3xl lg:text-5xl text-center lg:text-start mt-4 lg:mt-0 text-nowrap w-full overflow-visible">
          Easy migrate to
          <Transition name="fade">
            <span v-if="showWord" class="text-primary fade-word">
              {{ currentWord }}
            </span>
          </Transition>
        </div>
        <div class="text-lg text-center lg:text-start">
          Seamless cloud solutions for your software. Let us be your tech
          partner for creating, migrating, and optimizing in any cloud.
        </div>
        <div class="flex gap-4 justify-center lg:justify-start">
          <as-button
            href="#contact"
            is-primary
          >
            Contact Us
          </as-button>
        </div>
        <div class="text-sm text-center lg:text-start">
          Contact us now for a free consultation meeting or early access to console.
        </div>
      </div>
      <div
        class="order-first lg:order-last flex justify-center lg:justify-end"
      >
        <img src="~/assets/images/cloud.svg" alt="Cloud" width="512" height="512" class="size-64 sm:size-auto">
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import AsButton from '~/components/basic/as-button.vue'

const props = defineProps<{id?: string}>()

const words = ref(['any cloud', 'AWS', 'GCP', 'Azure', 'ApplicaSet'])
const currentIndex = ref(0)
const currentWord = ref(words.value[currentIndex.value])
const showWord = ref(true)

const replaceWord = () => {
  showWord.value = false
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % words.value.length // Move to the next word in the list
    currentWord.value = words.value[currentIndex.value]
    showWord.value = true
  }, 450)
}

watch(currentIndex, () => {
  setTimeout(replaceWord, 3000)
})

onMounted(() => {
  setTimeout(replaceWord, 3000)
})
</script>
