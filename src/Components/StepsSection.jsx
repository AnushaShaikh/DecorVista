import React from 'react';
import './StepsSection.css';  // Link to your CSS

const StepsSection = () => {
  return (
    <div className="steps-section">
      <h2 className="steps-title">4 Easy Steps</h2>
      <h3 className="steps-subtitle">to Get Interior Design</h3>
      
      <div className="steps-container">
        <div className="step-box">
          <div className="step-number">01</div>
          <h4>Request Sending</h4>
          <p>Mauris libero ex, ullamcorper in facilisis sagittis, gravida in ipsum.</p>
        </div>

        <div className="step-box">
          <div className="step-number">02</div>
          <h4>Project Planning</h4>
          <p>Nulla lacinia, felis eget cursus aliquet, tellus mauris gravida ligula.</p>
        </div>

        <div className="step-box">
          <div className="step-number">03</div>
          <h4>Design Creating</h4>
          <p>Sed pulvinar urna sit amet felis condimentum dapibus.</p>
        </div>

        <div className="step-box">
          <div className="step-number">04</div>
          <h4>Enjoying Work</h4>
          <p>Duis non arcu ante. Quisque convallis, nulla sit amet sollicitudin.</p>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
