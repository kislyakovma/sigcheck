const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const { paths } = require('../../serverConfig');

const storage = multer.diskStorage({
  destination: function (req_, file_, callback) {
    const filepath = `${paths.uploads}${uuidv4()}/`;

    fs.mkdirSync(filepath, { recursive: true });
    callback(null, filepath);
  },
  filename: function (req_, file, callback) {
    callback(null, file.originalname);
  },
});

module.exports = {
  upload: multer({ storage }),
};