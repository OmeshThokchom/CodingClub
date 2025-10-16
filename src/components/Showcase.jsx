
import React, { useRef, useEffect } from 'react';
import './Showcase.css';

const Showcase = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    console.log('Video played');
    // Add analytics tracking for play event
  };

  const handlePause = () => {
    console.log('Video paused');
    // Add analytics tracking for pause event
  };

  const handleEnded = () => {
    console.log('Video ended');
    // Add analytics tracking for ended event
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleEnded);
    }
    return () => {
      if (video) {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <section className="showcase" id="showcase">
      <div className="video-container">
        <video
          ref={videoRef}
          src="./coding.mp4"
          loop
          autoPlay
          muted
          playsInline
          loading="lazy"
        />
        <div className="overlay">
          <div className="overlay-content">
            <h2>Build the Future of Code</h2>
            <p>Join our community of developers and start creating amazing things.</p>
            <a href="#" className="cta-button">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
