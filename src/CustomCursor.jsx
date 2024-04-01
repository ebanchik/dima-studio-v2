import { useEffect } from 'react';
 // Adjust the path to your CSS file

export const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.display = 'block';
    };

    window.addEventListener('mousemove', moveCursor);

    const addHoverEffect = () => {
      cursor.classList.add('hovered');
    };

    const removeHoverEffect = () => {
      cursor.classList.remove('hovered');
    };

    document.querySelectorAll('a, button, .inquire').forEach((elem) => {
      elem.addEventListener('mouseenter', addHoverEffect);
      elem.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button, .inquire').forEach((elem) => {
        elem.removeEventListener('mouseenter', addHoverEffect);
        elem.removeEventListener('mouseleave', removeHoverEffect);
      });
    };
  }, []);

  return <div id="custom-cursor"></div>;
};

export default CustomCursor;
