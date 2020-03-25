const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, res, callback) => {
    const id = req.body.id;
    const userDir = path.join(__dirname, 'uploads', id);

    if(!fs.existsSync(userDir)) {
      fs.mkdirSync(userDir);
    }
    callback(null, `uploads/${id}`);
  },
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname);
    const basename = path.basename(file.originalname, extension);

    let now = new Date();
    const timezoneOffset = now.getTimezoneOffset();

    now = new Date(now.getTime() + timezoneOffset * 60000 * (-1));
    now = now.toISOString().split('T')[0];
    now = now.split('-');
    now = now.join('');

    callback(null, basename + '-' + now + extension);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    files: 10,
    fileSize: 1024 * 1024 * 1024
  }
});

router.post('/', upload.single('img'), (req, res) => {
  const file = req.file;
  if(file === undefined)
    console.log('There is no file');
  else
    console.log(file);
});

module.exports = router;