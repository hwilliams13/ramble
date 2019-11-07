/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const gameInstanceApi = require('../models/gameInstance.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const gameInstanceRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
// getAll
gameInstanceRouter.get('/', (req, res) => {
  gameInstanceApi.getGameInstanceList()
    .then((list) => {
      res.json(list);
    })
})

// getOne
gameInstanceRouter.get('/:gameInstanceId', (req, res) => {
  gameInstanceApi.getOneGameInstance(req.params.gameInstanceId)
    .then((instance) => {
      res.json(instance);
    })
})

// createOne
gameInstanceRouter.post('/', (req, res) => {
  gameInstanceApi.createGameInstance(req.body)
    .then((createdInstance) => {
      res.json(createdInstance);
    })
})

// updateOne
gameInstanceRouter.put('/:gameInstanceId', (req, res) => {
  gameInstanceApi.updateGameInstance(req.params.gameInstanceId, req.body)
    .then((updatedInstance) => {
      res.json(updatedInstance);
    })
})

// deleteOne
gameInstanceRouter.delete('/:gameInstanceId', (req, res) => {
  gameInstanceApi.deleteGameInstance(req.params.gameInstanceId)
    .then((deletedInstance) => {
      res.json(deletedInstance);
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  gameInstanceRouter
}
