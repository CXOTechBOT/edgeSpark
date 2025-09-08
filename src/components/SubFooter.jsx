import React from 'react';

/**
 * A sub-footer component for legal links and copyright information.
 * All styles are inline and the component is self-contained.
 */
const SubFooter = () => {

  // --- Inline CSS Styles ---
  const styles = {
    container: {
      width: '100%',
      padding: '20px 40px',
      backgroundColor: '#0a0f2c', // Dark navy blue background
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: '#ffffff', // White text color
      boxSizing: 'border-box',
    },
    contentWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap', // Allow content to stack on smaller screens
      gap: '20px',
    },
    linksContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px 20px', // Vertical and horizontal gap
      alignItems: 'center',
    },
    linkItem: {
      fontSize: '0.9rem',
      cursor: 'pointer',
      opacity: 0.9,
      transition: 'opacity 0.2s ease',
    },
    separator: {
      opacity: 0.7,
    },
    copyrightText: {
      fontSize: '0.9rem',
      opacity: 0.9,
      whiteSpace: 'nowrap', // Prevent copyright text from breaking
    },
  };

  const links = [
    "Terms & Conditions",
    "Privacy Policy",
    "Cookies",
    "Copyright",
    "Inclusion & Responsibility"
  ];

  // --- Rendered Component ---
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.linksContainer}>
          {links.map((link, index) => (
            <React.Fragment key={link}>
              <span 
                style={styles.linkItem}
                onMouseOver={(e) => e.target.style.opacity = 1}
                onMouseOut={(e) => e.target.style.opacity = 0.9}
              >
                {link}
              </span>
              {index < links.length - 1 && <span style={styles.separator}>•</span>}
            </React.Fragment>
          ))}
        </div>
        <div style={styles.copyrightText}>
          © 2025 EdgeSpark IT Ventures Pvt. Ltd.
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
