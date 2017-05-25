import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addCategory } from '../reducers/categories'
import { addProduct } from '../reducers/currentProduct';
import ImageUpload from './imageUpload';
import { addPhoto } from '../reducers/currentProduct';

/*

IMPORTANT SAVE FOR LATER!!!!!
SWAP OUT TRUE ON LINE 54
(this.props.user && this.props.user.isAdmin)


*/




/* -----------------    COMPONENT     ------------------ */

class Admin extends Component{

  constructor(props) {
      super(props);
      this.state = {
        product : {
          name: '',
          sku: '',
          quantity: '',
          imageUrl: {},
          price: '',
          description: '',
          size: ''
        },
        category: {
          id: '8',

        }
      }

      this.makeCategory = this.makeCategory.bind(this);
      this.makeProduct = this.makeProduct.bind(this);
      this.checkProduct = this.checkProduct.bind(this);
      this.toggleCategory = this.toggleCategory.bind(this);
      this.toggleFormOn = this.toggleFormOn.bind(this);
      this.toggleFormOff = this.toggleFormOff.bind(this);
      this.toggleEdit = this.toggleEdit.bind(this);
      this.nameUpdate = this.nameUpdate.bind(this);
      this.skuUpdate = this.skuUpdate.bind(this);
      this.categoryUpdate = this.categoryUpdate.bind(this);
      this.quantityUpdate = this.quantityUpdate.bind(this);
      this.priceUpdate = this.priceUpdate.bind(this);
      this.sizeUpdate = this.sizeUpdate.bind(this);
      this.descriptionUpdate = this.descriptionUpdate.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleImageChange = this._handleImageChange.bind(this);
  }

  toggleCategory(evt){
    evt.preventDefault()
    let id = evt.target.firstChild.nodeValue.slice(0, 4).toLowerCase();
    id = id.charAt(0).toUpperCase() + id.slice(1);

    console.log(id);
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

  UploadImageContainer(evt){
    evt.preventDefault();
    const getUploader = function(){
      return document.querySelector('div.previewComponent');
    }
    let uploader = getUploader();

    uploader.style.display = 'flex';
  }

  makeCategory(evt){
    evt.preventDefault();
    this.props.createCategory(evt.target.categoryName.value,
      evt.target.metaCategory.value);
  }

  makeProduct(evt){
    var product = this.state.product;

    var categoryProduct = {
      id: this.state.category.id,
      sku: this.state.product.sku
    }
    // this.props.createProduct(product, categoryProduct);
    console.log('PRODUCT CREATED SUCCESFULLY!!!')
  }

  checkProduct(evt){
    evt.preventDefault();
    console.log(this.state)
  }

  /*---------------- FORM ONCHANGE FUNCTIONS ------------------*/
  nameUpdate(evt){
    evt.preventDefault();
    const newName = evt.target.value;
    this.setState((previousState) => {
      previousState.product.name = newName;
      return previousState;
    });
  }

  skuUpdate(evt){
    evt.preventDefault();
    const newSKU = evt.target.value;
    this.setState((previousState) => {
      previousState.product.sku = newSKU;
      return previousState;
    });
  }

  categoryUpdate(evt){
    evt.preventDefault();
    const newCategory = evt.target.value;
    this.setState((previousState) => {
      previousState.category.id = newCategory;
      return previousState;
    });
  }

  quantityUpdate(evt){
    evt.preventDefault();
    const newQuantity = evt.target.value;
    this.setState((previousState) => {
      previousState.product.quantity = newQuantity;
      return previousState;
    });
  }

  priceUpdate(evt){
    evt.preventDefault();
    const newPrice = evt.target.value;
    this.setState((previousState) => {
      previousState.product.price = newPrice;
      return previousState;
    });
  }

  descriptionUpdate(evt){
    evt.preventDefault();
    const newDescription = evt.target.value;
    this.setState((previousState) => {
      previousState.product.description = newDescription;
      return previousState;
    });
  }

  sizeUpdate(evt){
    evt.preventDefault();
    const newSize = evt.target.value;
    this.setState((previousState) => {
      previousState.product.size = newSize;
      return previousState;
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    const el = e.currentTarget.parentNode.parentNode;

    el.style.display = 'none';

    const checkBox = function(){
      return document.querySelector('#imageUploaded')
    }
    const check = checkBox();
    check.checked = 'checked';

    //ROUTE NO WORKING
    this.props.savePhoto(this.state.product.imageUrl.file);
    console.log('handle uploading-', this.state.product.imageUrl.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState((previousState) => {
        previousState.product.imageUrl = {
          file: file,
          imagePreviewUrl: reader.result
        }
      });
    }
    reader.readAsDataURL(file)
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
              <h5 className="categoryToggle" onClick={ this.toggleCategory }>{category.name.toUpperCase()}</h5>
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
          <h4>PRODUCTS</h4>
          <div>
          <form>
            <div className="form-group">
              <label>Product Name:</label>
              <input type="text"  name="productName" onChange={(evt) => this.nameUpdate(evt)}/>
            </div>
            <div className="form-group">
              <label>Category:</label>
                <select name="category" onChange={(evt) => this.categoryUpdate(evt)}>
                  {this.props.categories && this.props.categories.filter(category => ((category.id !== 1) && (category.id !== 2) && (category.id !== 3) && (category.id !== 4) && (category.id !== 5) && (category.id !== 6) && (category.id !== 7))).map(category => <option value={`${category.id}`}>{category.name}</option>)}
                </select>
            </div>
            <div className="form-group">
              <label>SKU:</label>
              <input type="text"  name="sku" onChange={(evt) => this.skuUpdate(evt)}/>
            </div>
            <div className="form-group">
              <label>Quantity:</label>
              <input type="text"  name="quantity" onChange={(evt) => this.quantityUpdate(evt)}/>
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input type="text"  name="price" onChange={(evt) => this.priceUpdate(evt)}/>
            </div>
            <div className="form-group">
              <label>Size:</label>
              <input type="text"  name="size" onChange={(evt) => this.sizeUpdate(evt)}/>
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea type="text"  name="description" cols="40" rows="5" onChange={(evt) => this.descriptionUpdate(evt)}/>
            </div>
            <div id="imageButton">
              <button onClick={this.UploadImageContainer}>
                UPLOAD IMAGE
              </button>
              <input type="checkbox" id="imageUploaded" name="upload" value="image" disabled="disabled" checked=""/>
              <label htmlFor="imageUploaded">IMAGE UPLOADED</label>
            </div>
            <button type="submit" onSubmit={this.makeProduct}>CREATE</button>
          </form>
          <ImageUpload _handleImageChange={this._handleImageChange} _handleSubmit={this._handleSubmit} imgUrl={this.state.product.imageUrl} />
          </div>
        </div>
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
  createProduct: (product, categoryProduct) => dispatch(addProduct(product, categoryProduct)),
  savePhoto: (photo) => dispatch(addPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
