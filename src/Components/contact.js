import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Import icons from react-icons

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  // Styles
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#111',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
    },
    contactUs: {
      maxWidth: '500px',
      width: '90%',
      padding: '30px',
      backgroundColor: '#222',
      borderRadius: '10px',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
      marginBottom: '30px',
    },
    heading: {
      marginBottom: '20px',
      fontSize: '32px',
      fontWeight: '600',
      color: '#ffcc00',
    },
    formGroup: {
      marginBottom: '20px',
      position: 'relative',
    },
    input: {
      width: '100%',
      padding: '15px',
      backgroundColor: '#333',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.3s ease',
      marginBottom: '10px',
    },
    textarea: {
      width: '100%',
      padding: '15px',
      backgroundColor: '#333',
      border: 'none',
      borderRadius: '5px',
      color: '#fff',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.3s ease',
      marginBottom: '10px',
      minHeight: '120px',
      resize: 'none',
    },
    submitBtn: {
      padding: '15px 30px',
      backgroundColor: '#ffcc00',
      color: '#111',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      marginTop: '10px',
    },
    submitBtnHover: {
      backgroundColor: '#e6b800',
    },
    successMessage: {
      color: '#4caf50',
      fontWeight: 'bold',
      margin: '20px 0',
    },
    contactInfo: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      gap: '20px',
    },
    icon: {
      color: '#ffcc00',
      fontSize: '30px',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    iconHover: {
      color: '#e6b800',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.contactUs}>
        <h2 style={styles.heading}>Contact Us</h2>
        {submitted && <p style={styles.successMessage}>Thank you for reaching out to us!</p>}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
          </div>
          <button
            type="submit"
            style={styles.submitBtn}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.submitBtnHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.submitBtn.backgroundColor)}
          >
            Send Message
          </button>
        </form>
      </div>
      
      {/* Contact Information Section */}
      <div style={styles.contactInfo}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram
            style={styles.icon}
            onMouseOver={(e) => (e.currentTarget.style.color = styles.iconHover.color)}
            onMouseOut={(e) => (e.currentTarget.style.color = styles.icon.color)}
          />
        </a>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp
            style={styles.icon}
            onMouseOver={(e) => (e.currentTarget.style.color = styles.iconHover.color)}
            onMouseOut={(e) => (e.currentTarget.style.color = styles.icon.color)}
          />
        </a>
        <a href="mailto:your-email@example.com">
          <FaEnvelope
            style={styles.icon}
            onMouseOver={(e) => (e.currentTarget.style.color = styles.iconHover.color)}
            onMouseOut={(e) => (e.currentTarget.style.color = styles.icon.color)}
          />
        </a>
        <a href="tel:+123456789">
          <FaPhoneAlt
            style={styles.icon}
            onMouseOver={(e) => (e.currentTarget.style.color = styles.iconHover.color)}
            onMouseOut={(e) => (e.currentTarget.style.color = styles.icon.color)}
          />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;