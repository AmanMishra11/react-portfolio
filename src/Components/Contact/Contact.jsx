import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xpwpvpna", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Information</h3>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <EnvelopeIcon className="icon" />
                </div>
                <div className="info-content">
                  <h4 className="info-title">Email</h4>
                  <p className="info-text">amanmishralm10@gmail.com</p>
                </div>
              </div>
              
              {/* Other contact info items remain the same */}
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="form-textarea"
                ></textarea>
              </div>
              
              {status === "SUCCESS" ? (
                <p className="success-message">Thanks for your message! I'll get back to you soon.</p>
              ) : (
                <button
                  type="submit"
                  className="submit-button"
                  disabled={status === "SENDING"}
                >
                  {status === "SENDING" ? "Sending..." : "Send Message"}
                </button>
              )}
              
              {status === "ERROR" && (
                <p className="error-message">Oops! There was an error. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}