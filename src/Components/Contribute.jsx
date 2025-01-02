import { useState } from 'react';

export default function Contribute() {
  const [isChecked, setIsChecked] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleUploadClick = () => {
    if (isChecked) {
      setIsLinkClicked(true);
    }
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
            <p><strong>Step 2:</strong> Ensure the file name clearly states the subject and topic (e.g., <em>SubjectCode_Module.pdf</em>).</p>
            <p><strong>Step 3:</strong> Confirm your agreement to the terms below.</p>
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

            <a
              href="https://drive.google.com/drive/folders/1FweRvL-2L0o9ts6j-IZ1MTlYEn59_lGF?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="contribute-uploadLink"
              onClick={handleUploadClick}
              style={{ pointerEvents: isChecked ? 'auto' : 'none', opacity: isChecked ? 1 : 0.5 }}
            >
              Click Here to Upload
            </a>
          </div>

          {isLinkClicked && isChecked && (
            <div className="contribute-thankYou">
              <p>Thank you for your contribution! Your support helps students achieve their goals.</p>
              <span className="contribute-tick"><i className="fas fa-check-circle"></i></span>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
