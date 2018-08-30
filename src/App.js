
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from './utils/Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch key="app-switch">
        {Routes.map((route, key) =>
          // console.log('route', route),
          <Route {...route} key={key}/>
        )}
      </Switch>
    );
  }
}
export default App;