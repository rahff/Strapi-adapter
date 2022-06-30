import { QueryBuilder } from '../src/api/queryBuilder'



describe('QueryBuilder', ()=>{

    it('should build a query for no populating', ()=>{
        const query = new QueryBuilder({entityName: 'test'}).buildQueryString();
        expect(query).toBe("/test?populate=%2A")
    })

    it('should return a query for populating some relationship', ()=>{
        const query = new QueryBuilder({entityName: 'test', populate: ['test1', "test2"]}).buildQueryString();
        expect(query).toBe("/test?populate[test1][populate]=%2A&populate[test2][populate]=%2A")
    })

})