import { defineStore } from "pinia";
import { ref } from "vue";
import { authService } from "~/services/authService";
import type { IUserInfo, payloadUserCodeI, payloadLogInI } from "~/types";

export const useAuthStore = defineStore("authStore", () => {
  const user = ref<IUserInfo>({} as IUserInfo);

  const logIn = async (payload: payloadLogInI) => {
    try {
      await authService.logIn(payload);
    } catch (e) {
      throw e;
    }
  };

  const mock = async (
    payload: payloadUserCodeI,
    timeout = 1000
  ) => {
    return new Promise<void>((resolve, reject): void => {
      setTimeout(() => {
        try {
          user.value = {
            username: payload.username,
            email: payload.email,
          };
          resolve();
        } catch (e) {
          reject();
        }
      }, timeout);
    });
  };

  return {
    user,
    logIn,
    mock,
  };
});
