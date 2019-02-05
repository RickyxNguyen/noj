import React, { Component } from 'react';

import Header from './components/Header/header';
import Dropdown from './components/Dropdown/dropdown.js';
import Keyboard from './components/Keyboard/keyboard.js';
import SoundControl from './components/SoundControls/soundcontrols';





import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Dropdown/>
       <Header/>
       <Keyboard/>
       <SoundControl/>

     </React.Fragment>
     
    );
  }
}

export default App;
