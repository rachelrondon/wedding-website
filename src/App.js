import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './landingpage';
import NavBar from './navbar';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
