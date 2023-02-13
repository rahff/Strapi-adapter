import { IResponse, QueryObject } from './interfaces/api/interfaces';
import { StrapiMapper } from './mapper';
import { QueryBuilder } from './queryBuilder';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { StrapiResponse } from './interfaces/strapi/interfaces';

export class StrapiApi {
  private mapper: StrapiMapper = new StrapiMapper();

  constructor(private strapiUrl: string, private service: AxiosInstance = axios) {}

  async get<T>(querySchema: QueryObject): Promise<IResponse<T>> {
    const query = new QueryBuilder(querySchema).buildQueryString();
    const response = await this.service.get<any, AxiosResponse<StrapiResponse, any>>(this.strapiUrl + query);
    return this.mapper.mapResponse(response.data);
  }

  async post<T>(path: string, body: any): Promise<IResponse<T>> {
    const response = await this.service.post<any, AxiosResponse<StrapiResponse, any>>(this.strapiUrl + path, body);
    return this.mapper.mapResponse(response.data);
  }

  async put<T>(path: string, body: any): Promise<IResponse<T>> {
    const response = await this.service.put<any, AxiosResponse<StrapiResponse, any>>(this.strapiUrl + path, body);
    return this.mapper.mapResponse(response.data);
  }

  async delete<T>(path: string, id: string): Promise<IResponse<T>> {
    const response = await this.service.delete<any, AxiosResponse<StrapiResponse, any>>(
      `${this.strapiUrl}${path}/${id}`,
    );
    return this.mapper.mapResponse(response.data);
  }
}
