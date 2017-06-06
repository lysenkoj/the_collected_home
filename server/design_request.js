const Promise = require('bluebird');

const designRequestRoutes = require('express').Router()
const db = require('APP/db')

const Client = db.model("clients");

const postmark = require("postmark");
const postmarkClient = new postmark.Client("184e33d1-1a88-4dee-9abb-41e0bb0e87ab");

designRequestRoutes.post("/", function(req, res, next) {

	Client.create({
		email: req.body.email,
		phone: req.body.phone,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
	})
		.then(client => res.json(client))
		.catch(next);

  // AUTOMATIC EMAIL

  postmarkClient.sendEmail({
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
