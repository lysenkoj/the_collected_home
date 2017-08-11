// actions

/*----- USER ACTIONS-----*/

//ADD USER (SIGN UP/LOGIN)
export const authenticated = user => {
  return{
    type: 'AUTHENTICATED',
    user
  }
}

//ADD MAILING ADDRESS
export const addMailingAddress = (address) => {
  return {
    type: 'ADD_MAILING_ADDRESS',
    address
  }
}

//ADD BILLING ADDRESS
export const addBillingAddress = (user, address) => {
  return {
    type: 'ADD_BILLING_ADDRESS',
    address
  }
}

/*----- CHARGES -----*/
//RECEIVE CHARGE
export const receiveCharge = (charge) => {
  return {
    type: 'RECEIVE_CHARGE',
    charge
  }
}

//DELOAD CHARGE
export const deloadCharge = () => {
  return {
    type: 'DELOAD_CHARGE'
  }
}

/*----- CATEGORIES -----*/

//LOAD CATEGORIES
export const loadCategories = (categories) => {
  return {
    type: 'LOAD_CATEGORIES',
    categories
  }
}

//ADD CATEGORY
export const addCategory = (newCategory, MetaCategory) => {
  return {
    type: 'ADD_CATEGORY',
    newCategory,
    MetaCategory
  }
}

//REMOVE CATEGORY
export const removeCategory = (category) => {
  return {
    type: 'REMOVE_CATEGORY',
    category
  }
}

/*----- PRODUCTS -----*/

//LOAD PRODUCT
export const loadProduct = (product) => {
  return {
    type: 'LOAD_PRODUCT',
    product
  }
}

//ADD PRODUCT
export const addProduct = (product, category) =>{
  return {
    type: 'ADD_PRODUCT',
    product,
    category
  }
}

//UPDATE PRODUCT
export const updateProduct = (product, changes) => {
  return {
    type: 'UPDATE_ PRODUCT',
    product,
    changes
  }
}

//REMOVE PRODUCT
export const removeProduct = (product) =>{
  return {
    type: 'REMOVE_PRODUCT',
    product
  }
}

//CLEAR PRODUCT
export const clearProduct = () => {
  return {
    type: 'CLEAR_PRODUCT'
  }
}

//SELECT PRODUCTS
export const selectProducts = (products) => {
  return {
    type: 'SELECT_PRODUCTS',
    products
  }
}

//SEARCH FOR PRODUCTS
export const searchForProducts = (products) => {
  return {
    type: 'SEARCH_FOR_PRODUCTS',
    products
  }
}

//SELECT FEATURED PRODUCTS
export const selectFeaturedProducts = (products) => {
  return {
    type: 'SELECT_FEATURED_PRODUCTS',
    products
  }
}

//DELOAD PRODUCTS
export const deloadProducts = () => {
  return{
    type: 'DELOAD'
  }
}


/*----- CART -----*/

//ADD TO CART
export const addItem = (product, quantity) => {
  return {
    type: 'ADD_TO_CART',
    product,
    quantity
  }
}

//REMOVE FROM CART
export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    product
  }
}

//CHANGE QUANTITY
export const changeQuantity = (product, quantity) => {
  return {
    type: 'CHANGE_QUANTITY',
    product,
    quantity
  }
}

//CLEAR CART
export const clearCart = () => {
  return {
    type: 'CLEAR_CART'
  }
}

/*----- SUBSCRIBE -----*/

//SUBSCRIBE
export const subscribe = (user) => {
  return {
    type: 'SUBSCRIBE',
    user
  }
}

/*----- DESIGN SERVICES -----*/
export const addDesignFormInfo = (info) => {
  return {
    type: 'ADD_DESIGN_FORM_INFO',
    info
  }
}

/*----- CONTACT FORM -----*/
export const addContactFormInfo = info => {
  return{
    type: 'ADD_CONTACT_FORM_INFO',
    info
  }
}

/*----- ORDERS -----*/
export const loadOrders = (user, orders) => {
  return {
    type: 'LOAD_ORDERS',
    user,
    orders
  }
}

export const deloadAllOrders = () => {
  return {
    type: 'DELOAD_ORDERS'
  }
}

export const selectOrders = (order) => {
  return {
    type: 'SELECT_ORDERS',
    order
  }
}

// export const clearOrder = () => {
//   return {
//     type: 'CLEAR_ORDER',
//   }
// }