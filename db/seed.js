const bcrypt = require('bcrypt');
const db = require('APP/db')

const categoriesToSeed = [
  {name: 'Accessories'},
  {name: 'Vehicles'},
  {name: 'Real Estate'},
  {name: 'Apparel'},
  {name: 'Services'},
  {name: 'Attorney', meta_category_id: 5},
  {name: 'Bodyguard', meta_category_id: 5},
  {name: 'Accountant', meta_category_id: 5},
  {name: 'Chauffuer', meta_category_id: 5},
  {name: 'Pilot', meta_category_id: 5},
  {name: 'Butler', meta_category_id: 5},
  {name: 'Social Media Reps', meta_category_id: 5},
  {name: 'Suit', meta_category_id: 4},
  {name: 'Ties', meta_category_id: 4},
  {name: 'Pocket Squares', meta_category_id: 4},
  {name: 'Fake Tanner', meta_category_id: 1},
  {name: 'Watches', meta_category_id: 1},
  {name: 'Toupees', meta_category_id: 1},
  {name: 'Jets', meta_category_id: 2},
  {name: 'Yachts', meta_category_id: 2},
  {name: 'Cars', meta_category_id: 2},
  {name: 'Motorcycles', meta_category_id: 2},
  {name: 'Helicopters', meta_category_id: 2},
  {name: "Mansions", meta_category_id: 3},
  {name: "Walls", meta_category_id: 3},
  {name: "Casinos", meta_category_id: 3},
  {name: "Hotels", meta_category_id: 3},
  {name: "Islands", meta_category_id: 3},
  {name: "Golf Courses", meta_category_id: 3}
];

const productsToSeed = [
  {sku: 9154950247, quantity: 1, name: 'Castle in Loire Valley', imageUrl: '/images/castle.jpg', price: 12500000, location: 'France', description: 'Better than a dream-come-true, this Castle and Chateau in the Loire Valley in France is simply one of the finest properties anywhere in Europe. Entirely private and free of any French government landmark rights, this 79 acre (32 hectare) estate features a completely-restored, 33,000 square foot chateau, made up of a 16th century castle that was later expanded to the current chateau in the 18th century. A four-year, recently-completed renovation project has restored the chateau to its original glory. And yet, the conveniences of the modern world have been added, providing all-new electrical, plumbing, heating and electronics. There is so much history attached to the chateau from French royalty to its occupation by German forces in the second world war. Today, the chateau and its surrounding property capture the elegance of yesterday, but with modern living conveniences.', isVisible: 'visible'},
  {sku: 4435561075, quantity: 1, name: 'Penthouse at Ocean Drive', imageUrl: '/images/miami.jpg', price: 6000000, location: 'Miami', description: 'Contemporary lines and a sleek white canvas meets art deco sensibility and beautiful terrazzo floors. The seemingly endless circular terrace hugs this ocean front home illuminating every room with sunshine or moonlight. Over forty five hundred square feet facing the Atlantic Ocean and boasting five spacious bedrooms and five and a half bathrooms, makes this residence one of a kind.'},
  {sku: 7662992825, quantity: 1, name: 'The Bradbury Estate', imageUrl: '/images/bradbury.jpg', price: 72000000, location: 'Sonoma Valley, CA', description: 'This regal masterpiece in guard-gated Bradbury Estates, sits on a promontory with unparalleled city, canyon and ocean views. The location was ranked by Forbes as one of the most expensive ZIP codes in America. This sprawling compound with multiple structures was magnificently realized after more than 8 years of construction by consummate craftsmen with meticulous attention to detail, using only the finest materials from around the world. The Main House is approximately 30,000 square feet plus 3,000 square feet of Loggias, 2 Master Suites, a 2 story Library, Chef’s Kitchen with pizza oven, a walk-in butler’s pantry, both walk-in refrigerator and freezer. Additionally featured is a large 3D Theater, 2,000-bottle Wine Cellar, Elevator, and a poker room with its own bar and built-in humidor. There is close to one acre of porches, decks, loggias, and walkways hewn of French limestone. One is brought to the Main House, elevated in a Palladian Neo-Classical style by way of a dramatic 600-foot Blue Stone private entry drive that ends in a circular flow entrance that allows for 60-foot truck access, or multiple limousines. This once in a lifetime trophy property with the highest level of artistic craftsmanship, state of the art engineering, and consummate attention to detail has never before been offered for sale; it belongs in the portfolio of the most astute collector.'},
  {sku: 7487601920, quantity: 90, name: 'Aerodyne 021', manufacturer: 'Richard Mille', price: 272629, description: 'expensive'},
  {sku: 1598092930, quantity: 50, name: 'Black Caviar Bang', manufacturer: 'Hublot', size: 'Huge', color: 'Black', price: 895860, description: 'more expensive'},
  {sku: 6848737699, quantity: 30, name: 'Perpetual Calendar Platinum 2499', manufacturer: 'Patek Philippe', price: 3483900, description: 'most expensive'},
  {sku: 5886712343, quantity: 50, name: 'Great Wall of China', imageUrl: '/images/Great-Wall-of-China_05.jpg', price: 10000000, location: 'China, various', description: 'CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA CHINA'},
  {sku: 7220153663, quantity: 50, name: 'US-Mexico Wall', imageUrl: '/images/fence3.jpg', price: 1, location: 'US Southern Border', description: 'Mexico is paying for it!'},
  {sku: 2118098049, quantity: 50, name: 'The Wall', imageUrl: '/images/game-of-thrones-wall.jpg', price: 70000000, location: 'Westeros', description: 'Winter is Coming, so keep those nasty white walkers at bay with this lovely full-size wall! Night\'s Watch sold separately.'},
  {sku: 2478457506, quantity: 1, name: 'Trump Tower', imageUrl: '/images/homepage-bg-tower.jpg', price: 230000000, location: 'New York, NY', description: 'Could be yours!'},
  {sku: 7909034199, quantity: 1, name: 'Marina Bay Sands', imageUrl: '/images/800px-Marina_Bay_Sands_in_the_evening_-_20101120.jpg', price: 888888888, location: 'Singapore', description: 'Three towers for the price of one!'},
  {sku: 9370961945, quantity: 1, name: 'Big Cash Casino', imageUrl: '/images/bigCashCasino.jpg', price: 64000000, location: 'Atlantic City', description: 'It may come as no surprise that one of Atlantic City’s greatest draws is its casinos. Atlantic City gaming action comes in virtually every variety. Big Cash Casino is your chance to own part of the action!'},
  {sku: 8078504454, quantity: 1, name: 'Sands Casino', imageUrl: '/images/SandsCasino.jpg', price: 100000000, location: 'Las Vegas', description: 'Own the historic Sands!'},
  {sku: 6025238950, quantity: 1, name: 'Turtle Island', imageUrl: '/images/turtle-island.jpg', price: 20000000, location: 'Cayman Islands', description: 'The only island for true turtle lovers!'},
  {sku: 1448780803, quantity: 1, name: 'Madagascar', imageUrl: '/images/baobab-ducks-000060800218_small.jpg', price: 11000000000, location: 'Africa', description: 'Actually a country but sure you can buy it!'},
  {sku: 3525016095, quantity: 1, name: 'Cypress Point', imageUrl: '/images/cypress-point.jpg', price: 250000000, location: 'Pebble Beach, CA', description: 'One of the best golf courses named after a tree.'},
  {sku: 6612167910, quantity: 1, name: 'Augusta National Golf Club', imageUrl: '/images/hole-16_0-1024x64072.jpg', price: 190000000, location: 'Augusta, GA', description: 'Golf course named after little-known ancient Etruscan monarch.'},
];



const categoryProductsToSeed = [
  {product_sku: 9154950247, category_id: 24},
  {product_sku: 4435561075, category_id: 24},
  {product_sku: 7662992825, category_id: 24},
  {product_sku: 7487601920, category_id: 17},
  {product_sku: 1598092930, category_id: 17},
  {product_sku: 6848737699, category_id: 17},
  {product_sku: 5886712343, category_id: 25},
  {product_sku: 7220153663, category_id: 25},
  {product_sku: 2118098049, category_id: 25},
  {product_sku: 2478457506, category_id: 27},
  {product_sku: 7909034199, category_id: 27},
  {product_sku: 9370961945, category_id: 26},
  {product_sku: 8078504454, category_id: 26},
  {product_sku: 6025238950, category_id: 28},
  {product_sku: 1448780803, category_id: 28},
  {product_sku: 3525016095, category_id: 29},
  {product_sku: 6612167910, category_id: 29}
];

const usersToSeed = [
  {firstName: 'Ad', lastName: 'Min', isAdmin: true, email: 'admin@admin.com', password: '123456', stripe_user_id: "cus_9WJPbG2Wzb2MBd"},
  {firstName: 'Barack', lastName: 'Obama', email: 'barack@example.gov', password: '123456', stripe_user_id: "cus_9WJPeESETNf406"},
  {firstName: 'Porkchop', lastName: 'Dog', email: 'dogface@pupper.com', password: '555555', stripe_user_id: "cus_9WJQrOLyAHri10"},
  {firstName: 'Simba', lastName: 'Matata', email: 'king@priderock.com', password: '123456', stripe_user_id: "cus_9WJQ93UCLoiPPp"},
  {firstName: 'Elsa', lastName: 'Bush', email: 'missionaccomplished@disney.com', password: '999999'},
  {firstName: 'Yeezy', lastName: 'West', email: 'shyboy77@hotmail.com', password: 'tswift'}
];

const reviewsToSeed = [
  {text: 'Wow this product was so amaze, love it, lulz', summary: 'best thing ever', stars: 5, user_id: 1, date: '2016-10-31', product_sku: productsToSeed[0].sku},
  {text: 'Worst thing ever, will never buy, terrible', summary: 'THE WORST', stars: 1, user_id: 2, date: '2016-08-19', product_sku: productsToSeed[0].sku},
  {text: 'This changed my life, hooray, I have no soul', summary: 'meh', stars: 3, user_id: 3, date: '2016-01-03', product_sku: productsToSeed[1].sku},
  {text: 'This product has ALL the best things', summary: 'Love it!', stars: 5, user_id: 2, date: '2016-09-24', product_sku: productsToSeed[1].sku},
  {text: 'Decided to write this review instead of tweeting about this product', summary: 'loser product', stars: 2, user_id: 4, date: '2015-04-04', product_sku: productsToSeed[2].sku}
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
  {status: 'shipped', quantity: 1, priceAtPurchase: 250000, shippingDate: '2016-10-03', receiveDate: '2016-10-10', taxCost: 28000, shippingCost: 7.99, itemCost: 250000,  product_sku: 7487601920, order_orderNumber: 1},
  {status: 'shipped', quantity: 2, priceAtPurchase: 150, shippingDate: '2016-11-03', receiveDate: '2016-11-10', taxCost: 11, shippingCost: 7.99, itemCost: 100,  product_sku: 9154950247, order_orderNumber: 1}
];


const seedCategories = () => db.Promise.mapSeries(categoriesToSeed, category => db.model('categories').create(category));
const seedUsers = () => db.Promise.mapSeries(usersToSeed, user => db.model('users').create(user));
const seedReviews = () => db.Promise.mapSeries(reviewsToSeed, review => db.model('reviews').create(review));
const seedProducts = () => db.Promise.mapSeries(productsToSeed, product => db.model('products').create(product));
const seedAddresses = () => db.Promise.mapSeries(addressesToSeed, address => db.model('addresses').create(address));
const seedCategoryProducts = () => db.Promise.mapSeries(categoryProductsToSeed, categoryProduct => db.model('CategoryProduct').create(categoryProduct));
const seedOrders = () => db.Promise.mapSeries(ordersToSeed, order => db.model('orders').create(order));
const seedOrderItems = () => db.Promise.mapSeries(orderItemsToSeed, order_item => db.model('order_items').create(order_item));


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
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .then(seedAddresses)
  .then(addresses => console.log(`Seeded ${addresses.length} addresses OK`))
  .then(seedOrders)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedOrderItems)
  .then(orderItems => console.log(`Seeded ${orderItems.length} orderItems OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
