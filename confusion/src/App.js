import React from 'react';
import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from "./Components/MenuComponents"
import './App.css';
import {DISHES} from './shared/dishes';


function App() {
  const state = {
    dishes: DISHES
  };
  return (
    <div>
      <Navbar dark color='primary'>
        <div className="container">
          <NavbarBrand href="/">Arms</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={state.dishes} />
    </div>
  );
}

export default App;
