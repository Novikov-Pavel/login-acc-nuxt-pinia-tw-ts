<template>
  <main-layout image="login-image">
    <template #form>
      <div :class="['form flex flex-col gap-[25px] items-center justify-center select-none']">
        <h1 class="form__title text-4xl font-bold text-center">
          Login to your Account
        </h1>
        <p class="divider-text">with email</p>

        <div :class="['flex flex-col gap-[10px] w-full']">
          <ui-input
            type="text"
            placeholder="Email"
            icon="email-icon"
            v-model="form.email"
            :errors="v$.form.email.$errors"
          />
          <ui-input 
            type="password" 
            placeholder="Password" 
            icon="password-icon" 
            v-model="form.password" 
            :errors="v$.form.password.$errors"
          />
        </div>

        <ui-button
          :is-disabled="computeIsSubmitDisabled"
          @click="submitForm"
          :is-loading="isLoading"
        >
          LOG IN
        </ui-button>
        <p class="text-center">
          Don't have an account? <nuxt-link :to="routesUrl.signup" class="default-link">
            Create an account
          </nuxt-link>
        </p>
      </div>
    </template>
    
    <template #description>
      <p :class="['text-center text-xl/[1.5rem] font-bold select-none']">
        Connect with any device.
      </p>
      <p :class="['text-center text-base/[1.5rem] select-none']">
        Everything you need is an internet connection.
      </p>
    </template>
  </main-layout>
  <ui-modal :is-open="isOpenAlert" :options="alertOptions"/>
</template>

<script setup lang="ts">
import useVuelidate from '@vuelidate/core';
import { useRulesValidate } from '@/common/rulesValidate';
import { useAuthStore } from '@/store/authStore';
import { MainLayout } from '@/layouts';
import { uiButton, uiInput,  } from '@/components/UI';
import { uiModal } from '@/components';
import { routesUrl, type IAlertOptions } from '~/types';

const authStore = useAuthStore()
const { logIn } = authStore
const isLoading = ref<boolean>(false)
const initialState = {
  email: '',
  password: '',
};
const form = reactive({ ...initialState });
const { authRules } = useRulesValidate(form);
const v$ = useVuelidate(authRules, { form });
const isOpenAlert = ref<boolean>(false)
const alertOptions = ref<IAlertOptions>({})

const submitForm = async () => {
  const result = await v$.value.$validate();

  if (!result) return;

  try {
    isLoading.value = true
    await logIn(form)
  } catch (e: any) {    
    alertOptions.value = {
      title: 'Ошибка',
      message: 'Не правильный email или пароль',
      button_text: 'ok',
      callback: () => isOpenAlert.value = false
    }
    isOpenAlert.value = true
  } finally {
    isLoading.value = false
  }
};

const computeIsSubmitDisabled = computed(() => {
  return !!Object.values(form).filter((item) => !item || item === '').length;
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';
</style>
