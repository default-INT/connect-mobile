import { request } from '@utils/apiUtils/request';
import { ILanguageDto } from '@root/api/languages/dto';

export const getList = async () => {
  const response = await request.get<ILanguageDto[]>({
    url: '/api/languages/getList',
  });

  return response.data;
};
