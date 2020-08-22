import React from 'react';
import logo from './logo.svg';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from "./Components/MenuComponents"
import './App.css';

function App() {
  return (
    <div >
      <Navbar dark color='primary'>
        <div className="container">
          <NavbarBrand href="/">Arms</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;