<template>
  <div :class="['flex flex-col gap-[6px]']">
    <label :class="['ui-input inter', { error: errors?.length }]">
      <base-svg v-if="icon" :icon="icon" :size="iconSize" />
      <input
        :type="passType ? passType : type"
        :disabled="isDisabled"
        :placeholder="placeholder"
        @input="handleInput"
        :value="modelValue"
      />
      <ui-svg v-if="type === 'password'" icon="hide-password-icon" :size="30" @click="togglePassType" />
    </label>
    <p class="error-text" v-if="errors?.length">{{ errors?.[0]?.$message }}</p>
  </div>
</template>

<script setup lang="ts">
import { UISvg } from '@/components/UI';
import type { IPropsInput } from '@/components/UI/UIInput/types';

withDefaults(defineProps<IPropsInput>(), {
  type: 'text',
  isDisabled: false,
  placeholder: '',
  icon: '',
});
const emit = defineEmits(['update:modelValue']);

const passType = ref<string>('');

const togglePassType = () => {
  passType.value = passType.value !== 'text' ? 'text' : 'password';
};

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';
@import '@/components/UI/UIInput/styles.scss';
</style>
