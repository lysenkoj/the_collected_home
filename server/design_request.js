const Promise = require('bluebird');

const designRequestRoutes = require('express').Router()

const postmark = require("postmark");
const client = new postmark.Client("<server key>");

designRequestRoutes.post("/", function(req, res, next) {

  console.log('THIS IS THE REQ BODY!', req.body);

  // DATABASE STUFF HERE!!

  // client.sendEmail({
  //     "From": "admin@clariceking.com",
  //     "To": "clarice@claricekingdesigns.com",
  //     "Subject": "Interior Design Service Request",
  //     "TextBody": `Hello Clarice! ${req.body.newClient.name} is interested in your design expertise! Please reach out to them at ${req.body.newClient.email} and set up a free consultation. Always remember how awesome you are! Sincerely, -Your Friendly Website Robot`
  // }, function(error, result) {
  //   if(error) {
  //       console.error("Unable to send via postmark: " + error.message);
  //       return;
  //   }
  //     console.info("Sent to postmark for delivery");
  //   });

});


module.exports = designRequestRoutes;
