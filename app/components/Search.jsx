import React, { Component } from 'react';
import { fetchAndGoToQueriedProducts } from '../reducers/selectedProducts';
import { connect } from 'react-redux';


/* -----------------    DUMB COMPONENT     ------------------ */

const DumbSearch = ({ onSearch, captureInput, toggleSearch }) => (

<div className="searchContainer">
  <img id="searchImg" src="/images/searchIcon.png" onClick={ toggleSearch } />
  <form className="searchBar" onSubmit={ onSearch }>
    <input id="searchInput" type="text" placeholder="Search" onChange={ captureInput }/>
    <button className ="searchBtn" type="submit">
      <div className="arrow-right"></div>
    </button>
  </form>
</div>
);

/* -----------------    STATEFUL REACT COMPONENT     ------------------ */


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.captureInput = this.captureInput.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  captureInput(evt)  {
    evt.preventDefault();
    const search = evt.target.value;
    this.setState({ search });
  }

  onSearch(evt) {
    evt.preventDefault();
    const query = this.state.search;
    if (query.length) {   // no need to query empty string
      this.props.submitQuery(query);
    }
  }

  toggleSearch(){
    const selectSearchBar = function(){
      return document.querySelector('form.searchBar')
    };
    const searchBarDiv = selectSearchBar();

    (searchBarDiv.style.display === 'flex') ?
    searchBarDiv.style.display = 'none' : searchBarDiv.style.display = 'flex';

  }

  render() {
    return (
      <DumbSearch
        onSearch={ this.onSearch }
        captureInput={ this.captureInput }
        toggleSearch={ this.toggleSearch }
      />
    );
  }
}


/* -----------------    CONTAINER     ------------------ */

const mapDispatchToProps = (dispatch) => {
  return {
    submitQuery: input => {
      dispatch(fetchAndGoToQueriedProducts(input));
    }
  };
};

export default connect(null, mapDispatchToProps)(Search);
