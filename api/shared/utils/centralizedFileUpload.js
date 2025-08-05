const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const module = req.body.module.toLowerCase();
    const date = new Date();
    const yyyyMMdd = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
    const uploadPath = path.join(__dirname, '..', 'uploads', module, yyyyMMdd);
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const username = 1;
    const module = req.body.module.toLowerCase();
    const ext = path.extname(file.originalname);
    const baseName = path
      .parse(file.originalname)
      .name.toLowerCase()
      .replace(/[^a-z0-9.]+/gi, '-') // Replace any sequence of non-alphanum (excluding dot) with single dash
      .replace(/-+/g, '-') // Replace multiple dashes with single dash
      .replace(/^-|-$/g, '');
    const finalName = `${baseName}-${username}-${module}${ext}`;
    cb(null, finalName);
  },
});

const upload = multer({ storage });

module.exports = upload;
