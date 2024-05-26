import { request } from '@utils/apiUtils/request';
import { IEventDto } from '../dto';

interface IGetByCoordinatesRequest {
  latitude: number;
  longitude: number;
  radius: number;
}

export const getByCoordinates = async (params: IGetByCoordinatesRequest) => {
  const response = await request.get<IEventDto[]>({
    url: '/api/events/location/getByCoordinates',
    params,
  });

  return response.data;
};
