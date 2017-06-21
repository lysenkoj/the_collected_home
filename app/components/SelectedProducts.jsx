import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

class SelectedProducts extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    return (
      <div className="selectedProductsMain">
        {/*make this dynamic and linked*/}
      <div className="categoryMap">
        <Link className="mapItem" to={'/'}>HOME</Link>
        <div className="mapItem">//</div>
        <div className="mapItem">{(this.props.params && this.props.params.categoryName) ? `${this.props.params.categoryName}` : 'SEARCH RESULT:'}</div>
      </div>
      <div className="galleryContainer">
        <div className="gallery">
          { (this.props.selectedProducts && this.props.selectedProducts.length) ? (
            this.props.selectedProducts && this.props.selectedProducts.map(product => (
              <Link to={`product/${product.sku}`} className="productThumbnail" key={product.sku}>
                <img className="imgThumb" src={product.img[0]} />
                <div className="productThumbInfoContainer">
                  <h3 id="productName">{product.name.toUpperCase()}</h3>
                  <p id="productPrice">${product.price && product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                </div>
              </Link>
            ))
          ): <p>No products found</p>}
        </div>
      </div>
    </div>);
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ selectedProducts, categories }) => ({ selectedProducts });
const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedProducts);
