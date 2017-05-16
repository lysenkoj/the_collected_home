import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* -----------------    COMPONENT     ------------------ */

function SelectedProducts({ selectedProducts }){
 return (
  <div className="selectedProductsMain">
    {/*make this dynamic and linked*/}
   <div className="categoryMap">
     <Link to={'/'}>HOME</Link>
     <div>//</div>
     <div>Current Meta Category</div>
     <div>//</div>
     <div>Current Sub Category</div>
   </div>
   <div className="gallery">
     { (selectedProducts && selectedProducts.length) ? (
       selectedProducts && selectedProducts.map(product => (
         <Link to={`product/${product.sku}`} className="productThumbnail" key={product.sku}>
          <img className="imgThumb" src={product.img[0]} />
          <div className="productThumbInfoContainer">
            <h4 id="productName">{product.name}</h4>
            <p id="productPrice">Price: ${product.price && product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
          </div>
         </Link>
       ))
     ): <p>No products found</p>}
   </div>
 </div>);
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ selectedProducts }) => ({ selectedProducts });
const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedProducts);
