var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://pokeapi.co/api/v2/pokemon/?limit=151',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

//and then render the results.name from the response 