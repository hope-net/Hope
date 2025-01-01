import { useState } from 'react'
import Header from "./Header"
import Footer from "./Footer"

export default function Contribute() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="contribute-header">
        <h1>Contribute to Hope</h1>
        <p>Help others by sharing your valuable notes and materials.</p>
      </div>
    <section className="contribute-container">
      <div className="contribute-section">
        <h2 className="contribute-title">How to Contribute</h2>

        <div className="contribute-instructions">
          <p><strong>Step 1:</strong> Click the button below to upload your notes and study materials to our Google Drive.</p>
          <p><strong>Step 2:</strong> Ensure the file name clearly states the subject and topic (e.g., <em>Maths_Algebra.pdf</em>).</p>
          <p><strong>Step 3:</strong> Confirm your agreement to the terms below.</p>
          <a
            href="https://drive.google.com/drive/folder"
            target="_blank"
            rel="noopener noreferrer"
            className="contribute-uploadLink"
          >
            Click Here to Upload
          </a>
        </div>

        <div className="contribute-agreement">
          <input
            type="checkbox"
            id="contribute-agreement"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="contribute-agreement">
            I confirm that the uploaded content is my own, and I permit its use on this platform for educational purposes.
          </label>
        </div>

        {isChecked && (
          <div className="contribute-thankYou">
            <p>Thank you for your contribution! Your support helps students achieve their goals.</p>
            {isChecked && <span className="contribute-tick"><i className="fas fa-check-circle"></i></span>}
          </div>
        )}
      </div>
    </section>
    </>
  );
}
