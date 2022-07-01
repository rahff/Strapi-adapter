
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
                const isNested = this.isNested(name)
                if(isNested){
                    schema["populate"][isNested[1]] = { populate: this.buildNestedPopulate(isNested) }
                }else{
                    schema["populate"][name] = { populate: "*" }
                }
            })
        if(this.query.param){
            return `/${this.query.entityName}/${this.query.param}?` + stringify(schema, {encodeValuesOnly: true});
        }
        return `/${this.query.entityName}?` + stringify(schema, {encodeValuesOnly: true});
        }
        return `/${this.query.entityName}?populate=%2A`;
    }

    private isNested(value: string): string[] | null {
        const regex = /([a-z_]+)\.([a-z_]+)(\.[a-z_+]+)?/i
        const match = value.match(regex);
        return match ? match : null;
    }

    private buildNestedPopulate(array: string[]): string[]{
        const result: string[] = [];
        array.forEach((value: string)=> {
            if(typeof value === "string") result.push(value);
        })
        return result.slice(1).length > 3 ? 
        [result.slice(1)[1], result.slice(1)[1] + "." + result.slice(1)[2], result.slice(1)[2] + result.slice(1)[3]] : 
        [result.slice(1)[1], result.slice(1)[1] + result.slice(1)[2]];
    }
}