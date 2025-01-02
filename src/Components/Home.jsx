import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Keeps track of the hovered item
  const schemeMoreRef = useRef(null);
  const { hash } = useLocation();
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setHoveredIndex(index); // Set the hovered index
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset when mouse leaves
  };

  useEffect(() => {
    if (hash === "#scheme-more") {
      schemeMoreRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  const handleExploreClick = () => {
    window.location.hash = "#scheme-more";
    setTimeout(() => {
      window.location.hash = ""; 
    }, 10);
  };


  const navigateTo = (path) => {
    navigate(path); // Internal navigation
  };

  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer'); // External link
  };

  return (
    <>
      <section className="home-intro">
        <h1>Everything, Always Here.</h1>
        <h4>Your one-stop platform for study materials for KTU students.</h4>
        <h5>Syllabus | Notes | Question Paper | TextBooks | Videos | GPA Calculator</h5>
        <button onClick={handleExploreClick}>Explore</button>
      </section>

      <section className="home-about">
        <h1>Why Use Hope ?</h1>
        <article>
          <p>
            Hope is your trusted partner in academic success, specifically tailored for KTU students.
            Our mission is to provide you with a centralized platform that offers high-quality, accessible study materials for various engineering branches.
            Whether it's well-organized notes, study videos, official syllabi, or previous year question papers, we’ve got you covered.
            All of these resources are available for free, helping you focus on learning and improving your skills.
            Hope is designed to simplify your academic journey by providing easy access to the tools you need to excel, making your studies more efficient and less stressful.
          </p>
          <img src="/WhyHope.jpg" alt="Why Hope" />
        </article>
      </section>

      <main className="scheme-more" id="scheme-more" ref={schemeMoreRef}>
        <h1>Scheme</h1>
        <div className="scheme">
          <div className="button-container">
            <img src="/2019.jpg" alt="2019 Scheme" />
            <button onClick={() => navigateTo("/scheme2019")}>
              <div>2019<b>Scheme</b></div>
            </button>
          </div>
          <div className="button-container">
            <img src="/2024.jpg" alt="2024 Scheme" />
            <button onClick={() => navigateTo("/scheme2024")}>
              <div>2024<b>Scheme</b></div>
            </button>
          </div>
        </div>

        <div className="more">
          {/* Hover effect for Calculator */}
          <div
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            className={`more-item ${hoveredIndex !== null && hoveredIndex !== 3 ? 'filtered' : ''}`}
            onClick={() => navigateTo("/calculator")}
          >
            <img src="/Calculator.jpg" alt="Calculator" />
            <p>Calculate Your CGPA/SGPA – Try Our Easy Calculator Now!</p>
          </div>

          {/* Hover effect for MNC */}
          <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            className={`more-item ${hoveredIndex !== null && hoveredIndex !== 0 ? 'filtered' : ''}`}
            onClick={() => navigateTo("/mnc")}
          >
            <img src="/MNC.jpg" alt="MNC" />
            <p>Explore MNCs & Placements Opportunities – Learn More Here!</p>
          </div>

          {/* Hover effect for YouTube link */}
          <div
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            className={`more-item ${hoveredIndex !== null && hoveredIndex !== 1 ? 'filtered' : ''}`}
            onClick={() => openExternalLink("https://youtube.com")}
          >
            <img src="/Youtube.jpg" alt="YouTube" />
            <p>Explore Hope’s YouTube Content – Boost Your Learning and Skills!</p>
          </div>

          {/* Hover effect for CodeXpert link */}
          <div
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            className={`more-item ${hoveredIndex !== null && hoveredIndex !== 2 ? 'filtered' : ''}`}
            onClick={() => openExternalLink("https://codexpert.com")}
          >
            <img src="/CodeXpert.jpg" alt="CodeXpert" />
            <p>Unlock Expert Programming Courses – Start Your Journey with CodeXpert Now!</p>
          </div>
        </div>
      </main>
    </>
  );
}
