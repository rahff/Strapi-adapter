import { stringify } from "qs";
import { ComponentPopulation, QueryOptions, RelationshipPopulation } from "./interfaces";

export class QueryBuilder {

    populateSomeRelationshipAndPopulateAllField(relationshipsNames: string[], options?: QueryOptions): string {
        let populationObject: any = {populate: {}};
        relationshipsNames.forEach((keyName: string)=> populationObject.populate[keyName] = {populate: "*"})
        if(options){
            const option = this.buildOptionsObject(options)
                populationObject = {...populationObject, ...option};
        }
        return stringify(populationObject, {encodeValuesOnly: true});
    }

    populateComponent(components: ComponentPopulation, options?: QueryOptions): string {
        let populationObject: any = {populate: components.componentNames};
        if(options){
            const option = this.buildOptionsObject(options)
                populationObject = {...populationObject, ...option};
        }
        return stringify(populationObject, {encodeValuesOnly: true});
    }

    populateOneRelationShipAndPopulateSomeFields(relationshipPopulation: RelationshipPopulation, options?: QueryOptions): string {
        let populationObject: any = {populate: {}};
        populationObject.populate[relationshipPopulation.relationshipName] = {populate: [...relationshipPopulation.populateFields]}
        if(options){
            const option = this.buildOptionsObject(options)
                populationObject = {...populationObject, ...option};
        }
        return stringify(populationObject, {encodeValuesOnly: true});
    }

    populateSomeRelationshipsAndPopulateSomeFields(relationshipsPopulation: RelationshipPopulation[], options?: QueryOptions): string {
        let populationObject: any = {populate: {}};
        relationshipsPopulation.forEach((obj: RelationshipPopulation, index: number) => {
            populationObject.populate[relationshipsPopulation[index].relationshipName] = {populate: [...relationshipsPopulation[index].populateFields]};   
        })
        if(options){
            const option = this.buildOptionsObject(options)
                populationObject = {...populationObject, ...option};
        }
        return stringify(populationObject, {encodeValuesOnly: true});
    }

    populateAllFieldsInFirstlevel(options?: QueryOptions): string {
        if(!options) return "populate=%2A";
        else { 
            let populationObject: any = {};          
            populationObject["populate"] = "*";
            let option = this.buildOptionsObject(options)
            populationObject = {...populationObject, ...option};
            return stringify(populationObject, {encodeValuesOnly: true})
        }
    }

    populateSomeRelationships(fieldList: string[], options?: QueryOptions): string {
        let populationObject: any = {populate: {}};
        fieldList.forEach(()=> {
            populationObject.populate = fieldList
        })
        if(options){
            const option = this.buildOptionsObject(options)
                populationObject = {...populationObject, ...option};
        }
        return stringify(populationObject, {encodeValuesOnly: true});
    }

    populateFieldBySelection(selectedFields: string[], secondLevel?: {population: RelationshipPopulation[]}, options?: QueryOptions): string {
        let selectedFieldObject: any
        if(!secondLevel){
            selectedFieldObject = {fields: selectedFields};
            if(options){
                const option = this.buildOptionsObject(options)
                selectedFieldObject = {...selectedFieldObject, ...option};
            }
            return stringify(selectedFieldObject, {encodeValuesOnly: true});
        }else{
            let populationObject: any = {};
            secondLevel.population.forEach((key: RelationshipPopulation)=>{
                populationObject[key.relationshipName] = { fields: key.populateFields }
            });
            if(options){
                const option = this.buildOptionsObject(options)
                selectedFieldObject = {...selectedFieldObject, ...option};
            }
            selectedFieldObject = {fields: selectedFields, populate : populationObject}
        };
        return stringify(selectedFieldObject, {encodeValuesOnly: true});
        }

    populateSomeDzWithComponent(dzNames: string[], options?: QueryOptions): string {
        let populationObject: any = {populate: {}};
        dzNames.forEach((dzName: string)=> populationObject.populate[dzName] = {populate: "*"});
        if(options){
            const option = this.buildOptionsObject(options)
                populationObject = {...populationObject, ...option};
        }
        return stringify(populationObject, {encodeValuesOnly: true});
    }

        private buildOptionsObject(options: QueryOptions): any {
            let result: any = {};
            if(this.isTruthy(options.pagination && !options.sort)){
                result["pagination"] = options.pagination;
            }else if(this.isTruthy(options.sort && !options.pagination)){
                result["sort"] = options.sort;
            }else if(this.isTruthy(options.sort && options.pagination)){
                result["pagination"] = options.pagination;
                result["sort"] = options.sort;
            }else{
                return;
            }
            return result;
        }
    
        private isTruthy(value: any): boolean {
            if(value) return true;
            else return false;
    
        }
}
