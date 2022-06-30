
import { stringify } from "qs";
import { runInThisContext } from "vm";
import { QueryObject } from "../api/interfaces/api/interfaces";



export class QueryBuilder {

    public withParam: boolean = false;
    constructor(private query: QueryObject){}

    public buildQueryString(): string {
        const queryObject: string[] | undefined = this.query.populate ? this.query.populate : this.query.fields;
        let schema: any = {};
        if(queryObject){
            schema = {populate: {}}
            queryObject.forEach((name: string)=>{
                schema["populate"][name] = { populate: "*" }
            })
        if(this.query.param){
            return `/${this.query.entityName}/${this.query.param}?` + stringify(schema, {encodeValuesOnly: true});
        }
        return `/${this.query.entityName}?` + stringify(schema, {encodeValuesOnly: true});
        }
        return `/${this.query.entityName}?populate=%2A`;
    }
}