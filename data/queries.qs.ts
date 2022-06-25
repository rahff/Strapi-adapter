import { stringify } from "qs";
import { RelationshipPopulation } from "../src/builders/interfaces";

export const allPopulateFirstLevel = stringify({
    populate : "*",
    pagination: {
        page: 1,
        pageSize: 10,
      }
}, {encodeValuesOnly: true})

export const populateSomeFieldsFirstLevel = stringify({
    populate : ['collaborators', 'services'],
    pagination: {
        page: 1,
        pageSize: 10,
      }
}, {encodeValuesOnly: true})

export const populateSomeSlectedFields = stringify({
    fields: ['name', 'role'],
}, {encodeValuesOnly: true})

export const populateSomeSlectedFieldsAndPopulateSelectedFieldInRelationship = stringify({
    fields: ['name', 'role'],
    populate: {
        social_list: {fields: ['url']},
    }
}, {encodeValuesOnly: true})

export const allPopulateSecondLevel = stringify({
    populate: {
        collaborators: {
            populate: "*"
        },
        services: {
            populate: "*"
        },
        partners: {
            populate: "*"
        },
        portfolio_items: {
            populate: "*"
        },
    },
    sort: ["name:desc"]
}, {encodeValuesOnly: true});

export const populatedComponent = stringify({
    populate: [
      'seoData',
      'seoData.sharedImage',
      'seoData.sharedImage.media',
    ],
    pagination: {page: 2, pageSize: 4}
  }, {
    encodeValuesOnly: true,
  });

export const populateDzWithComponents = stringify({
    populate: {
      testDZ1: {
        populate: '*',
      },
      testDZ2: {
        populate: '*',
      },
    },
    sort: ["desc"]
  }, {
    encodeValuesOnly: true,
  });

export const populatedOneRelationshipAndManyFieldInSecondLevel = stringify({
    populate: {
        collaborators: {
            populate:[ "profil_img", "social_list"],
        },
    }
}, {encodeValuesOnly: true})

export const populatedManyRelationshipAndManyFieldInSecondLevel = stringify({
    populate: {
        collaborators: {
            populate:[ "profil_img", "social_list"]
        },
        portfolio_items: {
            populate: ["list_img.img"]
        }
    }
}, {encodeValuesOnly: true})


function logValues(values: string[]){
    values.forEach((v)=> console.log(`\n${v}`));
}

export const oneToManyObject: RelationshipPopulation = {
    relationshipName: "collaborators", populateFields: ["profil_img", "social_list"]
}

export const manyToManyObject: RelationshipPopulation[] = [{relationshipName: "collaborators", populateFields: ["profil_img", "social_list"]}, {relationshipName: "portfolio_items", populateFields: ["list_img.img"]}];

export const manyToAll = ['collaborators', 'services', 'partners', 'portfolio_items'];

export const someRelationshipToPopulate = ['collaborators', 'services'];

export const someSelectedField = ['name', 'role'];

export const myLogs = logValues([populatedManyRelationshipAndManyFieldInSecondLevel])