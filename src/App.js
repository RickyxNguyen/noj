import React, { Component } from 'react';

import Header from './components/Header/header';
import Dropdown from './components/Dropdown/dropdown';


import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Dropdown/>
       <Header/>
    </React.Fragment>
    );
  }
}

export default App;
