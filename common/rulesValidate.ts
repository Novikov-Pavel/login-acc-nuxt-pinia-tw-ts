import { ref } from "vue";
import {
  email as emailRul,
  helpers,
  maxLength,
  minLength,
  required,
} from "@vuelidate/validators";

const validatePassword = (password: string): boolean => {
  const hasUpperCase = /[A-ZА-Я]/.test(password);
  const hasLowerCase = /[a-zа-я]/.test(password);
  const hasNumber = /\d/.test(password);

  return hasUpperCase && hasLowerCase && hasNumber;
};

const sameFieldAs = (newPass: string, form: any): boolean => {
  return !!newPass && !!form?.password && newPass === form.password;
};

export const useRulesValidate = (_?: any) => {
  const authRules = ref({
    form: {
      email: {
        required: helpers.withMessage("Обязательное поле", required),
        maxLength: helpers.withMessage(
          "Максимальная длина поля 255 симв",
          maxLength(255)
        ),
        email: helpers.withMessage("Не правильный email", emailRul),
      },
      password: {
        required: helpers.withMessage("Обязательное поле", required),
        checkPassword: helpers.withMessage(
          "Пароль должен состоять по крайней мере из 1 цифры, 1 символа в нижнем регистре и 1 символа в верхнем регистре",
          validatePassword
        ),
        minLength: helpers.withMessage(
          "Пароль должен быть больше 8 символов",
          minLength(8)
        ),
        maxLength: helpers.withMessage(
          "Пароль не должен быть больше 50 символов",
          maxLength(50)
        ),
      },
    },
  });

  const signupRules = ref({
    form: {
      username: {
        required: helpers.withMessage("Обязательное поле", required),
        maxLength: helpers.withMessage(
          "Максимальная длина поля 255 симв",
          maxLength(255)
        ),
        minLength: helpers.withMessage(
          "Минимальная длина поля 3 симв",
          minLength(3)
        ),
      },
      email: {
        required: helpers.withMessage("Обязательное поле", required),
        maxLength: helpers.withMessage(
          "Максимальная длина поля 255 симв",
          maxLength(255)
        ),
        email: helpers.withMessage("Не правильный email", emailRul),
      },
      password: {
        required: helpers.withMessage("Обязательное поле", required),
        checkPassword: helpers.withMessage(
          "Пароль должен состоять по крайней мере из 1 цифры, 1 символа в нижнем регистре и 1 символа в верхнем регистре",
          validatePassword
        ),
        minLength: helpers.withMessage(
          "Пароль должен быть больше 8 символов",
          minLength(8)
        ),
        maxLength: helpers.withMessage(
          "Пароль не должен быть больше 50 символов",
          maxLength(50)
        ),
      },
      password_repeat: {
        required: helpers.withMessage("Обязательное поле", required),
        passwords_same: helpers.withMessage("Пароли не совпадают", sameFieldAs),
      },
      policy: {
        required: helpers.withMessage(
          "Обязательное поле",
          (value: any) => value
        ),
      },
    },
  });

  const otpRules = ref({
    form: {
      code: {
        required: helpers.withMessage("Обязательное поле", required),
        maxLength: helpers.withMessage(
          "Максимальная длина 6 симв",
          maxLength(6)
        ),
        minLength: helpers.withMessage(
          "Минимальная длина 6 симв",
          minLength(6)
        ),
      },
    },
  });

  return {
    authRules,
    signupRules,
    otpRules,
  };
};
