import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './Data/Data.json';
import Header from './Components/Header/Header';
import Preview from './Components/Preview/Preview';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Speciality from './Components/Speciality/Speciality';
import Details from './Components/Details/Details';
import { createContext } from 'react';
import { useState } from 'react';
import Shipment from './Components/Shipment/Shipment';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const MyContext = createContext([]);
function App() {
 const [cart, setCart] = useState([]);
 const [loggedInUser, setLoggedInUser] = useState({email: 'shdhf'});
 const allData = [cart, setCart, loggedInUser, setLoggedInUser];
  return (
    <MyContext.Provider value={[...allData]} className="App">
      <h1>name:{loggedInUser.displayName}</h1>
      <Router>
        <Switch>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/food/:foodId">
            <Details></Details>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Preview></Preview>
            <Speciality></Speciality>
          </Route>
          </Switch>
      </Router>

    </MyContext.Provider>
  );
}

export default App;
