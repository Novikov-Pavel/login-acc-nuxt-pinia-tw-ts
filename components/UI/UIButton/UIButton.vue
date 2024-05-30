<template>
  <button
    :class="['ui-button inter', { 'ui-button_loading': isLoading }]"
    :disabled="isDisabled || isLoading"
  >
    <slot v-if="!isLoading" />
  </button>
</template>

<script setup lang="ts">
import type { IPropsButton } from '@/components/UI/UIButton/types';

defineProps<IPropsButton>();
</script>

<style lang="scss" scoped>
@import '@/assets/scss/app.scss';
@import '@/components/UI/UIButton/styles.scss';
</style>
