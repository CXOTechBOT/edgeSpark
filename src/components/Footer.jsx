import React from 'react';

/**
 * A footer component with company information, links, and contact details.
 * All styles are inline and the component is self-contained.
 */
const Footer = () => {

  // --- Inline CSS Styles ---
  const styles = {
    container: {
      width: '100%',
      padding: '80px 40px',
      backgroundColor: '#f0f2f8', // Light lavender-blue background
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: '#333d5a', // Default text color
      boxSizing: 'border-box',
    },
    contentWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
    },
    logoColumn: {
      gridColumn: 'span 1',
    },
    logo: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#0a0f2c',
      marginBottom: '24px',
    },
    infoText: {
      fontSize: '0.95rem',
      lineHeight: 1.7,
      marginBottom: '16px',
    },
    column: {
      gridColumn: 'span 1',
    },
    heading: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#0a0f2c',
      marginBottom: '20px',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    linkItem: {
      marginBottom: '12px',
      fontSize: '0.95rem',
      cursor: 'pointer',
    },
    addressText: {
        fontSize: '0.95rem',
        lineHeight: 1.7,
    },
    presencesContainer: {
        marginTop: '32px'
    },
    presencesText: {
        fontSize: '0.95rem',
        lineHeight: 1.7,
    }
  };

  // --- Rendered Component ---
  return (
    <footer style={styles.container}>
      <div style={styles.contentWrapper}>
        
        {/* Column 1: Logo and Info */}
        <div style={styles.logoColumn}>
          <div style={styles.logo}>LOGO</div>
          <p style={styles.infoText}>
            EdgeSpark, AI LifeBOT, Appsolutely.ai, CXO TechBOT, and Skillzza are trademarks of the EdgeSpark Group.
          </p>
          <p style={styles.infoText}>
            We uphold ethical innovation, data integrity, and sustainable technology practices across all ventures.
          </p>
        </div>
        
        {/* Column 2: Company Links */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Company</h3>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}>About us</li>
            <li style={styles.linkItem}>Vision & Mission</li>
            <li style={styles.linkItem}>Our Services</li>
            <li style={styles.linkItem}>Contact Us</li>
          </ul>
        </div>

        {/* Column 3: Ventures Links */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Ventures</h3>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}>AI LifeBOT</li>
            <li style={styles.linkItem}>Appsolutely.ai</li>
            <li style={styles.linkItem}>CXO TechBOT</li>
            <li style={styles.linkItem}>Skillzza</li>
          </ul>
        </div>

        {/* Column 4: Office and Presences */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Corporate Office</h3>
          <p style={styles.addressText}>
            WeWork India, Chromium, Cts No. 106/1-5,
            Jogeshwari-Vikhroli Link Road, Milind Nagar,
            Powai, Mumbai - 400076
          </p>
          <div style={styles.presencesContainer}>
            <h3 style={styles.heading}>Our Presences</h3>
            <p style={styles.presencesText}>
              Mumbai | Thane | Raipur | Delhi
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
