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
        <ul>
          <li onClick={() => navigateTo("/")}>Home</li> {/* Navigate to Home page */}
          <li onClick={() => navigateTo("/about")}>About Us</li> {/* Navigate to About Us page */}
          <li onClick={() => navigateTo("/contact")}>Contact Us</li> {/* Navigate to Contact Us page */}
          <li onClick={navigateAndScrollToSchemeMore}>Schemes & Notes</li> {/* Navigate to Home and scroll to scheme-more */}
          <li onClick={() => openExternalLink("https://codexpertweb.netlify.app")}>CodeXpert</li> {/* External link */}
          <li onClick={() => navigateTo("/contribute")}>Contribute To Hope</li> {/* Navigate to Contribute page */}
        </ul>
      </div>
      <hr />
      <div className="img-social">
        <div className="footer-img">
          <img src="/HopeFooter.jpg" alt="Hope Footer" />
        </div>
      <div className="social-copyright">
        <div className="socials">
          <i className="fa-brands fa-instagram" onClick={() => openExternalLink("https://www.instagram.com/hope_ktu")} />
          <i className="fa-regular fa-envelope" onClick={() => openExternalLink("https://mail.google.com/mail/?view=cm&fs=1&to=hope2025contact@gmail.com")} />
          <i className="fa-brands fa-linkedin" onClick={() => openExternalLink("https://linkedin.com/company/hopektu")} />
          <i className="fa-brands fa-youtube" onClick={() => openExternalLink("https://www.youtube.com/channel/UCnTT95XELoR38iN8Ax3klzg")} />
        </div>
        <p>&copy; All rights reserved Hope@2025</p>
      </div>
      </div>
    </footer>
  );
}
