import axios, {AxiosStatic} from 'axios';
import {HttpInstance, Params, Response} from './interfaces';

export class HttpAdapter implements HttpInstance {
  private readonly _axios: AxiosStatic;

  constructor() {
    this._axios = axios;
  }

  setHeaders(headers: Record<string, any>) {
    this._axios.interceptors.request.use(request => {
      for (const [key, value] of Object.entries(headers)) {
        request.headers.set(key, value);
      }

      return request;
    });
  }

  get<T = any, R = Response<T, any>, D = any>(
    url: string,
    params?: Params<D> | undefined,
  ): Promise<R> {
    return this._axios.get(url, params?.config);
  }

  post<T = any, R = Response<T>, D = any>(
    url: string,
    params?: Params<D>,
  ): Promise<R> {
    return this._axios.post(url, params?.data, params?.config);
  }

  put<T = any, R = Response<T>, D = any>(
    url: string,
    params?: Params<D>,
  ): Promise<R> {
    return this._axios.put(url, params?.data, params?.config);
  }

  delete<T = any, R = Response<T>, D = any>(
    url: string,
    params?: Params<D>,
  ): Promise<R> {
    return this._axios.delete(url, params?.config);
  }

  patch<T = any, R = Response<T>, D = any>(
    url: string,
    params?: Params<D>,
  ): Promise<R> {
    return this._axios.patch(url, params?.data, params?.config);
  }
}
