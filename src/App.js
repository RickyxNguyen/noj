import React, { Component } from 'react';

import Header from './components/Header/header';
import Dropdown from './components/Dropdown/dropdown.js';
import Noj from './components/Keyboards/noj';
import AtoZ from './components/Keyboards/atoz';
// import SoundControl from './components/SoundControls/soundcontrols.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




import './App.css';


class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Dropdown/>
       <Header/>
       {/* <Keyboard/> */}
       <Router>
       <Switch>
          <Route exact path="/" component={Noj} />
          <Route exact path="/atoz" component={AtoZ} />
      </Switch>
      </Router>
     </React.Fragment>

     
     
    );
  }
}

export default App;
