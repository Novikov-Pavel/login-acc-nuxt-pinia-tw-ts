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
import type { IProps } from '@/components/base/BaseSvg/types'

const props = withDefaults(defineProps<IProps>(), {
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
@import '@/components/base/BaseSvg/styles.scss';
</style>
