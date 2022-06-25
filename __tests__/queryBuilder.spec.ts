import { QueryBuilder } from "../src/builders/queryBuilder"
import { 
    allPopulateSecondLevel, 
    populatedOneRelationshipAndManyFieldInSecondLevel, 
    populatedManyRelationshipAndManyFieldInSecondLevel, 
    oneToManyObject, 
    manyToManyObject, 
    manyToAll, 
    someRelationshipToPopulate, 
    populateSomeFieldsFirstLevel, 
    someSelectedField, 
    populateSomeSlectedFields, 
    populateSomeSlectedFieldsAndPopulateSelectedFieldInRelationship, 
    allPopulateFirstLevel, 
    populatedComponent, 
    populateDzWithComponents 
} from "../data/queries.qs";



describe('Query Builder', () => {
    let queryBuilder: QueryBuilder;
    beforeEach(()=>{
        queryBuilder = new QueryBuilder();
    })

    it('should build an appropriate query string to populate one relationship and populate many fields in second level', ()=>{
        const result = queryBuilder.populateOneRelationShipAndPopulateSomeFields(oneToManyObject);
        expect(result).toEqual(populatedOneRelationshipAndManyFieldInSecondLevel)
    });

    it("should build a appropriate query string to populate many relationships and populate all fields in second level", ()=>{
        const result = queryBuilder.populateSomeRelationshipAndPopulateAllField(manyToAll, {sort: ["name:desc"]});
        expect(result).toEqual(allPopulateSecondLevel)
    });

    it('should build a appropriate query string to populate many relationships and populate many fields in second level', ()=>{
        const result = queryBuilder.populateSomeRelationshipsAndPopulateSomeFields(manyToManyObject)
        expect(result).toEqual(populatedManyRelationshipAndManyFieldInSecondLevel)
    })

    it('should build a appropriate query string to populate one or many relationship in first level', ()=>{
        const result = queryBuilder.populateSomeRelationships(someRelationshipToPopulate, {pagination: {page: 1, pageSize: 10}})
        expect(result).toEqual(populateSomeFieldsFirstLevel);
    });

    it('should build a appropriate query string to populate only selected fields without any population', ()=>{
        const result = queryBuilder.populateFieldBySelection(someSelectedField)
        expect(result).toEqual(populateSomeSlectedFields);
    })

    it('should build a appropriate query string to populate only selected fields with selected field in second level of population', ()=>{
        const result = queryBuilder.populateFieldBySelection(someSelectedField, {population: [{relationshipName: "social_list", populateFields: ["url"]}]})
        console.log(populateSomeSlectedFieldsAndPopulateSelectedFieldInRelationship);
        expect(result).toEqual(populateSomeSlectedFieldsAndPopulateSelectedFieldInRelationship);
    })

    it('should build a query with pagination option', ()=>{
        const result = queryBuilder.populateAllFieldsInFirstlevel({pagination: {page: 1, pageSize: 10}});
        expect(result).toEqual(allPopulateFirstLevel)
    })

    it('should build query to populate some componet and dynamic zones and nested component', ()=>{
        const result = queryBuilder.populateComponent({componentNames: 
        ['seoData', 'seoData.sharedImage','seoData.sharedImage.media']},
        {pagination: {page: 2, pageSize: 4}});
        expect(result).toEqual(populatedComponent);
    });

    it('should build query to populate some dynamic zones and nested component', ()=>{
        const result = queryBuilder.populateSomeDzWithComponent(["testDZ1", "testDZ2"], {sort: ["desc"]});
        expect(result).toEqual(populateDzWithComponents);
    });
});

