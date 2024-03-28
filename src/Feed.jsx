import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from './Header'

export function Feed() {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => navigate('/'), 500); // Match the duration of the slideDown animation
  };

  return (
    <div className={`page feed-page ${isExiting ? 'feed-page-exit' : 'feed-page-enter'}`}>
      <h1 className="feed-title">
        <span>F</span><span>E</span><span>E</span><span>D</span>
      </h1>
      <Header />
      <h1 className="button feed-button">
        <Link to="/" onClick={handleExit}>DIMA</Link>
      </h1>
      <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      <iframe
        src="//lightwidget.com/widgets/61a16a2a55515d9da68a53f812456f2d.html"
        className="lightwidget-widget"
        style={{
          width: '75%',
          height: '100%',
          border: 0,
          overflow: 'hidden'
        }}
      ></iframe>
    </div>
  );
}
