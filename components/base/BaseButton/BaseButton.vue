<template>
  <button
    :class="['base-button inter', { 'base-button_loading': isLoading }]" :disabled="isDisabled || isLoading"
  >
    <slot v-if="!isLoading" />
  </button>
</template>

<script setup lang="ts">
interface IProps {
  isDisabled?: boolean;
  isLoading?: boolean;
}

defineProps<IProps>();
</script>

<style lang="scss" scoped>
@import '@/assets/scss/app.scss';
@import '@/components/base/BaseButton/styles.scss';
</style>
