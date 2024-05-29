<template>
  <label :class="['base-checkbox', { error: errors?.length }]">
    <span :class="['base-checkbox__styled', { active: modelValue }]" />
    <p>
      Accept 
      <nuxt-link to="#" class="default-link">
        terms and conditions
      </nuxt-link>
    </p>
    <input
      type="checkbox"
      :value="modelValue"
      @input="handleInput"
    />
  </label>
</template>

<script setup lang="ts">
import type { IProps } from '@/components/base/BaseCheckbox/types';

withDefaults(defineProps<IProps>(), {
  modelValue: false,
  errors: () => [],
  formName: '',
});
const emit = defineEmits(['update:modelValue']);

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';
@import '@/components/base/BaseCheckbox/styles.scss';
</style>
