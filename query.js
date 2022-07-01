// const qs = require('qs');

// const query = qs.stringify({
//     populate: {
//         collaborators: {
//             populate: "*"
//         },
//         services: {
//             populate: "*"
//         },
//         portfolio_items: {
//             populate: ["list_img.img"]
//         },
//         partners: {
//             populate: "*"
//         }
//     }
// }, {encodeValuesOnly: true})

// console.log(query);

const isNested = (value) => {
    const regex = /([a-z_]+)\.([a-z_]+)(\.[a-z_+]+)?/i
    console.log("result: ",value.match(regex))
    
}

isNested('portfolio_items.list_img.img')