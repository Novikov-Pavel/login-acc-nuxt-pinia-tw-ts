<template>
  <div :class="['grid h-screen md:grid-cols-2 grid-cols-1 select-none']">
    <div
      :class="['bg-leftside flex flex-col items-center justify-center p-10 rounded-l-[50px]']"
    >
      <slot name="form" />
    </div>

    <div
      :class="['flex-col items-center justify-center bg-rightside p-2 md:flex rounded-r-[50px]']"
    >
      <img :src="`img/${image}.png`" v-if="image" />
      <div :class="['py-[50px]']">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPropsMainLayout } from '@/layouts/types';

withDefaults(defineProps<IPropsMainLayout>(), {
  image: '',
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';
</style>