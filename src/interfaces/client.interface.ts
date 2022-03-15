type HttpMethod = 'POST' | 'GET';

export interface RequestParams {
  method: HttpMethod;
  path: string;
  params?: {};
}
