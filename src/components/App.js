import React, { Component } from 'react';
import {    BrowserRouter as Router  } from 'react-router-dom';
 import './../css/App.css';
 import Nav from './Nav' ;  
 import Footer from './Footer';
 import DieuHuongURL from './../router/DieuHuongURL';
  
class App extends Component {
  render() {
    return (
      //no dong dong theo single webpage application
      <Router>
      <div>
        {/* phan nay giong nhau */}
          <Nav/>       
          {/* phan nay khac nhau */}
              <DieuHuongURL/>
              {/* phan nay giong nhau */}
          <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
