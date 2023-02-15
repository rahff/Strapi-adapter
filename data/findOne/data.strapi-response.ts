import { AxiosResponse } from "axios"

export const findOneEntity: AxiosResponse = {
    status: 200,
    statusText: "OK",
    config: {} as any,
    headers: {},
    data: {
        "data": {
            "id": 1,
            "attributes": {
                "name": "Walter White",
                "role": "Chief Executive Officer",
                "bio": "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
                "createdAt": "2022-06-23T21:58:00.733Z",
                "updatedAt": "2022-06-23T21:58:08.889Z",
                "publishedAt": "2022-06-23T21:58:08.885Z",
                "social_list": [
                    {
                        "id": 1,
                        "url": "https://facebook.com",
                        "icon": null
                    },
                    {
                        "id": 2,
                        "url": "https://twitter.com",
                        "icon": null
                    },
                    {
                        "id": 3,
                        "url": "https://linkedin.com",
                        "icon": null
                    },
                    {
                        "id": 4,
                        "url": "https://instagram.com",
                        "icon": null
                    }
                ],
                "profil_img": {
                    "data": {
                        "id": 1,
                        "attributes": {
                            "name": "team-1.jpg",
                            "alternativeText": "team-1.jpg",
                            "caption": "team-1.jpg",
                            "width": 600,
                            "height": 600,
                            "formats": {
                                "small": {
                                    "ext": ".jpg",
                                    "url": "/uploads/small_team_1_63179cf9ca.jpg",
                                    "hash": "small_team_1_63179cf9ca",
                                    "mime": "image/jpeg",
                                    "name": "small_team-1.jpg",
                                    "path": null,
                                    "size": 24.73,
                                    "width": 500,
                                    "height": 500
                                },
                                "thumbnail": {
                                    "ext": ".jpg",
                                    "url": "/uploads/thumbnail_team_1_63179cf9ca.jpg",
                                    "hash": "thumbnail_team_1_63179cf9ca",
                                    "mime": "image/jpeg",
                                    "name": "thumbnail_team-1.jpg",
                                    "path": null,
                                    "size": 4.19,
                                    "width": 156,
                                    "height": 156
                                }
                            },
                            "hash": "team_1_63179cf9ca",
                            "ext": ".jpg",
                            "mime": "image/jpeg",
                            "size": 32.44,
                            "url": "/uploads/team_1_63179cf9ca.jpg",
                            "previewUrl": null,
                            "provider": "local",
                            "provider_metadata": null,
                            "createdAt": "2022-06-23T21:55:57.565Z",
                            "updatedAt": "2022-06-23T21:55:57.565Z"
                        }
                    }
                }
            }
        },
        "meta": {}
    }

}

export const findOneWithMultipleMedia: AxiosResponse = {
    status: 200,
    statusText: 'ok',
    config: {} as any,
    headers: {},
    data: {
        "data": {
            "id": 1,
            "attributes": {
                "name": "test",
                "price": "25",
                "description": "test lorem ipsum",
                "createdAt": "2022-06-29T13:30:16.781Z",
                "updatedAt": "2022-06-29T13:30:17.627Z",
                "publishedAt": "2022-06-29T13:30:17.624Z",
                "imgs": {
                    "data": [
                        {
                            "id": 20,
                            "attributes": {
                                "name": "portfolio-9.jpg",
                                "alternativeText": "portfolio-9.jpg",
                                "caption": "portfolio-9.jpg",
                                "width": 1269,
                                "height": 843,
                                "formats": {
                                    "large": {
                                        "ext": ".jpg",
                                        "url": "/uploads/large_portfolio_9_e530978522.jpg",
                                        "hash": "large_portfolio_9_e530978522",
                                        "mime": "image/jpeg",
                                        "name": "large_portfolio-9.jpg",
                                        "path": null,
                                        "size": 19.03,
                                        "width": 1000,
                                        "height": 664
                                    },
                                    "small": {
                                        "ext": ".jpg",
                                        "url": "/uploads/small_portfolio_9_e530978522.jpg",
                                        "hash": "small_portfolio_9_e530978522",
                                        "mime": "image/jpeg",
                                        "name": "small_portfolio-9.jpg",
                                        "path": null,
                                        "size": 6.68,
                                        "width": 500,
                                        "height": 332
                                    },
                                    "medium": {
                                        "ext": ".jpg",
                                        "url": "/uploads/medium_portfolio_9_e530978522.jpg",
                                        "hash": "medium_portfolio_9_e530978522",
                                        "mime": "image/jpeg",
                                        "name": "medium_portfolio-9.jpg",
                                        "path": null,
                                        "size": 12.51,
                                        "width": 750,
                                        "height": 498
                                    },
                                    "thumbnail": {
                                        "ext": ".jpg",
                                        "url": "/uploads/thumbnail_portfolio_9_e530978522.jpg",
                                        "hash": "thumbnail_portfolio_9_e530978522",
                                        "mime": "image/jpeg",
                                        "name": "thumbnail_portfolio-9.jpg",
                                        "path": null,
                                        "size": 2.19,
                                        "width": 235,
                                        "height": 156
                                    }
                                },
                                "hash": "portfolio_9_e530978522",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "size": 22.8,
                                "url": "/uploads/portfolio_9_e530978522.jpg",
                                "previewUrl": null,
                                "provider": "local",
                                "provider_metadata": null,
                                "createdAt": "2022-06-23T22:14:10.626Z",
                                "updatedAt": "2022-06-23T22:14:10.626Z"
                            }
                        },
                        {
                            "id": 21,
                            "attributes": {
                                "name": "portfolio-7.jpg",
                                "alternativeText": "portfolio-7.jpg",
                                "caption": "portfolio-7.jpg",
                                "width": 1197,
                                "height": 777,
                                "formats": {
                                    "large": {
                                        "ext": ".jpg",
                                        "url": "/uploads/large_portfolio_7_10ca92b0bf.jpg",
                                        "hash": "large_portfolio_7_10ca92b0bf",
                                        "mime": "image/jpeg",
                                        "name": "large_portfolio-7.jpg",
                                        "path": null,
                                        "size": 49.29,
                                        "width": 1000,
                                        "height": 649
                                    },
                                    "small": {
                                        "ext": ".jpg",
                                        "url": "/uploads/small_portfolio_7_10ca92b0bf.jpg",
                                        "hash": "small_portfolio_7_10ca92b0bf",
                                        "mime": "image/jpeg",
                                        "name": "small_portfolio-7.jpg",
                                        "path": null,
                                        "size": 17.36,
                                        "width": 500,
                                        "height": 325
                                    },
                                    "medium": {
                                        "ext": ".jpg",
                                        "url": "/uploads/medium_portfolio_7_10ca92b0bf.jpg",
                                        "hash": "medium_portfolio_7_10ca92b0bf",
                                        "mime": "image/jpeg",
                                        "name": "medium_portfolio-7.jpg",
                                        "path": null,
                                        "size": 31.93,
                                        "width": 750,
                                        "height": 487
                                    },
                                    "thumbnail": {
                                        "ext": ".jpg",
                                        "url": "/uploads/thumbnail_portfolio_7_10ca92b0bf.jpg",
                                        "hash": "thumbnail_portfolio_7_10ca92b0bf",
                                        "mime": "image/jpeg",
                                        "name": "thumbnail_portfolio-7.jpg",
                                        "path": null,
                                        "size": 5.98,
                                        "width": 240,
                                        "height": 156
                                    }
                                },
                                "hash": "portfolio_7_10ca92b0bf",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "size": 63.89,
                                "url": "/uploads/portfolio_7_10ca92b0bf.jpg",
                                "previewUrl": null,
                                "provider": "local",
                                "provider_metadata": null,
                                "createdAt": "2022-06-23T22:14:10.658Z",
                                "updatedAt": "2022-06-23T22:14:10.658Z"
                            }
                        }
                    ]
                }
            }
        },
        "meta": {}
    }

}

export const findOneEntityWithMediaComponent: AxiosResponse = {
    status: 200,
    statusText: "ok",
    config: {} as any,
    headers: {},
    data: {
        "data": {
            "id": 1,
            "attributes": {
                "createdAt": "2022-06-23T22:08:28.649Z",
                "updatedAt": "2022-06-26T20:04:43.266Z",
                "publishedAt": "2022-06-23T22:08:29.919Z",
                "title": "first",
                "description": "none",
                "list_img": [
                    {
                        "id": 1,
                        "title": "first",
                        "description": "first description",
                        "img": {
                            "data": [
                                {
                                    "id": 11,
                                    "attributes": {
                                        "name": "portfolio-1.jpg",
                                        "alternativeText": "portfolio-1.jpg",
                                        "caption": "portfolio-1.jpg",
                                        "width": 873,
                                        "height": 885,
                                        "formats": {
                                            "small": {
                                                "ext": ".jpg",
                                                "url": "/uploads/small_portfolio_1_64c903fa9f.jpg",
                                                "hash": "small_portfolio_1_64c903fa9f",
                                                "mime": "image/jpeg",
                                                "name": "small_portfolio-1.jpg",
                                                "path": null,
                                                "size": 13.47,
                                                "width": 493,
                                                "height": 500
                                            },
                                            "medium": {
                                                "ext": ".jpg",
                                                "url": "/uploads/medium_portfolio_1_64c903fa9f.jpg",
                                                "hash": "medium_portfolio_1_64c903fa9f",
                                                "mime": "image/jpeg",
                                                "name": "medium_portfolio-1.jpg",
                                                "path": null,
                                                "size": 24.26,
                                                "width": 740,
                                                "height": 750
                                            },
                                            "thumbnail": {
                                                "ext": ".jpg",
                                                "url": "/uploads/thumbnail_portfolio_1_64c903fa9f.jpg",
                                                "hash": "thumbnail_portfolio_1_64c903fa9f",
                                                "mime": "image/jpeg",
                                                "name": "thumbnail_portfolio-1.jpg",
                                                "path": null,
                                                "size": 2.39,
                                                "width": 154,
                                                "height": 156
                                            }
                                        },
                                        "hash": "portfolio_1_64c903fa9f",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "size": 25.34,
                                        "url": "/uploads/portfolio_1_64c903fa9f.jpg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2022-06-23T22:08:16.161Z",
                                        "updatedAt": "2022-06-23T22:08:16.161Z"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "id": 2,
                        "title": null,
                        "description": null,
                        "img": {
                            "data": [
                                {
                                    "id": 12,
                                    "attributes": {
                                        "name": "portfolio-2.jpg",
                                        "alternativeText": "portfolio-2.jpg",
                                        "caption": "portfolio-2.jpg",
                                        "width": 1302,
                                        "height": 873,
                                        "formats": {
                                            "large": {
                                                "ext": ".jpg",
                                                "url": "/uploads/large_portfolio_2_0097fd4595.jpg",
                                                "hash": "large_portfolio_2_0097fd4595",
                                                "mime": "image/jpeg",
                                                "name": "large_portfolio-2.jpg",
                                                "path": null,
                                                "size": 70.49,
                                                "width": 1000,
                                                "height": 671
                                            },
                                            "small": {
                                                "ext": ".jpg",
                                                "url": "/uploads/small_portfolio_2_0097fd4595.jpg",
                                                "hash": "small_portfolio_2_0097fd4595",
                                                "mime": "image/jpeg",
                                                "name": "small_portfolio-2.jpg",
                                                "path": null,
                                                "size": 19.14,
                                                "width": 500,
                                                "height": 335
                                            },
                                            "medium": {
                                                "ext": ".jpg",
                                                "url": "/uploads/medium_portfolio_2_0097fd4595.jpg",
                                                "hash": "medium_portfolio_2_0097fd4595",
                                                "mime": "image/jpeg",
                                                "name": "medium_portfolio-2.jpg",
                                                "path": null,
                                                "size": 40.55,
                                                "width": 750,
                                                "height": 503
                                            },
                                            "thumbnail": {
                                                "ext": ".jpg",
                                                "url": "/uploads/thumbnail_portfolio_2_0097fd4595.jpg",
                                                "hash": "thumbnail_portfolio_2_0097fd4595",
                                                "mime": "image/jpeg",
                                                "name": "thumbnail_portfolio-2.jpg",
                                                "path": null,
                                                "size": 5.07,
                                                "width": 233,
                                                "height": 156
                                            }
                                        },
                                        "hash": "portfolio_2_0097fd4595",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "size": 113.56,
                                        "url": "/uploads/portfolio_2_0097fd4595.jpg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2022-06-23T22:12:45.084Z",
                                        "updatedAt": "2022-06-23T22:12:45.084Z"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        "meta": {}
    }
 
}

export const findOneWithDzAndNestedComponent: AxiosResponse = {
    status: 200,
    statusText: 'ok',
    config: {} as any,
    headers: {},
    data: {
        "data": {
            "id": 1,
            "attributes": {
                "name": "name",
                "createdAt": "2022-06-26T19:56:03.246Z",
                "updatedAt": "2022-06-28T17:41:51.472Z",
                "publishedAt": "2022-06-26T19:56:14.837Z",
                "dz": [
                    {
                        "id": 6,
                        "__component": "portfolio.imgs",
                        "title": "first",
                        "description": "first description",
                        "img": {
                            "data": [
                                {
                                    "id": 17,
                                    "attributes": {
                                        "name": "portfolio-5.jpg",
                                        "alternativeText": "portfolio-5.jpg",
                                        "caption": "portfolio-5.jpg",
                                        "width": 582,
                                        "height": 870,
                                        "formats": {
                                            "small": {
                                                "ext": ".jpg",
                                                "url": "/uploads/small_portfolio_5_cbccadab23.jpg",
                                                "hash": "small_portfolio_5_cbccadab23",
                                                "mime": "image/jpeg",
                                                "name": "small_portfolio-5.jpg",
                                                "path": null,
                                                "size": 12.66,
                                                "width": 334,
                                                "height": 500
                                            },
                                            "medium": {
                                                "ext": ".jpg",
                                                "url": "/uploads/medium_portfolio_5_cbccadab23.jpg",
                                                "hash": "medium_portfolio_5_cbccadab23",
                                                "mime": "image/jpeg",
                                                "name": "medium_portfolio-5.jpg",
                                                "path": null,
                                                "size": 22.72,
                                                "width": 502,
                                                "height": 750
                                            },
                                            "thumbnail": {
                                                "ext": ".jpg",
                                                "url": "/uploads/thumbnail_portfolio_5_cbccadab23.jpg",
                                                "hash": "thumbnail_portfolio_5_cbccadab23",
                                                "mime": "image/jpeg",
                                                "name": "thumbnail_portfolio-5.jpg",
                                                "path": null,
                                                "size": 2.61,
                                                "width": 104,
                                                "height": 156
                                            }
                                        },
                                        "hash": "portfolio_5_cbccadab23",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "size": 21.47,
                                        "url": "/uploads/portfolio_5_cbccadab23.jpg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2022-06-23T22:13:42.695Z",
                                        "updatedAt": "2022-06-23T22:13:42.695Z"
                                    }
                                },
                                {
                                    "id": 13,
                                    "attributes": {
                                        "name": "portfolio-3.jpg",
                                        "alternativeText": "portfolio-3.jpg",
                                        "caption": "portfolio-3.jpg",
                                        "width": 800,
                                        "height": 450,
                                        "formats": {
                                            "small": {
                                                "ext": ".jpg",
                                                "url": "/uploads/small_portfolio_3_a1fbb07c4d.jpg",
                                                "hash": "small_portfolio_3_a1fbb07c4d",
                                                "mime": "image/jpeg",
                                                "name": "small_portfolio-3.jpg",
                                                "path": null,
                                                "size": 10.97,
                                                "width": 500,
                                                "height": 281
                                            },
                                            "medium": {
                                                "ext": ".jpg",
                                                "url": "/uploads/medium_portfolio_3_a1fbb07c4d.jpg",
                                                "hash": "medium_portfolio_3_a1fbb07c4d",
                                                "mime": "image/jpeg",
                                                "name": "medium_portfolio-3.jpg",
                                                "path": null,
                                                "size": 20.89,
                                                "width": 750,
                                                "height": 422
                                            },
                                            "thumbnail": {
                                                "ext": ".jpg",
                                                "url": "/uploads/thumbnail_portfolio_3_a1fbb07c4d.jpg",
                                                "hash": "thumbnail_portfolio_3_a1fbb07c4d",
                                                "mime": "image/jpeg",
                                                "name": "thumbnail_portfolio-3.jpg",
                                                "path": null,
                                                "size": 3.42,
                                                "width": 245,
                                                "height": 138
                                            }
                                        },
                                        "hash": "portfolio_3_a1fbb07c4d",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "size": 19.16,
                                        "url": "/uploads/portfolio_3_a1fbb07c4d.jpg",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2022-06-23T22:13:10.932Z",
                                        "updatedAt": "2022-06-23T22:13:10.932Z"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "id": 16,
                        "__component": "collaborator.social-list",
                        "url": "http://dz.zone.com",
                        "icon": "pickachu"
                    }
                ]
            }
        },
        "meta": {}
    }

}