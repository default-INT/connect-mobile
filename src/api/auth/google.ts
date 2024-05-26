import { request } from '@utils/apiUtils/request';
import { ITokensDto } from './dto';

interface IGoogleSignInResponse {
  idToken?: string | null;
}

export const google = async (data: IGoogleSignInResponse) => {
  const response = await request.post<ITokensDto>({
    url: '/api/auth/google',
    data,
  });

  return response.data;
};
