const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = db.define('products', {

/* -----------------------  Inventory Overview ----------------------- */

	sku: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		primaryKey: true
	},

  productNum: {
    type: Sequelize.STRING,
		allowNull: false
  },

	name: {
    type: Sequelize.STRING,
		allowNull: false
	},

	color: {
    type: Sequelize.STRING
  },

  size: {
    type: Sequelize.STRING,
	},

  status: {
    type: Sequelize.ENUM("warehouse", "upholsterer", "home", "enroute", "sold", "store"),
		allowNull: false,
		defaultValue: "warehouse"
	},

  purchaseDate: {
    type: Sequelize.DATEONLY,
    allowNull: true,
    defaultValue: null
  },

  purchasePrice: {
    type: Sequelize.DECIMAL(15, 2),
    allowNull: false
  },

  repairCost: {
    type: Sequelize.DECIMAL(15, 2),
    allowNull: false,
    defaultValue: 0
  },

  retailPrice: {
    type: Sequelize.DECIMAL(15, 2),
		allowNull: false
  },

  dateSold: {
    type: Sequelize.DATEONLY,
    allowNull: true,
    defaultValue: null
  },

  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },

/* -----------------------  Product Details ----------------------- */
  location: {
    type: Sequelize.STRING
  },

  condition: {
    type: Sequelize.ENUM("NR", "RFS")
  },

  imageUrl: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defualtValue: ['/images/Image-Coming-Soon-Placeholder.png']
  },

  mainImg: {
    type: Sequelize.STRING
  },

  description: {
    type: Sequelize.TEXT
  },

  quote: {
    type: Sequelize.TEXT
  },

  dimensions: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '1 x 1 x 1" H'
  },

  material:{
    type: Sequelize.STRING
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
				['/images/Image-Coming-Soon-Placeholder.png']
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

Product.hook('beforeCreate', function(product, options) {
  if(product.dataValues.imageUrl.length === 0){
    product.imageUrl = ['/images/Image-Coming-Soon-Placeholder.png'];
    product.mainImg = product.imageUrl[0];
  }
})

module.exports = Product;
