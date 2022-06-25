export interface RelationshipPopulation {
    relationshipName: string, populateFields: string[]
}

export interface ComponentPopulation {
    componentNames: string[]
}

export interface QueryOptions {
    pagination?: {
        start?: number;
        limit?: number;
        page: number;
        pageSize: number;
        withCount?: boolean
    },
    sort?: string[]
}

