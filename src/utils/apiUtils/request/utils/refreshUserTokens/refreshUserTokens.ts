import axios from 'axios';
import { IUserTokens } from '@root/types/user';

const REFRESH_TOKEN_URL = '/api/auth/token/refresh';

export const refreshUserTokens = async () => {
  try {
    const response = await axios.request<IUserTokens>({
      url: REFRESH_TOKEN_URL,
      method: 'POST',
    });

    return response.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);

    return null;
  }
};
