const express = require('express');
const router = express.Router();

// middleware
// const signUp = require('../middleware/signup');
const auth = require('../../../shared/middleware/auth');
const upload = require('../../../shared/utils/centralizedFileUpload');

// controller import
const path = require('path');
const filename = path.basename(__filename);
const controllerName = filename.split('.')[0];
const Controller = require(`../controllers/${controllerName}`);

// routes

router.post('/entries-create', Controller.entriesCreate);
router.get('/', Controller.getEntries);
router.put('/entries-update', Controller.updateEntries);
router.delete('/entries-deleted', Controller.deleteEntries);

module.exports = router;
