const multer = require('multer');
let fs = require('fs');
let dirName = 'communicationUploads';
let dir = `./${dirName}`;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dirName);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

module.exports = multer({ storage: storage });
