export interface QueryObject {
  entityName: string;
  fields?: string[];
  populate?: string[];
  param?: string;
  sort?: string;
  options?: QueryOptions;
}

export interface QueryOptions {
  pagination?: {
    start?: number;
    limit?: number;
    page: number;
    pageSize: number;
    withCount?: boolean;
  };
  sort?: string[];
}

export interface PaginationObject {
  page: number;
  pageSize: number;
  pageCount?: number;
  total: number;
}

export type Entity = IEntity & any;

export interface FindResponse<T> {
  data: T[];
  pagination: PaginationObject | {};
}

export interface FindOneResponse<T> {
  data: T;
}

export type IResponse<T> = FindOneResponse<T> | FindResponse<T>;

export interface IEntity {
  id: number;
}

export interface Media {
  alt: string;
  small: string;
  thumbnail: string;
  url: string;
}

export type MediaList = Media[];
