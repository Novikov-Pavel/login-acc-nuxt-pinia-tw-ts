import type { ErrorObject } from '@vuelidate/core';

export interface IProps {
  modelValue: boolean | string;
  errors?: ErrorObject[];
  formName?: string;
}