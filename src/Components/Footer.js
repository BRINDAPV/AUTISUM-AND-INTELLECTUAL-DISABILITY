import React from 'react';

const Footer = () => {
  // Inline CSS styles
  const footerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    textAlign: 'center'
  };

  const footerContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const footerLeftStyle = {
    margin: '0'
  };

  // const footerRightStyle = {
  //   marginLeft: '15px'
  // };

  const footerLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '15px'
  };

  // const footerLinkHoverStyle = {
  //   textDecoration: 'underline'
  // };

  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <div style={footerLeftStyle}>
          <p>&copy; {new Date().getFullYear()} CODE SURGEONS. All rights reserved.</p>
        </div>
        <div>
          <a href="/privacy-policy" style={footerLinkStyle}>Privacy Policy</a>
          <a href="/terms-of-service" style={footerLinkStyle}>Terms of Service</a>
          <a href="/contact-us" style={footerLinkStyle}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
