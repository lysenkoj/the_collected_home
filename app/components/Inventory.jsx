import React, { Component } from 'react';
import { connect } from 'react-redux';


/* -----------------    COMPONENT     ------------------ */

class Inventory extends Component {
  constructor(props){
    super(props);
    this.state = {
      date : null,
      totalPurchasePrice: null,
      totalRepairCost: null,
      totalRetailPrice: null,
      totalInventory: null,
      selectedItem: {},
      selectedProducts: []
    }

    this.setCurrentItem = this.setCurrentItem.bind(this);
    this.closeSingleItem = this.closeSingleItem.bind(this);

    this.sortProductNum = this.sortProductNum.bind(this);
    this.sortPurchaseDate = this.sortPurchaseDate.bind(this);
    this.sortDateSold = this.sortDateSold.bind(this);
    this.sortPurchasePrice = this.sortPurchasePrice.bind(this);
    this.sortRepairCost = this.sortRepairCost.bind(this);
    this.sortRetailPrice = this.sortRetailPrice.bind(this);
    this.sortQuantity = this.sortQuantity.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0, 0)

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }

    today = mm + '/' + dd + '/' + yyyy;

    this.setState((previousState) => {
      previousState.date = today;
      return previousState;
    });
  }

  componentWillReceiveProps(nextProps){
    let nextProducts = nextProps.selectedProducts;
    if(nextProducts !== this.props.selectedProducts){
      this.totalInventory(nextProducts);
      this.setState((previousState) => {
        previousState.selectedProducts = nextProducts;
        return previousState;
      })
    }
  }

  //make functions that when toggle button look at array and sort properties and put them back in product
  //each column will need a new wat to sort/group objects

  totalInventory(products){
    let purchasePrice = 0;
    let repairCost = 0;
    let retailPrice = 0;
    let totalInventory = 0;

    products.map( product => {
      purchasePrice += parseFloat(product.purchasePrice);
      repairCost += parseFloat(product.repairCost);
      retailPrice += parseFloat(product.retailPrice);
      totalInventory += product.quantity;
    })

    this.setState((previousState) => {
      previousState.totalPurchasePrice = purchasePrice;
      previousState.totalRepairCost = repairCost;
      previousState.totalRetailPrice = retailPrice;
      previousState.totalInventory = totalInventory;
      return previousState;
    });
  }

  setCurrentItem(evt){
    let singleItemPage = document.querySelector('div.singleItemInv');

    singleItemPage.style.display = 'flex';

    const products = this.props.selectedProducts;
    for(let i = 0; i < products.length; i++){
      if(evt.target.innerText === products[i].sku){
        this.setState((previousState) => {
          previousState.selectedItem = products[i];
          return previousState;
        });
      }
    }
  }

  closeSingleItem(){
    let singleItemPage = document.querySelector('div.singleItemInv');
    singleItemPage.style.display = 'none';
  }

/*-----------SORT FUNCTIONS------------*/

  sortProductNum(){
    let products = this.state.selectedProducts;
    var toggle;

    if(products[0].productNum.slice(1) > products[products.length - 1].productNum.slice(1)){
      toggle = false;
    }else{
      toggle = true;
    }

    if(!toggle){
      products = products.concat().sort(function(a, b){
        return (a.productNum.slice(1)) - (b.productNum.slice(1))
      })
    } else {
      products = products.concat().sort(function(a, b){
        return (b.productNum.slice(1)) - (a.productNum.slice(1))
      })
    }

    this.setState((previousState) => {
      previousState.selectedProducts = products;
      return previousState;
    })
  }

  sortPurchaseDate(){
    let products = this.state.selectedProducts;
    var toggle;

    if(new Date(products[0].purchaseDate).getTime() > new Date(products[products.length - 1].purchaseDate).getTime()){
      toggle = false;
    }else{
      toggle = true;
    }

    if(!toggle){
      products = products.concat().sort(function(a, b){
        return new Date(a.purchaseDate).getTime() - new Date(b.purchaseDate).getTime()
      })
    } else {
      products = products.concat().sort(function(a, b){
        return new Date(b.purchaseDate).getTime() - new Date(a.purchaseDate).getTime()
      })
    }

    this.setState((previousState) => {
      previousState.selectedProducts = products;
      return previousState;
    })
  }

  sortDateSold(){
    let products = this.state.selectedProducts;
    var toggle;

    if(new Date(products[0].dateSold).getTime() > new Date(products[products.length - 1].dateSold).getTime()){
      toggle = false;
    }else{
      toggle = true;
    }

    if(!toggle){
      products = products.concat().sort(function(a, b){
        return new Date(a.dateSold).getTime() - new Date(b.dateSold).getTime()
      })
    } else {
      products = products.concat().sort(function(a, b){
        return new Date(b.dateSold).getTime() - new Date(a.dateSold).getTime()
      })
    }

    this.setState((previousState) => {
      previousState.selectedProducts = products;
      return previousState;
    })
  }

  sortPurchasePrice(){
    let products = this.state.selectedProducts;
    var toggle;

    if(products[0].purchasePrice > products[products.length - 1].purchasePrice){
      toggle = false;
    }else{
      toggle = true;
    }

    if(!toggle){
      products = products.concat().sort(function(a, b){
        return (a.purchasePrice) - (b.purchasePrice)
      })
    } else {
      products = products.concat().sort(function(a, b){
        return (b.purchasePrice) - (a.purchasePrice)
      })
    }

    this.setState((previousState) => {
      previousState.selectedProducts = products;
      return previousState;
    })
  }

  sortRepairCost(){
    let products = this.state.selectedProducts;
    var toggle;

    if(products[0].repairCost > products[products.length - 1].repairCost){
      toggle = false;
    }else{
      toggle = true;
    }

    if(!toggle){
      products = products.concat().sort(function(a, b){
        return (a.repairCost) - (b.repairCost)
      })
    } else {
      products = products.concat().sort(function(a, b){
        return (b.repairCost) - (a.repairCost)
      })
    }

    this.setState((previousState) => {
      previousState.selectedProducts = products;
      return previousState;
    })
  }

  sortQuantity(){
    let products = this.state.selectedProducts;
    var toggleQty;

    if(products[0].quantity > products[products.length - 1].quantity){
      toggleQty = false;
    }else{
      toggleQty = true;
    }

    if(!toggleQty){
      products = products.concat().sort(function(a, b){
        return (a.quantity) - (b.quantity)
      })
    } else {
      products = products.concat().sort(function(a, b){
        return (b.quantity) - (a.quantity)
      })
    }

    this.setState((previousState) => {
      previousState.selectedProducts = products;
      return previousState;
    })
  }

  sortRetailPrice(){
    let products = this.state.selectedProducts;
    var toggleRP;

    if(products[0].retailPrice > products[products.length - 1].retailPrice){
      toggleRP = false;
    }else{
      toggleRP = true;
    }

    if(toggleRP){
      products = products.concat().sort(function(a, b){
        return (a.retailPrice) - (b.retailPrice)
      })
    } else {
      products = products.concat().sort(function(a, b){
        return (b.retailPrice) - (a.retailPrice)
      })
    }

    this.setState((previousState) => {
      previousState.selectedProducts = products;
      return previousState;
    })
  }

  sortQuantity(){
    let products = this.state.selectedProducts;
    var toggleQty;

    if(products[0].quantity > products[products.length - 1].quantity){
      toggleQty = false;
    }else{
      toggleQty = true;
    }

    if(!toggleQty){
      products = products.concat().sort(function(a, b){
        return (a.quantity) - (b.quantity)
      })
    } else {
      products = products.concat().sort(function(a, b){
        return (b.quantity) - (a.quantity)
      })
    }

    this.setState((previousState) => {
      previousState.selectedProducts = products;
      return previousState;
    })
  }


	render(){
		return (
			<div className="inventoryMain">
        { (this.props.user && this.props.user.isAdmin) ?
        <div className='invPage'>

          <div className='singleItemInv'>
            <button className="invDeleteButton" onClick={this.closeSingleItem}><h5>X</h5></button>
            <div className='singleItemTop'>
              <div className='singleItemTL'>
                <div>NAME: {this.state.selectedItem.name}</div>
                <div>SKU: {this.state.selectedItem.sku}</div>
                <div>COLOR: {this.state.selectedItem.color}</div>
                <div>SIZE: {this.state.selectedItem.size}</div>
                <div>STATUS: {this.state.selectedItem.status}</div>
                <div>PURCHASE DATE: {this.state.selectedItem.purchaseDate}</div>
                <div>PURCHASE PRICE: {this.state.selectedItem.purchasePrice}</div>
                <div>REPAIR COST: {this.state.selectedItem.repairCost}</div>
                <div>RETAIL PRICE: {this.state.selectedItem.retailPrice}</div>
                <div>DATE SOLD: {this.state.selectedItem.dateSold}</div>
                <div>QTY: {this.state.selectedItem.quantity}</div>
              </div>
              <div className='singleItemTR'>
                <img src={this.state.selectedItem.mainImg}/>
              </div>
            </div>
            <div className='singleItemBottom'>
              <div>LOCATION: {this.state.selectedItem.location}</div>
              <div>CONDITION: {this.state.selectedItem.condition}</div>
              <div>DESCRIPTION: {this.state.selectedItem.description}</div>
              <div>QUOTE: {this.state.selectedItem.quote}</div>
              <div>DIMENSIONS: {this.state.selectedItem.dimensions}</div>
              <div>MATERIAL: {this.state.selectedItem.material}</div>
              <div>FEATURED: {this.state.selectedItem.featured}</div>
            </div>
          </div>



          <div className='inventoryContainer'>
            <div className='inventoryHeader'>
              <div id='headerLeft'>
                <h3>Inventory Management</h3>
              </div>
              <div id='headerRight'>
                <h5>Date: {this.state.date}</h5>
                <h5>User Name: {this.props.user.firstName + ' ' + this.props.user.lastName}</h5>
              </div>
            </div>


            <div className='inventoryGrid'>

              <div className='inventoryLabels'>
                <button className='columnHeader index'>#</button>
                <button className='columnHeader productSku'>Product Sku</button>
                <button className='columnHeader productNumber' onClick={this.sortProductNum}>Product #</button>
                <button className='columnHeader productName'>Product Name</button>
                <button className='columnHeader invCategory'>Category</button>
                <button className='columnHeader invSize'>Size</button>
                <button className='columnHeader invColor'>Color</button>
                <button className='columnHeader invStatus'>Status</button>
                <button className='columnHeader purchaseDate' onClick={this.sortPurchaseDate}>Purchase Date</button>
                <button className='columnHeader purchasePrice' onClick={this.sortPurchasePrice}>Purchase Price</button>
                <button className='columnHeader repairCost' onClick={this.sortRepairCost}>Repair Cost</button>
                <button className='columnHeader retailPrice' onClick={this.sortRetailPrice}>Retail Price</button>
                <button className='columnHeader dateSold' onClick={this.sortDateSold}>Date Sold</button>
                <button className='columnHeader invQuantity' onClick={this.sortQuantity}>Qty</button>
              </div>


              { this.state.selectedProducts.map( (product, index) =>

              <div className='inventoryRow' key={index}>
                <div className='productCell index'>{index + 1}</div>
                <button className='productCell productSku' onClick={this.setCurrentItem}>{product.sku}</button>
                <div className='productCell productNumber'>{product.productNum}</div>
                <div className='productCell productName'>{product.name}</div>
                <div className='productCell invCategory'>NEED2RESEARCH</div>
                <div className='productCell invSize'>{product.size}</div>
                <div className='productCell invColor'>{product.color}</div>
                <div className='productCell invStatus'>{product.status}</div>
                <div className='productCell purchaseDate'>{product.purchaseDate.slice(0, 10)}</div>
                <div className='productCell purchasePrice'>{product.purchasePrice}</div>
                <div className='productCell repairCost'>{product.repairCost}</div>
                <div className='productCell retailPrice'>{product.retailPrice}</div>
                <div className='productCell dateSold'>{product.dateSold}</div>
                <div className='productCell invQuantity'>{product.quantity}</div>
              </div>
              )}
              <div className='invTotals inventoryRow'>
                <div className='productSku'>TOTAL</div>
                <div className='productNumber'></div>
                <div className='productName'></div>
                <div className='invCategory'></div>
                <div className='invSize'></div>
                <div className='invColor'></div>
                <div className='invStatus'></div>
                <div className='purchaseDate'></div>
                <div className='productCell purchasePrice'>{this.state.totalPurchasePrice}</div>
                <div className='productCell repairCost'>{this.state.totalRepairCost}</div>
                <div className='productCell retailPrice'>{this.state.totalRetailPrice}</div>
                <div className='dateSold'></div>
                <div className='productCell invQuantity'>{this.state.totalInventory}</div>
              </div>
            </div>
          </div>
        </div>
        :
        <div id='inventoryHeader'>
          <h1>USER IS PLEB</h1>
        </div>
        }
			</div>
		);
	}
}

const mapProps = ({user, selectedProducts}) => ({user, selectedProducts});


export default connect(mapProps, null)(Inventory);
