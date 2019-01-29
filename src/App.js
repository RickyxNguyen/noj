import React, { Component } from 'react';

import Header from './components/Header/header';
import Dropdown from './components/Dropdown/dropdown';
import Keyboard from './components/Keyboard/keyboard';



import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Dropdown/>
       <Header/>
       <Keyboard/>

     </React.Fragment>
     
    );
  }
}

export default App;
