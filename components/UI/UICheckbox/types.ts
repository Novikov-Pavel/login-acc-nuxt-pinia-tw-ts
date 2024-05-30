import type { ErrorObject } from '@vuelidate/core';

export interface IPropsChechbox {
  modelValue: boolean | string;
  errors?: ErrorObject[];
  formName?: string;
}