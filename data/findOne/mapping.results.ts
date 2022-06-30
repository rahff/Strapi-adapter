export const findOneEntityResult = {
    "data": {
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
            },
        ],
        "profil_img": {
            "alt":"team-1.jpg",
            "small": "/uploads/small_team_1_63179cf9ca.jpg",
            "thumbnail": "/uploads/thumbnail_team_1_63179cf9ca.jpg",
            "url": "/uploads/team_1_63179cf9ca.jpg"
        }
    }
  }

  export const findOneWithMultipleMediaMappingResult = {
    "data": {
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
    }
}

export const findOneEntityWithMediaComponentResultMapping = {
    "data": {
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
                            "url": "/uploads/portfolio_1_64c903fa9f.jpg",
                            "small": "/uploads/small_portfolio_1_64c903fa9f.jpg",
                            "thumbnail": "/uploads/thumbnail_portfolio_1_64c903fa9f.jpg",
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
                                "thumbnail": "/uploads/thumbnail_portfolio_2_0097fd4595.jpg",
                                "url": "/uploads/portfolio_2_0097fd4595.jpg",
                            }
                        ]
            }
            ]
    }
}


export const findOneWithDzAndNestedComponentResultMapping = {
    "data": {
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
                            "url": "/uploads/portfolio_5_cbccadab23.jpg",
                        },
                        {
                            "alt": "portfolio-3.jpg",
                            "small": "/uploads/small_portfolio_3_a1fbb07c4d.jpg",
                            "thumbnail": "/uploads/thumbnail_portfolio_3_a1fbb07c4d.jpg",
                            "url": "/uploads/portfolio_3_a1fbb07c4d.jpg"
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
}