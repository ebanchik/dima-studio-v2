import { useEffect } from 'react';


export function Banner() {
  useEffect(() => {
    const frames = document.querySelectorAll('.frame-container');
    const cursor = document.getElementById('custom-cursor');


    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      frames.forEach((frame) => {
        const frameRect = frame.getBoundingClientRect();
        const frameX = frameRect.left + frameRect.width / 2;
        const frameY = frameRect.top + frameRect.height / 2;

        const deltaX = mouseX - frameX;
        const deltaY = mouseY - frameY;
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        const maxDistance = 300; // Maximum distance for the effect
        const effectStrength = 20; // Adjust the strength of the effect

        if (distance < maxDistance) {
          const angle = Math.atan2(deltaY, deltaX);
          const offsetX = Math.cos(angle) * (maxDistance - distance) / effectStrength;
          const offsetY = Math.sin(angle) * (maxDistance - distance) / effectStrength;

          frame.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        } else {
          frame.style.transform = 'translate(0, 0)';
        }
      });
    };
    

    document.addEventListener('mousemove', handleMouseMove);

    if (cursor) {
      cursor.classList.remove('hovered');
    }


    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container-fluid text-center fade-in">
      
      <div className="col">
        <h1 className="name">
        <a href="/about">DIMA</a>
        </h1>
      </div>

  <div className="row">
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame1.png" alt="Image 1" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame2.png" alt="Image 2" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame3.png" alt="Image 2" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame4.png" alt="Image 2" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame5.png" alt="Image 2" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame6.png" alt="Image 2" className="frame" />
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame7.png" alt="Image 1" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame8.png" alt="Image 2" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/transparent.png" alt="empty" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/transparent.png" alt="empty" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame11.png" alt="Image 2" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame12.png" alt="Image 2" className="frame" />
      </div>
    </div>
  </div>


  <div className="row">
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame13.png" alt="Image 1" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame14.png" alt="Image 2" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame15.png" alt="Image 2" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame16.png" alt="Image 2" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame17.png" alt="Image 2" className="frame" />
      </div>
    </div>
    <div className="col-xl-2 col-l-2 col-md-3 col-sm-4 col-6 item">
      <div className="frame-container">
        <img src="assets/frame18.png" alt="Image 2" className="frame" />
      </div>
    </div>
  </div>
</div>
  );
}








