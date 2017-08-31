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
      totalInventory: null
    }
  }

  componentDidMount () {
    window.scrollTo(0, 0)

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
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
      console.log(this.state)
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


	render(){
		return (
			<div className="inventoryMain">
        { (this.props.user && this.props.user.isAdmin) ?
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
              <button className='columnHeader productNumber'>Product #</button>
              <button className='columnHeader productName'>Product Name</button>
              <button className='columnHeader invCategory'>Category</button>
              <button className='columnHeader invSize'>Size</button>
              <button className='columnHeader invColor'>Color</button>
              <button className='columnHeader invStatus'>Status</button>
              <button className='columnHeader purchaseDate'>Purchase Date</button>
              <button className='columnHeader purchasePrice'>Purchase Price</button>
              <button className='columnHeader repairCost'>Repair Cost</button>
              <button className='columnHeader retailPrice'>Retail Price</button>
              <button className='columnHeader dateSold'>Date Sold</button>
              <button className='columnHeader invQuantity'>Qty</button>
            </div>
            { this.props.selectedProducts.map( (product, index) =>

            <div className='inventoryRow' key={index}>
              <div className='productCell index'>{index + 1}</div>
              <button className='productCell productSku'>{product.sku}</button>
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
