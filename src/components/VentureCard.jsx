import React from 'react';

const ventures = [
  {
    logo: 'https://cdn.example.com/ai-lifebot-logo.png', // Replace with the correct path to your logo image
    name: 'AI LifeBOT',
    description: 'GenAI-powered automation suite that revolutionizes customer service through Conversational AI, intelligent agents, and workflow automation.',
  },
  {
    logo: 'https://cdn.example.com/appsolutely-logo.png', // Replace with the correct path to your logo image
    name: 'Appsolutely',
    description: 'A premier AI consulting and development firm helping businesses accelerate digital transformation, automate complex processes, and unlock operational efficiency.',
  },
  {
    logo: 'https://cdn.example.com/cxo-techbot-logo.png', // Replace with the correct path to your logo image
    name: 'CXO TechBOT',
    description: 'A leading tech media platform fostering thought leadership through CXO insights, innovation summits, and industry-focused content.',
  },
  {
    logo: 'https://cdn.example.com/skillz4-logo.png', // Replace with the correct path to your logo image
    name: 'SKILLZ4',
    description: 'An AI-powered skilling and workforce development platform focused on future-ready learning, enabling upskilling, reskilling, and immersive job simulations for the next-gen workforce.',
  },
];

const VentureCard = ({ logo, name, description }) => (
  <div className="venture-card">
    <div className="card-top-section">
      <div className="card-logo">
        {/* Placeholder for the image. In a real scenario, you'd use an actual <img> tag. */}
        {/* For now, I'm using a span with text as the image is embedded in the description in your Image 1 */}
        {/* If the logo is a separate image, use <img src={logo} alt={`${name} logo`} /> */}
        {/* Based on Image 2, the logo is an actual image. */}
        <img src={logo} alt={`${name} logo`} />
      </div>
    </div>
    <p className="card-description">{description}</p>
    <a href="#" className="card-arrow-link"> {/* Added an anchor tag for clickable arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="arrow-icon"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
      </svg>
    </a>
  </div>
);

function InnovationEcosystem() {
  return (
    <>
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif; /* A common modern sans-serif font */
            margin: 0;
            padding: 0;
            background-color: #f7f9fc; /* Light background as per screenshot */
          }

          .app-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
          }

          .header-section {
            text-align: center;
            margin-bottom: 60px;
          }

          .main-heading {
            font-size: 2.5rem;
            font-weight: 700; /* Bold */
            color: #1a202c; /* Dark text */
            margin-bottom: 16px; /* Space below heading */
          }

          .sub-heading {
            font-size: 1rem;
            color: #4a5568; /* Grey text */
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
          }

          .ventures-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px; /* Adjusted gap between cards */
          }

          @media (max-width: 768px) {
            .ventures-grid {
              grid-template-columns: 1fr;
            }
          }

          /* --- Venture Card Styling --- */
          .venture-card {
            position: relative; /* For absolute positioning of the arrow */
            display: flex;
            flex-direction: column; /* Stack logo and description vertically */
            padding: 24px; /* Padding inside the card */
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.05); /* Subtle shadow */
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            min-height: 180px; /* Ensure cards have a minimum height for consistent look */
          }

          .venture-card:hover {
            transform: translateY(-3px); /* Slight lift on hover */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
          }

          .card-top-section {
            display: flex;
            align-items: center;
            margin-bottom: 16px; /* Space between logo and description */
            min-height: 40px; /* To prevent description from moving up if logo is smaller */
          }

          .card-logo img {
            max-width: 120px; /* Max width for logos */
            height: auto; /* Maintain aspect ratio */
            max-height: 32px; /* Max height for logos as per Image 2 */
            display: block; /* Remove extra space below image */
          }

          .card-description {
            font-size: 0.95rem; /* Slightly larger font for description */
            color: #4a5568; /* Darker grey for better readability */
            line-height: 1.5;
            flex-grow: 1; /* Allows description to take available space */
            margin-bottom: 40px; /* Space above the arrow link if it were at bottom */
          }

          .card-arrow-link {
            position: absolute;
            bottom: 24px; /* Distance from bottom of the card */
            right: 24px; /* Distance from right of the card */
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #eff6ff; /* Light blue background for the circle */
            color: #2563eb; /* Darker blue for the arrow icon */
            text-decoration: none; /* Remove underline from link */
            transition: background-color 0.2s ease-in-out;
          }

          .card-arrow-link:hover {
            background-color: #dbeafe; /* Slightly darker blue on hover */
          }

          .arrow-icon {
            width: 20px;
            height: 20px;
            stroke-width: 2.5; /* Make arrow slightly bolder */
          }
        `}
      </style>

      <div className="app-container">
        <div className="header-section">
          <h1 className="main-heading">Explore Our Innovation Ecosystem</h1>
          <p className="sub-heading">
            From AI automation to media excellence, our several innovative ventures are built to reshape industries. Each venture is mission-driven, impact-oriented, and future-ready.
          </p>
        </div>

        <div className="ventures-grid">
          {ventures.map((venture, index) => (
            <VentureCard
              key={index}
              logo={venture.logo}
              name={venture.name}
              description={venture.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default InnovationEcosystem;