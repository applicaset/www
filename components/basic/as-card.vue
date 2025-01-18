<template>
  <a v-if="href" :href="href" :class="['as-card']">
    <slot />
  </a>
  <div v-else :class="['as-card']">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'AsCard',
  props: {
    href: {
      type: String,
      default: undefined
    }
  }
}
</script>
