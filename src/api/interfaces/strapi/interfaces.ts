import { PaginationObject } from '../api/interfaces';

export interface StrapiEntity<T = any> {
  attributes: T;
  id: number;
  data?: { attributes: T };
}

export interface StrapiFindOneResponse<T> {
  data: { attributes: T; id: number };
  meta: any;
}

export interface StrapiFindResponse<T> {
  data: StrapiEntity<T>[];
  meta: {
    pagination: PaginationObject;
  };
}

export interface StrapiMediaEntity {
  data: StrapiEntity;
  attributes?: StrapiEntity;
}

export interface StrapiMediaList {
  data: StrapiEntity[];
}
