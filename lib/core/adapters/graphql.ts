import {GraphQLClient, Variables} from 'graphql-request';
import {HttpInstance, Params, Response} from './interfaces';

export class GraphQLAdapter implements HttpInstance {
  private readonly _client: GraphQLClient;

  constructor() {
    this._client = new GraphQLClient('');
  }

  setHeaders(headers: Record<string, any>) {
    for (const [key, value] of Object.entries(headers)) {
      this._client.setHeader(key, value);
    }
  }

  get<T = any, R = Response<T, any>, D = any>(
    url: string,
    params: Params<D>,
  ): Promise<R> {
    return this._client
      .setEndpoint(url)
      .setHeaders(params?.config?.headers as Record<string, any>)
      .request(params.query)
      .then(response => {
        return {
          data: response,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: params.config,
          request: null,
        } as R;
      })
      .catch(error => {
        return {
          data: error.response.data,
          status: error.response.status,
          statusText: error.response.statusText,
          headers: error.response.headers,
          config: params.config,
          request: error.request,
        } as R;
      });
  }

  post<T = any, R = Response<T>, D = any>(
    url: string,
    params: Params<D>,
  ): Promise<R> {
    return this._client
      .setEndpoint(url)
      .setHeaders(params.config?.headers as Record<string, any>)
      .request(params.query, params?.data as Variables | undefined)
      .then(response => {
        return {
          data: response,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: params.config,
          request: null,
        } as R;
      })
      .catch(error => {
        return {
          data: error.response.data,
          status: error.response.status,
          statusText: error.response.statusText,
          headers: error.response.headers,
          config: params.config,
          request: error.request,
        } as R;
      });
  }

  put<T = any, R = Response<T>, D = any>(
    url: string,
    params: Params<D>,
  ): Promise<R> {
    return this._client
      .setEndpoint(url)
      .setHeaders(params.config?.headers as Record<string, any>)
      .request(params.query, params?.data as Variables | undefined)
      .then(response => {
        return {
          data: response,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: params.config,
          request: null,
        } as R;
      })
      .catch(error => {
        return {
          data: error.response.data,
          status: error.response.status,
          statusText: error.response.statusText,
          headers: error.response.headers,
          config: params.config,
          request: error.request,
        } as R;
      });
  }

  delete<T = any, R = Response<T>, D = any>(
    url: string,
    params: Params<D>,
  ): Promise<R> {
    return this._client
      .setEndpoint(url)
      .setHeaders(params.config?.headers as Record<string, any>)
      .request(params.query)
      .then(response => {
        return {
          data: response,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: params.config,
          request: null,
        } as R;
      })
      .catch(error => {
        return {
          data: error.response.data,
          status: error.response.status,
          statusText: error.response.statusText,
          headers: error.response.headers,
          config: params.config,
          request: error.request,
        } as R;
      });
  }

  patch<T = any, R = Response<T>, D = any>(
    url: string,
    params: Params<D>,
  ): Promise<R> {
    return this._client
      .setEndpoint(url)
      .setHeaders(params.config?.headers as Record<string, any>)
      .request(params.query, params?.data as Variables | undefined)
      .then(response => {
        return {
          data: response,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: params.config,
          request: null,
        } as R;
      })
      .catch(error => {
        return {
          data: error.response.data,
          status: error.response.status,
          statusText: error.response.statusText,
          headers: error.response.headers,
          config: params.config,
          request: error.request,
        } as R;
      });
  }
}
