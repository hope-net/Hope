import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const navigateAndScrollToSchemeMore = () => {
    navigate("/"); 
    setTimeout(() => {
      const schemeMoreSection = document.getElementById("scheme-more");
      if (schemeMoreSection) {
        schemeMoreSection.scrollIntoView({ behavior: "smooth" });
      } else {
        if (window.location.hash === "#scheme-more") {
          window.location.hash = ""; 
          window.location.hash = "#scheme-more";
        }
      }
    }, 100);
  };

  const openExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer>
      <div className="footerContent">
        <ul>
          <li onClick={() => navigateTo("/")}>Home</li> 
          <li onClick={() => navigateTo("/about")}>About Us</li> 
          <li onClick={() => navigateTo("/contact")}>Contact Us</li> 
          <li onClick={navigateAndScrollToSchemeMore}>Schemes & Notes</li> 
          <li onClick={() => openExternalLink("https://codexpertweb.netlify.app")}>CodeXpert</li> 
          <li onClick={() => navigateTo("/contribute")}>Contribute To Hope</li>
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
