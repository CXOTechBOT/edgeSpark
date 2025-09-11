import React from 'react';

/**
 * An "About" section component with a two-column layout.
 * All styles are inline for easy integration.
 * The image is a placeholder, which you can replace with your own asset.
 */
const AboutSection = () => {

  // --- Inline CSS Styles ---
  const styles = {
    container: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: '80px 40px',
      backgroundColor: '#f8f9fa', // A light off-white background
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: '#212529', // A dark color for text
      boxSizing: 'border-box',
    },
    contentWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '60px',
      maxWidth: '1200px',
      width: '100%',
      flexWrap: 'wrap', // Allows columns to stack on smaller screens
    },
    textContainer: {
      flex: 1,
      minWidth: '300px', // Ensures text container doesn't get too squished
      textAlign: 'left',
    },
    imageContainer: {
      flex: 1.5,
      minWidth: '350px', // Ensures image container doesn't get too squished
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      fontSize: 'clamp(2rem, 5vw, 2.75rem)',
      fontWeight: '600',
      lineHeight: 1.3,
      marginBottom: '24px',
    },
    paragraph: {
      fontSize: '16px',
      lineHeight: 1.7,
      marginBottom: '20px',
      maxWidth: '500px', // Keeps text lines from getting too long
      color: '#495057',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      objectFit: 'cover',
    },
  };

  // --- Rendered Component ---
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.textContainer}>
          <h2 style={styles.heading}>
            EdgeSpark IT Ventures: Building What's Next
          </h2>
          <p style={styles.paragraph}>
            EdgeSpark is a future-forward venture studio powering
            businesses at the intersection of AI, technology, media, and
            education.
          </p>
          <p style={styles.paragraph}>
            We don’t just keep up with innovation—we lead it. Through
            our specialized verticals, we deliver intelligent, scalable, and
            sustainable solutions that drive real-world impact.
          </p>
          <p style={styles.paragraph}>
            From automation to upskilling, we help
            enterprises evolve faster, smarter, and stronger.
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img
            src={require('../images/Mask Group 1.png')}
            alt="Business Meeting Office"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
