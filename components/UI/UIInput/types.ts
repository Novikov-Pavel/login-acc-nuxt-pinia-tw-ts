import type { ErrorObject } from '@vuelidate/core';

export interface IPropsInput {
  type?: string;
  isDisabled?: boolean;
  placeholder?: string;
  icon?: string;
  iconSize?: number;
  iconClasses?: string[];
  modelValue?: string | number;
  errors?: ErrorObject[];
}