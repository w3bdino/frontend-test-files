import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';

import SearchInput from './pages/SearchPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <BrowserRouter>
            <Switch>
              <Route path='/' component={SearchInput} />
            </Switch>
          </BrowserRouter>    
        </div>
      </div>
    );
  }
}

export default App;
