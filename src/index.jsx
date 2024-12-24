import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import App from './App.jsx';
import Preloader from './Preloader.jsx';

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAppVisible, setIsAppVisible] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setIsAppVisible(true);
  };

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
        <App/>
      )}
    </>
  );
}

createRoot(document.getElementById('root')).render(<Index />);
