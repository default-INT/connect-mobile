import { request } from '@utils/apiUtils/request';
import { IUserDto } from './dto';

export const getCurrentUser = async () => {
  const response = await request.get<IUserDto>({
    url: '/api/auth/accounts/getCurrentUser',
  });

  return response.data;
};
