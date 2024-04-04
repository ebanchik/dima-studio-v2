import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate(); // Corrected: useNavigate instead of navigate
  
  const enterMenu = () => {
    navigate('/menu');
  };

  return (
    <header>
      <button id="menu-toggle" className="menu-toggle" onClick={enterMenu}>
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
