import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import App from './App.jsx';
import Preloader from './Preloader.jsx';

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoading(false)
      setFadeIn(true)
  }
  return (
    <>
      {isLoading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <App className={fadeIn ? "fadeIn" : ""}/>
      )}
    </>
  );
}

createRoot(document.getElementById('root')).render(<Index />);
