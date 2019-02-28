import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router";
import UserAuth from './UserAuth/UserAuth';


class App extends Component {
  render() {
    return (
        <div className="App">
          <Route exact path="/" component={UserAuth}/>
        </div>
    );
  }
}

export default App;
