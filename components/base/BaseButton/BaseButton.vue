<template>
  <button
    :class="['base-button inter', { 'base-button_loading': isLoading }]" :disabled="isDisabled || isLoading"
  >
    <slot v-if="!isLoading" />
  </button>
</template>

<script setup lang="ts">
import type { IProps } from '@/components/base/BaseButton/types';

defineProps<IProps>();
</script>

<style lang="scss" scoped>
@import '@/assets/scss/app.scss';
@import '@/components/base/BaseButton/styles.scss';
</style>
