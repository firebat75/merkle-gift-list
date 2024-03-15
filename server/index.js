const express = require('express');
const verifyProof = require('../utils/verifyProof');
const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList');
var cors = require('cors')


const port = 1225;

const app = express();
app.use(express.json());
// app.use(cors())

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const merkleTree = new MerkleTree(niceList);
const MERKLE_ROOT = merkleTree.getRoot();

app.post('/gift', (req, res) => {
  console.log(req.body);
  // grab the parameters from the front-end here

  const body = req.body;
  console.log(body.name);
  const name = body.name;
  const index = niceList.findIndex(n => n === name);
  console.log(index);
  const proof = merkleTree.getProof(index);

  // TODO: prove that a name is in the list 
  let isInTheList = false;
  if (verifyProof(proof, name, MERKLE_ROOT)) {
    console.log("proof checks out!");
    isInTheList = true;
  }
  if (isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
