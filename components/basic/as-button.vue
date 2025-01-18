<template>
  <a :href="href" :class="['as-button', `size-${size}`, {'is-primary': isPrimary}]">
    <slot />
  </a>
</template>
<script>
export default {
  name: 'AsButton',
  props: {
    href: {
      type: String,
      default: undefined
    },
    to: {
      type: Object, // RouteLocationRaw,
      default: undefined
    },
    size: {
      type: String,
      default: 'base',
      validator: value => ['base', 'xl'].includes(value)
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  }
}
</script>
