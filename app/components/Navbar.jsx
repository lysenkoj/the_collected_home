import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/auth';
import QuickCart from './QuickCart';
import QuickLogin from './QuickLogin';


/* -----------------    COMPONENT     ------------------ */

class Navigbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavDrop = this.toggleNavDrop.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.toggleQuickCart = this.toggleQuickCart.bind(this);
    this.toggleQuickLogin = this.toggleQuickLogin.bind(this);

  }

  toggleNavDrop(evt){
    /*----------- Toggle Current Dropdown ---------------*/
    const link = evt.currentTarget;
    (link.childNodes[1].style.display === 'flex') ?
    link.childNodes[1].style.display = 'none' : link.childNodes[1].style.display = 'flex'
    /*----------- Reset Dropdowns ---------------*/
    const getAll = function(){
      return document.querySelectorAll('div.dropdownMenu');
    };
    const allDivs = getAll();

    allDivs.forEach(div => {
      if(div !== link.childNodes[1]){
        div.style.display = 'none';
      }
    });
  }

  toggleMobileNav(){
    const selectNav = function(){
      return document.querySelector('div.navLinkContainer')
    };
    const navDiv = selectNav();

    (navDiv.style.display === 'flex') ?
    navDiv.style.display = 'none' : navDiv.style.display = 'flex';
  }

  toggleQuickCart(){
    const getQuickCart = function(){
      return document.querySelector('div.quickCart');
    };

    const quickCart = getQuickCart();

    (this.props.user !== '') ? quickCart.style.right = '132px' : quickCart.style.right = '40px';

    (quickCart.style.display === 'flex') ?
    quickCart.style.display = 'none' : quickCart.style.display = 'flex';
  }

  toggleQuickLogin(){
    const getQuickLogin = function(){
      return document.querySelector('div.quickLogin');
    };

    const quickLogin = getQuickLogin();

    (quickLogin.style.display === 'flex') ?
    quickLogin.style.display = 'none' : quickLogin.style.display = 'flex';
  }

  render(){
    return (
      <div className="navContainer">
        <div className="topNav">
          <Search />
          <Link to="/" className="mainLogo">
            <div>CLARICE KING</div>
            <div id="tagline">The Collected Home</div>
          </Link>
          <div className="userContainer">
            <div className="userPanel">
              <div className="shoppingContainer">
                <button id="cartButton" onClick={this.toggleQuickCart}>
                  <div id="cartLink">
                    <img id="shoppingImg" src="images/shopping-cart.png"/>
                    <h5>({this.props.cart && this.props.cart.length})</h5>
                  </div>
                </button>
                <QuickCart />
                <div><h5>//</h5></div>
                {
                  this.props.user && this.props.user.email ?
                  <div id="signOut" onClick={this.props.signout}><h5>Sign Out</h5></div> :
                  <button id="login" onClick={this.toggleQuickLogin}>
                    <div id="cartLink">
                     <h5>Login</h5>
                    </div>
                </button>
                }
                <QuickLogin />
                {
                  this.props.user ?
                  <div><h5>//</h5></div> :
                  null
                }
                { this.props.user ?
                  <Link id="orderContainer" to={`/orders/${this.props.user && this.props.user.id}`}>
                    <div id="orderButton">
                      <h5>{this.props.user && "Your Orders"}</h5>
                    </div>
                  </Link> :
                  null
                }
              </div>
              <div id="welcomeBanner">
              {
                  this.props.user ?
                    `Welcome back, ${this.props.user.firstName || this.props.user.email}!`
                  :
                    'Guest'
                }
              </div>
              <Link to="/admin">
                <div>
                  {this.props.user && this.props.user.isAdmin && "Admin Panel"}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bottomNav">
          <div className="mobileButton" onClick={this.toggleMobileNav}>
            <img id="menuIcon" src="/images/menu-icon.png"/>
          </div>
          <div className="navLinkContainer">
            <div className="navCategory" id="furnitureNav" onClick={this.toggleNavDrop}>
              <div className="navLink">
                <h4>FURNITURE</h4>
                <div className="arrow-down"></div>
              </div>
              <div className="dropdownMenu" id="furnitureDrop">
                {this.props.categories.filter((category) => {
                    return category.meta_category_id === 1
                  }).map(category => (
                    <Link key={category.id} to={`/${category.name}`}><div className="dropDownItem">{ category.name }</div></Link>
                  ))
                  }
              </div>
            </div>
            <div className="navCategory" id="lightingNav" onClick={this.toggleNavDrop}>
              <div className="navLink">
                <h4>LIGHTING</h4>
                <div className="arrow-down"></div>
              </div>
              <div className="dropdownMenu" id="lightingDrop">
                {this.props.categories.filter((category) => {
                    return category.meta_category_id === 2
                  }).map(category => (
                    <Link key={category.id} to={`/${category.name}`}><div className="dropDownItem">{ category.name }</div></Link>
                  ))
                  }
              </div>
            </div>
            <div className="navCategory" id="decorNav" onClick={this.toggleNavDrop}>
              <div className="navLink">
                <h4>DECOR</h4>
                <div className="arrow-down"></div>
              </div>
              <div className="dropdownMenu" id="decorDrop">
                {this.props.categories.filter((category) => {
                    return category.meta_category_id === 3
                  }).map(category => (
                    <Link key={category.id} to={`/${category.name}`}><div className="dropDownItem">{ category.name }</div></Link>
                  ))
                  }
              </div>
            </div>
            <div className="navCategory" id="fabricAndWallpaperNav" onClick={this.toggleNavDrop}>
              <div className="navLink">
                <h4>TEXTILES</h4>
                <div className="arrow-down"></div>
              </div>
              <div className="dropdownMenu" id="fabricAndWallpaperDrop">
                {this.props.categories.filter((category) => {
                    return category.meta_category_id === 4
                  }).map(category => (
                    <Link key={category.id} to={`/${category.name}`}><div className="dropDownItem">{ category.name }</div></Link>
                  ))
                  }
              </div>
            </div>
            <div className="navCategory" id="gardenAndOutdoorNav" onClick={this.toggleNavDrop}>
              <div className="navLink">
                <h4>GARDEN & OUTDOOR</h4>
                <div className="arrow-down"></div>
              </div>
              <div className="dropdownMenu" id="gardenAndOutdoorDrop">
                {this.props.categories.filter((category) => {
                    return category.meta_category_id === 5
                  }).map(category => (
                    <Link key={category.id} to={`/${category.name}`}><div className="dropDownItem">{ category.name }</div></Link>
                  ))
                  }
              </div>
            </div>
            <div className="navCategory" id="giftsNav" onClick={this.toggleNavDrop}>
              <div className="navLink">
                <h4>GIFTS</h4>
                <div className="arrow-down"></div>
              </div>
              <div className="dropdownMenu" id="giftsDrop">
                {this.props.categories.filter((category) => {
                    return category.meta_category_id === 6
                  }).map(category => (
                    <Link key={category.id} to={`/${category.name}`}><div className="dropDownItem">{ category.name }</div></Link>
                  ))
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = ({ categories, user , cart}) => ({ categories, user, cart });

const mapDispatch = (dispatch) => ({
  signout: () => {
    const getQuickCart = function(){
      return document.querySelector('div.quickCart');
    };

    const quickCart = getQuickCart();

    quickCart.style.right = '40px';

    dispatch(logout())
  }
})

export default connect(mapProps, mapDispatch)(Navigbar);