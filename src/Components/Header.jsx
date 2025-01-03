import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <nav>
      <div>
        <img src="/Hope.jpg" alt="Hope Logo" />
      </div>
      <ul>
        <li onClick={() => navigateTo("/")}>Home</li> 
        <li onClick={() => navigateTo("/about")}>About Us</li> 
        <li onClick={() => navigateTo("/contact")}>Contact Us</li> 
        <li onClick={() => openExternalLink("https://codexpertweb.netlify.app")}>CodeXpert</li>
        <li onClick={() => navigateTo("/contribute")}>Contribute To Hope</li>
      </ul>
    </nav>
  );
}
