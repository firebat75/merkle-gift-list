// const axios = require('axios');
// const niceList = require('../utils/niceList.json');
// const MerkleTree = require('../utils/MerkleTree');




// async function listCheck(name) {
//   // TODO: how do we prove to the server we're on the nice list? 

//   await axios.post(`${serverUrl}/gift`, {
//     name: name
//   }).then(function (response) {
//     console.log(response.status, response.data);
//   }).catch(function (error) {
//     console.log(error);
//   })

//   return { status: response.status, data: response.data }
// }

const serverUrl = 'https://merkle-gift-list.onrender.com';

// var button = document.getElementById("button");
// const inputName = document.getElementById("input").textContent;
// console.log(inputName);
// button.addEventListener("click", listCheck(inputName));

async function listCheck(name) {
  const res = await fetch(
    `${serverUrl}/gift`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    },
  ).then(function (response) {
    console.log(response.status, response)
  }
  ).catch((function (error) {
    console.log(error)
  }))
}

listCheck("Chris Windler");