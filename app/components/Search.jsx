import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import { fetchAndGoToQueriedProducts } from '../reducers/selectedProducts';
import { connect } from 'react-redux';


/* -----------------    DUMB COMPONENT     ------------------ */

const DumbSearch = ({ onSearch, captureInput }) => (

  <Navbar.Form>
    <form onSubmit={ onSearch }>
      <FormGroup>
        <InputGroup id="searchBar">
          <FormControl className="searchContainer" type="text" placeholder="Winner!" onChange={ captureInput }/>
        </InputGroup>
      </FormGroup>
      <Button className="searchBtn searchContainer" type="submit">
        <img id="searchImg" src="/images/search-icon-md.png" />
      </Button>
    </form>
  </Navbar.Form>  

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

  render() {
    return (
      <DumbSearch
        onSearch={ this.onSearch }
        captureInput={ this.captureInput }
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
