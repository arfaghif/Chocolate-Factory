import React, { Component } from 'react';
import ChocoAvailable from './choco-available';
import Login from './login';
import Register from './register';
import ChocoList from './choco-list';
import Saldo from './saldo';
import ChocoGrid from './choco-grid'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Register} />
                <Route
                    path="/receipt/list"
                    exact
                    component={ChocoList}
                />
                <Route
                    path="/choco/grid"
                    exact
                    component={ChocoGrid}
                />
            </Switch>
        </Router>
      
    )
  }
}


export default App;