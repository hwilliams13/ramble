/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */


/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const thrWrd = {mult: 3, mType: "word", currentTile: false}; // 3x word score
const twoWrd = {mult: 2, mType: "word", currentTile: false}; // 2x word score

const thrLet = {mult: 3, mType: "letter", currentTile: false}; // 3x letter score
const twoLet = {mult: 2, mType: "letter", currentTile: false}; // 2x letter score

const nrmSpc = {mult: 1, mType: "normal", currentTile: false}; // normal space

// tiles
const tileBlank = {
  letter: "",
  option: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  pointvalue: 0
}

const tileA = {
  letter: "a",
  pointvalue: 1
}

const tileB = {
  letter: "b",
  pointvalue: 1
}

const tileC = {
  letter: "c",
  pointvalue: 3
}

const tileD = {
  letter: "d",
  pointvalue: 2
}

const tileE = {
  letter: "e",
  pointvalue: 1
}

const tileF = {
  letter: "f",
  pointvalue: 4
}

const tileG = {
  letter: "g",
  pointvalue: 2
}

const tileH = {
  letter: "h",
  pointvalue: 4
}

const tileI = {
  letter: "i",
  pointvalue: 1
}

const tileJ = {
  letter: "j",
  pointvalue: 8
}

const tileK = {
  letter: "k",
  pointvalue: 5
}

const tileL = {
  letter: "l",
  pointvalue: 1
}

const tileM = {
  letter: "m",
  pointvalue: 3
}

const tileN = {
  letter: "n",
  pointvalue: 1
}

const tileO = {
  letter: "o",
  pointvalue: 1
}

const tileP = {
  letter: "p",
  pointvalue: 3
}

const tileQ = {
  letter: "q",
  pointvalue: 10
}

const tileR = {
  letter: "r",
  pointvalue: 1
}

const tileS = {
  letter: "s",
  pointvalue: 1
}

const tileT = {
  letter: "t",
  pointvalue: 1
}

const tileU = {
  letter: "u",
  pointvalue: 1
}

const tileV = {
  letter: "v",
  pointvalue: 4
}

const tileW = {
  letter: "w",
  pointvalue: 4
}

const tileX = {
  letter: "x",
  pointvalue: 8
}

const tileY = {
  letter: "y",
  pointvalue: 4
}

const tileZ = {
  letter: "z",
  pointvalue: 10
}


// make tile array
const tileArray = [];

tileArray.push(tileJ, tileK, tileQ, tileX, tileZ);


for (i=0; i<2; i++) {
  tileArray.push(tileBlank, tileB, tileC, tileF, tileH, tileM, tileP, tileV, tileW, tileY);
}

for (i=0; i<3; i++) {
  tileArray.push(tileG);
}

for (i=0; i<4; i++) {
  tileArray.push(tileD, tileL, tileS, tileU);
}

for (i=0; i<6; i++) {
  tileArray.push(tileN, tileR, tileT);
}

for (i=0; i<8; i++) {
  tileArray.push(tileO);
}

for (i=0; i<9; i++) {
  tileArray.push(tileA, tileI);
}

for (i=0; i<12; i++) {
  tileArray.push(tileE);
}

const GameInstanceSchema = new mongoose.Schema({
 name: String,
 gameBoard: { // Array of objects
   type: Array,
   default: [
     [{...thrWrd}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...thrWrd}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...thrWrd}], // row 0
     [{...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...thrLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...thrLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}], // row 1
     [{...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}], // row 2
     [{...twoLet}, {...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}, {...twoLet}], // row 3
     [{...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}], // row 4
     [{...nrmSpc}, {...thrLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...thrLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...thrLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...thrLet}, {...nrmSpc}], // row 5
     [{...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}], // row 6
     [{...thrWrd}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...thrWrd}], // row 7
     [{...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}], // row 8
     [{...nrmSpc}, {...thrLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...thrLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...thrLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...thrLet}, {...nrmSpc}], // row 9
     [{...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}], // row 10
     [{...twoLet}, {...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}, {...twoLet}], // row 11
     [{...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}], // row 12
     [{...nrmSpc}, {...twoWrd}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...thrLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...thrLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoWrd}, {...nrmSpc}], // row 13
     [{...thrWrd}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...thrWrd}, {...nrmSpc}, {...nrmSpc}, {...nrmSpc}, {...twoLet}, {...nrmSpc}, {...nrmSpc}, {...thrWrd}]  // row 14
   ]
 },
 remainingTileList: { // Array of objects
   type: Array,
   default: [...tileArray]
 },
 playerPresent: {
   player1: {
     type: Boolean,
     default: false
   },
   player2: {
    type: Boolean,
    default: false
   }
 },
 playerTurn: {
  player1: {
    type: Boolean,
    default: true
  },
  player2: {
   type: Boolean,
   default: false
  }
 },
 score: {
  player1: {
    type: Number,
    default: 0
  },
  player2: {
   type: Number,
   default: 0
  }
 }
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const GameInstanceCollection = mongoose.model('GameInstance', GameInstanceSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
// getAll
getGameInstanceList = () => {
  return GameInstanceCollection.find();
}

// getOne
getOneGameInstance = (gameInstanceId) => {
  return GameInstanceCollection.find({_id: gameInstanceId});
}

// // find an open game
// findOpenGameInstance = () => {
//   let 
// }

findGameByName = (name) => {
  return GameInstanceCollection.findOne({name: name});
}

// createOne
createGameInstance = (gameInstanceData) => {
  return GameInstanceCollection.create(gameInstanceData);
}

// updateOne
updateGameInstance = (gameInstanceId, gameInstanceData) => {
  return GameInstanceCollection.updateOne({_id: gameInstanceId}, gameInstanceData);
}

// deleteOne
deleteGameInstance = (gameInstanceId) => {
  return GameInstanceCollection.deleteOne({_id: gameInstanceId});
}

// createGameInstance({name: "test"});

// const testGame = findGameByName("test");

// console.log(testGame);

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getGameInstanceList,
  getOneGameInstance,
  createGameInstance,
  updateGameInstance,
  deleteGameInstance
}
