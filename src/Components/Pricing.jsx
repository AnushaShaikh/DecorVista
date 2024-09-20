import React from 'react';
import './Pricing.css'; // Create and link your CSS file

const Pricing = () => {
  return (
    <div className="pricing-section">
      <div className="pricing-header">
        <h1>We create projects <span className="highlight">from visualization to finished interior</span></h1>
        <p>Sed non dapibus dolor, non rhoncus dui. Ut eleifend justo at ipsum aliquam, vel cursus tellus pulvinar.</p>
      </div>

      <div className="pricing-cards">
        <PricingCard 
          title="Planning"
          price="$169"
          features={['Flat Project Planning', 'Style Selection', '3D-Visualization', 'Recommendations']}
        />
        <PricingCard 
          title="Single Project"
          price="$799"
          features={['Flat Project Planning', 'Style Selection', '3D-Visualization', 'Recommendations']}
        />
        <PricingCard 
          title="Smart Home"
          price="$2500"
          features={['Flat Project Planning', 'Style Selection', '3D-Visualization', 'Recommendations']}
          popular={true} // Mark this card as popular
        />
        <PricingCard 
          title="Commercial"
          price="$1259"
          features={['Flat Project Planning', 'Style Selection', '3D-Visualization', 'Recommendations']}
        />
      </div>
    </div>
  );
};

const PricingCard = ({ title, price, features, popular }) => {
  return (
    <div className={`pricing-card ${popular ? 'popular' : ''}`}>
      {popular && <span className="badge">POPULAR</span>}
      <h2>{title}</h2>
      <h3>{price}</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="request-btn">SEND REQUEST</button>
    </div>
  );
};

export default Pricing;
