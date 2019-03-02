import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router";
import UserAuth from './UserAuth/UserAuth';
import Home from './Home/Home';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Route exact path="/" component={UserAuth}/>
          <Route exact path="/home" component={Home}/>
        </div>
    );
  }
}

export default App;
