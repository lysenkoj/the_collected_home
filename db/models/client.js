'use strict'

const bcrypt = require('bcrypt-nodejs')
const Sequelize = require('sequelize')
const db = require('APP/db')

const Client = db.define('clients', {

  firstName: {
    type: Sequelize.STRING,
    validate: {
      is: ["^[a-z]+$",'i'],
      len: [2,50]
    }
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
      is: ["^[a-z]+$",'i'],
      len: [2,50]
    }
  },
  email: { // for guests, this will be the only populated field
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true,
		}
  },
	phone: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Client;