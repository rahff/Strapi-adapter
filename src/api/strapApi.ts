import { FindOneResponse, FindResponse, QueryObject } from './interfaces/api/interfaces';
import { StrapiMapper } from './mapper';
import { QueryBuilder } from './queryBuilder';
import axios, { AxiosInstance, AxiosResponse, RawAxiosRequestConfig } from 'axios';
import { StrapiFindOneResponse, StrapiFindResponse } from './interfaces/strapi/interfaces';



export class StrapiApi {

  private apiToken: string = process.env.API_TOKEN || '';
  private defaultConfig = { headers: { Authorization: `Bearer ${this.apiToken}`} };

  private mapper: StrapiMapper = new StrapiMapper();

  constructor(private strapiUrl: string, private service: AxiosInstance = axios) {}

  async find<T>(querySchema: QueryObject, config?: RawAxiosRequestConfig<any>): Promise<FindResponse<T>> {
    const requestConfig = config ? config : this.defaultConfig;
    const query = new QueryBuilder(querySchema).buildQueryString();
    const response = await this.service.get<any, AxiosResponse<StrapiFindResponse<T>, any>>(
      this.strapiUrl + query,
      requestConfig,
    );
    return this.mapper.mapResponse(response.data);
  }

  async findOne<T>(querySchema: QueryObject, config?: RawAxiosRequestConfig<any>): Promise<FindOneResponse<T>> {
    const requestConfig = config ? config : this.defaultConfig;
    const query = new QueryBuilder(querySchema).buildQueryString();
    const response = await this.service.get<any, AxiosResponse<StrapiFindOneResponse<T>, any>>(
      this.strapiUrl + query,
      requestConfig,
    );
    return this.mapper.mapFindOneResponse(response.data);
  }

  async post<T>(path: string, body: any, config?: RawAxiosRequestConfig<any>): Promise<FindOneResponse<T>> {
    const requestConfig = config ? config : this.defaultConfig;
    const response = await this.service.post<any, AxiosResponse<StrapiFindOneResponse<T>, any>>(
      this.strapiUrl + path,
      body,
      requestConfig,
    );
    return this.mapper.mapFindOneResponse(response.data);
  }

  async put<T>(path: string, body: any, config?: RawAxiosRequestConfig<any>): Promise<FindOneResponse<T>> {
    const requestConfig = config ? config : this.defaultConfig;
    const response = await this.service.put<any, AxiosResponse<StrapiFindOneResponse<T>, any>>(
      this.strapiUrl + path,
      body,
      requestConfig,
    );
    return this.mapper.mapFindOneResponse(response.data);
  }

  async delete<T>(path: string, id: string, config?: RawAxiosRequestConfig<any>): Promise<FindOneResponse<T>> {
    const requestConfig = config ? config : this.defaultConfig;
    const response = await this.service.delete<any, AxiosResponse<StrapiFindOneResponse<T>, any>>(
      `${this.strapiUrl}${path}/${id}`,
      requestConfig,
    );
    return this.mapper.mapFindOneResponse(response.data);
  }
}
