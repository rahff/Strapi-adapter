import { PaginationObject } from '../api/interfaces';

export interface StrapiEntity<T = any> {
  attributes: T;
  id: number;
  data?: { attributes: T };
}

export interface StrapiFindOneResponse {
  data: { attributes: any; id: number };
  meta: any;
}

export interface StrapiFindResponse {
  data: StrapiEntity[];
  meta: {
    pagination: PaginationObject;
  };
}

export type StrapiResponse = StrapiFindResponse | StrapiFindOneResponse;

export interface StrapiMediaEntity {
  data: StrapiEntity;
  attributes?: StrapiEntity;
}

export interface StrapiMediaList {
  data: StrapiEntity[];
}
