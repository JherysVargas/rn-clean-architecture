import axios, {AxiosRequestConfig, AxiosResponse, AxiosStatic} from 'axios';

export class HttpAdapter {
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

  get<T = any, R = AxiosResponse<T, any>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D> | undefined,
  ): Promise<R> {
    return this._axios.get(url, config);
  }

  post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this._axios.post(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this._axios.put(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this._axios.delete(url, config);
  }

  patch<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this._axios.patch(url, data, config);
  }
}

export interface HttpInstance extends HttpAdapter {}
