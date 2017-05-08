'use strict'

const db = require('APP/db')
const {
	mustBeAdmin,
	mustHavePermission,
	mustBeLoggedIn,
	selfOnly,
	formatDate
} = require("./utils")

const customCategoryRoutes = require('express').Router()

const Category = db.model("categories");
const User = db.model("users");
const Product = db.model("products");

customCategoryRoutes.get("/", function(req, res, next) {

	Category.findAll()
		.then(categories => res.json(categories))
		.catch(next);
});

customCategoryRoutes.get("/:name", function(req, res, next) {

	// only return hidden products if admin
	// if (!mustBeAdmin(req)) {
		Category.findAll({
				where: {
					name: req.params.name
				},
				include: [{
					model: Product,
					where: {
						isVisible: {
							$not: "hidden"
						}
					}
				}]
			})
			.then(category => res.json(category))
			.catch(next);
	// }
	// else{
	// 	Category.findAll({
	// 			where: {
	// 				name: req.params.name
	// 			},
	// 			include: [{
	// 				model: Product
	// 			}]
	// 		})
	// 		.then(category => res.json(category))
	// 		.catch(next);
	// }
});

customCategoryRoutes.get("/:name/:sku", function(req, res, next) {
	// only return hidden products if admin
	// if (!mustBeAdmin(req)) {
		Category.findAll({
				where: {
					name: req.params.name
				},
				include: [{
					model: Product,
					where: {
						sku: req.params.sku,
						isVisible: {
							$not: "hidden"
						}
					}
				}]
			})
			.then(category => res.json(category))
			.catch(next);
	// }
	// else{
	// 	Category.findAll({
	// 			where: {
	// 				name: req.params.name
	// 			},
	// 			include: [{
	// 				model: Product,
	// 				where: {
	// 					sku: req.params.sku
	// 				}
	// 			}]
	// 		})
	// 		.then(category => res.json(category))
	// 		.catch(next);
	// }
});

customCategoryRoutes.get("/meta/:name", function(req, res, next) {
		Category.findAll({
				where: {
          meta_category_id: req.body.id
				}
			})
			.then(category => res.json(category))
			.catch(next);
});

customCategoryRoutes.put("/:name", function(req, res, next) {

	mustBeAdmin(req)
		.then(userAdmin => {
			userAdmin.data.isAdmin ? 
			Category.update(req.body, {
					where: {
						name: req.params.name
					}
			})
			: res.status(403).send('You do not have administrative privileges')
		})
		.then(rowsModified => res.json(rowsModified))
		.catch(next);
});

customCategoryRoutes.post("/", function(req, res, next) {

	mustBeAdmin(req)
		.then(userAdmin => {
			userAdmin.data.isAdmin ? 
			Category.create({
				name: req.body.name,
				meta_category_id: req.body.meta_category_id
			})
			: res.status(403).send('You do not have administrative privileges')
		})
		.then(category => res.json(category))
		.catch(next);
});

customCategoryRoutes.delete("/:name", function(req, res, next) {
	mustBeAdmin(req)
		.then(userAdmin => {
			userAdmin.data.isAdmin ? 
			Category.destroy({
			where: {name: req.params.name}
			})
			: res.status(403).send('You do not have administrative privileges')
		})
		.then(rowsModified => res.json(rowsModified))
		.catch(next);
});

module.exports = customCategoryRoutes;