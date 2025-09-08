import React from 'react';

/**
 * A component to feature a quote from a key person, like a CEO or founder.
 * All styles are inline and the component is self-contained.
 * Updated to match the new design with improved alignment and quote style.
 */
const FounderVoiceSection = () => {

  // --- SVG for the new, subtle Quotation Marks ---
  const QuoteIcon = ({ style }) => (
    <svg width="50" height="40" viewBox="0 0 50 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={style}>
        <path d="M15.625 0V18.75H7.8125L0 37.5H9.375L18.75 18.75V0H15.625ZM46.875 0V18.75H39.0625L31.25 37.5H40.625L50 18.75V0H46.875Z"/>
    </svg>
  );

  // --- Inline CSS Styles ---
  const styles = {
    container: {
      width: '100%',
      padding: '100px 40px',
      backgroundColor: '#f8f9fa', // Lighter background color
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: '#0a0f2c',
      boxSizing: 'border-box',
    },
    contentWrapper: {
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap', // Allows items to stack on smaller screens
      gap: '60px',
    },
    textContainer: {
      flex: '1 1 500px', // Flex properties for responsiveness
      maxWidth: '580px',
      position: 'relative',
    },
    heading: {
      fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
      fontWeight: '600',
      lineHeight: 1.2,
      marginBottom: '50px',
    },
    quoteWrapper: {
      position: 'relative',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '10px',
      paddingBottom: '10px',
    },
    quoteText: {
      fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
      lineHeight: 1.8,
      color: '#333d5a',
      position: 'relative',
      zIndex: 1,
      fontStyle: 'italic',
    },
    authorContainer: {
        marginTop: '24px',
        paddingLeft: '20px', // Align with the quote text
    },
    authorName: {
      fontWeight: '600',
      fontSize: '1.1rem',
      margin: '0 0 4px 0',
    },
    authorTitle: {
        fontSize: '1rem',
        color: '#555e7a',
        margin: 0,
        fontWeight: '600',
    },
    startQuote: {
        position: 'absolute',
        bottom: '-10px',
        right: '-20px',
        width: '25px',
        height: '25px',
        zIndex: 0,
        opacity: 0.6,
        filter: 'brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(40%) contrast(100%)',
    },
    startQuote2: {
        position: 'absolute',
        bottom: '-10px',
        right: '-5px',
        width: '25px',
        height: '25px',
        zIndex: 0,
        opacity: 0.6,
        filter: 'brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(40%) contrast(100%)',
    },
    endQuote: {
        position: 'absolute',
        top: '-10px',
        left: '-20px',
        width: '25px',
        height: '25px',
        transform: 'rotate(180deg)',
        zIndex: 0,
        opacity: 0.6,
        filter: 'brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(40%) contrast(100%)',
    },
    endQuote2: {
        position: 'absolute',
        top: '-10px',
        left: '-5px',
        width: '25px',
        height: '25px',
        transform: 'rotate(180deg)',
        zIndex: 0,
        opacity: 0.6,
        filter: 'brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(40%) contrast(100%)',
    },
    imageContainer: {
      flex: '0 1 350px', // Flex properties for responsiveness
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 'clamp(280px, 100%, 350px)',
      height: 'clamp(280px, 100%, 350px)',
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    },
  };

  // --- Rendered Component ---
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.textContainer}>
          <h2 style={styles.heading}>Voices That Drive Vision</h2>
          <div style={styles.quoteWrapper}>
            <img src={require('../images/comma.png')} alt="Opening quote" style={styles.startQuote} />
            <img src={require('../images/comma.png')} alt="Opening quote 2" style={styles.startQuote2} />
            <p style={styles.quoteText}>
              Our vision is to use technology as a force multiplier not just for business growth, but for building a smarter, more sustainable world. We believe in leveraging AI, automation, and digital intelligence to create inclusive ecosystems where innovation empowers people, industries, and the planet.
            </p>
            <img src={require('../images/comma.png')} alt="Closing quote" style={styles.endQuote} />
            <img src={require('../images/comma.png')} alt="Closing quote 2" style={styles.endQuote2} />
          </div>
          <div style={styles.authorContainer}>
            <p style={styles.authorName}>Swati Gupta, CEO founder</p>
            <p style={styles.authorTitle}>EdgeSpark Group of Companies</p>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <img src={require('../images/swatiMam.png')} alt="Swati Gupta, CEO founder" style={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default FounderVoiceSection;

