import { AxiosResponse } from "axios";

export const findSingleTypeWithRelationshipAndNestedComponent: AxiosResponse = {
    status: 200,
    statusText: 'ok',
    config: {},
    headers: {},
    data: {
        "data": {
            "id": 1,
            "attributes": {
                "createdAt": "2022-06-23T22:23:08.412Z",
                "updatedAt": "2022-06-29T17:12:50.652Z",
                "publishedAt": "2022-06-23T22:23:10.667Z",
                "collaborators": {
                    "data": [
                        {
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
                        {
                            "id": 2,
                            "attributes": {
                                "name": "Sarah Jhonson",
                                "role": "Product Manager",
                                "bio": "Aut maiores voluptates amet et quis praesentium qui senda para",
                                "createdAt": "2022-06-23T22:00:26.172Z",
                                "updatedAt": "2022-06-23T22:00:27.389Z",
                                "publishedAt": "2022-06-23T22:00:27.386Z",
                                "social_list": [
                                    {
                                        "id": 5,
                                        "url": "https://facebook.com",
                                        "icon": null
                                    },
                                    {
                                        "id": 6,
                                        "url": "https://twitter.com",
                                        "icon": null
                                    },
                                    {
                                        "id": 7,
                                        "url": "https://linkedin.com",
                                        "icon": null
                                    },
                                    {
                                        "id": 8,
                                        "url": "https://instagram.com",
                                        "icon": null
                                    }
                                ],
                                "profil_img": {
                                    "data": {
                                        "id": 2,
                                        "attributes": {
                                            "name": "team-2.jpg",
                                            "alternativeText": "team-2.jpg",
                                            "caption": "team-2.jpg",
                                            "width": 600,
                                            "height": 600,
                                            "formats": {
                                                "small": {
                                                    "ext": ".jpg",
                                                    "url": "/uploads/small_team_2_078f7f2ad2.jpg",
                                                    "hash": "small_team_2_078f7f2ad2",
                                                    "mime": "image/jpeg",
                                                    "name": "small_team-2.jpg",
                                                    "path": null,
                                                    "size": 27.97,
                                                    "width": 500,
                                                    "height": 500
                                                },
                                                "thumbnail": {
                                                    "ext": ".jpg",
                                                    "url": "/uploads/thumbnail_team_2_078f7f2ad2.jpg",
                                                    "hash": "thumbnail_team_2_078f7f2ad2",
                                                    "mime": "image/jpeg",
                                                    "name": "thumbnail_team-2.jpg",
                                                    "path": null,
                                                    "size": 4.16,
                                                    "width": 156,
                                                    "height": 156
                                                }
                                            },
                                            "hash": "team_2_078f7f2ad2",
                                            "ext": ".jpg",
                                            "mime": "image/jpeg",
                                            "size": 37.75,
                                            "url": "/uploads/team_2_078f7f2ad2.jpg",
                                            "previewUrl": null,
                                            "provider": "local",
                                            "provider_metadata": null,
                                            "createdAt": "2022-06-23T21:58:45.530Z",
                                            "updatedAt": "2022-06-23T21:58:45.530Z"
                                        }
                                    }
                                }
                            }
                        }
                    ]
                },
                "partners": {
                    "data": [
                        {
                            "id": 1,
                            "attributes": {
                                "createdAt": "2022-06-23T22:04:46.364Z",
                                "updatedAt": "2022-06-23T22:04:48.372Z",
                                "publishedAt": "2022-06-23T22:04:48.370Z",
                                "logo": {
                                    "data": {
                                        "id": 5,
                                        "attributes": {
                                            "name": "client-1.png",
                                            "alternativeText": "client-1.png",
                                            "caption": "client-1.png",
                                            "width": 400,
                                            "height": 173,
                                            "formats": {
                                                "thumbnail": {
                                                    "ext": ".png",
                                                    "url": "/uploads/thumbnail_client_1_aef65f11e1.png",
                                                    "hash": "thumbnail_client_1_aef65f11e1",
                                                    "mime": "image/png",
                                                    "name": "thumbnail_client-1.png",
                                                    "path": null,
                                                    "size": 18.2,
                                                    "width": 245,
                                                    "height": 106
                                                }
                                            },
                                            "hash": "client_1_aef65f11e1",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "size": 4.28,
                                            "url": "/uploads/client_1_aef65f11e1.png",
                                            "previewUrl": null,
                                            "provider": "local",
                                            "provider_metadata": null,
                                            "createdAt": "2022-06-23T22:04:43.856Z",
                                            "updatedAt": "2022-06-23T22:04:43.856Z"
                                        }
                                    }
                                }
                            }
                        },
                        {
                            "id": 2,
                            "attributes": {
                                "createdAt": "2022-06-23T22:05:01.300Z",
                                "updatedAt": "2022-06-23T22:05:01.976Z",
                                "publishedAt": "2022-06-23T22:05:01.974Z",
                                "logo": {
                                    "data": {
                                        "id": 6,
                                        "attributes": {
                                            "name": "client-2.png",
                                            "alternativeText": "client-2.png",
                                            "caption": "client-2.png",
                                            "width": 400,
                                            "height": 140,
                                            "formats": {
                                                "thumbnail": {
                                                    "ext": ".png",
                                                    "url": "/uploads/thumbnail_client_2_f451d37224.png",
                                                    "hash": "thumbnail_client_2_f451d37224",
                                                    "mime": "image/png",
                                                    "name": "thumbnail_client-2.png",
                                                    "path": null,
                                                    "size": 9.22,
                                                    "width": 245,
                                                    "height": 86
                                                }
                                            },
                                            "hash": "client_2_f451d37224",
                                            "ext": ".png",
                                            "mime": "image/png",
                                            "size": 3.08,
                                            "url": "/uploads/client_2_f451d37224.png",
                                            "previewUrl": null,
                                            "provider": "local",
                                            "provider_metadata": null,
                                            "createdAt": "2022-06-23T22:04:59.041Z",
                                            "updatedAt": "2022-06-23T22:04:59.041Z"
                                        }
                                    }
                                }
                            }
                        }
                    ]
                },
                "portfolio_items": {
                    "data": [
                        {
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
                        {
                            "id": 2,
                            "attributes": {
                                "createdAt": "2022-06-23T22:13:23.071Z",
                                "updatedAt": "2022-06-26T20:05:03.069Z",
                                "publishedAt": "2022-06-23T22:14:32.053Z",
                                "title": "second",
                                "description": "none",
                                "list_img": [
                                    {
                                        "id": 3,
                                        "title": "second",
                                        "description": "second description",
                                        "img": {
                                            "data": [
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
                                                },
                                                {
                                                    "id": 14,
                                                    "attributes": {
                                                        "name": "portfolio-5.jpg",
                                                        "alternativeText": "portfolio-5.jpg",
                                                        "caption": "portfolio-5.jpg",
                                                        "width": 582,
                                                        "height": 870,
                                                        "formats": {
                                                            "small": {
                                                                "ext": ".jpg",
                                                                "url": "/uploads/small_portfolio_5_cb708ef0ec.jpg",
                                                                "hash": "small_portfolio_5_cb708ef0ec",
                                                                "mime": "image/jpeg",
                                                                "name": "small_portfolio-5.jpg",
                                                                "path": null,
                                                                "size": 12.66,
                                                                "width": 334,
                                                                "height": 500
                                                            },
                                                            "medium": {
                                                                "ext": ".jpg",
                                                                "url": "/uploads/medium_portfolio_5_cb708ef0ec.jpg",
                                                                "hash": "medium_portfolio_5_cb708ef0ec",
                                                                "mime": "image/jpeg",
                                                                "name": "medium_portfolio-5.jpg",
                                                                "path": null,
                                                                "size": 22.72,
                                                                "width": 502,
                                                                "height": 750
                                                            },
                                                            "thumbnail": {
                                                                "ext": ".jpg",
                                                                "url": "/uploads/thumbnail_portfolio_5_cb708ef0ec.jpg",
                                                                "hash": "thumbnail_portfolio_5_cb708ef0ec",
                                                                "mime": "image/jpeg",
                                                                "name": "thumbnail_portfolio-5.jpg",
                                                                "path": null,
                                                                "size": 2.61,
                                                                "width": 104,
                                                                "height": 156
                                                            }
                                                        },
                                                        "hash": "portfolio_5_cb708ef0ec",
                                                        "ext": ".jpg",
                                                        "mime": "image/jpeg",
                                                        "size": 21.47,
                                                        "url": "/uploads/portfolio_5_cb708ef0ec.jpg",
                                                        "previewUrl": null,
                                                        "provider": "local",
                                                        "provider_metadata": null,
                                                        "createdAt": "2022-06-23T22:13:10.944Z",
                                                        "updatedAt": "2022-06-23T22:13:10.944Z"
                                                    }
                                                },
                                                {
                                                    "id": 15,
                                                    "attributes": {
                                                        "name": "portfolio-4.jpg",
                                                        "alternativeText": "portfolio-4.jpg",
                                                        "caption": "portfolio-4.jpg",
                                                        "width": 800,
                                                        "height": 529,
                                                        "formats": {
                                                            "small": {
                                                                "ext": ".jpg",
                                                                "url": "/uploads/small_portfolio_4_7217bf6b76.jpg",
                                                                "hash": "small_portfolio_4_7217bf6b76",
                                                                "mime": "image/jpeg",
                                                                "name": "small_portfolio-4.jpg",
                                                                "path": null,
                                                                "size": 10.58,
                                                                "width": 500,
                                                                "height": 331
                                                            },
                                                            "medium": {
                                                                "ext": ".jpg",
                                                                "url": "/uploads/medium_portfolio_4_7217bf6b76.jpg",
                                                                "hash": "medium_portfolio_4_7217bf6b76",
                                                                "mime": "image/jpeg",
                                                                "name": "medium_portfolio-4.jpg",
                                                                "path": null,
                                                                "size": 18.31,
                                                                "width": 750,
                                                                "height": 496
                                                            },
                                                            "thumbnail": {
                                                                "ext": ".jpg",
                                                                "url": "/uploads/thumbnail_portfolio_4_7217bf6b76.jpg",
                                                                "hash": "thumbnail_portfolio_4_7217bf6b76",
                                                                "mime": "image/jpeg",
                                                                "name": "thumbnail_portfolio-4.jpg",
                                                                "path": null,
                                                                "size": 3.87,
                                                                "width": 236,
                                                                "height": 156
                                                            }
                                                        },
                                                        "hash": "portfolio_4_7217bf6b76",
                                                        "ext": ".jpg",
                                                        "mime": "image/jpeg",
                                                        "size": 17.93,
                                                        "url": "/uploads/portfolio_4_7217bf6b76.jpg",
                                                        "previewUrl": null,
                                                        "provider": "local",
                                                        "provider_metadata": null,
                                                        "createdAt": "2022-06-23T22:13:10.977Z",
                                                        "updatedAt": "2022-06-23T22:13:10.977Z"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                },
                "services": {
                    "data": [
                        {
                            "id": 1,
                            "attributes": {
                                "icon": "bxl-dribbble",
                                "title": "Lorem Ipsum",
                                "text": "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
                                "createdAt": "2022-06-23T22:16:07.403Z",
                                "updatedAt": "2022-06-23T22:16:08.661Z",
                                "publishedAt": "2022-06-23T22:16:08.658Z"
                            }
                        },
                        {
                            "id": 2,
                            "attributes": {
                                "icon": "bx-file",
                                "title": "Sed ut perspici",
                                "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
                                "createdAt": "2022-06-23T22:16:50.237Z",
                                "updatedAt": "2022-06-23T22:16:50.837Z",
                                "publishedAt": "2022-06-23T22:16:50.834Z"
                            }
                        }
                    ]
                }
            }
        },
        "meta": {}
    }

}