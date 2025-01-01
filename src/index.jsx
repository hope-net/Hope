import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Router import here
import App from './App.jsx'; // Main app component
import Preloader from './Components/Preloader.jsx';

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoading(false); // Hide preloader
    setFadeIn(true); // Trigger fade-in effect
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handlePreloaderComplete();
    }, 2000); // Adjust preloader duration as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <Router> {/* Wrap everything in Router for routing to work */}
      {isLoading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <App className={fadeIn ? 'fadeIn' : ''} />
      )}
    </Router>
  );
}

createRoot(document.getElementById('root')).render(<Index />);
