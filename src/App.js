import React, { Component } from 'react';
import './App.css';
import HeaderSocial from './components/HeaderSocial';
import HeaderMenu from './components/HeaderMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSocial/>
        {/* <HeaderMenu/> */}
      </div>
    );
  }
}

export default App;
