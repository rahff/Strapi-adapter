import { FindResponse, IResponse, Media } from './interfaces/api/interfaces';
import { StrapiResponse, StrapiMediaEntity, StrapiEntity, StrapiMediaList } from './interfaces/strapi/interfaces';

export class StrapiMapper {
  public mapResponse<T>(response: StrapiResponse): IResponse<T> {
    if (Array.isArray(response.data)) {
      const result: FindResponse<T> = { data: [], pagination: {} };
      response.data.forEach((obj: StrapiEntity) => {
        let attr = this.sanitizeDateTime(obj.attributes);
        attr = this.mapMediaField(attr);
        result.data.push({ id: obj.id, ...attr });
      });
      return { ...result, pagination: response.meta.pagination };
    } else {
      let attr = this.sanitizeDateTime(response.data.attributes);
      attr = this.mapMediaField(attr);
      return { data: { id: response.data.id, ...attr } };
    }
  }

  private isEntity(obj: any): boolean {
    const isEntity = (value: any) => (value.data ? value.data.id && value.data.attributes : false);
    return obj ? isEntity(obj) : false;
  }

  private mapMediaField(obj: any): any {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        switch (this.whatThis(obj[key])) {
          case 'array':
            obj[key] = this.mapThisAsArray(obj[key]);
            break;

          case 'singleMedia':
            obj[key] = this.mapSingleMediaField(obj[key]);
            break;

          case 'arrayMedia':
            obj[key] = this.mapThisAsArrayMedia(obj[key]);
            break;

          case 'relationshipArray':
            obj[key] = this.mapThisAsRelationshipArray(obj[key]);
            break;

          case 'entity':
            obj[key] = this.mapThisAsEntity(obj[key]);
            break;
        }
      }
    }
    return obj;
  }

  private mapThisAsArray(array: any[]): any[] {
    return array.map((el: any) => this.mapMediaField(el));
  }

  private mapThisAsArrayMedia(value: any): any[] {
    const arrayMedia: any[] = [];
    value.data.forEach((media: any) => {
      arrayMedia.push(this.mapSingleMediaField(media));
    });
    return arrayMedia;
  }

  private mapThisAsRelationshipArray(value: any): any[] {
    const relationshipArray: any[] = [];
    value.data.forEach((entity: any) => {
      const attr = this.sanitizeDateTime(entity.attributes);
      relationshipArray.push(this.mapMediaField({ ...attr, id: entity.id }));
    });
    return relationshipArray;
  }

  private mapThisAsEntity(value: any): any {
    const id = value.data.id;
    const attr = this.sanitizeDateTime(value.data.attributes);
    return this.mapMediaField({ ...attr, id });
  }

  private whatThis(value: any): string {
    if (Array.isArray(value)) return 'array';
    if (this.isSingleMediaField(value)) return 'singleMedia';
    if (this.isArrayMedia(value)) return 'arrayMedia';
    if (this.isRelationShipArray(value)) return 'relationshipArray';
    if (this.isEntity(value)) return 'entity';
    else return '';
  }

  private isRelationShipArray(obj: any): boolean {
    const isRelationShipArray = (value: any) => Array.isArray(value.data) && value.data[0].attributes;
    return obj ? isRelationShipArray(obj) : false;
  }

  private isArrayMedia(obj: any): boolean {
    const isArrayMedia = (value: any): boolean => {
      return value.data && value.data[0]?.id && value.data[0].attributes ? !!value.data[0].attributes.mime : false;
    };
    return obj ? isArrayMedia(obj) : false;
  }

  private isSingleMediaField(obj: any): boolean {
    const isSingleMediaField = (value: any) =>
      value.data && value.data.attributes ? !!value.data.attributes.mime : false;
    return obj ? isSingleMediaField(obj) : false;
  }

  private getMediaAttribute(media: StrapiMediaEntity | StrapiEntity): any {
    return media.data?.attributes ? media.data?.attributes : media.attributes;
  }

  private mapSingleMediaField(media: StrapiMediaEntity | StrapiEntity): Media {
    const attr: any = this.getMediaAttribute(media);
    try {
      return {
        alt: attr.alternativeText,
        small: attr.formats.small ? attr.formats.small.url : attr.formats.thumbnail.url,
        thumbnail: attr.formats.thumbnail.url,
        url: attr.url,
      };
    } catch (error) {
      throw new Error('No Valid data');
    }
  }

  private sanitizeDateTime(obj: any): any {
    if (obj) delete obj.publishedAt;
    delete obj.createdAt;
    delete obj.updatedAt;
    return obj;
  }
}
