const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 

  await axios.post(`${serverUrl}/gift`, {
    name: "Chris Windler"
  }).then(function (response) {
    console.log(response.status, response.data);
  }).catch(function (error) {
    console.log(error);
  })

  // console.log({ gift });
}

main();