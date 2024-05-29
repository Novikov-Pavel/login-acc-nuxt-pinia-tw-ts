<template>
  <div :class="['flex flex-col gap-[6px]']">
    <label :class="['base-input inter', { error: props?.errors?.length }]">
      <base-svg v-if="icon" :icon="icon" :size="props?.iconSize" />
      <input
        :type="passType ? passType : props?.type"
        :disabled="props.isDisabled"
        :placeholder="props.placeholder"
        @input="handleInput"
        :value="props?.modelValue"
      />
      <base-svg v-if="props?.type === 'password'" icon="hide-password-icon" :size="30" @click="togglePassType" />
    </label>
    <p class="error-text" v-if="props?.errors?.length">{{ errors?.[0]?.$message }}</p>
  </div>
</template>

<script setup lang="ts">
import { BaseSvg } from '@/components/base';
import type { IProps } from '@/components/base/BaseSvg/types';

const props = withDefaults(defineProps<IProps>(), {
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
@import '@/components/base/BaseInput/styles.scss';
</style>
