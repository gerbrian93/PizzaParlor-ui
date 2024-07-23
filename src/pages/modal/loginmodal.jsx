import React from 'react';
import Modal from 'react-modal';

const modalStyles = {
  content: {
    height: '500px',
    width: '700px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(170, 74, 67, 0.9)', // Slightly transparent background
    padding: '20px',
    alignItems: 'center',
    border: '2px solid #000000',
    borderRadius: '8px',
    
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background overlay with slight transparency
  },
};

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login Modal"
      style={modalStyles}
    >
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default LoginModal;
