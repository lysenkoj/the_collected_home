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

    // this.renderLoginSignup = this.renderLoginSignup.bind(this);
    // this.renderLogout = this.renderLogout.bind(this);
  }


  render(){
    return (
      <Navbar className="navContainer" inverse collapseOnSelect style={this.props.user && this.props.user.isAdmin ? {backgroundColor: "maroon"}:  {backgroundColor: "white"}}>
        <div className="topNav">
          <Search />
          <Link to="/" className="mainLogo"> <div>CLARICE KING</div></Link> {/*logo goes here*/}
          <Nav pullRight className="navLogIn">
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
          </Nav>
        </div>
        <div className="bottomNav">
          <Navbar.Collapse>
            <Nav title="Departments">
              <NavDropdown title="Furniture" id="furniture-nav">
                {this.props.categories.filter((category) => {
                  return category.meta_category_id === 1
                }).map(category => (
                  <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                ))
                }
              </NavDropdown>
              <NavDropdown title="Lighting" id="lighting-nav">
                {this.props.categories.filter((category) => {
                  return category.meta_category_id === 2
                }).map(category => (
                  <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                ))
                }
              </NavDropdown>
              <NavDropdown title="Decor" id="decor-nav">
                {this.props.categories.filter((category) => {
                  return category.meta_category_id === 3
                }).map(category => (
                  <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                ))
                }
              </NavDropdown>
              <NavDropdown title="Bedding" id="bedding-nav">
                {this.props.categories.filter((category) => {
                  return category.meta_category_id === 4
                }).map(category => (
                  <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                ))
                }
              </NavDropdown>
              <NavDropdown title="Fabric and Wallpaper" id="fabric-and-wallpaper-nav">
                {this.props.categories.filter((category) => {
                  return category.meta_category_id === 5
                }).map(category => (
                  <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                ))
                }
              </NavDropdown>
              <NavDropdown title="Garden and Outdoor" id="garden-and-outdoor-nav">
                {this.props.categories.filter((category) => {
                  return category.meta_category_id === 6
                }).map(category => (
                  <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                ))
                }
              </NavDropdown>
              <NavDropdown title="Gifts" id="gifts-nav">
                {this.props.categories.filter((category) => {
                  return category.meta_category_id === 7
                }).map(category => (
                  <LinkContainer key={category.id} to={`/${category.name}`}><MenuItem>{ category.name }</MenuItem></LinkContainer>
                ))
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
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