const axios = require('axios');


const BASIC_API="http://localhost:3002/graphql?query=" 
axios({
    method: 'get',
    url: BASIC_API+"{videos{id}}",
  })
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    });
