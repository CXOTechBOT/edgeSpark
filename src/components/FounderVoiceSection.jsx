import React, { useState, useEffect } from 'react';

/**
 * A component to feature quotes from key people, like CEO or founder.
 * All styles are inline and the component is self-contained.
 * Updated with carousel functionality for multiple voices.
 * Mobile/tablet responsive with stacked layout.
 */
const FounderVoiceSection = () => {

  // --- Carousel State ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // --- Check screen size ---
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024); // Tablet and below
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // --- Content Data ---
  const voices = [
    {
      heading: "Voices That Drive Vision",
      quote: "Our vision is to use technology as a force multiplier not just for business growth, but for building a smarter, more sustainable world. We believe in leveraging AI, automation, and digital intelligence to create inclusive ecosystems where innovation empowers people, industries, and the planet.",
      authorName: "Swati Gupta, CEO founder",
      authorTitle: "EdgeSpark Group of Companies",
      image: require('../images/Group 24321.png')
    },
    {
      heading: "Innovation Through Excellence",
      quote: "At EdgeSpark, we don't just build solutions, we engineer the future. Our focus is on creating intelligent, sustainable, and human-centered innovations that empower organizations to lead with clarity and confidence in the age of Al. Every experience we deliver is designed to spark transformation that lasts.",
      authorName: "Puneet Agarwal, Co-Founder",
      authorTitle: "EdgeSpark Group of Companies",
      image: require('../images/PuneetSir.png')
    }
  ];

  // --- Navigation Functions ---
  const goToNext = () => {
    if (isTransitioning || isMobile) return; // Prevent on mobile
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % voices.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToPrev = () => {
    if (isTransitioning || isMobile) return; // Prevent on mobile
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + voices.length) % voices.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // --- Arrow Icons ---
  const LeftArrow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
  );

  const RightArrow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );

  // --- Inline CSS Styles ---
  const styles = {
    container: {
      width: '100%',
      padding: isMobile ? '60px 20px' : '100px 40px',
      backgroundColor: '#f8f9fa',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: '#0a0f2c',
      boxSizing: 'border-box',
      position: 'relative',
    },
    mainHeading: {
      fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
      fontWeight: '600',
      lineHeight: 1.2,
      marginBottom: '60px',
      textAlign: 'center',
      display: isMobile ? 'block' : 'none', // Only show on mobile
    },
    contentWrapper: {
      maxWidth: '1100px',
      margin: '0 auto',
      display: isMobile ? 'block' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: isMobile ? '80px' : '60px',
      position: 'relative',
      transition: isMobile ? 'none' : 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
    },
    voiceItem: {
      display: isMobile ? 'flex' : 'contents',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'center' : 'normal',
      gap: isMobile ? '40px' : '0',
      marginBottom: isMobile ? '80px' : '0',
      textAlign: isMobile ? 'center' : 'left',
    },
    textContainer: {
      flex: isMobile ? 'none' : '1 1 500px',
      maxWidth: isMobile ? '100%' : '580px',
      position: 'relative',
      opacity: (isTransitioning && !isMobile) ? 0.7 : 1,
      transform: (isTransitioning && !isMobile) ? 'translateX(10px)' : 'translateX(0)',
      transition: isMobile ? 'none' : 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
      order: isMobile ? 2 : 'initial',
    },
    heading: {
      fontSize: 'clamp(2rem, 5vw, 2.8rem)',
      fontWeight: '600',
      lineHeight: 1.2,
      marginBottom: '40px',
      transition: isMobile ? 'none' : 'all 0.6s ease',
      display: isMobile ? 'none' : 'block', // Hide individual headings on mobile
    },
    quoteWrapper: {
      position: 'relative',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '10px',
      paddingBottom: '10px',
      transition: isMobile ? 'none' : 'all 0.6s ease',
    },
    quoteText: {
      fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
      lineHeight: 1.8,
      color: '#333d5a',
      position: 'relative',
      zIndex: 1,
      fontStyle: 'italic',
      transition: isMobile ? 'none' : 'all 0.6s ease',
    },
    authorContainer: {
        marginTop: '24px',
        paddingLeft: '20px',
        transition: isMobile ? 'none' : 'all 0.6s ease',
    },
    authorName: {
      fontWeight: '600',
      fontSize: '1.1rem',
      margin: '0 0 4px 0',
      transition: isMobile ? 'none' : 'all 0.6s ease',
    },
    authorTitle: {
        fontSize: '1rem',
        color: '#555e7a',
        margin: 0,
        fontWeight: '600',
        transition: isMobile ? 'none' : 'all 0.6s ease',
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
        transition: isMobile ? 'none' : 'all 0.6s ease',
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
        transition: isMobile ? 'none' : 'all 0.6s ease',
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
        transition: isMobile ? 'none' : 'all 0.6s ease',
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
        transition: isMobile ? 'none' : 'all 0.6s ease',
    },
    imageContainer: {
      flex: isMobile ? 'none' : '0 1 350px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: (isTransitioning && !isMobile) ? 0.7 : 1,
      transform: (isTransitioning && !isMobile) ? 'scale(0.98)' : 'scale(1)',
      transition: isMobile ? 'none' : 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
      order: isMobile ? 1 : 'initial',
    },
    image: {
      width: isMobile ? 'clamp(250px, 80vw, 300px)' : 'clamp(280px, 100%, 350px)',
      height: isMobile ? 'clamp(250px, 80vw, 300px)' : 'clamp(280px, 100%, 350px)',
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: isMobile ? 'none' : 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
    },
    arrowButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: '2px solid #e0e6ed',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: isMobile ? 'none' : 'flex', // Hide on mobile
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: '#0a0f2c',
      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
      zIndex: 10,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    leftArrow: {
      left: '-50px',
      opacity: currentSlide > 0 ? 1 : 0,
      visibility: currentSlide > 0 ? 'visible' : 'hidden',
      transform: currentSlide > 0 ? 'translateY(-50%) translateX(0) scale(1)' : 'translateY(-50%) translateX(-20px) scale(0.8)',
    },
    rightArrow: {
      right: '-50px',
      opacity: currentSlide < voices.length - 1 ? 1 : 0,
      visibility: currentSlide < voices.length - 1 ? 'visible' : 'hidden',
      transform: currentSlide < voices.length - 1 ? 'translateY(-50%) translateX(0) scale(1)' : 'translateY(-50%) translateX(20px) scale(0.8)',
    },
    arrowHover: {
      backgroundColor: '#0a0f2c',
      color: '#ffffff',
      transform: 'translateY(-50%) scale(1.15)',
      boxShadow: '0 8px 25px rgba(10, 15, 44, 0.4)',
    },
    leftArrowHover: {
      backgroundColor: '#0a0f2c',
      color: '#ffffff',
      transform: 'translateY(-50%) translateX(0) scale(1.15)',
      boxShadow: '0 8px 25px rgba(10, 15, 44, 0.4)',
    },
    rightArrowHover: {
      backgroundColor: '#0a0f2c',
      color: '#ffffff',
      transform: 'translateY(-50%) translateX(0) scale(1.15)',
      boxShadow: '0 8px 25px rgba(10, 15, 44, 0.4)',
    },
    slideIndicators: {
      display: isMobile ? 'none' : 'flex', // Hide on mobile
      justifyContent: 'center',
      gap: '8px',
      marginTop: '30px',
      transition: 'all 0.3s ease',
    },
    indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: '#d1d5db',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      opacity: isTransitioning ? 0.6 : 1,
    },
    activeIndicator: {
      backgroundColor: '#0a0f2c',
      transform: 'scale(1.2)',
    },
  };

  // --- Hover States ---
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  const currentVoice = voices[currentSlide];

  // --- Render mobile version ---
  if (isMobile) {
    return (
      <div style={styles.container} id="founder-voice-section">
        <h2 style={styles.mainHeading}>Voices That Drive Vision</h2>
        <div style={styles.contentWrapper}>
          {voices.map((voice, index) => (
            <div key={index} style={styles.voiceItem}>
              <div style={styles.imageContainer}>
                <img src={voice.image} alt={voice.authorName} style={styles.image} />
              </div>
              <div style={styles.textContainer}>
                <div style={styles.quoteWrapper}>
                  <img src={require('../images/comma.png')} alt="Opening quote" style={styles.startQuote} />
                  <img src={require('../images/comma.png')} alt="Opening quote 2" style={styles.startQuote2} />
                  <p style={styles.quoteText}>
                    {voice.quote}
                  </p>
                  <img src={require('../images/comma.png')} alt="Closing quote" style={styles.endQuote} />
                  <img src={require('../images/comma.png')} alt="Closing quote 2" style={styles.endQuote2} />
                </div>
                <div style={styles.authorContainer}>
                  <p style={styles.authorName}>{voice.authorName}</p>
                  <p style={styles.authorTitle}>{voice.authorTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- Render desktop version ---
  return (
    <div style={styles.container} id="founder-voice-section">
      <div style={styles.contentWrapper}>
        {/* Left Arrow - Animated visibility */}
        <button
          style={{
            ...styles.arrowButton,
            ...styles.leftArrow,
            ...(leftHover && !isTransitioning && currentSlide > 0 ? styles.leftArrowHover : {}),
            ...(isTransitioning ? { opacity: 0.4, pointerEvents: 'none' } : {})
          }}
          onClick={goToPrev}
          onMouseEnter={() => !isTransitioning && currentSlide > 0 && setLeftHover(true)}
          onMouseLeave={() => setLeftHover(false)}
          disabled={currentSlide === 0 || isTransitioning}
        >
          <LeftArrow />
        </button>

        <div style={styles.textContainer}>
          <h2 style={styles.heading}>{currentVoice.heading}</h2>
          <div style={styles.quoteWrapper}>
            <img src={require('../images/comma.png')} alt="Opening quote" style={styles.startQuote} />
            <img src={require('../images/comma.png')} alt="Opening quote 2" style={styles.startQuote2} />
            <p style={styles.quoteText}>
              {currentVoice.quote}
            </p>
            <img src={require('../images/comma.png')} alt="Closing quote" style={styles.endQuote} />
            <img src={require('../images/comma.png')} alt="Closing quote 2" style={styles.endQuote2} />
          </div>
          <div style={styles.authorContainer}>
            <p style={styles.authorName}>{currentVoice.authorName}</p>
            <p style={styles.authorTitle}>{currentVoice.authorTitle}</p>
          </div>
        </div>

        <div style={styles.imageContainer}>
          <img src={currentVoice.image} alt={currentVoice.authorName} style={styles.image} />
        </div>

        {/* Right Arrow - Animated visibility */}
        <button
          style={{
            ...styles.arrowButton,
            ...styles.rightArrow,
            ...(rightHover && !isTransitioning && currentSlide < voices.length - 1 ? styles.rightArrowHover : {}),
            ...(isTransitioning ? { opacity: 0.4, pointerEvents: 'none' } : {})
          }}
          onClick={goToNext}
          onMouseEnter={() => !isTransitioning && currentSlide < voices.length - 1 && setRightHover(true)}
          onMouseLeave={() => setRightHover(false)}
          disabled={currentSlide === voices.length - 1 || isTransitioning}
        >
          <RightArrow />
        </button>
      </div>

      {/* Slide Indicators */}
      <div style={styles.slideIndicators}>
        {voices.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.indicator,
              ...(index === currentSlide ? styles.activeIndicator : {})
            }}
            onClick={() => !isTransitioning && setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FounderVoiceSection;