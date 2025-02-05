import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'; 
import Preloader from './Components/Preloader.jsx';

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setFadeIn(true); 
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handlePreloaderComplete();
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <Router> 
      {isLoading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <App className={fadeIn ? 'fadeIn' : ''} />
      )}
    </Router>
  );
}

createRoot(document.getElementById('root')).render(<Index />);
