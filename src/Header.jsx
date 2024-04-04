import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

export function Header() {
  const navigate = useNavigate(); 
  const [menuOpen, setMenuOpen] = useState(false);
  
  const enterMenu = () => {
    setMenuOpen(true);
    setTimeout(() => {
      setMenuOpen(false);
      navigate('/menu');
    }, 500); // Adjust the delay (in milliseconds) as needed
  };


  return (
    <header>
      <button id="menu-toggle" className={`menu-toggle ${menuOpen ? 'menu-open' : ''}`} onClick={enterMenu}>
        <img src="assets/lampchain.png" alt="Menu Toggle" />
      </button>
      <nav className="header" id="dropdown-menu">
        <a className="link" href="/">HOME</a>
        <a className="link" href="/about">ABOUT</a>
        <a className="link" href="/feed">FEED</a>
        <a className="link" href="/contact">CONTACT</a>
      </nav>
    </header>
  );
}
