<template>
  <label :class="['ui-checkbox', { error: errors?.length }]">
    <span :class="['ui-checkbox__styled', { active: modelValue }]" />
    <p>
      Accept
      <nuxt-link :to="routesUrl.main" class="default-link">
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
import type { IPropsChechbox } from '@/components/UI';
import { routesUrl } from '~/types';

withDefaults(defineProps<IPropsChechbox>(), {
  modelValue: false,
  errors: () => [],
  formName: '',
});
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';
@import '@/components/UI/UICheckbox/styles.scss';
</style>
