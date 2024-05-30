import { ofetch } from 'ofetch';
import type { payloadLogInI } from '~/types';

export const authService = {
  logIn: async (payload: payloadLogInI) => {
    return await ofetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      body: payload
    });
  },
};
