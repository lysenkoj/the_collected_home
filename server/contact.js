const Promise = require('bluebird');

const contactFormRoutes = require('express').Router()

const postmark = require("postmark");
const postmarkClient = new postmark.Client("184e33d1-1a88-4dee-9abb-41e0bb0e87ab");

contactFormRoutes.post("/", function(req, res, next) {

  // AUTOMATIC EMAIL
  console.log(req.body)

  postmarkClient.sendEmail({
      "From": `admin@clariceking.com`,
      "To": "info@clariceking.com",
      "Subject": "Website Customer Inquiry",
      "TextBody": `Email message from ${req.body.email},

      ${req.body.message}

      -${req.body.fullName}
       ${req.body.phone}

        --THIS IS AN AUTOMATICALLY GENERATED EMAIL--`
  }, function(error, result) {
    if(error) {
        console.error("Unable to send via postmark: " + error.message);
        return;
    }
      res.status(200).send('Email Sent Successfully')
    });

});


module.exports = contactFormRoutes;
