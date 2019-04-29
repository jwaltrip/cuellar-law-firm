import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import the 4 main pages
// import HomePage from "./components/HomePage/HomePage";
import HomePage2 from "./components/HomePage/HomePage2";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import ContactUsPage from "./components/ContactUsPage/ContactUsPage";
// Page components
import HeaderSocial from './components/HeaderSocial/HeaderSocial';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
      
          <HeaderSocial leftText="Michaela D. Cuellar Attorney at Law"/>
          <HeaderMenu/>
          
          <Switch>
            <Route exact path="/" component={HomePage2} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/services" component={ServicesPage} />
            <Route exact path="/contact" component={ContactUsPage} />
            {/* TODO add page not found route */}
          </Switch>
          
          <Footer/>
          <HeaderSocial leftText="Copy Rights Design by Z & J"/>
        </div>
      </Router>
    );
  }
}

export default App;
