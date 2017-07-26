'use strict'
const Promise = require('bluebird');
const multer = require('multer');

const uploadRoutes = require('express').Router()


const storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, '../public/images/uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
const upload = multer({ storage : storage }).array('userPhoto', 5);

uploadRoutes.post('/',function(req,res){
    upload(req,res,function(err) {
        console.log('REQ.BODY', req.body);
        console.log('REQ.FILES', req.files);
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});



module.exports = uploadRoutes;