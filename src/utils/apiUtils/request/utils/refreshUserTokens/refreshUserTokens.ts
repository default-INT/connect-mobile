import axios from 'axios';
import { IUserTokens } from '@root/types/user';
import { storage } from '@utils/storage';
import { env } from '@constants/env';

const REFRESH_TOKEN_URL = `${env.API_URL}/api/auth/token/refresh`;

export const refreshUserTokens = async () => {
  try {
    const data = await storage.getTokens();

    const response = await axios.request<IUserTokens>({
      url: REFRESH_TOKEN_URL,
      method: 'POST',
      data,
    });

    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);

    return null;
  }
};
