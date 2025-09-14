import React from 'react';

/**
 * A full-screen hero section component with video background.
 * All styles are inline for easy integration.
 */
const HeroSection = () => {

  // --- SVG Icons (as functional components for cleanliness) ---

  // const EcosystemIcon = () => (
  //   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translateY(1px)' }}>
  //     <path d="M17.6569 17.6569C16.2929 19.0209 14.2071 19.8284 12 19.8284C9.79289 19.8284 7.70711 19.0209 6.34315 17.6569C4.97918 16.2929 4.17157 14.2071 4.17157 12C4.17157 9.79289 4.97918 7.70711 6.34315 6.34315C7.70711 4.97918 9.79289 4.17157 12 4.17157C14.2071 4.17157 16.2929 4.97918 17.6569 6.34315" stroke="url(#ecosystem-gradient)" strokeWidth="2" strokeLinecap="round"/>
  //     <path d="M12 2V4" stroke="url(#ecosystem-gradient)" strokeWidth="2" strokeLinecap="round"/>
  //     <path d="M12 20V22" stroke="url(#ecosystem-gradient)" strokeWidth="2" strokeLinecap="round"/>
  //     <path d="M4 12L2 12" stroke="url(#ecosystem-gradient)" strokeWidth="2" strokeLinecap="round"/>
  //     <path d="M22 12L20 12" stroke="url(#ecosystem-gradient)" strokeWidth="2" strokeLinecap="round"/>
  //     <circle cx="12" cy="12" r="2" stroke="url(#ecosystem-gradient)" strokeWidth="2"/>
  //     <defs>
  //       <linearGradient id="ecosystem-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
  //         <stop offset="0%" style={{stopColor: '#4F46E5'}} />
  //         <stop offset="100%" style={{stopColor: '#0EA5E9'}} />
  //       </linearGradient>
  //     </defs>
  //   </svg>
  // );

  const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-1px)' }}>
      <path d="M7 17L17 7"></path>
      <path d="M7 7h10v10"></path>
    </svg>
  );

  const MouseIcon = () => (
    <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="22" height="34" rx="11" stroke="white" strokeWidth="1.5"/>
      <circle cx="12" cy="10" r="2" fill="white">
        <animate attributeName="cy" from="10" to="18" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );

  // --- Video loading state ---
  const [videoLoaded, setVideoLoaded] = React.useState(false);

  // --- Inline CSS Styles ---
  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      padding: '2rem',
      boxSizing: 'border-box',
      overflow: 'hidden',
      // Fallback background
      background: 'radial-gradient(circle at center, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%), #0f172a',
    },
    videoBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 1, // Changed from -2 to 1 to make it visible
      opacity: videoLoaded ? 1 : 0, // Changed from 0.8 to 1 for full visibility
      transition: 'opacity 1s ease-in-out',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.4)', // Simplified overlay for better video visibility
      zIndex: 2, // Above video but below content
    },
    header: {
      position: 'absolute',
      top: '40px',
      left: '50px',
      textAlign: 'left',
      zIndex: 20, // Increased z-index to ensure it's above video and overlay
    },
    logoMain: {
      fontSize: '22px',
      fontWeight: '600',
      margin: 0,
    },
    logoSub: {
      fontSize: '12px',
      fontWeight: '300',
      opacity: 0.8,
      margin: 0,
      marginTop: '2px',
    },
    mainContent: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '1000px',
      zIndex: 20, // Increased z-index to ensure it's above video and overlay
    },
    heading: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: '600',
      lineHeight: 1.2,
      margin: '0 0 24px 0',
      color: '#f0f0f0',
    },
    subtextContainer: {
      marginBottom: '40px',
    },
    tags: {
      fontSize: '18px',
      fontWeight: '400',
      opacity: 0.9,
      marginBottom: '10px',
      letterSpacing: '0.5px',
    },
    tagline: {
      fontSize: '16px',
      fontWeight: '300',
      opacity: 0.7,
    },
    buttonContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
    },
    buttonBase: {
      padding: '14px 28px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      textDecoration: 'none',
      border: '1.5px solid transparent',
      transition: 'transform 0.2s ease, background-color 0.3s ease, box-shadow 0.3s ease',
    },
    primaryButton: {
      backgroundColor: '#ffffff',
      color: '#000000',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#ffffff',
      border: '1.5px solid rgba(255, 255, 255, 0.4)',
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      color: '#ffffff',
      opacity: 0.7,
      cursor: 'pointer',
      transition: 'opacity 0.3s ease, transform 0.2s ease',
      zIndex: 20, // Increased z-index to ensure it's above video and overlay
    },
    scrollText: {
      fontSize: '12px',
      fontWeight: '300',
    },
  };

  const [primaryHover, setPrimaryHover] = React.useState(false);
  const [secondaryHover, setSecondaryHover] = React.useState(false);
  const [scrollHover, setScrollHover] = React.useState(false);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleVideoLoad = () => {
    console.log('Blue smoke video loaded successfully');
    setVideoLoaded(true);
  };

  const handleVideoError = (e) => {
    console.error('Video failed to load:', e.target.error);
    setVideoLoaded(false);
  };

  const primaryButtonStyle = {
    ...styles.buttonBase,
    ...styles.primaryButton,
    transform: primaryHover ? 'scale(1.03)' : 'scale(1)',
    boxShadow: primaryHover ? '0 0 20px rgba(255, 255, 255, 0.3)' : 'none',
  };

  const arrowStyle = {
    width: '24px', 
    height: '24px', 
    marginLeft: '8px',
    transition: 'filter 0.3s ease, transform 0.3s ease',
    filter: primaryHover ? 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' : 'none',
    transform: primaryHover ? 'translateX(3px)' : 'translateX(0)',
  };

  const secondaryButtonStyle = {
    ...styles.buttonBase,
    ...styles.secondaryButton,
    transform: secondaryHover ? 'scale(1.03)' : 'scale(1)',
    backgroundColor: secondaryHover ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
  };

  const scrollIndicatorStyle = {
    ...styles.scrollIndicator,
    opacity: scrollHover ? 1 : 0.7,
    transform: scrollHover ? 'translateY(-3px)' : 'translateY(0)',
  };

  return (
    <div style={styles.container}>
      {/* Video Background - Blue Smoke Effect */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.videoBackground}
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        onCanPlay={() => console.log('Blue smoke video can play')}
        preload="auto"
      >
        <source src={require('../images/bluesmokeffect.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for better text readability */}
      <div style={styles.overlay}></div>

      <header style={styles.header}>
        <p style={styles.logoMain}>EdgeSpark</p>
        <p style={styles.logoSub}>IT Ventures Private Limited</p>
      </header>

      <main style={styles.mainContent}>
        <h1 style={styles.heading}>
          Redefining Possibilities. Driving the Future of Business.
        </h1>
        <div style={styles.subtextContainer}>
          <p style={styles.tags}>AI | Tech | Media | Learning | Sustainability</p>
          <p style={styles.tagline}>Where innovation meets impact.</p>
        </div>
        <div style={styles.buttonContainer}>
          <button
            style={primaryButtonStyle}
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
          >
            Discover Our Ecosystem <img src={require('../images/arrow.png')} alt="Arrow" style={arrowStyle} />
          </button>
          <button
             style={secondaryButtonStyle}
             onMouseEnter={() => setSecondaryHover(true)}
             onMouseLeave={() => setSecondaryHover(false)}
          >
            Meet Our Ventures <ArrowIcon />
          </button>
        </div>
      </main>

      <div 
        style={scrollIndicatorStyle}
        onClick={handleScrollDown}
        onMouseEnter={() => setScrollHover(true)}
        onMouseLeave={() => setScrollHover(false)}
      >
        <MouseIcon />
        <span style={styles.scrollText}>Scroll Down</span>
      </div>
    </div>
  );
};

export default HeroSection;