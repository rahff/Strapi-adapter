import { stringify } from "qs";
import { RelationshipPopulation } from "./interfaces";

export class QueryBuilder {

    populateSomeRelationshipAndPopulateAllField(relationshipsNames: string[]): string {
        const populationObject: any = {populate: {}};
        relationshipsNames.forEach((keyName: string)=> populationObject.populate[keyName] = {populate: "*"})
        return stringify(populationObject, {encodeValuesOnly: true});
    }

    populateOneRelationShipAndPopulateSomeFields(relationshipPopulation: RelationshipPopulation): string {
        const populationObject: any = {populate: {}};
        populationObject.populate[relationshipPopulation.relationshipName] = {populate: [...relationshipPopulation.populateFields]}
        return stringify(populationObject, {encodeValuesOnly: true});
    }

    populateSomeRelationshipsAndPopulateSomeFields(relationshipsPopulation: RelationshipPopulation[]): string {
        const populationObject: any = {populate: {}};
        relationshipsPopulation.forEach((obj: RelationshipPopulation, index: number) => {
            populationObject.populate[relationshipsPopulation[index].relationshipName] = {populate: [...relationshipsPopulation[index].populateFields]}
        })
        return stringify(populationObject, {encodeValuesOnly: true});
    }

    populateAllFieldsInFirstlevel(): string {
        return "populate=%2A";
    }

    populateSomeRelationships(fieldList: string[]): string {
        const populationObject: any = {populate: {}};
        fieldList.forEach(()=> {
            populationObject.populate = fieldList
        })
        return stringify(populationObject, {encodeValuesOnly: true});
    }

    populateFieldBySelection(selectedFields: string[], options?: {population: RelationshipPopulation[]}): string {
        let selectedFieldObject: any
        if(!options){
            selectedFieldObject = {fields: selectedFields};
            return stringify(selectedFieldObject, {encodeValuesOnly: true});
        }else{
            const populationObject: any = {};
            options.population.forEach((key: RelationshipPopulation, index: number)=>{
                populationObject[key.relationshipName] = { fields: key.populateFields }
            });

            selectedFieldObject = {fields: selectedFields, populate : populationObject}};
            return stringify(selectedFieldObject, {encodeValuesOnly: true});
        }
}
