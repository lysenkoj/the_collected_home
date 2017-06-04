import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


export default class MainPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount(){
    const body = document.querySelector('body');
    body.style.paddingBottom = '6em';
  }

  render() {
    return (
      <div>
        <Navbar/>
          { this.props.children }
        <Footer/>
      </div>
    )
  }
}