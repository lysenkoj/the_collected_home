import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notification from './Notification';
import { addItem } from '../reducers/cart';
import ContentEditable from "react-contenteditable";
import {updateProduct} from '../reducers/currentProduct';

/* -----------------    DUMB COMPONENT     ------------------ */


// NOTE: IF YOU EDIT THE TAG INSIDE HTML OF CONTENTEDITABLE, MAKE SURE TO UPDATE THE SLICE IN THE CHANGE____FIELD FNS TO THE NEW SIZE
const DumbCurrentProduct = ({selectImage, modifyProduct, state, changeNameField, changeDescriptionField, changeQuoteField, changePriceField, user, currentProduct, categories, addToCart, changeAmnt, notify }) => (
	<div id="currentProduct">
		{
			notify ? <Notification /> : ''
		}
    <div className="thumbnailContainer">
      { (currentProduct && currentProduct.img) ? (
        currentProduct && currentProduct.img.map((image, index) => (
        <img className="thumbnail" key={index} src={ image } onClick={selectImage}/>
        ))
      ) : <p>No images found</p>
      }
    </div>
		<photo>
      {state.mainImg ?
      <img className="mainPhoto" src={state.mainImg}/> :
			<img className="mainPhoto" src={currentProduct && currentProduct.mainImg}/>
      }
		</photo>
    <div className="infoContainer">
      <info className="itemInfo">
        <ContentEditable className="productName"
                  html={`<h2>${ currentProduct.name }</h2>`}
                  disabled={!(user && user.isAdmin)}
                  onChange={changeNameField}
                />
        <h5 className="productSku">SKU { currentProduct.sku }</h5>
        <ContentEditable className=""
                  html={`<h3> $ ${ currentProduct.price && currentProduct.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }</h3>`}
                  disabled={!(user && user.isAdmin)}
                  onChange={changePriceField}
                />
        <ContentEditable className="productDescription"
                  html={`<p>${ currentProduct.description }</p>`}
                  disabled={!(user && user.isAdmin)}
                  onChange={changeDescriptionField}
                />
        <ContentEditable className="productQuote"
                  html={`<p>${ currentProduct.quote }</p>`}
                  disabled={!(user && user.isAdmin)}
                  onChange={changeQuoteField}
                />
        <ContentEditable className="productSize"
                  html={`<p>${currentProduct.size }</p>`}
                  disabled={!(user && user.isAdmin)}
                  onChange={changeDescriptionField}
                />
      </info>
      <description className="addToCart">
        <h4>Quantity</h4>
        <form onSubmit={ addToCart }>
          <select id="cartSelector" onChange={ changeAmnt } name="dropdown">
            <option value="1" defaultValue>1</option>
          </select>
          <button id="cartButton" type="submit">ADD TO CART</button>
        </form>
      </description>
    </div>
		{(user && user.isAdmin && (state.name || state.description || state.price || state.description) && <footer className="footery"><div><button onClick={modifyProduct}>Save Changes</button></div></footer>)}
	</div>
)



/* -----------------    STATEFUL REACT COMPONENT     ------------------ */

class CurrentProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quantity: 1,
			notify: false,
			name: "",
			description: "",
      quote: "",
			price: "",
			imageUrl: "",
      mainImg: null
		};
		this.addToCart = this.addToCart.bind(this);
		this.changeAmnt = this.changeAmnt.bind(this);

		this.changeNameField = this.changeNameField.bind(this);
		this.changeDescriptionField = this.changeDescriptionField.bind(this);
    this.changeQuoteField = this.changeQuoteField.bind(this);
		this.changePriceField = this.changePriceField.bind(this);

		this.modifyProduct = this.modifyProduct.bind(this);

    this.selectMainImg = this.selectMainImg.bind(this);

	}

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  selectMainImg(evt) {
    evt.preventDefault();
    let mainImg = evt.target.src.slice(21);
    this.setState({ mainImg })
  }

	changeNameField(evt) {
		evt.preventDefault();
		var name = evt.target.value.slice(4,-5)
		// console.log(name)
		this.setState({ name })
	}

	changeDescriptionField(evt) {
		evt.preventDefault();
		var description = evt.target.value.slice(3,-4)
		// console.log(description)
		this.setState({ description })
	}

  changeQuoteField(evt) {
		evt.preventDefault();
		var quote = evt.target.value.slice(3,-4)
		console.log(quote)
		this.setState({ quote })
	}

	changePriceField(evt) {
		evt.preventDefault();
		var price = evt.target.value.slice(4,-5)
		this.setState({ price })
	}

	addToCart(evt) {
		evt.preventDefault();
		this.setState({ notify: true })
		this.props.add(this.props.currentProduct, this.state.quantity);
	}

	changeAmnt(evt) {
		const quantity = +evt.target.value;
		this.setState({ quantity });
	}

	modifyProduct(){
		var output = {sku: this.props.currentProduct.sku};

		if(this.state.name){ output.name = this.state.name; }
		if(this.state.description){ output.description = this.state.description; }
		if(this.state.price){ output.price = this.state.price; }
		if(this.state.imageUrl){ output.imageUrl = this.state.imageUrl; }

		this.props.changeProduct(output);
	}


	render() {
		const { categories, user, currentProduct } = this.props;
		return (
      <div className="currentProductContainer">
        <DumbCurrentProduct
          currentProduct={ currentProduct }
          addToCart={ this.addToCart }
          changeAmnt={ this.changeAmnt }
          notify={ this.state.notify }
          user={ user}
          changeNameField={ this.changeNameField }
          changeDescriptionField={ this.changeDescriptionField }
          changePriceField={ this.changePriceField }
          changeQuoteField={this.changeQuoteField}
          state={this.state}
          categories={categories}
          modifyProduct={this.modifyProduct}
          selectImage={this.selectMainImg}
        />
        <div className="shippingInfo">
          <p id="infoEmail">For product information please contact us at info@clariceking.com.</p>
          <p id="shippingDetails">We ship everywhere! We prefer to quote shipping after we know your location and are able to research the best method. The quote will be emailed for your approval 24-48 hours after your online purchase and will be billed separately. If you are not happy with the quote, you may arrange your own shipping, or cancel the purchase.• You may also feel free to contact us at info@clariceking.com for a shipping quote before purchasing.</p>
        </div>
      </div>
		)
	}
}



/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({ categories, user, currentProduct }) => ({ categories, user, currentProduct });
const mapDispatchToProps = (dispatch) => ({
	add: (product, quantity) => dispatch(addItem(product, quantity)),
	changeProduct: (product) => dispatch(updateProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentProduct);