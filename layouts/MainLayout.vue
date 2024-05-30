<template>
  <div :class="['grid h-screen md:grid-cols-2 grid-cols-1']">
    <div class="flex flex-col items-center justify-center p-10">
      <slot name="form"/>
    </div>

    <div :class="['flex-col items-center justify-center bg-[$bg] p-2 md:flex hidden']">
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
