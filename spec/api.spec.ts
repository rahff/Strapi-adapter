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
import { Media } from "../src/api/interfaces/api/interfaces";




interface Collaborator {
    name: string;
    role: string;
    bio: string;
    profil_img: Media
}


describe("StrapiApi", ()=>{
    let api: StrapiApi;
    let axiosSpy: any;
    beforeEach(async ()=>{
        axiosSpy = jasmine.createSpyObj('axios', ['get', 'post', 'delete'])
        api = new StrapiApi('http://localhost:1337/api', axiosSpy);
    })
    it("should created", ()=>{
        expect(api).toBeTruthy();
    });

    it('\(findEntity)\ should return the result mapping response in regard to query', async ()=>{
        axiosSpy.get.and.returnValue(new Promise((resolve)=> resolve(findEntity)));
        const data = await api.get<Collaborator>({entityName: 'collaborators'});
        expect(data).toEqual(findEntityResultMapping);
    })

    it('\(findEntityMultipleMedia)\ should return the result mapping response  in regard to query', async ()=>{
        axiosSpy.get.and.returnValue(new Promise((resolve)=> resolve(findEntityMultipleMedia)));
        const data = await api.get<any>({entityName: 'multiple-files'});
        expect(data).toEqual(findEntityMultipleMediaResultMapping);
    })

    it('\(findEntityWithMediaComponent)\ should return the result mapping response  in regard to query', async ()=>{
        axiosSpy.get.and.returnValue(new Promise((resolve)=> resolve(findEntityWithMediaComponent)));
        const data = await api.get<any>({entityName: 'portfolio-items', populate: ["list_img"]});
        expect(data).toEqual(findEntityWithMediaComponentResultMapping);
    })

    it('\(findEntityWithComplexRelationshipResultMapping)\ should return the result mapping response  in regard to query', async ()=>{
        axiosSpy.get.and.returnValue(new Promise((resolve)=> resolve(findEntityWithComplexRelationship)));
        const data = await api.get<any>({entityName: 'products', populate: ["seller"]});
        expect(data).toEqual(findEntityWithComplexRelationshipResultMapping)
    })

    it('\(findSingleTypeWithRelationshipAndNestedComponent)\ should return the result mapping response in regard to query', async ()=>{
        axiosSpy.get.and.returnValue(new Promise((resolve)=> resolve(findSingleTypeWithRelationshipAndNestedComponent)));
        const data = await api.get<any>({entityName: "data-home", populate: ["collaborators", "services", "portfolio_items.list_img.img", "partners"]});
        expect(data).toEqual(findSingleTypeWithRelationshipAndNestedComponentResultMapping)
    })

    it('\(findOneWithDzAndNestedComponent)\ should return the result mapping response in regard to query', async ()=>{
        axiosSpy.get.and.returnValue(new Promise((resolve)=> resolve(findOneWithDzAndNestedComponent)));
        const data = await api.get<any>({entityName: "test-dzs", param: "1", populate: ["dz"]});
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

})