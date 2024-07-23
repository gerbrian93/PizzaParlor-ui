import React, { useState, useRef, useEffect } from 'react';
import './guestdropdownbox.css'; 
import LoginModal from '../pages/modal/loginmodal.jsx';


const GuestDropdownBox = () => {

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const dropdownRef = useRef();

  const openLoginModal = () => {
    setLoginModalOpen(true);
  
  }

  const closeLoginModal = () => setLoginModalOpen(false);



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Clicked outside the dropdown, close it
        closeLoginModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <div className="dropdown-box">
      <div className="sign-in-button" onClick={openLoginModal}>
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
         <p>Sign In</p>
      </div>
      <div>
         <p>Create Account</p>
      </div>
      
      
    </div>
  );
};

export default GuestDropdownBox;