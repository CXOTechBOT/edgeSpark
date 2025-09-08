import React from 'react';

/**
 * A statistics section component to highlight key metrics.
 * All styles are inline for easy integration.
 */
const StatsSection = () => {

  // --- Data for the stats for easy modification ---
  const stats = [
    { number: '200+', line1: 'Clients Served', line2: 'Globally' },
    { number: '50+', line1: 'Experts &', line2: 'Innovators' },
    { number: '10+', line1: 'Countries', line2: '& Regions' },
    { number: '25+', line1: 'Years of Core Tech', line2: 'Expertise' },
  ];

  // --- Inline CSS Styles ---
  const styles = {
    container: {
      width: '100%',
      padding: '80px 50px',
      backgroundColor: '#0a0f2c', // Dark blue background from previous sections
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: '#ffffff',
      boxSizing: 'border-box',
    },
    contentWrapper: {
      maxWidth: '1100px',
      margin: '0 auto',
      textAlign: 'left',
    },
    heading: {
      fontSize: 'clamp(2.2rem, 5vw, 3rem)',
      fontWeight: '600',
      lineHeight: 1.2,
      marginBottom: '60px',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Creates a responsive grid
      gap: '40px 20px', // Row and column gap
      textAlign: 'left',
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
    },
    statNumber: {
      fontSize: 'clamp(3rem, 8vw, 4.25rem)',
      fontWeight: '600',
      lineHeight: 1.1,
      marginBottom: '12px',
      color: '#f0f0f0',
      margin: 0,
    },
    statText: {
      fontSize: '17px',
      lineHeight: 1.5,
      color: '#d0d0d0',
      margin: 0,
    },
  };

  // --- Rendered Component ---
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <h2 style={styles.heading}>From Spark to Scale</h2>
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statItem}>
              <p style={styles.statNumber}>{stat.number}</p>
              <p style={styles.statText}>
                {stat.line1} <br /> {stat.line2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
