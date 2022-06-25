export const findEntityResponseNoPopulate = {
    "data": [
      {
        "id": 1,
        "attributes": {
          "name": "Walter White",
          "role": "Chief Executive Officer",
          "bio": "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
          "createdAt": "2022-06-23T21:58:00.733Z",
          "updatedAt": "2022-06-23T21:58:08.889Z",
          "publishedAt": "2022-06-23T21:58:08.885Z"
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
          "publishedAt": "2022-06-23T22:00:27.386Z"
        }
      },
      {
        "id": 3,
        "attributes": {
          "name": "William Anderson",
          "role": "CTO",
          "bio": "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
          "createdAt": "2022-06-23T22:01:58.700Z",
          "updatedAt": "2022-06-23T22:02:00.216Z",
          "publishedAt": "2022-06-23T22:02:00.212Z"
        }
      },
      {
        "id": 4,
        "attributes": {
          "name": "Amanda Jepson",
          "role": "Accountant",
          "bio": "Dolorum tempora officiis odit laborum officiis et et accusamus",
          "createdAt": "2022-06-23T22:03:49.943Z",
          "updatedAt": "2022-06-23T22:03:51.168Z",
          "publishedAt": "2022-06-23T22:03:51.165Z"
        }
      }
    ],
    "meta": {
      "pagination": {
        "page": 1,
        "pageSize": 25,
        "pageCount": 1,
        "total": 4
      }
    }
}


  export const findOneEntityNoPopulate = {
    "data": {
      "id": 1,
      "attributes": {
        "name": "Walter White",
        "role": "Chief Executive Officer",
        "bio": "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
        "createdAt": "2022-06-23T21:58:00.733Z",
        "updatedAt": "2022-06-23T21:58:08.889Z",
        "publishedAt": "2022-06-23T21:58:08.885Z"
      }
    },
    "meta": {}
      
}

  export const findOneSingleTypeWithRelationshipsAndPopulation = {
  "data": {
    "id": 1,
    "attributes": {
      "createdAt": "2022-06-23T22:23:08.412Z",
      "updatedAt": "2022-06-23T22:23:10.671Z",
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
          },
          {
            "id": 3,
            "attributes": {
              "name": "William Anderson",
              "role": "CTO",
              "bio": "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
              "createdAt": "2022-06-23T22:01:58.700Z",
              "updatedAt": "2022-06-23T22:02:00.216Z",
              "publishedAt": "2022-06-23T22:02:00.212Z",
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
                "data": {
                  "id": 3,
                  "attributes": {
                    "name": "team-3.jpg",
                    "alternativeText": "team-3.jpg",
                    "caption": "team-3.jpg",
                    "width": 600,
                    "height": 600,
                    "formats": {
                      "small": {
                        "ext": ".jpg",
                        "url": "/uploads/small_team_3_3e6ed6b7dc.jpg",
                        "hash": "small_team_3_3e6ed6b7dc",
                        "mime": "image/jpeg",
                        "name": "small_team-3.jpg",
                        "path": null,
                        "size": 23.83,
                        "width": 500,
                        "height": 500
                      },
                      "thumbnail": {
                        "ext": ".jpg",
                        "url": "/uploads/thumbnail_team_3_3e6ed6b7dc.jpg",
                        "hash": "thumbnail_team_3_3e6ed6b7dc",
                        "mime": "image/jpeg",
                        "name": "thumbnail_team-3.jpg",
                        "path": null,
                        "size": 4.14,
                        "width": 156,
                        "height": 156
                      }
                    },
                    "hash": "team_3_3e6ed6b7dc",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "size": 30.44,
                    "url": "/uploads/team_3_3e6ed6b7dc.jpg",
                    "previewUrl": null,
                    "provider": "local",
                    "provider_metadata": null,
                    "createdAt": "2022-06-23T22:00:47.957Z",
                    "updatedAt": "2022-06-23T22:00:47.957Z"
                  }
                }
              }
            }
          },
          {
            "id": 4,
            "attributes": {
              "name": "Amanda Jepson",
              "role": "Accountant",
              "bio": "Dolorum tempora officiis odit laborum officiis et et accusamus",
              "createdAt": "2022-06-23T22:03:49.943Z",
              "updatedAt": "2022-06-23T22:03:51.168Z",
              "publishedAt": "2022-06-23T22:03:51.165Z",
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
                "data": {
                  "id": 4,
                  "attributes": {
                    "name": "team-4.jpg",
                    "alternativeText": "team-4.jpg",
                    "caption": "team-4.jpg",
                    "width": 600,
                    "height": 600,
                    "formats": {
                      "small": {
                        "ext": ".jpg",
                        "url": "/uploads/small_team_4_6429c0953d.jpg",
                        "hash": "small_team_4_6429c0953d",
                        "mime": "image/jpeg",
                        "name": "small_team-4.jpg",
                        "path": null,
                        "size": 20.33,
                        "width": 500,
                        "height": 500
                      },
                      "thumbnail": {
                        "ext": ".jpg",
                        "url": "/uploads/thumbnail_team_4_6429c0953d.jpg",
                        "hash": "thumbnail_team_4_6429c0953d",
                        "mime": "image/jpeg",
                        "name": "thumbnail_team-4.jpg",
                        "path": null,
                        "size": 3.71,
                        "width": 156,
                        "height": 156
                      }
                    },
                    "hash": "team_4_6429c0953d",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "size": 24.28,
                    "url": "/uploads/team_4_6429c0953d.jpg",
                    "previewUrl": null,
                    "provider": "local",
                    "provider_metadata": null,
                    "createdAt": "2022-06-23T22:02:19.563Z",
                    "updatedAt": "2022-06-23T22:02:19.563Z"
                  }
                }
              }
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
          },
          {
            "id": 3,
            "attributes": {
              "icon": "bx-tachometer",
              "title": "Magni Dolores",
              "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
              "createdAt": "2022-06-23T22:17:11.224Z",
              "updatedAt": "2022-06-23T22:17:11.965Z",
              "publishedAt": "2022-06-23T22:17:11.963Z"
            }
          },
          {
            "id": 4,
            "attributes": {
              "icon": "bx-layer",
              "title": "Nemo Enim",
              "text": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
              "createdAt": "2022-06-23T22:20:27.847Z",
              "updatedAt": "2022-06-23T22:20:28.791Z",
              "publishedAt": "2022-06-23T22:20:28.789Z"
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
          },
          {
            "id": 3,
            "attributes": {
              "createdAt": "2022-06-23T22:05:17.290Z",
              "updatedAt": "2022-06-23T22:05:18.881Z",
              "publishedAt": "2022-06-23T22:05:18.879Z",
              "logo": {
                "data": {
                  "id": 7,
                  "attributes": {
                    "name": "client-3.png",
                    "alternativeText": "client-3.png",
                    "caption": "client-3.png",
                    "width": 400,
                    "height": 142,
                    "formats": {
                      "thumbnail": {
                        "ext": ".png",
                        "url": "/uploads/thumbnail_client_3_d3e1b156ae.png",
                        "hash": "thumbnail_client_3_d3e1b156ae",
                        "mime": "image/png",
                        "name": "thumbnail_client-3.png",
                        "path": null,
                        "size": 14.05,
                        "width": 245,
                        "height": 87
                      }
                    },
                    "hash": "client_3_d3e1b156ae",
                    "ext": ".png",
                    "mime": "image/png",
                    "size": 3.23,
                    "url": "/uploads/client_3_d3e1b156ae.png",
                    "previewUrl": null,
                    "provider": "local",
                    "provider_metadata": null,
                    "createdAt": "2022-06-23T22:05:14.319Z",
                    "updatedAt": "2022-06-23T22:05:14.319Z"
                  }
                }
              }
            }
          },
          {
            "id": 4,
            "attributes": {
              "createdAt": "2022-06-23T22:05:31.970Z",
              "updatedAt": "2022-06-23T22:05:46.165Z",
              "publishedAt": "2022-06-23T22:05:46.162Z",
              "logo": {
                "data": {
                  "id": 8,
                  "attributes": {
                    "name": "client-4.png",
                    "alternativeText": "client-4.png",
                    "caption": "client-4.png",
                    "width": 400,
                    "height": 219,
                    "formats": {
                      "thumbnail": {
                        "ext": ".png",
                        "url": "/uploads/thumbnail_client_4_14aa926095.png",
                        "hash": "thumbnail_client_4_14aa926095",
                        "mime": "image/png",
                        "name": "thumbnail_client-4.png",
                        "path": null,
                        "size": 19.77,
                        "width": 245,
                        "height": 134
                      }
                    },
                    "hash": "client_4_14aa926095",
                    "ext": ".png",
                    "mime": "image/png",
                    "size": 4.28,
                    "url": "/uploads/client_4_14aa926095.png",
                    "previewUrl": null,
                    "provider": "local",
                    "provider_metadata": null,
                    "createdAt": "2022-06-23T22:05:27.884Z",
                    "updatedAt": "2022-06-23T22:05:27.884Z"
                  }
                }
              }
            }
          },
          {
            "id": 5,
            "attributes": {
              "createdAt": "2022-06-23T22:05:59.914Z",
              "updatedAt": "2022-06-23T22:06:00.761Z",
              "publishedAt": "2022-06-23T22:06:00.760Z",
              "logo": {
                "data": {
                  "id": 9,
                  "attributes": {
                    "name": "client-5.png",
                    "alternativeText": "client-5.png",
                    "caption": "client-5.png",
                    "width": 400,
                    "height": 142,
                    "formats": {
                      "thumbnail": {
                        "ext": ".png",
                        "url": "/uploads/thumbnail_client_5_c72786aba9.png",
                        "hash": "thumbnail_client_5_c72786aba9",
                        "mime": "image/png",
                        "name": "thumbnail_client-5.png",
                        "path": null,
                        "size": 10.69,
                        "width": 245,
                        "height": 87
                      }
                    },
                    "hash": "client_5_c72786aba9",
                    "ext": ".png",
                    "mime": "image/png",
                    "size": 3.27,
                    "url": "/uploads/client_5_c72786aba9.png",
                    "previewUrl": null,
                    "provider": "local",
                    "provider_metadata": null,
                    "createdAt": "2022-06-23T22:05:57.381Z",
                    "updatedAt": "2022-06-23T22:05:57.381Z"
                  }
                }
              }
            }
          },
          {
            "id": 6,
            "attributes": {
              "createdAt": "2022-06-23T22:06:13.090Z",
              "updatedAt": "2022-06-23T22:06:13.960Z",
              "publishedAt": "2022-06-23T22:06:13.958Z",
              "logo": {
                "data": {
                  "id": 10,
                  "attributes": {
                    "name": "client-6.png",
                    "alternativeText": "client-6.png",
                    "caption": "client-6.png",
                    "width": 400,
                    "height": 125,
                    "formats": {
                      "thumbnail": {
                        "ext": ".png",
                        "url": "/uploads/thumbnail_client_6_35f3e3b90d.png",
                        "hash": "thumbnail_client_6_35f3e3b90d",
                        "mime": "image/png",
                        "name": "thumbnail_client-6.png",
                        "path": null,
                        "size": 6.91,
                        "width": 245,
                        "height": 77
                      }
                    },
                    "hash": "client_6_35f3e3b90d",
                    "ext": ".png",
                    "mime": "image/png",
                    "size": 2.43,
                    "url": "/uploads/client_6_35f3e3b90d.png",
                    "previewUrl": null,
                    "provider": "local",
                    "provider_metadata": null,
                    "createdAt": "2022-06-23T22:06:10.579Z",
                    "updatedAt": "2022-06-23T22:06:10.579Z"
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
              "updatedAt": "2022-06-23T22:12:47.866Z",
              "publishedAt": "2022-06-23T22:08:29.919Z",
              "title": "first",
              "description": "none",
              "list_img": [
                {
                  "id": 1
                },
                {
                  "id": 2
                }
              ]
            }
          },
          {
            "id": 2,
            "attributes": {
              "createdAt": "2022-06-23T22:13:23.071Z",
              "updatedAt": "2022-06-23T22:14:32.056Z",
              "publishedAt": "2022-06-23T22:14:32.053Z",
              "title": "second",
              "description": "none",
              "list_img": [
                {
                  "id": 3
                }
              ]
            }
          },
          {
            "id": 3,
            "attributes": {
              "createdAt": "2022-06-23T22:13:53.753Z",
              "updatedAt": "2022-06-23T22:14:35.286Z",
              "publishedAt": "2022-06-23T22:14:35.283Z",
              "title": "third",
              "description": "none",
              "list_img": [
                {
                  "id": 4
                }
              ]
            }
          },
          {
            "id": 4,
            "attributes": {
              "createdAt": "2022-06-23T22:14:21.654Z",
              "updatedAt": "2022-06-23T22:14:38.981Z",
              "publishedAt": "2022-06-23T22:14:38.979Z",
              "title": "fourth",
              "description": "none",
              "list_img": [
                {
                  "id": 5
                }
              ]
            }
          }
        ]
      }
    }
  },
  "meta": {
    
  }
}