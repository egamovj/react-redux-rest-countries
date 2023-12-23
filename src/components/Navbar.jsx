import DarkMode from './dep/DarkMode';
import '../styles/navbar.css';

function Navbar() {
  return (
    <div className="nav-bar-container">
      <h3 className="font">Where in the world?</h3>
      <DarkMode />
    </div>
  );
}

export default Navbar;