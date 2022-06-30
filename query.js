const qs = require('qs');

const query = qs.stringify({
    populate: {
        seller: {
            populate: "*"
        }
    }
}, {encodeValuesOnly: true})

console.log(query);