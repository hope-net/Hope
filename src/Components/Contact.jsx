import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    emailjs
      .sendForm(
        'hopecontactsupport', 
        'template_4xdcu8w', 
        e.target, 
        'lXi-GVTZjQaaEke1M' 
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response); 
          setIsSubmitted(true); 
          e.target.reset();
        },
        (error) => {
          alert("Failed to submit. Please contact hope2025contact@gmail.com") 
        }
      );
  };

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions or suggestions, feel free to reach out to us. We are here to help you!</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="query-type">Query Type:</label>
          <select id="query-type" name="query-type">
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>

          <div className="captcha">
            <input type="checkbox" required />
            <p>Confirm the information provided to help us assist you better.</p>
          </div>
<div className='socials-container'>
          <div className="socials">
            <i
              className="fa-brands fa-instagram nav-icon"
              onClick={() => openLink('https://www.instagram.com/hope_ktu')}
            ></i>
            <i
              className="fa-regular fa-envelope nav-icon"
              onClick={() => openLink('https://mail.google.com/mail/?view=cm&fs=1&to=hope2025contact@gmail.com')}
            ></i>
            <i
              className="fa-brands fa-linkedin nav-icon"
              onClick={() => openLink('"https://linkedin.com/company/hopektu"')}
            ></i>
            <i
              className="fa-brands fa-youtube nav-icon"
              onClick={() => openLink('https://www.youtube.com/channel/UCnTT95XELoR38iN8Ax3klzg')}
            ></i>
          </div>
          </div>

          <input type="submit" value="Send Message" />
        </form>

        {isSubmitted && (
          <div id="confirmation" style={{ color: 'green', marginTop: '20px' }}>
            Thank you for reaching out! We will get back to you shortly.
          </div>
        )}
      </div>

      <div className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <details>
          <summary>How can I contact support?</summary>
          <p>You can reach out via the form or email us at hope2025.net@gmail.com.</p>
        </details>
        <details>
          <summary>What are your operating hours?</summary>
          <p>We are available Monday to Friday, 9 AM to 5 PM.</p>
        </details>
      </div>
    </section>
  );
}
