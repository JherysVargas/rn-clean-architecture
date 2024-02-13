export interface Params<D = any> {
  data?: D;
  query: string;
  config?: RequestConfig<D>;
}

export interface Response<T = any, D = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, any>;
  config: RequestConfig<D>;
  request: any;
}

export interface RequestConfig<D = any> {
  data?: D;
  params?: any;
  headers?: Record<string, any>;
}

export interface HttpInstance {
  setHeaders(headers: Record<string, any>): void;

  get<T = any, R = Response<T, any>, D = any>(
    url: string,
    params?: Params<D>,
  ): Promise<R>;

  post<T = any, R = Response<T>, D = any>(
    url: string,
    params?: Params<D>,
  ): Promise<R>;

  put<T = any, R = Response<T>, D = any>(
    url: string,
    params?: Params<D>,
  ): Promise<R>;

  delete<T = any, R = Response<T>, D = any>(
    url: string,
    params?: Params<D>,
  ): Promise<R>;

  patch<T = any, R = Response<T>, D = any>(
    url: string,
    params?: Params<D>,
  ): Promise<R>;
}
