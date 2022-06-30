import { Inject, Injectable } from "@nestjs/common";
import { FindOneResponse, FindResponse, QueryObject } from "./interfaces/api/interfaces";
import { StrapiMapper } from "./mapper";
import { QueryBuilder } from "./queryBuilder";
import { StrapiResponse } from "./interfaces/strapi/interfaces";
import axios, { AxiosResponse } from "axios";





export class StrapiApi {

    private mapper: StrapiMapper = new StrapiMapper();

    constructor(private strapiUrl: string){}

    async get(querySchema: QueryObject): Promise<FindOneResponse | FindResponse> {
        const query = new QueryBuilder(querySchema).buildQueryString();
        const response = await axios.get(this.strapiUrl + query)
        const body = await response.data
        return this.mapper.mapResponse(body);
    }
}