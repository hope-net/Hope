import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  // Handler for internal navigation
  const navigateTo = (path) => {
    navigate(path);
  };

  // Handler for scrolling to "Scheme and More" section after navigating to the home page
  const navigateAndScrollToSchemeMore = () => {
    navigate("/"); // Navigate to Home page
    setTimeout(() => {
      // Scroll to the "scheme-more" section after the navigation
      const schemeMoreSection = document.getElementById("scheme-more");
      if (schemeMoreSection) {
        schemeMoreSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback, check if the hash is already set and scroll
        if (window.location.hash === "#scheme-more") {
          window.location.hash = ""; // Remove the hash and then set it again to trigger scroll
          window.location.hash = "#scheme-more";
        }
      }
    }, 100); // A small delay to ensure the navigation completes before scrolling
  };

  // Handler for external links (CodeXpert)
  const openExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer>
      <div className="footerContent">
        <img src="/HopeFooter.jpg" alt="Hope Footer" />
        <ul>
          <li onClick={() => navigateTo("/")}>Home</li> {/* Navigate to Home page */}
          <li onClick={() => navigateTo("/about")}>About Us</li> {/* Navigate to About Us page */}
          <li onClick={() => navigateTo("/contact")}>Contact Us</li> {/* Navigate to Contact Us page */}
          <li onClick={navigateAndScrollToSchemeMore}>Schemes & Notes</li> {/* Navigate to Home and scroll to scheme-more */}
          <li onClick={() => openExternalLink("https://codexpert.com")}>CodeXpert</li> {/* External link */}
          <li onClick={() => navigateTo("/contribute")}>Contribute To Hope</li> {/* Navigate to Contribute page */}
        </ul>
      </div>
      <hr />
      <div className="social-copyright">
        <div className="socials">
          <i className="fa-brands fa-whatsapp" onClick={() => openExternalLink("https://wa.me/your-number")} />
          <i className="fa-brands fa-facebook" onClick={() => openExternalLink("https://facebook.com/your-profile")} />
          <i className="fa-brands fa-instagram" onClick={() => openExternalLink("https://instagram.com/your-profile")} />
          <i className="fa-regular fa-envelope" onClick={() => openExternalLink("mailto:your-email@example.com")} />
          <i className="fa-brands fa-linkedin" onClick={() => openExternalLink("https://linkedin.com/in/your-profile")} />
          <i className="fa-brands fa-youtube" onClick={() => openExternalLink("https://youtube.com/your-channel")} />
        </div>
        <p>&copy; All rights reserved Hope@2025</p>
      </div>
    </footer>
  );
}
