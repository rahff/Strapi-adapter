import { stringify } from 'qs';
import { QueryObject } from '../api/interfaces/api/interfaces';

export class QueryBuilder {
  constructor(private query: QueryObject) {}

  public buildQueryString(): string {
    const queryObject: string[] | undefined = this.query.populate ? this.query.populate : this.query.fields;
    const param = this.query.param || null;
    const baseQuery = param ? `${this.query.entityName}/${param}?` : `${this.query.entityName}?`;
    let schema: any = {};
    if (queryObject) {
      schema = this.buildPopulation(queryObject);
      return `/${baseQuery}` + stringify(schema, { encodeValuesOnly: true });
    }
    return `/${baseQuery}populate=%2A`;
  }

  private buildPopulation(populateObject: string[]): any {
    let schema: any = { populate: {} };
    populateObject.forEach((name: string) => {
      const isNested = this.isNested(name);
      if (isNested) {
        schema['populate'][isNested[1]] = { populate: this.buildNestedPopulate(isNested) };
      } else {
        schema['populate'][name] = { populate: '*' };
      }
    });
    return schema;
  }

  private isNested(value: string): string[] | null {
    const regex = /([a-z_]+)\.([a-z_]+)(\.[a-z_+]+)?/i;
    const match = value.match(regex);
    return match ? match : null;
  }

  private buildNestedPopulate(array: string[]): string[] {
    const result: string[] = [];
    array.forEach((value: string) => {
      if (typeof value === 'string') result.push(value);
    });
    return result.slice(1).length > 3
      ? [result.slice(1)[1], result.slice(1)[1] + '.' + result.slice(1)[2], result.slice(1)[2] + result.slice(1)[3]]
      : [result.slice(1)[1], result.slice(1)[1] + result.slice(1)[2]];
  }
}
