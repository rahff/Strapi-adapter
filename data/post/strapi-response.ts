import { AxiosResponse } from "axios";

export const postEntityWithoutFile: AxiosResponse = {
    status: 200,
    statusText: 'ok',
    config: {} as any,
    headers: {},
    data: {
        "data": {
            "id": 2,
            "attributes": {
                "name": "test",
                "price": 25,
                "description": "lorem ipsum feroe y dallas",
                "createdAt": "2022-07-04T16:13:47.281Z",
                "updatedAt": "2022-07-04T16:13:47.281Z",
                "publishedAt": "2022-07-04T16:13:47.279Z"
            }
        },
        "meta": {}
    }
    
}