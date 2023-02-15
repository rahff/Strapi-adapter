import { findSingleTypeWithRelationshipAndNestedComponentResultMapping } from "../data/single-type/result-mapping";
import { findEntityMultipleMediaResultMapping, findEntityResultMapping, findEntityWithComplexRelationshipResultMapping, findEntityWithMediaComponentResultMapping } from "../data/find/result-mapping";
import { StrapiApi } from "../src/api/strapApi"
import { findOneWithDzAndNestedComponentResultMapping } from "../data/findOne/mapping.results";
import { entityWithoutFilePayload } from '../data/post/payload';
import { postEntityWithoutFileMappingResult } from "../data/post/mapping-result";
import { findEntity, findEntityMultipleMedia, findEntityWithComplexRelationship, findEntityWithDzAndNestedComponent, findEntityWithMediaComponent } from "../data/find/strapi-response";
import { findSingleTypeWithRelationshipAndNestedComponent } from "../data/single-type/strapi.response";
import { postEntityWithoutFile } from "../data/post/strapi-response";
import { findOneWithDzAndNestedComponent } from "../data/findOne/data.strapi-response";
import { Image } from "../src/api/interfaces/api/interfaces";
import { putResultMapping } from "../data/put/putResultmapping";
import { putResponse } from "../data/put/put";




interface Collaborator {
    name: string;
    role: string;
    bio: string;
    profil_img: Image
}


describe("StrapiApi", ()=>{
    let api: StrapiApi;
    let axiosSpy: any;
    beforeEach(async ()=>{
        axiosSpy = jasmine.createSpyObj('axios', ['get', 'post', 'delete', 'put'])
        api = new StrapiApi('http://localhost:1337/api', axiosSpy);
    })
    it("should created", ()=>{
        expect(api).toBeTruthy();
    });

    it('\(findEntity)\ should return the result mapping response in regard to query', async ()=>{
        axiosSpy.get.and.returnValue(new Promise((resolve)=> resolve(findEntity)));
        const data = await api.find<Collaborator>({entityName: 'collaborators'});
        expect(data).toEqual(findEntityResultMapping);
    })

    it('\(findEntityMultipleMedia)\ should return the result mapping response  in regard to query', async ()=>{
        axiosSpy.get.and.returnValue(new Promise((resolve)=> resolve(findEntityMultipleMedia)));
        const data = await api.find<any>({entityName: 'multiple-files'});
        expect(data).toEqual(findEntityMultipleMediaResultMapping);
    })

    it('\(findEntityWithMediaComponent)\ should return the result mapping response  in regard to query', async ()=>{
        axiosSpy.get.and.returnValue(new Promise((resolve)=> resolve(findEntityWithMediaComponent)));
        const data = await api.find<any>({entityName: 'portfolio-items', populate: ["list_img"]});
        expect(data).toEqual(findEntityWithMediaComponentResultMapping);
    })

    it('\(findEntityWithComplexRelationshipResultMapping)\ should return the result mapping response  in regard to query', async ()=>{
        axiosSpy.get.and.returnValue(new Promise((resolve)=> resolve(findEntityWithComplexRelationship)));
        const data = await api.find<any>({entityName: 'products', populate: ["seller"]});
        expect(data).toEqual(findEntityWithComplexRelationshipResultMapping)
    })

    it('\(findSingleTypeWithRelationshipAndNestedComponent)\ should return the result mapping response in regard to query', async ()=>{
        axiosSpy.get.and.returnValue(new Promise((resolve)=> resolve(findSingleTypeWithRelationshipAndNestedComponent)));
        const data = await api.findOne<any>({entityName: "data-home", populate: ["collaborators", "services", "portfolio_items.list_img.img", "partners"]});
        expect(data).toEqual(findSingleTypeWithRelationshipAndNestedComponentResultMapping)
    })

    it('\(findOneWithDzAndNestedComponent)\ should return the result mapping response in regard to query', async ()=>{
        axiosSpy.get.and.returnValue(new Promise((resolve)=> resolve(findOneWithDzAndNestedComponent)));
        const data = await api.findOne<any>({entityName: "test-dzs", param: "1", populate: ["dz"]});
        expect(data).toEqual(findOneWithDzAndNestedComponentResultMapping)
    })

    it('\(postEntityWithoutFile)\ should create an entity and return a formatted response then delete them', async ()=>{
        axiosSpy.post.and.returnValue(new Promise((resolve)=> resolve(postEntityWithoutFile)));
        axiosSpy.delete.and.returnValue(new Promise((resolve)=> resolve(postEntityWithoutFile)));
        const data = await api.post<any>('/products', entityWithoutFilePayload);
        const id = data.data.id;
        delete data.data.id
        expect(data).toEqual(postEntityWithoutFileMappingResult);
        const deleted = await api.delete('/products', id)
        expect(deleted).toBeTruthy();
    })

    it('\(putEntityWithoutFile)\ should update an entity and return a formatted response', async ()=>{
        axiosSpy.put.and.returnValue(new Promise((resolve)=> resolve(putResponse)));
        const data = await api.put<any>('/products', entityWithoutFilePayload);
     
        expect(data).toEqual(putResultMapping);
    })

})