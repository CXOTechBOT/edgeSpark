import React, { useState } from 'react';

/**
 * A section to display service offerings with a grid of cards.
 * All styles are inline and the component is self-contained.
 */
const OfferingsSection = () => {

  // --- Data for the 9 offering cards ---
  const offerings = [
    { title: 'AI & Business Automation', imgSrc: require('../images/9cardsImages/ai.jpeg') },
    { title: 'Custom GenAI & Enterprise Copilots', imgSrc: require('../images/9cardsImages/aiandhuman.jpeg') },
    { title: 'Sustainable AI & Green Tech', imgSrc: require('../images/9cardsImages/aiSustainability.jpeg') },
    { title: 'Future-Ready Skilling & EdTech Solutions', imgSrc: require('../images/9cardsImages/4th.jpeg') },
    { title: 'Digital Transformation & IT Consulting', imgSrc: require('../images/9cardsImages/digitaltransformation.jpeg') },
    { title: 'Smart Governance & GovTech Solutions', imgSrc: require('../images/9cardsImages/futuristicvr.jpeg') },
    { title: 'CXO Media, Branding & Thought Leadership', imgSrc: require('../images/9cardsImages/business-meeting-office.jpg') },
    { title: 'Innovation Lab & Prototyping', imgSrc: require('../images/9cardsImages/innovation.jpeg') },
    { title: 'CSR, Women Empowerment & Social Innovation', imgSrc: require('../images/9cardsImages/womenempowerment.jpeg') },
  ];

  // --- Inline CSS Styles ---
  const styles = {
    container: {
      width: '100%',
      padding: '80px 40px',
      backgroundColor: '#ffffff',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: '#0a0f2c',
      boxSizing: 'border-box',
    },
    contentWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heading: {
      fontSize: 'clamp(2.2rem, 5vw, 3rem)',
      fontWeight: '600',
      lineHeight: 1.2,
      marginBottom: '60px',
      textAlign: 'left',
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '30px',
    },
    card: {
      backgroundColor: '#f8f9fa',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03)',
      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
      cursor: 'pointer',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    cardHover: {
      transform: 'translateY(-12px) scale(1.02)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15), 0 12px 24px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.3)',
      borderColor: 'rgba(59, 130, 246, 0.2)',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      display: 'block',
    },
    cardContent: {
      padding: '24px',
      textAlign: 'center',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '600',
      margin: 0,
      color: '#0a0f2c',
    },
  };

  // --- Card Component ---
  const OfferingCard = ({ title, imgSrc }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardStyle = isHovered ? { ...styles.card, ...styles.cardHover } : styles.card;

    return (
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={imgSrc} alt={title} style={styles.cardImage} />
        <div style={styles.cardContent}>
          <h3 style={styles.cardTitle}>{title}</h3>
        </div>
      </div>
    );
  };

  // --- Rendered Component ---
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <h2 style={styles.heading}>What we Offer : Tailored for Business Growth</h2>
        <div style={styles.cardGrid}>
          {offerings.map((offer, index) => (
            <OfferingCard key={index} title={offer.title} imgSrc={offer.imgSrc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferingsSection;
