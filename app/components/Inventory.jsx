import React, { Component } from 'react';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */

class Inventory extends Component {
  constructor(props){
    super(props);
    this.state = {
      date : null
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
            <div className='inventoryLabels'></div>
            <div className='inventoryRow'>
              {/* link to product info component */}
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

const mapProps = ({user}) => ({user});

// const mapDispatch = (dispatch) => ({
//   signout: () => {
//     const getQuickCart = function(){
//       return document.querySelector('div.quickCart');
//     };

//     const quickCart = getQuickCart();

//     quickCart.style.right = '40px';

//     dispatch(logout())
//   }
// })

export default connect(mapProps, null)(Inventory);
