import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Feed() {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => navigate('/'), 500); // Match the duration of the slideDown animation
  };

  return (
    <div>
      <h1 className="button feed-button">
        <Link to="/" onClick={handleExit}>DIMA</Link>
      </h1>
    <div className={`page feed-page ${isExiting ? 'feed-page-exit' : 'feed-page-enter'}`}>
      <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
      <iframe
        src="//lightwidget.com/widgets/b6d4455b732e5762a43a69588bc90583.html"
        className="lightwidget-widget"
        style={{
          width: '100%',
          height: '100%',
          border: 0,
          overflow: 'hidden'
        }}
      ></iframe>
    </div>
    </div>
  );
}
