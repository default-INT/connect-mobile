import { IAddEventRequest } from '@root/api/events/dto';
import { request } from '@utils/apiUtils/request';

export const addEvent = async (data: IAddEventRequest) => {
  const response = await request.post<number>({
    url: '/api/events/addEvent',
    data,
  });

  return response.data;
};
