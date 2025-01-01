import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  // Handler for internal navigation
  const navigateTo = (path) => {
    navigate(path);
  };

  // Handler for external link (CodeXpert)
  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav>
      <div>
        <img src="/Hope.jpg" alt="Hope Logo" />
      </div>
      <ul>
        <li onClick={() => navigateTo("/")}>Home</li> {/* Navigate to Home page */}
        <li onClick={() => navigateTo("/about")}>About Us</li> {/* Navigate to AboutUs page */}
        <li onClick={() => navigateTo("/contact")}>Contact Us</li> {/* Navigate to ContactUs page */}
        <li onClick={() => openExternalLink("https://codexpert.com")}>CodeXpert</li> {/* External link */}
        <li onClick={() => navigateTo("/contribute")}>Contribute To Hope</li> {/* Navigate to Contribute page */}
      </ul>
    </nav>
  );
}
