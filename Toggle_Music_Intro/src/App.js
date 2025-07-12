import React, { useState, useRef } from 'react';
import { FaSun, FaMoon, FaMusic, FaStop } from 'react-icons/fa';
import './styles/theme.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  const handleMusicToggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className={isDark ? 'app dark' : 'app light'}>
      {/* Theme Toggle */}
      <div className="theme-toggle" onClick={handleThemeToggle}>
        {isDark ? <FaSun /> : <FaMoon />}
      </div>

      {/* Music Toggle */}
      <div className="music-toggle" onClick={handleMusicToggle}>
        {isPlaying ? <FaStop /> : <FaMusic />}
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} loop>
        <source src="/audio/background.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <p>My name is Alif Hossain Talha</p>
      <p>Hello World</p>
    </div>
  );
}

export default App;
