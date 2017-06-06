const Promise = require('bluebird');

const designRequestRoutes = require('express').Router()

const postmark = require("postmark");
const client = new postmark.Client("184e33d1-1a88-4dee-9abb-41e0bb0e87ab");

designRequestRoutes.post("/", function(req, res, next) {

  console.log('THIS IS THE REQ BODY!', req.body);

  // DATABASE STUFF HERE!!

  client.sendEmail({
      "From": "admin@clariceking.com",
      "To": "clarice@claricekingdesign.com",
      "Subject": "Interior Design Service Request",
      "TextBody": `Hello Clarice! ${req.body.fullName} is interested in your design expertise! Please reach out to them at ${req.body.email} and set up a free consultation. Always remember how awesome you are! Sincerely, -Your Friendly Website Robot`
  }, function(error, result) {
    if(error) {
        console.error("Unable to send via postmark: " + error.message);
        return;
    }
      res.status(200).send('Email Sent Successfully')
    });

});


module.exports = designRequestRoutes;
