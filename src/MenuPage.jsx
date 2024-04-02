import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function MenuPage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Delay the visibility to create a fade-in effect
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const goBack = () => {
    navigate(-1);
   };

  return (
    <div className={`menu-page ${isVisible ? 'fade-in' : ''}`}>
      <button className="close-button" onClick={goBack}>×</button>
      <nav className="mobile-nav">
        <ul className="mobile-nav-list">
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/feed">FEED</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
      </nav>
    </div>
  );
}
