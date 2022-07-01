import { findSingleTypeWithRelationshipAndNestedComponentResultMapping } from "../data/single-type/result-mapping";
import { findEntityMultipleMediaResultMapping, findEntityResultMapping, findEntityWithComplexRelationshipResultMapping, findEntityWithMediaComponentResultMapping } from "../data/find/result-mapping";
import { StrapiApi } from "../src/api/strapApi"
import { findOneWithDzAndNestedComponentResultMapping } from "../data/findOne/mapping.results";



describe("StrapiApi", ()=>{
    let api: StrapiApi;
    beforeEach(async ()=>{
        api = new StrapiApi('http://localhost:1337/api');
    })
    it("should created", ()=>{
        expect(api).toBeTruthy();
    });

    it('should return the result mapping response in regard to query', async ()=>{
        const data = await api.get({entityName: 'collaborators'});
        expect(data).toEqual(findEntityResultMapping);
    })

    it('should return the result mapping response  in regard to query', async ()=>{
        const data = await api.get({entityName: 'multiple-files'});
        expect(data).toEqual(findEntityMultipleMediaResultMapping);
    })

    it('should return the result mapping response  in regard to query', async ()=>{
        const data = await api.get({entityName: 'portfolio-items', populate: ["list_img"]});
        expect(data).toEqual(findEntityWithMediaComponentResultMapping);
    })

    it('should return the result mapping response  in regard to query', async ()=>{
        const data = await api.get({entityName: 'products', populate: ["seller"]});
        expect(data).toEqual(findEntityWithComplexRelationshipResultMapping)
    })

    it('should return the result mapping response in regard to query', async ()=>{
        const data = await api.get({entityName: "data-home", populate: ["collaborators", "services", "portfolio_items.list_img.img", "partners"]});
        expect(data).toEqual(findSingleTypeWithRelationshipAndNestedComponentResultMapping)
    })

    it('should return the result mapping response in regard to query', async ()=>{
        const data = await api.get({entityName: "test-dzs", param: "1", populate: ["dz"]});
        expect(data).toEqual(findOneWithDzAndNestedComponentResultMapping)
    })

})