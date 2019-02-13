import React, { Component } from 'react';

import Header from './components/Header/header';
import Dropdown from './components/Dropdown/dropdown.js';
import Noj from './components/Keyboards/noj';
import AtoZ from './components/Keyboards/atoz';
import Music from './components/Keyboards/music';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login'
import Logout from './components/Login/Logout'
import Register from './components/Login/Register'




export default class App extends Component {
  
  render() {  
    return (
      <React.Fragment>
       <Dropdown/>
       <Header/>
       <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Noj} />
          <Route exact path="/atoz" component={AtoZ} />
          <Route exact path="/music" component={Music} />
      </Switch>
      </BrowserRouter>
     </React.Fragment>    
    );
  }
}
