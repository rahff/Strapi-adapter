export const findEntityResultMapping = {
    "data": [
        {
            "id": 1,
            "name": "Walter White",
                "role": "Chief Executive Officer",
                "bio": "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
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
                    "alt": "team-1.jpg",
                    "url": "/uploads/team_1_63179cf9ca.jpg",
                    "small": "/uploads/small_team_1_63179cf9ca.jpg",
                    "thumbnail": "/uploads/thumbnail_team_1_63179cf9ca.jpg",
                }
        },
        {
            "id": 2,
            "name": "Sarah Jhonson",
            "role": "Product Manager",
            "bio": "Aut maiores voluptates amet et quis praesentium qui senda para",
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
                "alt": "team-2.jpg",
                "url": "/uploads/team_2_078f7f2ad2.jpg",
                "small": "/uploads/small_team_2_078f7f2ad2.jpg",
                "thumbnail": "/uploads/thumbnail_team_2_078f7f2ad2.jpg",
            }
        },
        {
            "id": 3,
            "name": "William Anderson",
                "role": "CTO",
                "bio": "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
                "social_list": [
                    {
                        "id": 9,
                        "url": "https://facebook.com",
                        "icon": null
                    },
                    {
                        "id": 10,
                        "url": "https://twitter.com",
                        "icon": null
                    },
                    {
                        "id": 11,
                        "url": "https://linkedin.com",
                        "icon": null
                    },
                    {
                        "id": 12,
                        "url": "https://instagram.com",
                        "icon": null
                    }
                ],
                "profil_img": {
                    "alt": "team-3.jpg",
                    "url": "/uploads/team_3_3e6ed6b7dc.jpg",
                    "small": "/uploads/small_team_3_3e6ed6b7dc.jpg",
                    "thumbnail": "/uploads/thumbnail_team_3_3e6ed6b7dc.jpg",
                }
        },
        {
            "id": 4,
            "name": "Amanda Jepson",
                "role": "Accountant",
                "bio": "Dolorum tempora officiis odit laborum officiis et et accusamus",
                "social_list": [
                    {
                        "id": 13,
                        "url": "https://facebook.com",
                        "icon": null
                    },
                    {
                        "id": 14,
                        "url": "https://twitter.com",
                        "icon": null
                    },
                    {
                        "id": 15,
                        "url": "https://instagram.com",
                        "icon": null
                    }
                ],
                "profil_img": {
                    "alt": "team-4.jpg",
                    "url": "/uploads/team_4_6429c0953d.jpg",
                    "small": "/uploads/small_team_4_6429c0953d.jpg",
                    "thumbnail": "/uploads/thumbnail_team_4_6429c0953d.jpg",
                }
        }
    ],
    "pagination": {
        "page": 1,
        "pageSize": 25,
        "pageCount": 1,
        "total": 4
    }
}

export const findEntityMultipleMediaResultMapping = {
    "data": [
        {
            "id": 1,
            "name": "test",
            "price": "25",
            "description": "test lorem ipsum",
            "imgs": [
                {
                    "alt": "portfolio-9.jpg",
                    "small": "/uploads/small_portfolio_9_e530978522.jpg",
                    "thumbnail": "/uploads/thumbnail_portfolio_9_e530978522.jpg",
                    "url": "/uploads/portfolio_9_e530978522.jpg",
                },
                {
                    "alt": "portfolio-7.jpg",
                    "small": "/uploads/small_portfolio_7_10ca92b0bf.jpg",
                    "thumbnail": "/uploads/thumbnail_portfolio_7_10ca92b0bf.jpg",
                    "url": "/uploads/portfolio_7_10ca92b0bf.jpg",
                }
            ]
        },
        {
            "id": 2,
            "name": "test2",
            "price": "85",
            "description": "Café moulu bio du brésil format 1kg emballage bio garantie commerce équitable",
            "imgs": [
                {
                    "alt": "portfolio-3.jpg",
                    "small": "/uploads/small_portfolio_3_a1fbb07c4d.jpg",
                    "thumbnail": "/uploads/thumbnail_portfolio_3_a1fbb07c4d.jpg",
                    "url": "/uploads/portfolio_3_a1fbb07c4d.jpg",
                },
                {
                    "alt": "portfolio-2.jpg",
                    "small": "/uploads/small_portfolio_2_0097fd4595.jpg",
                    "thumbnail": "/uploads/thumbnail_portfolio_2_0097fd4595.jpg",
                    "url": "/uploads/portfolio_2_0097fd4595.jpg",
                }
            ]
        }
    ],
    "pagination": {
        "page": 1,
        "pageSize": 25,
        "pageCount": 1,
        "total": 2
    }
}


export const findEntityWithMediaComponentResultMapping = {
    "data": [
        {
            "id": 1,
            "title": "first",
            "description": "none",
            "list_img": [
                {
                    "id": 1,
                    "title": "first",
                    "description": "first description",
                    "img": [
                            {
                                "alt": "portfolio-1.jpg",
                                "small": "/uploads/small_portfolio_1_64c903fa9f.jpg",
                                "thumbnail": "/uploads/thumbnail_portfolio_1_64c903fa9f.jpg",
                                "url": "/uploads/portfolio_1_64c903fa9f.jpg"
                            }
                        ]
                    
                },
                {
                    "id": 2,
                    "title": null,
                    "description": null,
                    "img": [
                            {
                                "alt": "portfolio-2.jpg",
                                "small": "/uploads/small_portfolio_2_0097fd4595.jpg",
                                "thumbnail":  "/uploads/thumbnail_portfolio_2_0097fd4595.jpg",
                                "url": "/uploads/portfolio_2_0097fd4595.jpg"
                            }
                        ]
                    
                }
            ]
        },
        {
            "id": 2,
            "title": "second",
            "description": "none",
            "list_img": [
                {
                    "id": 3,
                    "title": "second",
                    "description": "second description",
                    "img": [
                            {
                                "alt": "portfolio-3.jpg",
                                "small": "/uploads/small_portfolio_3_a1fbb07c4d.jpg",
                                "thumbnail": "/uploads/thumbnail_portfolio_3_a1fbb07c4d.jpg",
                                "url": "/uploads/portfolio_3_a1fbb07c4d.jpg",
                            },
                            {
                                "alt": "portfolio-5.jpg",
                                "small": "/uploads/small_portfolio_5_cb708ef0ec.jpg",
                                "thumbnail": "/uploads/thumbnail_portfolio_5_cb708ef0ec.jpg",
                                "url": "/uploads/portfolio_5_cb708ef0ec.jpg",
                            },
                            {
                                "alt": "portfolio-4.jpg",
                                "small": "/uploads/small_portfolio_4_7217bf6b76.jpg",
                                "thumbnail": "/uploads/thumbnail_portfolio_4_7217bf6b76.jpg",
                                "url": "/uploads/portfolio_4_7217bf6b76.jpg"
                            }
                        ]
                    
                }
            ]
        }
    ],
    "pagination": {
        "page": 1,
        "pageSize": 25,
        "pageCount": 1,
        "total": 2
    }

}

export const findEntityWithDzAndNestedComponentResultMapping = {
    "data": [
        {
            "id": 1,
            "name": "name",
            "dz": [
                {
                    "id": 6,
                    "__component": "portfolio.imgs",
                    "title": "first",
                    "description": "first description",
                    "img": [
                            {
                                "alt": "portfolio-5.jpg",
                                "small": "/uploads/small_portfolio_5_cbccadab23.jpg",
                                "thumbnail": "/uploads/thumbnail_portfolio_5_cbccadab23.jpg",
                                "url": "/uploads/portfolio_5_cbccadab23.jpg"
                            },
                            {
                                "alt": "portfolio-3.jpg",
                                "small": "/uploads/small_portfolio_3_a1fbb07c4d.jpg",
                                "thumbnail": "/uploads/thumbnail_portfolio_3_a1fbb07c4d.jpg",
                                "url": "/uploads/portfolio_3_a1fbb07c4d.jpg",
                            }
                        ]
                },
                {
                    "id": 16,
                    "__component": "collaborator.social-list",
                    "url": "http://dz.zone.com",
                    "icon": "pickachu"
                }
            ]
        },
        {
            "id": 1,
            "name": "name",
            "dz": [
                {
                    "id": 6,
                    "__component": "portfolio.imgs",
                    "title": "first",
                    "description": "first description",
                    "img": [
                            {
                                "alt": "portfolio-5.jpg",
                                "small": "/uploads/small_portfolio_5_cbccadab23.jpg",
                                "thumbnail": "/uploads/thumbnail_portfolio_5_cbccadab23.jpg",
                                "url": "/uploads/portfolio_5_cbccadab23.jpg"
                            },
                            {
                                "alt": "portfolio-3.jpg",
                                "small": "/uploads/small_portfolio_3_a1fbb07c4d.jpg",
                                "thumbnail": "/uploads/thumbnail_portfolio_3_a1fbb07c4d.jpg",
                                "url": "/uploads/portfolio_3_a1fbb07c4d.jpg",
                            }
                        ]
                },
                {
                    "id": 16,
                    "__component": "collaborator.social-list",
                    "url": "http://dz.zone.com",
                    "icon": "pickachu"
                }
            ]
        }
    ],
    "pagination": {
            "page": 1,
            "pageSize": 25,
            "pageCount": 1,
            "total": 1
    }
}


export const findEntityWithComplexRelationshipResultMapping = {
    "data": [
        {
            "id": 1,
            "name": "name",
            "price": 25,
            "description": "Chaussure Femme Chaussures de Sport Respirante Coussin d'air Sneakers 36-42EU",
            "seller": {
                    "id": 1,
                    "name": "Walter White",
                    "role": "Chief Executive Officer",
                    "bio": "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
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
                        "alt": "team-1.jpg",
                        "small": "/uploads/small_team_1_63179cf9ca.jpg",
                        "thumbnail": "/uploads/thumbnail_team_1_63179cf9ca.jpg",
                        "url": "/uploads/team_1_63179cf9ca.jpg"
                    }
            }
        }
    ],
    "pagination": {
        "page": 1,
        "pageSize": 25,
        "pageCount": 1,
        "total": 1
    }
}