import { FindOneResponse, FindResponse, QueryObject } from './interfaces/api/interfaces';
import { StrapiMapper } from './mapper';
import { QueryBuilder } from './queryBuilder';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { StrapiFindOneResponse, StrapiFindResponse } from './interfaces/strapi/interfaces';

export class StrapiApi {
  private mapper: StrapiMapper = new StrapiMapper();

  constructor(private strapiUrl: string, private service: AxiosInstance = axios) {}

  async find<T>(querySchema: QueryObject): Promise<FindResponse<T>> {
    const query = new QueryBuilder(querySchema).buildQueryString();
    const response = await this.service.get<any, AxiosResponse<StrapiFindResponse<T>, any>>(this.strapiUrl + query);
    return this.mapper.mapResponse(response.data);
  }

  async findOne<T>(querySchema: QueryObject): Promise<FindOneResponse<T>> {
    const query = new QueryBuilder(querySchema).buildQueryString();
    const response = await this.service.get<any, AxiosResponse<StrapiFindOneResponse<T>, any>>(this.strapiUrl + query);
    return this.mapper.mapFindOneResponse(response.data);
  }

  async post<T>(path: string, body: any): Promise<FindOneResponse<T>> {
    const response = await this.service.post<any, AxiosResponse<StrapiFindOneResponse<T>, any>>(
      this.strapiUrl + path,
      body,
    );
    return this.mapper.mapFindOneResponse(response.data);
  }

  async put<T>(path: string, body: any): Promise<FindOneResponse<T>> {
    const response = await this.service.put<any, AxiosResponse<StrapiFindOneResponse<T>, any>>(
      this.strapiUrl + path,
      body,
    );
    return this.mapper.mapFindOneResponse(response.data);
  }

  async delete<T>(path: string, id: string): Promise<FindOneResponse<T>> {
    const response = await this.service.delete<any, AxiosResponse<StrapiFindOneResponse<T>, any>>(
      `${this.strapiUrl}${path}/${id}`,
    );
    return this.mapper.mapFindOneResponse(response.data);
  }
}
