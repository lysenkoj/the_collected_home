'use strict'
const Promise = require('bluebird');
const multer = require('multer');
const upload = multer({ dest: 'public/images/' });


const uploadRoutes = require('express').Router()


uploadRoutes.post("/", upload.single('images'), function(req, res, next) {
  console.log(req.body)
  	return res.status(200).send('WHERE"S MY BODY??')
});

module.exports = uploadRoutes;