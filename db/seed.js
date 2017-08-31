const bcrypt = require('bcrypt-nodejs');
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
  {sku: 'FUR-SEAT-00001', productNum: 'A00001', name: 'Chair', color: 'white', status: 'warehouse', purchaseDate: '01/12/2017', purchasePrice: 80.00, repairCost: 20.00, retailPrice: 300.00, quantity: 5, location: 'W002', condition: 'RFS', imageUrl: ['/images/chair1.jpeg','/images/chair2.jpeg','/images/chair3.jpeg'], description: 'A simple chair', quote: null, material: 'pine', featured: true},
  {sku: 'FUR-OTTO-00001', productNum: 'A00002', name: 'Stool', color: 'brown', status: 'warehouse', purchaseDate: '02/02/2017', purchasePrice: 40.00, retailPrice: 120.00, quantity: 3, location: 'W002', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A simple stool', quote: 'Its great to sit on', material: 'oak'},
  {sku: 'FUR-STRG-00001', productNum: 'A00003', name: 'Trunk', color: 'white', status: 'warehouse', purchaseDate: '02/02/2017', purchasePrice: 100.00, retailPrice: 300.00, quantity: 1, location: 'W013', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A storage trunk', quote: 'Great for storing kids', material: 'wood'},
  {sku: 'FUR-MIRR-00001', productNum: 'A00004', name: 'Tall Mirror', color: 'Blue', status: 'warehouse', purchaseDate: '04/15/2017', purchasePrice: 50.00, retailPrice: 150.00, quantity: 4, location: 'W003', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A tall mirror', quote: 'Its so tall!', material: 'wood and glass'},
  {sku: 'LIG-CHAN-00001', productNum: 'A00005', name: 'Chandelier', color: 'Gold', status: 'warehouse', purchaseDate: '04/05/2017', purchasePrice: 60.00, retailPrice: 240.50, quantity: 2, location: 'W003', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A pretty chandelier', quote: 'So pretty!', material: 'metal and acrylic', featured: true},
  {sku: 'LIG-SCON-00001', productNum: 'A00006', name: 'Sconse', color: 'Silver', status: 'warehouse', purchaseDate: '12/18/2017', purchasePrice: 500.00, retailPrice: 1600.00, quantity: 8, location: 'W003', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A sconse', quote: 'I still dont know what a sconse is', material: 'metal', featured: true},
  {sku: 'FUR-SEAT-00002', productNum: 'A00007', name: 'EZBOY Chair', color: 'Black', status: 'store', purchaseDate: '12/15/2017', purchasePrice: 700.00, retailPrice: 2300.00, quantity: 1, location: 'S006', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A simple recliner', quote: 'Its reclines so far!', material: 'cotton'},
  {sku: 'FUR-OTTO-00002', productNum: 'A00008', name: 'Poof Ottoman', color: 'Red', status: 'store', purchaseDate: '08/22/2017', purchasePrice: 150.00, retailPrice: 550.00, quantity: 1, location: 'S006', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A poofy ottoman', quote: 'Its so poofy!', material: 'wool'},
  {sku: 'FUR-OTTO-00003', productNum: 'A00009', name: 'Tall Stool', color: 'Gray', status: 'warehouse', purchaseDate: '10/03/2017', purchasePrice: 220.00, repairCost: 20.50, retailPrice: 800.00, quantity: 2, location: 'W003', condition: 'NR', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A tall stool', quote: 'Its so tall!', material: 'metal', featured: true},
  {sku: 'FUR-MIRR-00002', productNum: 'A00010', name: 'Wide Mirror', color: 'White', status: 'warehouse', purchaseDate: '10/03/2017', purchasePrice: 30.00, retailPrice: 100.00, quantity: 1, location: 'W003', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A wide mirror', quote: 'Its so wide!', material: 'wood and glass', featured: true},
  {sku: 'FUR-MIRR-00003', productNum: 'A00011', name: 'Hand Mirror', color: 'Silver', status: 'warehouse', purchaseDate: '03/14/2017', purchasePrice: 60.00, retailPrice: 280.00, quantity: 4, location: 'W003', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'Handheld mirror', quote: 'A mirror you can hold', material: 'metal and glass'},
  {sku: 'FUR-BEDS-00001', productNum: 'A00012', name: 'Bed', color: 'Brown', status: 'warehouse', purchaseDate: '03/14/2017', purchasePrice: 20.00, retailPrice: 80.00, quantity: 1, location: 'W003', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A sturdy bed', quote: 'I would never get out of bed', material: 'metal'},
  {sku: 'LIG-TLAM-00001', productNum: 'A00013', name: 'Table Lamp', color: 'Yellow', status: 'warehouse', purchaseDate: '05/18/2017', purchasePrice: 700.50, retailPrice: 2000.00, quantity: 2, location: 'W003', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A table lamp', quote: 'Sits perfectly on a table', material: 'porcelain', featured: true},
  {sku: 'FUR-OTTO-00004', productNum: 'A00014', name: 'Wide Ottoman', color: 'Green', status: 'warehouse', purchaseDate: '05/09/2017', purchasePrice: 300.00, retailPrice: 1000.00, quantity: 1, location: 'W003', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A wide ottoman', quote: 'Its so wide!', material: 'leather'},
  {sku: 'FUR-OTTO-00005', productNum: 'A00015', name: 'Beanbag', color: 'Purple', status: 'warehouse', purchaseDate: '05/09/2017', purchasePrice: 130.00, retailPrice: 360.00, quantity: 2, location: 'W003', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'Large beanbag chair', quote: 'The beaniest of bags!', material: 'leather'},
  {sku: 'FUR-OTTO-00006', productNum: 'A00016', name: 'Storage Ottoman', color: 'Black', status: 'warehouse', purchaseDate: '09/15/2017', purchasePrice: 600.00, retailPrice: 1900.00, quantity: 1, location: 'W003', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A storage ottoman', quote: 'I can fit everything in here!', material: 'mohair', featured: true},
  {sku: 'FUR-OTTO-00007', productNum: 'A00017', name: 'Short Stool', color: 'Blue', status: 'warehouse', purchaseDate: '07/29/2017', purchasePrice: 10.00, retailPrice: 40.00, quantity: 1, location: 'W003', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'A short stool', quote: 'Its so short!', material: 'wood', featured: true},
  {sku: 'GIF-FHER-00001', productNum: 'A00020', name: 'French Womans Blouse', color: 'Blue', size:'xs', status: 'store', purchaseDate: '11/25/2017', purchasePrice: 45.00, retailPrice: 200.00, quantity: 12, location: 'S002', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'Vintage French Womans Blouse', quote: 'Its such a soft blouse', material: 'cotton'},
  {sku: 'GIF-FHER-00002', productNum: 'A00020', name: 'French Womans Blouse', color: 'Blue', size:'s', status: 'store', purchaseDate: '11/25/2017', purchasePrice: 45.00, retailPrice: 200.00, quantity: 18, location: 'S002', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'Vintage French Womans Blouse', quote: 'Its such a soft blouse', material: 'cotton'},
  {sku: 'GIF-FHER-00003', productNum: 'A00020', name: 'French Womans Blouse', color: 'Blue', size:'m', status: 'store', purchaseDate: '11/25/2017', purchasePrice: 45.00, retailPrice: 200.00, quantity: 18, location: 'S002', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'Vintage French Womans Blouse', quote: 'Its such a soft blouse', material: 'cotton'},
  {sku: 'GIF-FHER-00004', productNum: 'A00020', name: 'French Womans Blouse', color: 'Blue', size:'l', status: 'store', purchaseDate: '11/25/2017', purchasePrice: 45.00, retailPrice: 200.00, quantity: 12, location: 'S002', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'Vintage French Womans Blouse', quote: 'Its such a soft blouse', material: 'cotton'},
  {sku: 'GIF-FHER-00005', productNum: 'A00020', name: 'French Womans Blouse', color: 'Blue', size:'xl', status: 'store', purchaseDate: '11/25/2017', purchasePrice: 45.00, retailPrice: 200.00, quantity: 8, location: 'S002', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: 'Vintage French Womans Blouse', quote: 'Its such a soft blouse', material: 'cotton'},
  {sku: 'GIF-JEWL-00001', productNum: 'A00021', name: 'Snake Bracelet Silver', color: 'Silver', status: 'store', purchaseDate: '03/15/2017', purchasePrice: 200.00, retailPrice: 600.00, quantity: 1, location: 'S003', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: '1920s Sterling Silver Snake Blacelet', quote: 'Wraps beutifully around your wrist!', material: 'sterling silver', featured: true},
  {sku: 'GIF-JEWL-00002', productNum: 'A00021', name: 'Snake Bracelet Gold', color: 'Gold', status: 'home', purchaseDate: '03/15/2017', purchasePrice: 400.00, retailPrice: 1200.00, quantity: 1, location: 'H003', condition: 'RFS', imageUrl: ['/images/Image-Coming-Soon-Placeholder.png'], description: '1920s 14k Gold Snake Blacelet', quote: 'Wraps beutifully around your wrist!', material: '14k gold'}

];



const categoryProductsToSeed = [
  {product_sku: 'FUR-SEAT-00001', category_id: 7},
  {product_sku: 'FUR-OTTO-00001', category_id: 8},
  {product_sku: 'FUR-STRG-00001', category_id: 10},
  {product_sku: 'FUR-MIRR-00001', category_id: 12},
  {product_sku: 'LIG-CHAN-00001', category_id: 16},
  {product_sku: 'LIG-SCON-00001', category_id: 18},
  {product_sku: 'FUR-SEAT-00002', category_id: 7},
  {product_sku: 'FUR-OTTO-00002', category_id: 8},
  {product_sku: 'FUR-OTTO-00003', category_id: 8},
  {product_sku: 'FUR-MIRR-00002', category_id: 12},
  {product_sku: 'FUR-MIRR-00003', category_id: 12},
  {product_sku: 'FUR-BEDS-00001', category_id: 13},
  {product_sku: 'LIG-TLAM-00001', category_id: 19},
  {product_sku: 'FUR-OTTO-00004', category_id: 8},
  {product_sku: 'FUR-OTTO-00005', category_id: 8},
  {product_sku: 'FUR-OTTO-00006', category_id: 8},
  {product_sku: 'FUR-OTTO-00007', category_id: 8},
  {product_sku: 'GIF-FHER-00001', category_id: 44},
  {product_sku: 'GIF-FHER-00002', category_id: 44},
  {product_sku: 'GIF-FHER-00003', category_id: 44},
  {product_sku: 'GIF-FHER-00004', category_id: 44},
  {product_sku: 'GIF-FHER-00005', category_id: 44},
  {product_sku: 'GIF-JEWL-00001', category_id: 46},
  {product_sku: 'GIF-JEWL-00002', category_id: 46}
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
