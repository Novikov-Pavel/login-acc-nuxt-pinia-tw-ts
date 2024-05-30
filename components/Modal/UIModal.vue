<template>
  <div class="modal" v-if="isOpen">
    <div class="modal__content">
      <p class="modal__title">{{ options?.title }}</p>
      <p>{{ options?.message }}</p>
      <div class="modal__buttons">
        <ui-button @click="options?.callback"> {{ options?.button_text }} </ui-button>
        <ui-button @click="handleClose" class="transparent">cancel</ui-button>
      </div>
    </div>
    <div class="modal__overlay"></div>
  </div>
</template>

<script setup lang="ts">
import { uiButton } from '@/components/UI';
import type { IPropsModal } from './types';

defineProps<IPropsModal>();
const emit = defineEmits(['update:isOpen']);

const handleClose = () => {
  emit('update:isOpen', false);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';
@import '@/components/Modal/styles.scss';
</style>
