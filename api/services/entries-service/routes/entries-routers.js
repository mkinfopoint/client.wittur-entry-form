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
//router.post('/upload-file', upload.single('file'), Controller.UploadFile);
//router.post('/entries-create', Controller.entriesCreate);

router.post('/entries-create', Controller.entriesCreate);

module.exports = router;
