import React, { useState } from 'react';
import './navbar.css';
import PizzaImage from '../assets/pizza1.jpeg';
import UserPanel from '../header/userpanel.jsx'
import { NavLink } from 'react-router-dom';
import GuestDropdownBox from './guestdropdownbox.jsx';


const Navbar = () => {

  const [ isDropdownOpen, setDropdownOpen ] = useState(false);

  const toggleDropdown = () => {
      if (isDropdownOpen) {
        setDropdownOpen(false);
      } else {
        setDropdownOpen(true);
      }
  }

  return (
    <nav className="navbar">
      <img src={PizzaImage} alt="A tasty pizza" className="pizza-logo"/>
      <NavLink to="/">
      <p className="title">Pizza Parlor</p>
      </NavLink>
      <ul className="items">
        <li>
          <NavLink to="/specials" ><p>SPECIALS</p></NavLink>
        </li>
        <li>
          <NavLink to="/menu" ><p>MENU</p></NavLink>
        </li>
        <li>
          <NavLink to="/rewards" ><p>REWARDS</p></NavLink>
        </li>
      </ul>
      

      <UserPanel className="user-panel" onClick={toggleDropdown}/>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <GuestDropdownBox/>
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;