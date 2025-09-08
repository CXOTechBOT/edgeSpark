import React from 'react';

function CallToActionSection() {
  return (
    <>
      <style>
        {`
          /* Font import - You might need to add this to your public/index.html or global CSS */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

          .call-to-action-container {
            font-family: 'Inter', sans-serif;
            background-color: #1a1a40; /* Dark blue/purple background as a placeholder for the image */
            /* This is where your background image will go */
            /*
            background-image: url('path/to/your/background-image.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            */
            color: #ffffff; /* White text color */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 100px 20px; /* Adjust padding as needed */
            min-height: 500px; /* Minimum height to give space */
            position: relative; /* For z-index if you add overlays */
            overflow: hidden; /* To prevent image overflow if not perfectly sized */
          }

          .cta-content {
            max-width: 800px; /* Max width for the content to keep it readable */
            z-index: 1; /* Ensure content is above any potential background overlays */
          }

          .cta-heading {
            font-size: 3.5rem; /* Large heading font size */
            font-weight: 700; /* Bold */
            line-height: 1.2;
            margin-bottom: 30px; /* Space below heading */
          }

          .cta-description {
            font-size: 1.3rem; /* Description font size */
            font-weight: 400; /* Regular weight */
            line-height: 1.6;
            margin-bottom: 40px; /* Space below description */
            max-width: 700px; /* Slightly narrower for readability */
            margin-left: auto;
            margin-right: auto;
          }

          .cta-button {
            display: inline-flex; /* Allows text and icon to be on the same line */
            align-items: center;
            gap: 8px; /* Space between text and icon */
            padding: 14px 28px; /* Button padding */
            background-color: transparent; /* Transparent background */
            border: 1px solid rgba(255, 255, 255, 0.5); /* Semi-transparent white border */
            border-radius: 8px; /* Slightly rounded corners */
            color: #ffffff; /* White text */
            font-size: 1.1rem; /* Button text size */
            font-weight: 600; /* Semi-bold */
            text-decoration: none; /* Remove underline for link */
            transition: all 0.3s ease-in-out; /* Smooth transitions */
            cursor: pointer;
          }

          .cta-button:hover {
            background-color: rgba(255, 255, 255, 0.1); /* Subtle white background on hover */
            border-color: #ffffff; /* Solid white border on hover */
            transform: translateY(-2px); /* Slight lift effect */
            box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2); /* Subtle glow/shadow */
          }

          .cta-button-icon {
            width: 20px; /* Icon size */
            height: 20px;
            stroke-width: 2; /* Adjust stroke thickness */
            color: #ffffff; /* White icon */
          }

          /* Media queries for responsiveness */
          @media (max-width: 768px) {
            .call-to-action-container {
              padding: 80px 15px;
            }
            .cta-heading {
              font-size: 2.5rem;
              margin-bottom: 20px;
            }
            .cta-description {
              font-size: 1rem;
              margin-bottom: 30px;
            }
            .cta-button {
              padding: 12px 24px;
              font-size: 1rem;
            }
            .cta-button-icon {
              width: 18px;
              height: 18px;
            }
          }

          @media (max-width: 480px) {
            .cta-heading {
              font-size: 2rem;
            }
            .cta-description {
              font-size: 0.9rem;
            }
            .cta-button {
              padding: 10px 20px;
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <div className="call-to-action-container">
        {/* Placeholder for background image. You will update this. */}
        {/*
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("path/to/your/image.jpg")', // Your image path here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0, // Ensure it's behind the content
          opacity: 0.8, // Adjust opacity if needed to make text more readable
        }}></div>
        */}

        <div className="cta-content">
          <h2 className="cta-heading">
            Let's Build the Future, Together.
          </h2>
          <p className="cta-description">
            Transform your business with cutting-edge AI, sustainable solutions,
            and a future-ready workforce that drives impact and innovation.
          </p>
          <a href="#" className="cta-button">
            Start a Conversation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="cta-button-icon"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default CallToActionSection;