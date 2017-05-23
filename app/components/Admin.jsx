import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addCategory } from '../reducers/categories'
import { addProduct } from '../reducers/currentProduct';
import ImageUpload from './imageUpload';

/*

IMPORTANT SAVE FOR LATER!!!!!
SWAP OUT TRUE ON LINE 54
(this.props.user && this.props.user.isAdmin)


*/




/* -----------------    COMPONENT     ------------------ */

class Admin extends Component{

  constructor(props) {
      super(props);

      this.makeCategory = this.makeCategory.bind(this);
      this.makeProduct = this.makeProduct.bind(this);
      this.toggleCategory = this.toggleCategory.bind(this);
      this.toggleFormOn = this.toggleFormOn.bind(this);
      this.toggleFormOff = this.toggleFormOff.bind(this);
      this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleCategory(evt){
    evt.preventDefault()
    const id = evt.target.firstChild.nodeValue.slice(0, 4);

    const getId = function(){
      return document.querySelector(`#${id}`);
    };

    const categoryDiv = getId();

    (categoryDiv.style.display === 'flex') ?
    categoryDiv.style.display = 'none' : categoryDiv.style.display = 'flex';

  }

  toggleFormOn(evt){
    evt.preventDefault();
    const id = evt.currentTarget;
    id.nextSibling.style.display = 'flex';
  }

  toggleFormOff(evt){
    evt.preventDefault();
    const id = evt.currentTarget.parentNode.parentNode;
    id.style.display = 'none';
  }

  toggleEdit(evt){
    evt.preventDefault();
    let deleteButtons = [];
    const parentDiv = evt.currentTarget.parentNode;

    parentDiv.childNodes.forEach( node => {
      (node.childNodes[0].className === 'deleteButton') ? deleteButtons.push(node.childNodes[0]) : null
    })

    deleteButtons.forEach(button => {
      (button.style.display === 'inline') ? button.style.display = 'none' : button.style.display = 'inline';
    })
  }

  makeCategory(evt){
    evt.preventDefault();
    this.props.createCategory(evt.target.categoryName.value,
      evt.target.metaCategory.value);
  }

  makeProduct(evt){
    evt.preventDefault();

    var product = {
      name: evt.target.productName.value,
      sku: evt.target.sku.value,
      quantity: evt.target.quantity.value,
      imageUrl: evt.target.imageUrl.value,
      price: evt.target.price.value,
      description: evt.target.description.value
    }

    var categoryProduct = {
      id: evt.target.category.value,
      sku: evt.target.sku.value
    }

    this.props.createProduct(product, categoryProduct);
  }

 render(){
   return (
    <div className="adminPage">
     <h3>ADMIN PANEL</h3>
     {
      (true) ?
      <div className="panelContainer">
        <div className="categoryPanel">
          <h4>CATEGORIES</h4>
          {
            this.props.categories && this.props.categories.filter( category => (
              (category.id === 1) || (category.id === 2) || (category.id === 3) || (category.id === 4) || (category.id === 5) || (category.id === 6) || (category.id === 7))
            ).map(category =>
            <div className="eachCategory" key={category.id}>
              <h5 className="categoryToggle" onClick={ this.toggleCategory }>{category.name}</h5>
              <div className="categoryContainer" id={`${category.name.slice(0, 4)}`} key={category.id}>
                {
                 this.props.categories.filter( newCategory => (
                   newCategory.meta_category_id === category.id
                 )).map(newCategory =>
                  <div className="categoryThumb" key={newCategory.id}>
                    <button className="deleteButton"><h5>X</h5></button>
                    <h5>{newCategory.name.toUpperCase()}</h5>
                  </div>
                 )
                }
                <button className="addButton" onClick={this.toggleFormOn}>ADD CATEGORY</button>
                <div id='categoryForm'>
                  <form onSubmit={ this.makeCategory }>
                    <div className="formMeta">
                      <label>Meta Category:</label>
                        <select name="metaCategory">{
                          this.props.categories && this.props.categories.filter( category => (
                            (category.id === 1) || (category.id === 2) || (category.id === 3) || (category.id === 4) || (category.id === 5) || (category.id === 6) || (category.id === 7))
                          ).map(category => <option value={`${category.id}`}>{category.name}</option>)}
                        </select>
                    </div>
                    <div className="formInput">
                      <label>Category Name:</label>
                      <input type="text"  name="categoryName"/>
                    </div>
                    <button className="formButton" type="submit" onClick={this.toggleFormOff}>Create</button>
                    <button className="formButton" onClick={this.toggleFormOff}>Cancel</button>
                  </form>
                </div>
                <button className="editButton" onClick={this.toggleEdit}>EDIT</button>
              </div>
            </div>)
          }
        </div>
        <div className="productPanel">
          <div>
          <p>Create New Product</p>
          <form onSubmit={ this.makeProduct }>
            <div className="form-group">
              <label>Product Name:</label>
              <input type="text"  name="productName"/>
            </div>
            <div className="form-group">
              <label>Category:</label>
                <select name="category">
                  {this.props.categories && this.props.categories.filter(category => ((category.id !== 1) && (category.id !== 2) && (category.id !== 3) && (category.id !== 4) && (category.id !== 5) && (category.id !== 6) && (category.id !== 7))).map(category => <option value={`${category.id}`}>{category.name}</option>)}
                </select>
            </div>
            <div className="form-group">
              <label>SKU:</label>
              <input type="text"  name="sku"/>
            </div>
            <div className="form-group">
              <label>Quantity:</label>
              <input type="text"  name="quantity"/>
            </div>
            <imageUpload />
            <div className="form-group">
              <label>Price:</label>
              <input type="text"  name="price"/>
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input type="text"  name="description"/>
            </div>
            <button type="submit">Create</button>
          </form>
          </div>
        </div>
        {/*<div>
        <p>Create New Category</p>
        <form onSubmit={ this.makeCategory }>
          <div className="form-group">
            <label>Category Name:</label>
            <input type="text"  name="categoryName"/>
          </div>
          <div className="form-group">
            <label>Meta Category:</label>
              <select name="metaCategory">{
                this.props.categories && this.props.categories.filter( category => (
                  (category.id === 1) || (category.id === 2) || (category.id === 3) || (category.id === 4) || (category.id === 5) || (category.id === 6) || (category.id === 7))
                ).map(category => <option value={`${category.id}`}>{category.name}</option>)}
              </select>
          </div>
          <button type="submit">Create</button>
        </form>
        </div>
        <div>
        <p>Create New Product</p>
        <form onSubmit={ this.makeProduct }>
          <div className="form-group">
            <label>Product Name:</label>
            <input type="text"  name="productName"/>
          </div>
          <div className="form-group">
            <label>Category:</label>
              <select name="category">
                {this.props.categories && this.props.categories.filter(category => ((category.id !== 1) && (category.id !== 2) && (category.id !== 3) && (category.id !== 4) && (category.id !== 5) && (category.id !== 6) && (category.id !== 7))).map(category => <option value={`${category.id}`}>{category.name}</option>)}
              </select>
          </div>
          <div className="form-group">
            <label>SKU:</label>
            <input type="text"  name="sku"/>
          </div>
          <div className="form-group">
            <label>Quantity:</label>
            <input type="text"  name="quantity"/>
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input type="text"  name="imageUrl"/>
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input type="text"  name="price"/>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input type="text"  name="description"/>
          </div>
          <button type="submit">Create</button>
        </form>
        </div>*/}
       </div>

       :
      <h3></h3>
      }
     </div>);
  }
}



/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = ({ user , categories}) => ({ user , categories});

const mapDispatchToProps = (dispatch) => ({
  createCategory: (categoryName, metaCategory) => dispatch(addCategory(categoryName, metaCategory)),
  createProduct: (product, categoryProduct) => dispatch(addProduct(product, categoryProduct))
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
