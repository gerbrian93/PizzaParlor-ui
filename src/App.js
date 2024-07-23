import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './header/navbar';
import LandingPage from './pages/LandingPage';
import SpecialsPage from './pages/SpecialsPage';
import MenuPage from './pages/MenuPage';
import RewardsPage from './pages/RewardsPage';
// import LoginModal from './pages/modal/loginmodal';

function App() {
  // const [isDropdownOpen, setDropdownOpen] = useState(true);
  // const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  // const dropdownRef = useRef(null);

  // const toggleDropdown = () => {
  //   setDropdownOpen((prevState) => !prevState);
  // };

  // const openLoginModal = () => {
  //   setLoginModalOpen(true);
  //   setDropdownOpen(false); // Close dropdown when opening the modal
  // };

  // const closeLoginModal = () => {
  //   setLoginModalOpen(false);
  // };

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setDropdownOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   // return () => {
  //   //   document.removeEventListener('mousedown', handleClickOutside);
  //   // };
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="/specials" element={<SpecialsPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/rewards" element={<RewardsPage />} />
          </Routes>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
