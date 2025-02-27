import React, { Component } from 'react';
import NavBar from './NavBar';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import '../search_page.css';
import carPic from '../loading-car.svg';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcid: null,
      destid: null,
      car: null,
      display: false,
    };
  }

  formSubmit = (srcid, destid, yrid) => {
    this.setState({
      srcid: srcid,
      destid: destid,
      car: yrid,
      display: true,
    });
  };

  render() {
    const { srcid, destid, car } = this.state;

    return (
      <div id="wrapper">
        <NavBar />
        <div className="spacer" />
        <SearchForm func={this.formSubmit} />
        {this.state.display ? (
          <SearchResults src={srcid} dest={destid} vehicle={car} />
        ) : (
          <div
            style={{ textAlign: 'center', marginTop: '60px', height: '60vh' }}
          >
            <img src={carPic} alt="waiting-by-car" />
          </div>
        )}
      </div>
    );
  }
}

export default SearchPage;
