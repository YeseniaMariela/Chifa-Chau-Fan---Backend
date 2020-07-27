const express = require("express");
const multer = require("multer");
const AWS = require("aws-sdk");
const router = express.Router();

const s3 = new AWS.S3();

const ACCESSS_KEY_ID = "AKIARZXW26RIK3BSNXVZ";
const SECRET_ACCESS_KEY = "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";
const BUCKET_NAME = "bdchaufan";
var Dato;

AWS.config.update({
  accessKeyId: ACCESSS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  subregion: "us-east-2"
});

const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: function(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|png|gif|jpg|pdf)$/)) {
      return cb(new Error("Error en el tipo de archivo."));
    }
    cb(null, true);
  }
});

router.post("/", upload.single("image"), (req, res) => {
  const Key = Date.now() + "_" + req.file.originalname.replace(/ /g, "");
  const objectParams = {
    Bucket: BUCKET_NAME,
    Key,
    Body: req.file.buffer,
    ACL: "public-read"
  };
  const uploadPromise = new AWS.S3({ apiVersion: "2006-03-01" })
    .putObject(objectParams)
    .promise();
  uploadPromise
    .then(() => res.send(`Your file here: ${BUCKET_NAME}/${Key}`))
    .catch(error => res.send(error));
  Dato = Key;
});

router.get("/", async function(req, res) {
  try {
    res
      .status(200)
      .json("https://bdchaufan.s3.us-east-2.amazonaws.com/" + Dato);
    console.log("https://bdchaufan.s3.us-east-2.amazonaws.com/" + Dato);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
