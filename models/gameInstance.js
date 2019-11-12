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
  option: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  pointValue: 0
}

const tileA = {
  letter: "A",
  pointValue: 1
}

const tileB = {
  letter: "B",
  pointValue: 1
}

const tileC = {
  letter: "C",
  pointValue: 3
}

const tileD = {
  letter: "D",
  pointValue: 2
}

const tileE = {
  letter: "E",
  pointValue: 1
}

const tileF = {
  letter: "F",
  pointValue: 4
}

const tileG = {
  letter: "G",
  pointValue: 2
}

const tileH = {
  letter: "H",
  pointValue: 4
}

const tileI = {
  letter: "I",
  pointValue: 1
}

const tileJ = {
  letter: "J",
  pointValue: 8
}

const tileK = {
  letter: "K",
  pointValue: 5
}

const tileL = {
  letter: "L",
  pointValue: 1
}

const tileM = {
  letter: "M",
  pointValue: 3
}

const tileN = {
  letter: "N",
  pointValue: 1
}

const tileO = {
  letter: "O",
  pointValue: 1
}

const tileP = {
  letter: "P",
  pointValue: 3
}

const tileQ = {
  letter: "Q",
  pointValue: 10
}

const tileR = {
  letter: "R",
  pointValue: 1
}

const tileS = {
  letter: "S",
  pointValue: 1
}

const tileT = {
  letter: "T",
  pointValue: 1
}

const tileU = {
  letter: "U",
  pointValue: 1
}

const tileV = {
  letter: "V",
  pointValue: 4
}

const tileW = {
  letter: "W",
  pointValue: 4
}

const tileX = {
  letter: "X",
  pointValue: 8
}

const tileY = {
  letter: "Y",
  pointValue: 4
}

const tileZ = {
  letter: "Z",
  pointValue: 10
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
 },
 gameInProgress: {
   type: Boolean,
   default: false
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
