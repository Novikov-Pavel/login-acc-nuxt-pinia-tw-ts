<template>
  <main-layout image="signup-image">
    <template #form>
      <div :class="['form flex flex-col gap-[25px] items-center justify-center']">
        <h2 :class="['form__title text-4xl font-bold text-left w-full']">
          Create your account
        </h2>
        <p :class="['text-left w-full mt-[-25px] text-xl/[1.5rem]']">Unlock all Features!</p>

        <div :class="['flex flex-col gap-[10px] w-full']">
          <ui-input
            type="text"
            placeholder="Username"
            icon="person-icon"
            v-model="form.username"
            :errors="v$.form.username.$errors"
          />
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
          <ui-input
            type="password"
            placeholder="Confirm password"
            icon="password-icon"
            v-model="form.password_repeat"
            :errors="v$.form.password_repeat.$errors"
          />
          <ui-checkbox
            :class="['mt-[0.25rem]']"
            v-model="form.policy"
            :errors="v$.form.policy.$errors"
          />
        </div>

        <ui-button
          :is-disabled="computeIsSubmitDisabled" @click="submitForm" :is-loading="isLoading"
        >SIGN UP
        </ui-button>
        <p class="text-center">You have account? <nuxt-link :to="routesUrl.main" class="default-link">Login now</nuxt-link></p>
      </div>
    </template>
    <template #description>
      <p :class="['text-center text-xl/[1.5rem] font-bold']">Join us!</p>
      <p :class="['text-center text-base/[1.5rem]']">
        Just go through the boring process of creating an account.
      </p>
    </template>
  </main-layout>
  <ui-modal
    :is-open="isAlertShow"
    :options="alertOptions"
    @update:is-open="closeAlert"
  />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import useVuelidate from '@vuelidate/core';
import { useAuthStore } from '@/store/authStore';
import { useRulesValidate } from '@/common/rulesValidate';
import { type IAlertOptions, routesUrl } from '~/types';
import { MainLayout } from '@/layouts';
import { uiModal } from '@/components';
import { uiButton, uiInput, uiCheckbox } from '@/components/UI';

const router = useRouter()
const authStore = useAuthStore()
const { mock } = authStore
const isLoading = ref<boolean>(false);
const { user } = storeToRefs(authStore)
const initialState = {
  username: user.value?.username ?? '',
  email: user.value?.email ?? '',
  password: '',
  password_repeat: '',
  policy: false,
};
const form = reactive({ ...initialState });
const { signupRules } = useRulesValidate(form);
const v$ = useVuelidate(signupRules, { form });
const alertOptions = ref<IAlertOptions>({})
const isAlertShow = ref<boolean>(false)

onBeforeRouteLeave((to, _, next) => {  
  if (to.path === routesUrl.otp) {
    next()
    return 
  }

  alertOptions.value = {
    title: 'Подтвердите переход по ссылке',
    message: 'Вы уверены? Все несохраненные данные будут удалены',
    button_text: 'ok',
    callback: () => {
      alertOptions.value = {}
      isAlertShow.value = false
      return next()
    }
  }
  isAlertShow.value = true
})

const closeAlert = (val: boolean) => {
  isAlertShow.value = val
}

const submitForm = async () => {
  const result = await v$.value.$validate();

  if (!result) return;

  try {
    isLoading.value = true;
    await mock(form, 3000);
    await router.push(routesUrl.otp)
  } catch (e) {
    throw new Error();
  } finally {
    isLoading.value = false;
  }
};

const computeIsSubmitDisabled = computed(() => {
  return !!Object.values(form).filter((item) => !item || item === '').length;
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/app.scss';
</style>
