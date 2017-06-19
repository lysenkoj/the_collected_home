const bcrypt = require('bcrypt');
const db = require('APP/db');

const categoriesToSeed = [
  {name: 'Furniture'}, // meta_category_id: 1
  {name: 'Lighting'}, // meta_category_id: 2
  {name: 'Decor'}, // meta_category_id: 3
  {name: 'Textiles'}, // meta_category_id: 4
  {name: 'Garden & Outdoor'}, // meta_category_id: 5
  {name: 'Gifts'}, // meta_category_id: 6
  {name: 'Seating', meta_category_id: 1}, // category_id: 7
  {name: 'Ottomans & Stools', meta_category_id: 1}, // category_id: 8
  {name: 'Tables', meta_category_id: 1}, // category_id: 9
  {name: 'Storage', meta_category_id: 1}, // category_id: 10
  {name: 'Sofas', meta_category_id: 1}, // category_id: 11
  {name: 'Mirrors', meta_category_id: 1}, // category_id: 12
  {name: 'Beds', meta_category_id: 1}, // category_id: 13
  {name: 'Dressers & Nightstands', meta_category_id: 1}, // category_id: 14
  {name: 'Office', meta_category_id: 1}, // category_id: 15
  {name: 'Chandeliers', meta_category_id: 2}, // category_id: 16
  {name: 'Floor Lamps', meta_category_id: 2}, // category_id: 17
  {name: 'Sconses', meta_category_id: 2}, // category_id: 18
  {name: 'Table Lamps', meta_category_id: 2}, // category_id: 19
  {name: 'Pendant', meta_category_id: 2}, // category_id: 20
  {name: 'Flush Mounts', meta_category_id: 2}, // category_id: 21
  {name: 'Tabletop', meta_category_id: 3}, // category_id: 22
  {name: "Sculpture", meta_category_id: 3}, // category_id: 23
  {name: "Trays & Vases", meta_category_id: 3}, // category_id: 24
  {name: "Boxes", meta_category_id: 3}, // category_id: 25
  {name: "Pillows & Throws", meta_category_id: 3}, // category_id: 26
  {name: "Catchall & Bowls", meta_category_id: 3}, // category_id: 27
  {name: "Artwork", meta_category_id: 3}, // category_id: 28
  {name: "Rugs", meta_category_id: 3}, // category_id: 29
  {name: "Bath", meta_category_id: 3}, // category_id: 30
  {name: "Accent", meta_category_id: 3}, // category_id: 31
  {name: "Children", meta_category_id: 3}, // category_id: 32
  {name: "Wallpaper", meta_category_id: 4}, // category_id: 33
  {name: "Antique Textiles", meta_category_id: 4}, // category_id: 34
  {name: "Leather & Hides", meta_category_id: 4}, // category_id: 35
  {name: "Quilts & Coverlets", meta_category_id: 4}, // category_id: 36
  {name: "Outdoor Furniture", meta_category_id: 5}, // category_id: 37
  {name: "Outdoor Decor", meta_category_id: 5}, // category_id: 38
  {name: "Pet Accessories", meta_category_id: 6}, // category_id: 39
  {name: "Books", meta_category_id: 6}, // category_id: 40
  {name: "Keychains", meta_category_id: 6}, // category_id: 41
  {name: "Desk & Stationary", meta_category_id: 6}, // category_id: 42
  {name: "For Him", meta_category_id: 6}, // category_id: 43
  {name: "For Her", meta_category_id: 6}, // category_id: 44
  {name: "Toys & Games", meta_category_id: 6}, // category_id: 45
  {name: "Jewlery", meta_category_id: 6} // category_id: 46
];

const productsToSeed = [
  {sku: 'FUR-SEAT-00001', quantity: 1, name: 'Chair', imageUrl: ['/images/chair1.jpeg','/images/chair2.jpeg','/images/chair3.jpeg'], price: 100, description: 'A simple chair', isVisible: 'visible'},
  {sku: 'FUR-OTTO-00001', quantity: 1, name: 'Stool', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, description: 'A simple stool'},
  {sku: 'FUR-STRG-00001', quantity: 1, name: 'Trunk', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, description: 'A storage trunk'},
  {sku: 'FUR-MIRR-00001', quantity: 1, name: 'Tall Mirror', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, featured: true, description: 'A tall mirror'},
  {sku: 'LIG-CHAN-00001', quantity: 1, name: 'Chandelier', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, description: 'A pretty chandelier'},
  {sku: 'LIG-SCON-00001', quantity: 1, name: 'Sconse', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, description: 'A sconse'},
  {sku: 'FUR-SEAT-00003', quantity: 1, name: 'EZBOY Chair', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, featured: true, description: 'A simple recliner'},
  {sku: 'FUR-OTTO-00002', quantity: 1, name: 'Poof Ottoman', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, description: 'A poofy ottoman'},
  {sku: 'FUR-OTTO-00003', quantity: 1, name: 'Tall Stool', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, description: 'A tall stool'},
  {sku: 'FUR-MIRR-00002', quantity: 1, name: 'Wide Mirror', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, featured: true, description: 'A wide mirror'},
  {sku: 'FUR-MIRR-00003', quantity: 1, name: 'Hand Mirror', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, featured: true, description: 'A mirror you can hold'},
  {sku: 'FUR-BEDS-00001', quantity: 1, name: 'Bed', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, description: 'A sturdy bed'},
  {sku: 'LIG-TLAM-00001', quantity: 1, name: 'Table Lamp', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, featured: true, description: 'A table lamp'},
  {sku: 'FUR-OTTO-00004', quantity: 1, name: 'Wide Ottoman', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, description: 'A wide ottoman'},
  {sku: 'FUR-OTTO-00005', quantity: 1, name: 'Beanbag', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, description: 'The beaniest of bags'},
  {sku: 'FUR-OTTO-00006', quantity: 1, name: 'Storage Ottoman', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, description: 'A storage ottoman'},
  {sku: 'FUR-OTTO-00007', quantity: 1, name: 'Short Stool', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], price: 100, description: 'A short stool'},
];



const categoryProductsToSeed = [
  {product_sku: 'FUR-SEAT-00001', category_id: 7},
  {product_sku: 'FUR-SEAT-00002', category_id: 8},
  {product_sku: 'FUR-STRG-00001', category_id: 10},
  {product_sku: 'FUR-MIRR-00001', category_id: 12},
  {product_sku: 'LIG-CHAN-00001', category_id: 16},
  {product_sku: 'LIG-SCON-00001', category_id: 18},
  {product_sku: 'FUR-SEAT-00003', category_id: 7},
  {product_sku: 'FUR-OTTO-00001', category_id: 8},
  {product_sku: 'FUR-OTTO-00002', category_id: 8},
  {product_sku: 'FUR-MIRR-00002', category_id: 12},
  {product_sku: 'FUR-MIRR-00003', category_id: 12},
  {product_sku: 'FUR-BEDS-00001', category_id: 13},
  {product_sku: 'LIG-TLAM-00001', category_id: 19},
  {product_sku: 'FUR-OTTO-00003', category_id: 8},
  {product_sku: 'FUR-OTTO-00004', category_id: 8},
  {product_sku: 'FUR-OTTO-00005', category_id: 8},
  {product_sku: 'FUR-OTTO-00006', category_id: 8}
];

const usersToSeed = [
  {firstName: 'Ad', lastName: 'Min', isAdmin: true, email: 'admin@admin.com', password: '123456', stripe_user_id: "cus_9WJPbG2Wzb2MBd"},
  {firstName: 'Barack', lastName: 'Obama', email: 'barack@example.gov', password: '123456', stripe_user_id: "cus_9WJPeESETNf406"},
  {firstName: 'Porkchop', lastName: 'Dog', email: 'dogface@pupper.com', password: '555555', stripe_user_id: "cus_9WJQrOLyAHri10"},
  {firstName: 'Simba', lastName: 'Matata', email: 'king@priderock.com', password: '123456', stripe_user_id: "cus_9WJQ93UCLoiPPp"},
  {firstName: 'Elsa', lastName: 'Bush', email: 'missionaccomplished@disney.com', password: '999999'},
  {firstName: 'Yeezy', lastName: 'West', email: 'shyboy77@hotmail.com', password: 'tswift'}
];


const addressesToSeed = [
  {name: 'Alec Friedman', street1: '55 Comm Ave', street2: 'Apt 6A', city: 'Boston', state: 'MA', zip: '02140', user_id: 1},
  {name: 'Barack Obama', street1: '29 Mass Ave', street2: 'Unit 8', city: 'Boston', state: 'MA', zip: '02140', user_id: 2},
  {name: 'Porkchop Dog', street1: '100 W 99 St', street2: 'Floor 3 Office 12', city: 'New York', state: 'NY', zip: '10020', user_id: 3},
  {name: 'Jordan Lysenko', street1: '12 Main St', city: 'Omaha', state: 'NE', zip: '34242', user_id: 4},
  {name: 'Donald J Trump', street1: 'White', street2: 'House', city: 'Washington', state: 'DC', zip: '90210', user_id: 4},
  {name: 'Hillary Diane Rodham', street1: 'Rikers', city: 'New York City', state: 'NY', zip: '11111', user_id: 5},
  {name: 'FSA', street1: '5 Hanover Sq', city: 'Manhattan', state: 'NY', zip: '10000', user_id: 5}
];

const ordersToSeed = [
  {status: 'shipped', submitDate: '2016-10-01', user_id: '1', address_id: '1', payment_id: 'ch_19DH9vKnanyZJ3ptI0EhIYDk'},
  {status: 'shipped', submitDate: '2016-09-28', user_id: '1', address_id: '2', payment_id: '2'},
  {status: 'pending', submitDate: '2016-10-28', user_id: '2', address_id: '3', payment_id: '2'},
  {status: 'delivered', submitDate: '2016-10-22', user_id: '2', address_id: '4', payment_id: '3'},
  {status: 'delivered', submitDate: '2016-01-31', user_id: '3', address_id: '5', payment_id: '3'},
  {status: 'refunded', submitDate: '2016-08-15', user_id: '3', address_id: '5', payment_id: '4'},
  {status: 'partially shipped', submitDate: '2016-11-01', user_id: '4', address_id: '6', payment_id: '5'}
];

const orderItemsToSeed = [

];

const clientsToSeed = [
  {firstName: 'Jordan', lastName: 'Lysenko', email: 'lysenkoj@gmail.com', phone: '203-722-3347'}
]

const seedCategories = () => db.Promise.mapSeries(categoriesToSeed, category => db.model('categories').create(category));
const seedUsers = () => db.Promise.mapSeries(usersToSeed, user => db.model('users').create(user));
const seedProducts = () => db.Promise.mapSeries(productsToSeed, product => db.model('products').create(product));
const seedAddresses = () => db.Promise.mapSeries(addressesToSeed, address => db.model('addresses').create(address));
const seedCategoryProducts = () => db.Promise.mapSeries(categoryProductsToSeed, categoryProduct => db.model('CategoryProduct').create(categoryProduct));
const seedOrders = () => db.Promise.mapSeries(ordersToSeed, order => db.model('orders').create(order));
const seedOrderItems = () => db.Promise.mapSeries(orderItemsToSeed, order_item => db.model('order_items').create(order_item));
const seedClients = () => db.Promise.mapSeries(clientsToSeed, client => db.model('clients').create(client));


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedCategories)
  .then(categories => console.log(`Seeded ${categories.length} categories OK`))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedCategoryProducts)
  .then(categoryProducts => console.log(`Seeded ${categoryProducts.length} categoryProducts OK`))
  .then(seedAddresses)
  .then(addresses => console.log(`Seeded ${addresses.length} addresses OK`))
  .then(seedOrders)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedOrderItems)
  .then(orderItems => console.log(`Seeded ${orderItems.length} orderItems OK`))
  .then(seedClients)
  .then(clients => console.log(`Seeded ${clients.length} clients OK`))
  .catch(error => console.error(error + "   HELLO!!!!"))
  .finally(() => db.close())
