import { useEffect } from 'react';

export function Header() {
  useEffect(() => {
    const toggleButton = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    const toggleMenu = () => {
      if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'flex';
      } else {
        dropdownMenu.style.display = 'none';
      }
    };

    toggleButton.addEventListener('click', toggleMenu);

    // Clean up the event listener when the component unmounts
    return () => {
      toggleButton.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <header className="header">
      <button id="menu-toggle" className="menu-toggle">☰</button>
      <nav className="navbar" id="dropdown-menu">  {/* Change class to "navbar" */}
        <a className="link" href="/">HOME</a>
        <a className="link" href="/about">ABOUT</a>
        <a className="link" href="/feed">FEED</a>
        <a className="link" href="/contact">CONTACT</a>
      </nav>
    </header>
  );
}
