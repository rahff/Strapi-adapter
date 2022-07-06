import { findEntity, findEntityMultipleMedia, findEntityWithDzAndNestedComponent, findEntityWithMediaComponent } from '../data/find/strapi-response';
import { StrapiMapper } from "../src/api/mapper";
import { findOneEntity, findOneEntityWithMediaComponent, findOneWithDzAndNestedComponent, findOneWithMultipleMedia } from '../data/findOne/data.strapi-response';
import { findOneEntityResult, findOneEntityWithMediaComponentResultMapping, findOneWithDzAndNestedComponentResultMapping, findOneWithMultipleMediaMappingResult } from '../data/findOne/mapping.results';
import { findEntityMultipleMediaResultMapping, findEntityResultMapping, findEntityWithDzAndNestedComponentResultMapping, findEntityWithMediaComponentResultMapping } from '../data/find/result-mapping';
import { findSingleTypeWithRelationshipAndNestedComponent } from '../data/single-type/strapi.response';
import { findSingleTypeWithRelationshipAndNestedComponentResultMapping } from '../data/single-type/result-mapping';



describe('Mapper', ()=>{
    let mapper: StrapiMapper;
    beforeAll(()=> {
        mapper = new StrapiMapper()
    })
    describe('receive a findOne entity response', ()=>{
        it("should return an object with entity s id an attribute, and sanitized media field", ()=>{
            const result = mapper.mapResponse(findOneEntity.data);
            expect(result).toEqual(findOneEntityResult);
        });

        it("should return an object with entity s id an attribute, and sanitized multiple media field", ()=>{
            const result = mapper.mapResponse(findOneWithMultipleMedia.data);
            expect(result).toEqual(findOneWithMultipleMediaMappingResult);
        });

        it("should return an object with entity s id an attribute, and sanitized multiple media field in nested component", ()=>{
            const result = mapper.mapResponse(findOneEntityWithMediaComponent.data);
            expect(result).toEqual(findOneEntityWithMediaComponentResultMapping);
        });

        it("should return an object with entities s id an attribute, and sanitized dynamic zone s multiple media field in nested component", ()=>{
            const result = mapper.mapResponse(findOneWithDzAndNestedComponent.data);
            expect(result).toEqual(findOneWithDzAndNestedComponentResultMapping);
        });

        it("should return an object with entities s id an attribute, and sanitized relationship entity s multiple media field in nested component", ()=>{
            const result = mapper.mapResponse(findSingleTypeWithRelationshipAndNestedComponent.data);
            expect(result).toEqual(findSingleTypeWithRelationshipAndNestedComponentResultMapping);
        });

    })
    
    describe('receive find entity response', ()=>{
        it("should return an array with sanitized entities", ()=>{
            const result = mapper.mapResponse(findEntity.data);
            expect(result).toEqual(findEntityResultMapping);
        });

        it("should return an array with entities s id an attribute, and sanitized multiple media field", ()=>{
            const result = mapper.mapResponse(findEntityMultipleMedia.data);
            expect(result).toEqual(findEntityMultipleMediaResultMapping);
        });

        it("should return an array with entities s id an attribute, and sanitized multiple media field in nested component", ()=>{
            const result = mapper.mapResponse(findEntityWithMediaComponent.data);
            expect(result).toEqual(findEntityWithMediaComponentResultMapping);
        });

        it("should return an array with entities s id an attribute, and sanitized dynamic zone s multiple media field in nested component", ()=>{
            const result = mapper.mapResponse(findEntityWithDzAndNestedComponent.data);
            expect(result).toEqual(findEntityWithDzAndNestedComponentResultMapping);
        });
    })
})