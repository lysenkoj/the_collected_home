const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = db.define('products', {

	sku: {
		type: Sequelize.BIGINT,
		allowNull: false,
		unique: true,
		primaryKey: true,
		validate: {
			min: 1000000000,
			max: 9999999999
		}
	},

	quantity: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 0
	},

	name: {
		type: Sequelize.STRING,
		allowNull: false
	},

	imageUrl: {
		type: Sequelize.ARRAY(Sequelize.STRING),
    defualtValue: ['/images/Image-Coming-Soon-Placeholder.png']
	},

  mainImg: {
		type: Sequelize.STRING
	},

	color: {
		type: Sequelize.STRING
	},

	price: {
		type: Sequelize.DECIMAL(15, 2),
		allowNull: false
	},

	size: {
		type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '1 x 1 x 1" H'
	},

	location: {
		type: Sequelize.STRING
	},

	manufacturer: {
		type: Sequelize.STRING
	},

	description: {
		type: Sequelize.TEXT
	},

  featured: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: "false"
  },

	isVisible: {
		type: Sequelize.ENUM("discontinued", "hidden", "visible"),
		allowNull: false,
		defaultValue: "visible"
	}
}, {

	getterMethods: {
		img: function() {
			return (this.imageUrl) ?
				this.imageUrl :
				'/images/Image-Coming-Soon-Placeholder.png'
		}
	}

}

);

Product.hook('beforeValidate', function(product, options) {
  product.mainImg = 'happy'
})

Product.hook('afterValidate', function(product, options) {
  product.mainImg = product.imageUrl[0];
})

module.exports = Product;
