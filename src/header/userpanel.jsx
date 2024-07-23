import React from 'react';
import './userpanel.css';
import GuestLoginImg from '../assets/guestlogin.jpg';

const UserPanel = ({onClick}) => {


    return (
        <div className="user-panel-container">
            <p className="login-msg">Currently logged in as Guest</p>
            <img src={GuestLoginImg} className="portrait" alt='unavailable'></img>
            <div className="menu-button" onClick={onClick}>
                <p>&#9776;</p>
            </div>
        </div>
    );
}

export default UserPanel;