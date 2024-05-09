import { makeRequest } from './utils/makeRequest';
import { addData, addGetMethod, addPostMethod } from './middleware';

export const request = {
  get: makeRequest([addGetMethod, addData]),
  post: makeRequest([addPostMethod]),
};
