<template>
  <nuxt-svg-icon
    :name="icon"
    :stroke="stroke"
    :fill="fill"
    :class="[classes, 'flex items-center justify-center']"
    :font-size="size"
    :use-origin-size="useOriginSize"
  />
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import type { IPropsSvg } from '@/components/UI/UISvg/types'

const props = withDefaults(defineProps<IPropsSvg>(), {
  name: '',
  useOriginSize: true
})

const classes = computed(() => {
  return {
    'use-origin-width': props.useOriginSize,
    'use-origin-height': props.useOriginSize,
  }
})
</script>

<style scoped lang="scss">
@import '@/components/UI/UISvg/styles.scss';
</style>
