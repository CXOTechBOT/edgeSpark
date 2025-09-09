import React from 'react';

/**
 * A "Vision and Mission" section component with a multi-column layout.
 * All styles are inline for easy integration.
 * The image is a placeholder, which you should replace with your own asset.
 */
const VisionMissionSection = () => {

  // --- SVG Icons ---
  const VisionIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="32" r="10" stroke="white" strokeWidth="2"/>
      <circle cx="42" cy="32" r="10" stroke="white" strokeWidth="2"/>
      <path d="M32 32L32 26" stroke="white" strokeWidth="2"/>
      <path d="M32 38L32 32" stroke="white" strokeWidth="2"/>
      <path d="M22 22L18 18" stroke="white" strokeWidth="2"/>
      <path d="M46 18L42 22" stroke="white" strokeWidth="2"/>
    </svg>
  );

  const MissionIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="18" stroke="white" strokeWidth="2"/>
      <circle cx="32" cy="32" r="12" stroke="white" strokeWidth="2"/>
      <circle cx="32" cy="32" r="6" stroke="white" strokeWidth="2"/>
      <circle cx="32" cy="32" r="2" fill="white"/>
    </svg>
  );


  // --- Inline CSS Styles ---
  const styles = {
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '80px 50px',
      backgroundColor: '#0a0f2c', // Dark blue background
      backgroundImage: 'radial-gradient(ellipse 50% 50% at 80% 20%, rgba(46, 49, 146, 0.3), transparent)',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: '#e0e0e0', // Light text color
      boxSizing: 'border-box',
    },
    heading: {
      fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
      fontWeight: '600',
      lineHeight: 1.2,
      marginBottom: '60px',
      textAlign: 'left',
      maxWidth: '1200px',
      margin: '0 auto 60px auto',
      width: '100%',
    },
    contentGrid: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: '40px',
      maxWidth: '1200px',
      width: '100%',
      margin: '0 auto',
      flexWrap: 'wrap', // Allows columns to stack on smaller screens
    },
    imageColumn: {
      flex: '1.5',
      minWidth: '320px',
    },
    textColumnsWrapper: {
      flex: '2',
      display: 'flex',
      gap: '40px',
      flexWrap: 'wrap',
    },
    visionMissionItem: {
      flex: 1,
      minWidth: '250px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    itemHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    },
    itemHeading: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#ffffff',
      margin: 0,
    },
    itemText: {
      fontSize: '19px', // Increased from 15px
      lineHeight: 1.7,
      margin: 0,
      opacity: 0.8,
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '12px',
      objectFit: 'cover',
    },
  };

  // --- Rendered Component ---
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        Driven by Purpose. <br /> Fueled by Innovation.
      </h2>
      <div style={styles.contentGrid}>
        <div style={styles.imageColumn}>
          <img
            src={require('../images/missionVission.png')}
            alt="Mission"
            style={styles.image}
          />
        </div>
        <div style={styles.textColumnsWrapper}>
          <div style={styles.visionMissionItem}>
            <div style={styles.itemHeader}>
              <VisionIcon />
              <h3 style={styles.itemHeading}>Our Vision</h3>
            </div>
            <p style={styles.itemText}>
              To lead the next wave of global transformation by delivering AI-driven, human-centered, and sustainable solutions that redefine industries, enhance enterprise resilience, and create meaningful impact for people and the planet.
            </p>
          </div>
          <div style={styles.visionMissionItem}>
            <div style={styles.itemHeader}>
              <MissionIcon />
              <h3 style={styles.itemHeading}>Our MISSION</h3>
            </div>
            <p style={styles.itemText}>
              Our mission is to empower organizations and communities with intelligent systems, inclusive innovation, and solutions that unlock growth, adaptability, and long-term value in a rapidly changing world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;
