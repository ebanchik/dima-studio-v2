import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    let frameId;

    const moveCursor = (e) => {
      const cursor = document.getElementById('custom-cursor');
      if (!cursor) return;

      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.display = 'block';
      });
    };

    window.addEventListener('mousemove', moveCursor);

    const addHoverEffect = () => {
      const cursor = document.getElementById('custom-cursor');
      cursor?.classList.add('hovered');
    };

    const removeHoverEffect = () => {
      const cursor = document.getElementById('custom-cursor');
      cursor?.classList.remove('hovered');
    };

    document.querySelectorAll('a, button').forEach(elem => {
      elem.addEventListener('mouseenter', addHoverEffect);
      elem.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button').forEach(elem => {
        elem.removeEventListener('mouseenter', addHoverEffect);
        elem.removeEventListener('mouseleave', removeHoverEffect);
      });

      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [key]);

  // Trigger a re-render of the cursor component when navigating between pages
  useEffect(() => {
    const unlisten = window.addEventListener('popstate', () => {
      setKey(prevKey => prevKey + 1);
    });

    return () => {
      window.removeEventListener('popstate', unlisten);
    };
  }, []);

  return <div id="custom-cursor" style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999, display: 'none' }}></div>;
};

export default CustomCursor;
