import { FindOneResponse, FindResponse, Media } from "./interfaces/api/interfaces";
import { StrapiResponse, StrapiMediaEntity, StrapiEntity, StrapiMediaList } from "./interfaces/strapi/interfaces";




export class StrapiMapper {
    
    public mapResponse(response: StrapiResponse): FindOneResponse | FindResponse{
        if(Array.isArray(response.data)){
            const result: FindResponse = {data: [], pagination: {}};
            response.data.forEach((obj: StrapiEntity)=> {
            let attr = this.sanitizeDateTime(obj.attributes);
            attr = this.mapMediaField(attr);
            result.data.push({id: obj.id, ...attr})
           })
           return {...result, pagination: response.meta.pagination};
        }else{
            let attr = this.sanitizeDateTime(response.data.attributes);
            attr = this.mapMediaField(attr); 
            return {data : {id: response.data.id, ...attr}};
        }
    }

    private mapEntityField(object: any): any {
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                if(this.isEntity(object[key])){
                    object[key].attributes = object[key].data.attributes;
                }
                
            }
        }
    }

    private isEntity(obj: any): boolean {
        const isEntity = (value: any) => value.data ? value.data.id && value.data.attributes : false
        return obj ? isEntity(obj) : false
    }

    private mapMediaField(obj: any): any {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                if(Array.isArray(obj[key])){
                    obj[key] = obj[key].map((el: any)=>{
                       return this.mapMediaField(el);
                    })
                }else if(this.isSingleMediaField(obj[key])){
                    obj[key] = this.mapSingleMediaField(obj[key])
                }else if(this.isArrayMedia(obj[key])){
                    const arrayMedia: any[] = [];
                    obj[key].data.forEach((media: any)=>{
                        arrayMedia.push(this.mapSingleMediaField(media));
                    })
                    obj[key] = arrayMedia
                }else if(this.isRelationShipArray(obj[key])){
                    const relationshipArray: any[] = []
                    obj[key].data.forEach((entity: any)=>{
                        const attr = this.sanitizeDateTime(entity.attributes);
                        relationshipArray.push(this.mapMediaField({...attr, id:entity.id }));
                    })
                    obj[key] = relationshipArray;
                }else if(this.isEntity(obj[key])){
                    const id = obj[key].data.id
                    const attr = this.sanitizeDateTime(obj[key].data.attributes);
                    obj[key] = this.mapMediaField({...attr, id: id });
                    
                }
            }
        }
        return obj
    }

    private isRelationShipArray(obj: any): boolean {
        const isRelationShipArray = (value: any) => Array.isArray(value.data) && value.data[0].attributes 
        return obj ? isRelationShipArray(obj) : false;
    }

    private isArrayMedia(obj: any): boolean {
        const isArrayMedia = (value: any): boolean => {
            return value.data && value.data[0]?.id && value.data[0].attributes ? !!value.data[0].attributes.mime : false
        }
        return obj ? isArrayMedia(obj) : false
    }

    private isSingleMediaField(obj: any): boolean {
        const isSingleMediaField = (value: any) => value.data && value.data.attributes ? !!value.data.attributes.mime : false;
        return obj ? isSingleMediaField(obj) : false;
    }

    private getMediaAttribute(media: StrapiMediaEntity | StrapiEntity): any {
        return media.data?.attributes ? media.data?.attributes : media.attributes
    }

    private mapSingleMediaField(media: StrapiMediaEntity | StrapiEntity): Media {
        const attr: any = this.getMediaAttribute(media);
        try {
            return {
                alt: attr.alternativeText, 
                small: attr.formats.small ? attr.formats.small.url :  attr.formats.thumbnail.url, 
                thumbnail: attr.formats.thumbnail.url, 
                url: attr.url
            };
        } catch (error) {
            throw new Error("No Valid data");
        }
    }

    private sanitizeDateTime(obj: any): any {
        if(obj)
        delete obj.publishedAt;
        delete obj.createdAt;
        delete obj.updatedAt;
        return obj;
    } 
}
