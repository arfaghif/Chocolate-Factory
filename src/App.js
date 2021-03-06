import React, { Component } from 'react';
import ChocoAvailable from './choco-available';
import Login from './login';
import Register from './register';
import ChocoList from './choco-list';
import Saldo from './saldo';
import DaftarBahan from './daftar-bahan';
import BuyPage from './buy-page';
import ChocoGrid from './choco-grid'
import Navbar from './navbar'
import { BrowserRouter as Router, Route, Switch,Link, Redirect } from 'react-router-dom';
import ApproveTable from "./approvetable"
import MainPage from "./mainpage";
import Numbers from "./numbers";

import Client from "./client"

// class App extends Component {
//   render(){
//     const valid_path = ["/login","/signup","/receipt/list","/choco/grid","/home","/approvetable"];

//     return (
     

//       <Router>
//             <Switch>
//                 <Route path="/login" exact component={Login} />
//                 <Route path="/signup" exact component={Register} />
//                 <Route
//                     path="/receipt/list"
//                     exact
//                     component={ChocoList}
//                 />
//                 <Route
//                     path="/choco/grid"
//                     exact
//                     component={ChocoGrid}
//                 />
//                 <Route
//                     path="/approvetable"
//                     exact
//                     component={ApproveTable}
//                 /><Route
//                     path="/Home"
//                     exact
//                     component={MainPage}
//                 />
//             </Switch>
//         </Router>
      
//     )
//   }
// }
function notFound(){
  return(
    
    <div>
                  Willi Wangky  Not Found 404
                  </div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul> */}
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                    return (
                      this.state.isUserAuthenticated ?
                      <Redirect to="/Home" /> :
                      <Redirect to="/test1" /> 
                    )
                }}
              />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Register} />
                <Route
                    path="/receipts/list"
                    exact
                    component={ChocoList}
                />
                <Route
                    path="/choco/grid"
                    exact
                    component={ChocoGrid}
                />
                <Route
                    path="/approvetable"
                    exact
                    component={ApproveTable}
                />
                <Route
                    path="/Home"
                    exact
                    component={MainPage}
                />
                <Route
                    path="/buy"
                    exact
                    component={MainPage}
                />
                <Route
                    path="/receipts"
                    exact
                    component={DaftarBahan}
                />
                <Route
                    path="/num"
                    exact
                    component={Client}
                />
                <Route
                    path="/beli"
                    exact
                    component={DaftarBahan}
                />
                <Route
                component={notFound}
                />

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;