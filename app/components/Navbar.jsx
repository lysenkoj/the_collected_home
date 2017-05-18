import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button } from 'react-bootstrap';
import Search from './Search';
import { Link } from 'react-router';
import { logout } from '../reducers/auth';
import { LinkContainer } from 'react-router-bootstrap';


/* -----------------    COMPONENT     ------------------ */

class Navigbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavDrop = this.toggleNavDrop.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
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
    console.log("HEEEEEELLLLLLOOOOOOO!!!!!!")
  }

  render(){
    return (
      <Navbar className="navContainer" inverse collapseOnSelect style={this.props.user && this.props.user.isAdmin ? {backgroundColor: "maroon"}:  {backgroundColor: "white"}}>
        <div className="topNav">
          <Search />
          <Link to="/" className="mainLogo">
            <div>CLARICE KING</div>
            <div id="tagline">The Collected Home</div>
          </Link>
          <div className="userContainer">
            <div className="shoppingContainer">
              <img id="shoppingImg" src="images/shopping-cart.png"/>
              <h5>Login</h5>
            </div>
            <div id="welcomeBanner">
            {
                this.props.user ?
                  `Welcome back, ${this.props.user.firstName || this.props.user.email}!`
                :
                  'Guest'
              }
            </div>
          </div>
          {/*<Nav pullRight className="navLogIn">
            <span style={{color: "black"}}>
            {
                this.props.user ?
                  `Welcome back, ${this.props.user.firstName || this.props.user.email}!`
                :
                  'Guest'
              }

            </span>
            <LinkContainer to="/admin"><NavItem>{this.props.user && this.props.user.isAdmin && "Admin Panel"}</NavItem></LinkContainer>
            <LinkContainer to={`/orders/${this.props.user && this.props.user.id}`}><NavItem>{this.props.user && "Your Orders"}</NavItem></LinkContainer>
            <LinkContainer to="/cart"><NavItem>Cart ({this.props.cart && this.props.cart.length})</NavItem></LinkContainer>
            {this.props.user && this.props.user.email ? <NavItem onClick={this.props.signout}>Sign Out</NavItem> : <LinkContainer to="/login"><NavItem>Login</NavItem></LinkContainer>
            }
          </Nav>*/}
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
            <div className="navCategory" id="beddingNav" onClick={this.toggleNavDrop}>
              <div className="navLink">
                <h4>BEDDING</h4>
                <div className="arrow-down"></div>
              </div>
              <div className="dropdownMenu" id="beddingDrop">
                {this.props.categories.filter((category) => {
                    return category.meta_category_id === 4
                  }).map(category => (
                    <Link key={category.id} to={`/${category.name}`}><div className="dropDownItem">{ category.name }</div></Link>
                  ))
                  }
              </div>
            </div>
            <div className="navCategory" id="fabricAndWallpaperNav" onClick={this.toggleNavDrop}>
              <div className="navLink">
                <h4>FABRIC AND WALLPAPER</h4>
                <div className="arrow-down"></div>
              </div>
              <div className="dropdownMenu" id="fabricAndWallpaperDrop">
                {this.props.categories.filter((category) => {
                    return category.meta_category_id === 5
                  }).map(category => (
                    <Link key={category.id} to={`/${category.name}`}><div className="dropDownItem">{ category.name }</div></Link>
                  ))
                  }
              </div>
            </div>
            <div className="navCategory" id="gardenAndOutdoorNav" onClick={this.toggleNavDrop}>
              <div className="navLink">
                <h4>GARDEN AND OUTDOOR</h4>
                <div className="arrow-down"></div>
              </div>
              <div className="dropdownMenu" id="gardenAndOutdoorDrop">
                {this.props.categories.filter((category) => {
                    return category.meta_category_id === 6
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
                    return category.meta_category_id === 7
                  }).map(category => (
                    <Link key={category.id} to={`/${category.name}`}><div className="dropDownItem">{ category.name }</div></Link>
                  ))
                  }
              </div>
            </div>
          </div>
          {/*<Navbar.Collapse>
            <Nav title="Departments">
              <div className="topCategories">
                <NavDropdown title="FURNITURE" id="furniture-nav">
                  {this.props.categories.filter((category) => {
                    return category.meta_category_id === 1
                  }).map(category => (
                    <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                  ))
                  }
                </NavDropdown>
                <NavDropdown title="LIGHTING" id="lighting-nav">
                  {this.props.categories.filter((category) => {
                    return category.meta_category_id === 2
                  }).map(category => (
                    <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                  ))
                  }
                </NavDropdown>
                <NavDropdown title="DECOR" id="decor-nav">
                  {this.props.categories.filter((category) => {
                    return category.meta_category_id === 3
                  }).map(category => (
                    <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                  ))
                  }
                </NavDropdown>
                <NavDropdown title="BEDDING" id="bedding-nav">
                  {this.props.categories.filter((category) => {
                    return category.meta_category_id === 4
                  }).map(category => (
                    <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                  ))
                  }
                </NavDropdown>
              </div>
              <div className="bottomCategories">
                <NavDropdown title="FABRIC AND WALLPAPER" id="fabric-and-wallpaper-nav">
                  {this.props.categories.filter((category) => {
                    return category.meta_category_id === 5
                  }).map(category => (
                    <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                  ))
                  }
                </NavDropdown>
                <NavDropdown title="GARDEN AND OUTDOOR" id="garden-and-outdoor-nav">
                  {this.props.categories.filter((category) => {
                    return category.meta_category_id === 6
                  }).map(category => (
                    <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                  ))
                  }
                </NavDropdown>
                <NavDropdown title="GIFTS" id="gifts-nav">
                  {this.props.categories.filter((category) => {
                    return category.meta_category_id === 7
                  }).map(category => (
                    <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                  ))
                  }
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>*/}
        </div>
      </Navbar>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = ({ categories, user , cart}) => ({ categories, user, cart });

const mapDispatch = (dispatch) => ({
  signout: () => {
    dispatch(logout())
  }
})

export default connect(mapProps, mapDispatch)(Navigbar);