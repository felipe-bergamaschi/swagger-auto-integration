import type { AxiosRequestConfig } from 'axios';
import Axios, { AxiosError } from 'axios';

import { servers } from '../../../swagger.json';

const API_BASE_URL = servers[0].url;

export const AxiosInstance = Axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export function request<T>(config: AxiosRequestConfig): Promise<T> {
  const source = Axios.CancelToken.source();

  const promise = AxiosInstance({
    ...config,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

export type ErrorType<Error> = AxiosError<Error>;