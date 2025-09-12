import React from 'react';

// Import SVG icons from industries Edgespark folder
import bfsiIcon from '../images/industries Edgespark/Group 24274.svg';
import communicationIcon from '../images/industries Edgespark/communication_12687930.svg';
import energyIcon from '../images/industries Edgespark/Icon.svg';
import healthIcon from '../images/industries Edgespark/Group 23639.svg';
import supplyChainIcon from '../images/industries Edgespark/Group 24285.svg';
import retailIcon from '../images/industries Edgespark/Group 23714.svg';
import technologyIcon from '../images/industries Edgespark/processing_18739369.svg';
import hospitalityIcon from '../images/industries Edgespark/Group 24284.svg';
import educationIcon from '../images/industries Edgespark/Layer_x0020_1.svg';
import agricultureIcon from '../images/industries Edgespark/Group 24288.svg';
import governmentIcon from '../images/industries Edgespark/Group 24289.svg';

const industries = [
  {
    icon: <img src={bfsiIcon} alt="BFSI" style={{width: 48, height: 48, objectFit: 'contain', display: 'block'}} />,
    title: 'BFSI (Banking, Financial Services & Insurance)',
  },
  {
    icon: <img src={communicationIcon} alt="Communications, Media & Entertainment" style={{width: 48, height: 48, objectFit: 'contain', display: 'block'}} />,
    title: 'Communications, Media & Entertainment',
  },
  {
    icon: <img src={energyIcon} alt="Energy & Utilities" style={{width: 48, height: 48, objectFit: 'contain', display: 'block'}} />,
    title: 'Energy & Utilities',
  },
  {
    icon: <img src={healthIcon} alt="Health & Pharma" style={{width: 48, height: 48, objectFit: 'contain', display: 'block'}} />,
    title: 'Health & Pharma',
  },
  {
    icon: <img src={supplyChainIcon} alt="Supply Chain & Logistics" style={{width: 48, height: 48, objectFit: 'contain', display: 'block'}} />,
    title: 'Supply Chain & Logistics',
  },
  {
    icon: <img src={retailIcon} alt="Ecommerce & Retail" style={{width: 48, height: 48, objectFit: 'contain', display: 'block'}} />,
    title: 'Ecommerce & Retail',
  },
  {
    icon: <img src={technologyIcon} alt="Technology & Consulting" style={{width: 48, height: 48, objectFit: 'contain', display: 'block'}} />,
    title: 'Technology & Consulting',
  },
  {
    icon: <img src={hospitalityIcon} alt="Travel & Hospitality" style={{width: 48, height: 48, objectFit: 'contain', display: 'block'}} />,
    title: 'Travel & Hospitality',
  },
  {
    icon: <img src={educationIcon} alt="Education & Technology" style={{width: 48, height: 48, objectFit: 'contain', display: 'block'}} />,
    title: 'Education & Technology',
  },
  {
    icon: <img src={agricultureIcon} alt="Agriculture" style={{width: 48, height: 48, objectFit: 'contain', display: 'block'}} />,
    title: 'Agriculture',
  },
  {
    icon: <img src={governmentIcon} alt="Government & Public Services" style={{width: 48, height: 48, objectFit: 'contain', display: 'block'}} />,
    title: 'Government & Public Services',
  },
];

const IndustryCard = ({ icon, title }) => (
  <div className="industry-card">
    <div className="card-icon">{icon}</div>
    <h3 className="card-title">{title}</h3>
  </div>
);

function IndustriesWeServeSection() {
  return (
    <>
      <style>
        {`
          /* Font import - You might need to add this to your public/index.html or global CSS */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

          .industries-container {
            font-family: 'Inter', sans-serif;
            background-color: #EFF1FC; /* Updated background color */
            padding: 80px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .section-header {
            text-align: center;
            margin-bottom: 60px;
            max-width: 800px;
          }

          .section-title {
            font-size: 2.75rem;
            font-weight: 700;
            color: #1a202c;
            margin-bottom: 16px;
            line-height: 1.2;
          }

          .section-description {
            font-size: 1.5rem !important;
            color: #4a5568;
            line-height: 1.6;
          }

          .industries-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            max-width: 1200px;
            width: 100%;
          }

          @media (max-width: 1200px) {
            .industries-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
          }

          @media (max-width: 868px) {
            .industries-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }
            .section-title {
              font-size: 2rem;
            }
            .section-description {
              font-size: 0.95rem;
            }
            .industries-container {
              padding: 60px 15px;
            }
          }

          @media (max-width: 540px) {
            .industries-grid {
              grid-template-columns: 1fr;
            }
          }

          /* --- Industry Card Styling --- */
          .industry-card {
            background-color: #ffffff;
            border-radius: 12px;
            padding: 24px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            /* Attractive initial shadow */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease-in-out;
            min-height: 160px;
            cursor: pointer;
            border: 1px solid transparent;
          }

          .industry-card:hover {
            background-color: #2e3092; /* Dark blue background on hover */
            /* Prominent shadow on hover */
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.08);
            transform: translateY(-5px); /* Lift effect on hover */
          }
          
          .industry-card:hover .card-icon svg {
            color: #ffffff; /* White icon color on hover */
          }

          .industry-card:hover .card-title {
            color: #ffffff !important; /* White title color on hover */
          }

          .card-icon {
            width: 48px;
            height: 48px;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease-in-out;
          }

          .card-icon img {
            width: 100%;
            height: 100%;
            transition: all 0.3s ease-in-out;
            filter: brightness(0) saturate(100%) invert(26%) sepia(94%) saturate(1679%) hue-rotate(218deg) brightness(100%) contrast(102%);
          }

          .industry-card:hover .card-icon {
            transform: scale(1.15) rotate(-5deg);
            animation: iconBounce 0.6s ease-in-out;
          }

          .industry-card:hover .card-icon img {
            filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
          }

          @keyframes iconBounce {
            0%, 100% { transform: scale(1.15) rotate(-5deg); }
            50% { transform: scale(1.25) rotate(5deg); }
          }

          .card-icon svg {
            width: 100%;
            height: 100%;
            color: #3b82f6; /* Default blue icon color */
            transition: color 0.3s ease-in-out;
          }

          .card-title {
            font-size: 1rem;
            font-weight: 600;
            color: #1a202c;
            line-height: 1.4;
            transition: color 0.3s ease-in-out;
          }
        `}
      </style>

      <div className="industries-container">
        <div className="section-header">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-description">
            We deliver value across a diverse range of industries, helping businesses
            achieve their digital transformation goals
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default IndustriesWeServeSection;